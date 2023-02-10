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
  const [searchListings, setSearchListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
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

  useEffect(() => {
    if (searchTerm) {
      const searchResult = listings.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          item.title.toUpperCase().includes(searchTerm)
        );
      });
      setSearchListings(searchResult);
    } else {
      setSearchListings();
    }
  }, [searchTerm]);

  return (
    <StyledHomeView role="region" aria-label="Home Tab Content">
      <Searchbar keyword="movies or TV series" setSearchTerm={setSearchTerm} />
      <RegularSection
        heading="Recommended for you"
        listings={listings}
        searchListings={searchListings}
        searchTerm={searchTerm}
      />
    </StyledHomeView>
  );
};

export const RegularSection = ({
  heading,
  listings,
  searchListings,
  searchTerm,
}) => {
  return (
    <StyledRegularSection>
      {searchListings ? (
        <h2>
          Found {searchListings.length} results for "{searchTerm}"
        </h2>
      ) : (
        <h2>{heading}</h2>
      )}
      <StyledListingGrid>
        {searchListings
          ? searchListings.map((item) => (
              <MovieListing
                key={`${item.title}-${item.year}`}
                title={item.title}
                category={item.category}
                rating={item.rating}
                year={item.year}
                thumbnail={item.thumbnail.regular}
              />
            ))
          : listings?.map((item) => (
              <MovieListing
                key={`${item.title}-${item.year}`}
                title={item.title}
                category={item.category}
                rating={item.rating}
                year={item.year}
                thumbnail={item.thumbnail.regular}
              />
            ))}
      </StyledListingGrid>
    </StyledRegularSection>
  );
};

export default Home;
