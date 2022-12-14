import Routes from "./routes/Routes";
import SocketContext from "./context/SocketContext";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <SocketContext>
        <Routes />
      </SocketContext>
    </Router>
  );
}

export default App;
