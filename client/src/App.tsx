import { BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
function App() {
  const socket = io("https://task5-live.herokuapp.com");
  console.log(socket, "socket test");
  return (
    <Router>
      <></>
    </Router>
  );
}

export default App;
