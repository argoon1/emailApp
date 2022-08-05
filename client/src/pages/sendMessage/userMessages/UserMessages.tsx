import { useSocketCtx } from "../../../context/SocketContext";
import { ListGroup } from "react-bootstrap";
const Messages = () => {
  const { userData } = useSocketCtx();
  const messages = userData?.messages!;
  return (
    <>
      <h2>Your messages</h2>
      <ListGroup>
        {messages.map(({ title, messageText, author }) => (
          <ListGroup.Item>
            <h3>from: {author}</h3>
            <h4 style={{ color: "gray" }}>{title}</h4>
            <p>{messageText}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Messages;
