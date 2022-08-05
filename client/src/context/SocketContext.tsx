import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import {
  MessageDataForm,
  UserData,
} from "../sharedTypes/sendMessageSharedTypes";
const socket = io("https://task5-live.herokuapp.com/", {
  transports: ["websocket", "polling", "flashsocket"],
});
interface SocketContextValue {
  addNewUser: (name: string) => void;
  userData: null | UserData;
  sendNewMessage: (messageData: MessageDataForm, author: string) => void;
  usersNames: string[];
}

export const SocketContext = createContext<SocketContextValue>({
  addNewUser: () => {},
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
  function addNewUser(name: string) {
    socket.emit("newUserCreate", name);
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
    console.log("use");
    socket.on("connect", () => console.log("connect"));
    addUserInfoListener();
  }, []);
  useEffect(() => {
    if (!userData) {
      navigate("/");
    }
  }, [userData]);
  socket.on("connect", () => {});
  return (
    <SocketContext.Provider
      value={{ addNewUser, userData, sendNewMessage, usersNames }}
    >
      {children}
    </SocketContext.Provider>
  );
}
export default SocketProvider;
export const useSocketCtx = () => useContext(SocketContext);
