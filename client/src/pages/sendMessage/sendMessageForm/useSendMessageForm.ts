import { useState } from "react";
import { MessageData } from "../../../sharedTypes/sendMessageSharedTypes";
import { Option } from "react-bootstrap-typeahead/types/types";
const useSendMessageForm = () => {
  const [messageData, setMessageData] = useState<MessageData>({
    title: "",
    messageText: "",
  });
  const [recipent, setRecipent] = useState<Option[]>([""]);
  function updateMessageData(
    fieldName: keyof typeof messageData,
    newValue: string
  ) {
    setMessageData((prevMessageData) => ({
      ...prevMessageData,
      [fieldName]: newValue,
    }));
  }

  return {
    messageData,
    updateMessageData,
    recipent,
    setRecipent,
  };
};

export default useSendMessageForm;
