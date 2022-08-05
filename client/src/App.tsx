import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("https://task5-live.herokuapp.com/", {
  transports: ["websocket", "polling", "flashsocket"],
});
function App() {
  useEffect(() => {
    console.log("test");
    console.log(socket, "socket");
    socket.on("connect", () => alert("connected"));
  }, []);
  return (
    <Router>
      <></>
    </Router>
  );
}

export default App;
