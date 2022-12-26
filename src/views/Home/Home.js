import MovieListing from "../../components/MovieListing/MovieListing";
import StyledHomeView from "./Home.styles";

const Home = () => {
  return (
    <>
      <StyledHomeView
        role="region"
        aria-label="Home Tab Content"
      ></StyledHomeView>
      <div>
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
