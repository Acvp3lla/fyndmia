import { FaSearch } from "react-icons/fa";
import { Input, SearchButton, Container } from "./lib";
import VisuallyHidden from "@reach/visually-hidden";

function Search(props) {
  return (
    <Container {...props}>
      <Input type="text" placeholder="What the hell should go here" />
      <SearchButton>
        <VisuallyHidden>Run search</VisuallyHidden>
        <FaSearch />
      </SearchButton>
    </Container>
  );
}

export default Search;
