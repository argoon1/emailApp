import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import CreateUser from "../pages/createUser/CreateUser";
import SendMessage from "../pages/sendMessage/SendMessage";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<CreateUser />} />
      <Route path="/sendmessage" element={<SendMessage />} />
    </Switch>
  );
};

export default Routes;
