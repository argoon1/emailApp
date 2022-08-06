import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSocketCtx } from "../../context/SocketContext";
const useSendMessage = () => {
  const navigate = useNavigate();
  const { userData, getUser } = useSocketCtx();
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
      return;
    }
    getUser(JSON.parse(localStorage.getItem("user")!).name);
  }, []);
  return { userData };
};

export default useSendMessage;
