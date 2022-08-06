import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSendMessageForm from "./useSendMessageForm";
import { useSocketCtx } from "../../../context/SocketContext";
import { Typeahead } from "react-bootstrap-typeahead";
const SendMessageForm = () => {
  const { userData, sendNewMessage, usersNames } = useSocketCtx();
  const { messageData, updateMessageData, setRecipent, recipent } =
    useSendMessageForm();
  const { title, messageText } = messageData;
  return (
    <>
      <h1>Send new message</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          sendNewMessage(
            { ...messageData, recipent: recipent[0] as string },
            userData?.name!
          );
        }}
      >
        <Form.Group>
          <Form.Label>Enter recipent</Form.Label>
          <Typeahead
            id="sendToName"
            options={usersNames}
            placeholder="Enter recipent..."
            onChange={setRecipent}
            selected={recipent}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            placeholder="Enter title..."
            onChange={(e) => {
              updateMessageData("title", e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="messageText">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            value={messageText}
            placeholder="Write your message..."
            onChange={(e) => {
              updateMessageData("messageText", e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="text-center w-100">
          Send new message
        </Button>
      </Form>
    </>
  );
};

export default SendMessageForm;
