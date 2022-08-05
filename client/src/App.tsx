import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("/api");
function App() {
  useEffect(() => {
    console.log("test");
    socket.on("connect", () => alert("connected"));
  }, []);
  return (
    <Router>
      <></>
    </Router>
  );
}

export default App;
