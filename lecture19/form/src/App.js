import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormText,
} from "reactstrap";

import { useState } from "react";

function App() {
  let [user, setUser] = useState({ firstName: "John", lastName: "Doe" });
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();
    setUser({ firstName, lastName });

    e.target.reset();

    //clear the form
  }

  return (
    <div className="App">
      <Container>
        <h1>Welcome {user.firstName + " " + user.lastName}</h1>
        <Form onSubmit={formSubmitHandler}>
          <FormGroup>
            <Label for="firstName">First Name:</Label>
            <Input
              onChange={(e) => setFirstName(e.target.value)}
              id="firstName"
              name="firstName"
              placeholder="Enter your First Name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name:</Label>
            <Input
              onChange={(e) => setLastName(e.target.value)}
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name"
              type="text"
            />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
