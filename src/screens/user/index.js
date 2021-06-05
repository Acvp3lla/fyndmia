import { Container, Tab, Tabs, TabView } from "./lib";
import Info from "./screens/info";
import Portfolio from "./screens/portfolio";
import Messages from "./screens/messages";
import Reviews from "./screens/reviews";
import { useState } from "react";

function User(props) {
  const tabs = ["Info", "Portfolio", "Messages", "Reviews"];
  const [isActive, setIsActive] = useState(tabs[0]);

  function renderView() {
    switch (isActive) {
      case "Info":
        return <Info />;
      case "Portfolio":
        return <Portfolio />;
      case "Messages":
        return <Messages />;
      case "Reviews":
        return <Reviews />;
      default:
        return "No match";
    }
  }

  return (
    <Container>
      <Tabs>
        {tabs.map((tab) => (
          <Tab
            key={tab}
            $isactive={isActive === tab}
            onClick={() => setIsActive(tab)}
          >
            {tab}
          </Tab>
        ))}
      </Tabs>
      <TabView>{renderView()}</TabView>
    </Container>
  );
}

export default User;
