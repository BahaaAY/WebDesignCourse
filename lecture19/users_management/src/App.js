import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Table,
} from "reactstrap";

import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    const role = e.target.role.value;
    const newUser = {
      id: users.length + 1,
      fullName: fullName,
      role: role,
    };
    setUsers([...users, newUser]);
    e.target.reset();
  }
  return (
    <div className="App">
      <Container>
        <h1 className="m-3 ms-0">Welcome To Users Management</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="fullName">Full Name:</Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter User Full Name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="Role">Select Role</Label>
            <Input id="role" name="role" type="select">
              <option>User</option>
              <option>Admin</option>
            </Input>
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
      <hr />
      <UsersListView usersType="Admin" users={users} />
      <hr />
      <UsersListView usersType="User" users={users} />
    </div>
  );
}

function UsersListView({ usersType, users }) {
  const filteredUsers = users.filter((user) => user.role === usersType);
  return (
    <Container>
      <h1 className="m-3 ms-0">{usersType} List</h1>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.role}</td>
              <td>
                <Button color="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
