import SocketContext from "./context/SocketContext";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <SocketContext>
        <></>
      </SocketContext>
    </Router>
  );
}

export default App;
