import { BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("/api");
function App() {
  console.log(socket, "socket test");
  return (
    <Router>
      <></>
    </Router>
  );
}

export default App;
