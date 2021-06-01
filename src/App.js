import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./screens/home";
import Discovery from "./screens/discovery";
import User from "./screens/user";
import NotFound from "./screens/notfound";
import { useState } from "react";

export default function App() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <Router>
      <Nav isSearchFocused={isSearchFocused} />
      <Switch>
        <Route exact path="/">
          <Home
            isSearchFocused={isSearchFocused}
            setIsSearchFocused={setIsSearchFocused}
          />
        </Route>
        <Route path="/search/:query" component={Discovery} />
        <Route path="/u/:name" component={User} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
