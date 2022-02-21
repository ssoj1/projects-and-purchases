import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** Homepage
 *
 */

function Home() {
  console.log("*Home");

  return (
    <section>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold" style={{fontSize: "1.5em"}}>
              Sara's projects and purchases
            </p>
          </CardTitle>
          <CardText>
            Details on makes and buys.
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;