import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import SnacksMenu from "./FoodMenu";
import DrinksMenu from "./FoodMenu";
import Snack from "./FoodItem";
import Drink from "./FoodItem";
import NewFoodItem from "./NewFoodForm";

export interface Snacks {
  id: string;
  name: string;
  description: string;
  recipe: string;
  serve: string;
}

export interface Drinks extends Snacks {}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState<Snacks[]>([]);
  const [drinks, setDrinks] = useState<Drinks[]>([]);

  /* get snacks and drinks when the app renders */
  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setSnacks(snacks);
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, [snacks, drinks]);

  /* create id from the name */
  const create = (name: string) => {
    return name.toLowerCase().replaceAll(" ", "-");
  };

  /* add food item to API */
  const add = async (item: Snacks | Drinks, category: string) => {
    await SnackOrBoozeApi.addItem(item, category);
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <SnacksMenu items={snacks} title="Snacks" />
            </Route>
            <Route exact path="/drinks">
              <DrinksMenu items={drinks} title="Drinks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/drinks/:id">
              <Drink items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <NewFoodItem createId={create} addFoodItem={add} />
            </Route>
            <Route>
              <div>
                <h1>404</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
              </div>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
