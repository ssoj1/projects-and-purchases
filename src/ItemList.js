import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import "./ItemList.css";

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
    <section>
      <h2>{title}</h2>

      {items.map(item => (
        <Card>
          <CardTitle>
            <Link to={`/${title.toLowerCase()}/${item.id}`} key={item.id}>
              <ListGroupItem>{item.title}</ListGroupItem>
            </Link>
          </CardTitle>
          <CardBody>
            <p>{item.details}</p>
          </CardBody>
        </Card>
      ))}
    </section>
  );
}

export default ItemList;