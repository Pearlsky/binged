import { BookmarkButton, PlayButton } from "../Button/Button";
import StyledMovieListing, {
  StyledMovieSubDetails,
  StyledMovieThumbnail,
  StyledMovieTitle,
} from "./MovieListing.styles";

const MovieListing = () => {
  return (
    <StyledMovieListing>
      <StyledMovieThumbnail>
        <BookmarkButton />
        <PlayButton />
      </StyledMovieThumbnail>
      <div>
        <MovieDetails
          title="Broski"
          year="1994"
          category="Movies"
          rating="18+"
        />
      </div>
    </StyledMovieListing>
  );
};

export const MovieDetails = ({ title, year, category, rating }) => {
  return (
    <>
      <StyledMovieSubDetails category={category}>
        <small>{year}</small>
        <span></span>
        <div>
          <span></span>
          {category === "Movie" ? (
            <small>Movie</small>
          ) : (
            <small>TV Series</small>
          )}
        </div>
        <span></span>
        <small>{rating}</small>
      </StyledMovieSubDetails>
      <StyledMovieTitle>{title}</StyledMovieTitle>
    </>
  );
};

export default MovieListing;
