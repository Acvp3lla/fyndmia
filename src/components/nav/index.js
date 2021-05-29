import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search/plumber">Search</Link>
        </li>
        <li>
          <Link to="/u/1">User</Link>
        </li>
        <li>
          <Link to="/a/should-not-match">Should Not Match</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
