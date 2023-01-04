import { get, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import MovieListing from "../../components/MovieListing/MovieListing";
import Searchbar from "../../components/SearchBar/Searchbar";
import { AuthContext } from "../../services/firebase/auth";
import { DbContext } from "../../services/firebase/db";
import StyledHomeView, {
  StyledListingGrid,
  StyledRegularSection,
} from "./Home.styles";

const Home = () => {
  const [listings, setListings] = useState();
  const db = useContext(DbContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const listingsRef = ref(db, `users/${user?.uid}/userListing`);
    get(listingsRef).then((snapshot) => {
      const userListings = snapshot
        .val()
        ?.filter((item) => item.thumbnail.trending === undefined);

      setListings(userListings);
    });
  }, [db, user?.uid]);
  return (
    <StyledHomeView role="region" aria-label="Home Tab Content">
      <Searchbar keyword="movies or TV series" />
      <RegularSection heading="Recommended for you" listings={listings} />
    </StyledHomeView>
  );
};

export const RegularSection = ({ heading, listings }) => {
  return (
    <StyledRegularSection>
      <h2>{heading}</h2>
      <StyledListingGrid listing={listings}>
        {listings &&
          listings.map((item) => (
            <MovieListing
              key={`${item.title}-${item.year}`}
              title={item.title}
              category={item.category}
              rating={item.rating}
              year={item.year}
            />
          ))}
      </StyledListingGrid>
    </StyledRegularSection>
  );
};

export default Home;
