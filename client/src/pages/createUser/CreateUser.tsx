import React from "react";
import io from "socket.io-client";
import useName from "./useCreateUser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSocketCtx } from "../../context/SocketContext";
const Name = () => {
  const { name, setName } = useName();
  const { addNewUser } = useSocketCtx();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        addNewUser(name);
      }}
    >
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Enter your user name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your user name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Name;
