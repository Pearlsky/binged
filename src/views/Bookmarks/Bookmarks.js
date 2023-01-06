import { LogoutButton } from "../../components/Button/Button";
import Searchbar from "../../components/SearchBar/Searchbar";
import { RegularSection } from "../Home/Home";
import StyledBookmarksView from "./Bookmarks.styles";

const Bookmarks = () => {
  return (
    <StyledBookmarksView
      role="region"
      aria-label="Bookmarks Tab Content"
    >
      <Searchbar keyword="bookmarked shows"/>
      <RegularSection heading="Bookmarked Movies"/>
      <LogoutButton/>
      <RegularSection heading="Bookmarked TV Series"/>
    </StyledBookmarksView>
  );
};

export default Bookmarks;