import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Snacks, Drinks } from "./App";

interface HomeProps {
  snacks: Snacks[];
  drinks: Drinks[];
}

function Home({ snacks, drinks }: HomeProps) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>Number of food items: {snacks.length}</CardText>
          <CardText>Number of drink choices: {drinks.length}</CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
