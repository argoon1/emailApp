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
  function formatFieldName(fieldName: keyof typeof messageData): string {
    return fieldName.split("").reduce((formattedFieldName, char) => {
      if (char.toUpperCase() === char)
        return formattedFieldName.concat(` ${char.toLowerCase()}`);
      return formattedFieldName.concat(char);
    }, "");
  }
  return {
    messageData,
    updateMessageData,
    formatFieldName,
    recipent,
    setRecipent,
  };
};

export default useSendMessageForm;
