import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// useHistory was replaced with useNavigate
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

/** Form for adding a project or purchase.
 *
 * Props:
 * - addItem: call this to add item in parent
 *
 * State:
 * - local state for each field on form
 *
 */

function AddForm({ addItem }) {
  const [form, setForm] = useState({
    type: "project",
    id: "",
    title: "",
    details: "",
    image_url: "",
  });
  const history = useNavigate();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setForm(f => ({
      ...f,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    let { type, ...data } = form;
    addItem(type, data);
    history.push("/");
  }

  const { type, title, details, image_url } = form;

  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add Item
          </CardTitle>
          <CardText>
            Add a new project or purchase
          </CardText>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="type">Type</Label>
              <Input
                type="select"
                name="type"
                id="type"
                value={type}
                onChange={handleChange}
              >
                <option>project</option>
                <option>purchase</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                name="title"
                id="title"
                value={title}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="details">Details</Label>
              <Input
                type="textarea"
                name="details"
                id="details"
                value={details}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="image_url">Image URL</Label>
              <Input
                type="textarea"
                name="image_url"
                id="image_url"
                value={image_url}
                onChange={handleChange}
              />
            </FormGroup>

            <Button className="float-right btn btn-outline-light">
              Add Item
            </Button>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default AddForm;
