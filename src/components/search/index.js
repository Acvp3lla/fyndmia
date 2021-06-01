import { FaSearch } from "react-icons/fa";
import { Input, SearchButton, Container } from "./lib";

function Search(props) {
  return (
    <Container {...props}>
      <Input type="text" placeholder="Who are you searching for?" />
      <SearchButton>
        <FaSearch />
      </SearchButton>
    </Container>
  );
}

export default Search;
