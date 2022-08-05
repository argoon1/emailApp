import { useSocketCtx } from "../../../context/SocketContext";
import { ListGroup } from "react-bootstrap";
const Messages = () => {
  const { userData } = useSocketCtx();
  const messages = userData?.messages!;

  return (
    <>
      <h2 className="my-5">Your inbox</h2>
      <ListGroup>
        {messages.map(({ title, messageText, author }: any) => (
          <ListGroup.Item>
            <h3>from {author}</h3>
            <h4 style={{ color: "gray" }}>title {title}</h4>
            <p>{messageText}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Messages;
