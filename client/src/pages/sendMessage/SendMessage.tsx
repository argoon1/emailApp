import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import UserMessages from "./userMessages/UserMessages";
import { Container } from "react-bootstrap";
const SendMessage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user")) navigate("/");
  }, []);
  return (
    <Container className="mx-auto mt-5 " fluid="sm">
      <SendMessageForm />
      <UserMessages />
    </Container>
  );
};

export default SendMessage;
