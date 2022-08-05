import useName from "./useCreateUser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSocketCtx } from "../../context/SocketContext";
import { Container } from "react-bootstrap";
const Name = () => {
  const { name, setName } = useName();
  const { addNewUser } = useSocketCtx();
  return (
    <Container className="mx-auto mt-5 " fluid="sm">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addNewUser(name);
        }}
      >
        <Form.Group controlId="userName">
          <Form.Label>Enter your user name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your user name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 my-3">
          Create Account
        </Button>
      </Form>
    </Container>
  );
};

export default Name;
