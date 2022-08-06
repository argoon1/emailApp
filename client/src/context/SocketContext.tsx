import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import {
  MessageDataForm,
  UserData,
} from "../sharedTypes/sendMessageSharedTypes";
import { SERVER_URL } from "../consts";
interface SocketContextValue {
  getUser: (name: string) => void;
  userData: null | UserData;
  sendNewMessage: (messageData: MessageDataForm, author: string) => void;
  usersNames: string[];
}
const socket = io(SERVER_URL, {
  transports: ["websocket", "polling", "flashsocket"],
});

export const SocketContext = createContext<SocketContextValue>({
  getUser: () => {},
  userData: null,
  sendNewMessage: () => {},
  usersNames: [],
});
type SocketProviderProps = {
  children: JSX.Element;
};
export function SocketProvider({ children }: SocketProviderProps) {
  const [userData, setUserData] = useState<null | UserData>(null);
  const [usersNames, setUsersNames] = useState<string[]>([]);
  const navigate = useNavigate();
  function getUser(name: string) {
    socket.emit("getUser", name);
  }
  function addUserInfoListener() {
    socket.on("sendUser", ({ user, usersNames }: any) => {
      localStorage.setItem("user", JSON.stringify(user));
      setUserData(user);
      setUsersNames(usersNames);
      navigate("/sendmessage");
    });
  }
  function sendNewMessage(messageData: MessageDataForm, author: string) {
    socket.emit("newMessage", { message: messageData, author });
  }

  useEffect(() => {
    addUserInfoListener();
  }, []);

  return (
    <SocketContext.Provider
      value={{ getUser, userData, sendNewMessage, usersNames }}
    >
      {children}
    </SocketContext.Provider>
  );
}
export default SocketProvider;
export const useSocketCtx = () => useContext(SocketContext);
