import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("ws://task5-live.herokuapp.com");
function App() {
  useEffect(() => {
    console.log("test");
    console.log(socket);
    socket.on("connect", () => alert("connected"));
  }, []);
  return (
    <Router>
      <></>
    </Router>
  );
}

export default App;
