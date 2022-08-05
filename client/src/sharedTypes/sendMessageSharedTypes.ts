export type MessageData = {
  title: string;
  messageText: string;
};
export type MessageDataForm = { recipent: string } & MessageData;
export type MessageDataList = { author: string } & MessageData;
export type UserData = { name: string } & { messages: MessageDataList[] };
