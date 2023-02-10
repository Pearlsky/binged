import { get, ref, set } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import Searchbar from "../../components/SearchBar/Searchbar";
import { AuthContext } from "../../services/firebase/auth";
import { DbContext } from "../../services/firebase/db";
import { RegularSection } from "../Home/Home";
import StyledTVSeriesView from "./TVSeries.styles";

const TVSeries = () => {
  const [tvSeriesListings, setTVSeriesListings] = useState();
  const [searchListings, setSearchListings] = useState([]);
  const [searchTerm, setSearchTerm] = useState();
  const db = useContext(DbContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const listingsRef = ref(db, `users/${user?.uid}/userListing`);
    get(listingsRef).then((snapshot) => {
      const userListings = snapshot
        .val()
        ?.filter((item) => item.category === "TV Series");
      setTVSeriesListings(userListings);
    });
  }, [db, user?.uid]);

  useEffect(() => {
    if (searchTerm) {
      const searchResult = tvSeriesListings.filter((item) => {
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
    <StyledTVSeriesView role="region" aria-label="TV Series tab content">
      <Searchbar keyword="TV series" setSearchTerm={setSearchTerm} />
      <RegularSection
        heading="TV Series"
        listings={tvSeriesListings}
        searchListings={searchListings}
        searchTerm={searchTerm}
      />
    </StyledTVSeriesView>
  );
};

export default TVSeries;
