import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./screens/home";
import Discovery from "./screens/discovery";
import User from "./screens/user";
import NotFound from "./screens/notfound";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:query" component={Discovery} />
        <Route path="/u/:name" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
