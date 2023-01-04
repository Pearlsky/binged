import { get, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import Searchbar from "../../components/SearchBar/Searchbar";
import { AuthContext } from "../../services/firebase/auth";
import { DbContext } from "../../services/firebase/db";
import { RegularSection } from "../Home/Home";
import StyledTVSeriesView from "./TVSeries.styles";

const TVSeries = () => {
  const [tvSeriesListings, setTVSeriesListings] = useState();
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
  return (
    <StyledTVSeriesView role="region" aria-label="TV Series tab content">
      <Searchbar keyword="TV series" />
      <RegularSection heading="TV Series" listings={tvSeriesListings} />
    </StyledTVSeriesView>
  );
};

export default TVSeries;
