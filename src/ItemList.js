import React from "react";
import { Link } from "react-router-dom";
// import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/** ItemList: listing of items (either projects or purchases)
 *
 * Props:
 * - items: list of project/purchase data objects.
 * - title: "Projects" or "Purchases"
 *
 */

function ItemList({ title, items }) {
  console.log("*ItemList ", {items, title})

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {title}
          </CardTitle>

          <ListGroup>
            {items.map(item => (
              <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
                <ListGroupItem>{item.title}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemList;