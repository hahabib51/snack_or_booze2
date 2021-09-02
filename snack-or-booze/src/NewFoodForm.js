import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { Snacks, Drinks } from "./App";

interface NewFoodFormProps {
  createId: (name: string) => string;
  addFoodItem: (item: Snacks | Drinks, category: string) => void;
}

function NewFoodForm({ createId, addFoodItem }: NewFoodFormProps) {
  /* setting up the states of the food item */
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [serve, setServe] = useState("");
  const [category, setCategory] = useState("Snacks");

  /* handle various changes for each input */
  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };
  const handleDescriptionChange = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(evt.target.value);
  };
  const handleRecipeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRecipe(evt.target.value);
  };
  const handleServeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setServe(evt.target.value);
  };
  const handleCategoryChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(evt.target.value);
  };

  /* actions to take when submitting */
  const gatherInput = (evt: React.FormEvent) => {
    // prevent refresh
    evt.preventDefault();

    // create the id from the name
    setId(createId(name));

    // add food item to the API
    const foodItem = { id, name, description, recipe, serve };
    addFoodItem(foodItem, category);

    // clear the states back to the originals
    setId("");
    setName("");
    setDescription("");
    setRecipe("");
    setServe("");
  };

  return (
    <section className="col-md-4">
      <Form onSubmit={gatherInput}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={handleNameChange}
            value={name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleDescriptionChange}
            value={description}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input
            type="text"
            name="recipe"
            id="recipe"
            placeholder="Recipe"
            onChange={handleRecipeChange}
            value={recipe}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input
            type="text"
            name="serve"
            id="serve"
            placeholder="Serve"
            onChange={handleServeChange}
            value={serve}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="select"
            name="category"
            id="category"
            onChange={handleCategoryChange}
          >
            <option value="Snacks">
              Snacks
            </option>
            <option value="Drinks">Drinks</option>
          </Input>
        </FormGroup>
        <Button color="success">Add</Button>
      </Form>
    </section>
  );
}

export default NewFoodForm;
