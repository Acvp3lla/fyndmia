import { UserIcon, Menu, Container, MenuItem } from "./lib";
import { useTransition, config } from "react-spring";
import { useState } from "react";

function UserMenu(props) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const transition = useTransition(isMenuVisible, {
    from: { opacity: 0, y: 25 },
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0, y: 25 },
    config: config.gentle
  });

  return (
    <Container>
      <UserIcon onClick={() => setIsMenuVisible((state) => !state)} />
      {transition((style, item) => {
        return !item ? null : (
          <Menu
            tabIndex="0"
            ref={(menuRef) => menuRef && menuRef.focus()}
            style={style}
            onClick={() => setIsMenuVisible(false)}
            onBlur={() => setIsMenuVisible(false)}
          >
            <MenuItem>Sign Out</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Rando</MenuItem>
          </Menu>
        );
      })}
    </Container>
  );
}

export default UserMenu;
