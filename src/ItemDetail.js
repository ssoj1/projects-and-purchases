import React from "react";
import { Navigate, useParams } from "react-router-dom";
// Redirect has been replaced with Navigate
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Details on a project or purchase.
 *
 * Props:
 * - cantFind: path to redirect to if can't find item with that ID
 * - items: list of projects or purchases
 *
 */

function ItemDetail({ items, cantFind }) {
  const { id } = useParams();

  console.log("*ItemDetail ", {items})

  let item = items.find(item => item.id === id);
  if (!item) return <Navigate to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.title}
          </CardTitle>
          <CardText className="font-italic">{item.details}</CardText>
          <img src={require(item.image_url)} alt="project or purchase" />
        </CardBody>
      </Card>
    </section>
  );
}



export default ItemDetail;