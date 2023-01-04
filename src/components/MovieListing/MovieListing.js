import { BookmarkButton, PlayButton } from "../Button/Button";
import StyledMovieListing, {
  StyledMovieDetails,
  StyledMovieSubDetails,
  StyledMovieThumbnail,
  StyledMovieTitle,
  StyledTrendingListing,
} from "./MovieListing.styles";

const MovieListing = ({title, year, category, rating, thumbnail}) => {
  return (
    <StyledMovieListing>
      <StyledMovieThumbnail thumbnail={thumbnail}>
        <BookmarkButton />
        <PlayButton />
      </StyledMovieThumbnail>
      <MovieDetails title={title} year={year} category={category} rating={rating} />
    </StyledMovieListing>
  );
};

export const TrendingListing = () => {
  return (
    <StyledTrendingListing>
      <StyledMovieThumbnail>
        <BookmarkButton />
        <PlayButton />
        <MovieDetails
          title="Broski"
          year="1994"
          category="Movies"
          rating="18+"
        />
      </StyledMovieThumbnail>
    </StyledTrendingListing>
  );
};

export const MovieDetails = ({ title, year, category, rating }) => {
  return (
    <StyledMovieDetails>
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
    </StyledMovieDetails>
  );
};

export default MovieListing;
