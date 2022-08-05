import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useSendMessageForm from "./useSendMessageForm";
import { useSocketCtx } from "../../../context/SocketContext";
import { useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
const SendMessageForm = () => {
  const { userData, sendNewMessage, usersNames } = useSocketCtx();
  useEffect(() => {
    console.log(userData, "USER FORM");
  }, [userData]);
  const { messageData, updateMessageData, setRecipent, recipent } =
    useSendMessageForm();
  const { title, messageText } = messageData;
  alert(usersNames);
  return (
    <>
      <h1>Create new message</h1>

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
          <Form.Label>hello</Form.Label>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SendMessageForm;
