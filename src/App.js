import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Home from "./screens/home";
import Discovery from "./screens/discovery";
import User from "./screens/user";
import NotFound from "./screens/notfound";
import { useState, useLayoutEffect } from "react";
import { animated, useSpring, config } from "react-spring";

const user = {
  fname: "Dowen",
  lname: "Robinson"
};

export default function App() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const mountProps = useSpring({
    opacity: isMounted ? 1 : 0,
    config: config.slow
  });

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <animated.div style={mountProps}>
      <Router>
        <Nav isSearchFocused={isSearchFocused} user={user} />
        <Switch>
          <Route exact path="/">
            <Home
              isSearchFocused={isSearchFocused}
              setIsSearchFocused={setIsSearchFocused}
            />
          </Route>
          <Route path="/search/:query" component={Discovery} />
          <Route path="/u/:name">
            <User fname={user.fname} />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </animated.div>
  );
}
