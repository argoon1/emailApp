import { useState } from "react";
import { io, Manager } from "socket.io-client";
import { SERVER_URL } from "../../consts";
const useName = () => {
  const [name, setName] = useState("");

  return {
    name,
    setName,
  };
};

export default useName;
