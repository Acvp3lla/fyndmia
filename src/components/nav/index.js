import { Container, Link, Search } from "./lib";

function Nav() {
  return (
    <Container>
      <form>
        <Link to="/">fyndia</Link>
        <Search placeholder="Plumber..." />
        <button type="submit">Icon Here</button>
      </form>
    </Container>
  );
}

export default Nav;
