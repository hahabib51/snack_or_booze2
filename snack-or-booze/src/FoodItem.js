import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Snacks } from "./App";

interface FoodItemProps {
  items: Snacks[];
  cantFind: string;
}

interface ParamTypes {
  id: string;
}

function FoodItem({ items, cantFind }: FoodItemProps) {
  const { id } = useParams<ParamTypes>();

  let snack = items.find((snack) => snack.id === id);
  if (!snack) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
