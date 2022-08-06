import SendMessageForm from "./sendMessageForm/SendMessageForm";
import UserMessages from "./userMessages/UserMessages";
import { Container } from "react-bootstrap";
import useSendMessage from "./useSendMessage";
const SendMessage = () => {
  const { userData } = useSendMessage();
  return (
    <>
      {userData ? (
        <Container className="mx-auto mt-5 " fluid="sm">
          <SendMessageForm />
          <UserMessages />
        </Container>
      ) : (
        <>Getting your data...</>
      )}
    </>
  );
};

export default SendMessage;
