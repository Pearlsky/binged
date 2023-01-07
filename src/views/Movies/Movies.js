import { get, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import Searchbar from "../../components/SearchBar/Searchbar";
import { AuthContext } from "../../services/firebase/auth";
import { DbContext } from "../../services/firebase/db";
import { RegularSection } from "../Home/Home";
import StyledMoviesView from "./Movies.styles";

const Movies = () => {
  const [moviesListings, setMoviesListings] = useState();
  const db = useContext(DbContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const listingsRef = ref(db, `users/${user?.uid}/userListing`);
    get(listingsRef).then((snapshot) => {
      const userListings = snapshot
        .val()
        ?.filter((item) => item.category === "Movie");

      setMoviesListings(userListings);
    });
  }, [db, user?.uid]);
  return (
    <StyledMoviesView role="region" aria-label="Movies tab content">
      <Searchbar keyword="movies" />
      <RegularSection heading="Movies" listings={moviesListings} />
    </StyledMoviesView>
  );
};

export default Movies;
