import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import storage from "../../services/firebase/storage";
import { BookmarkButton, PlayButton } from "../Button/Button";
import StyledMovieListing, {
  StyledMovieDetails,
  StyledMovieSubDetails,
  StyledMovieThumbnail,
  StyledMovieTitle,
  StyledTrendingListing,
} from "./MovieListing.styles";

const MovieListing = ({ title, year, category, rating, thumbnail }) => {
  const [large, setLarge] = useState();
  const [medium, setMedium] = useState();
  const [small, setSmall] = useState();

  const itemStorageRefL = ref(storage, thumbnail.large);
  const itemStorageRefM = ref(storage, thumbnail.medium);
  const itemStorageRefS = ref(storage, thumbnail.small);

  useEffect(() => {
    const getStorageImages = async () => {
      try {
        const urlLarge = await getDownloadURL(itemStorageRefL);
        const urlMedium = await getDownloadURL(itemStorageRefM);
        const urlSmall = await getDownloadURL(itemStorageRefS);

        urlLarge && setLarge(urlLarge);
        urlMedium && setMedium(urlMedium);
        urlSmall && setSmall(urlSmall);
      } catch (error) {
        console.error(`${error.type}: ${error.message}`);
      }
    };

    getStorageImages();
  }, [itemStorageRefL, itemStorageRefM, itemStorageRefS]);

  return (
    <StyledMovieListing>
      <StyledMovieThumbnail
        thumbnail={thumbnail}
        large={large}
        medium={medium}
        small={small}
      >
        <BookmarkButton />
        <PlayButton />
      </StyledMovieThumbnail>
      <MovieDetails
        title={title}
        year={year}
        category={category}
        rating={rating}
      />
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