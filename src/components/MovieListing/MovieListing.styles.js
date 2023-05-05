import styled from "styled-components";
import {
  breakpoints as breakpoint,
  colors as color,
  weights as weight,
} from "../../utils/variables";

import movieCategoryIcon from "../../assets/icon-category-movie.svg";
import tvseriesCategoryIcon from "../../assets/icon-category-tv.svg";

const StyledMovieListing = styled.article`
  display: flex;
  flex-direction: column;
`;

export const StyledTrendingListing = styled.article`
  width: 270px;
  height: 250px;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
  }
`;

export const StyledMovieThumbnail = styled.div`
  border-radius: 10px;
  flex-basis: 75%;
  position: relative;
  background: url(${({ small }) => small});
  background-position: center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${breakpoint.tablet}) {
    background: url(${({ medium }) => medium});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (${breakpoint.laptop}) {
    background: url(${({ large }) => large});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
  }

  > div {
    position: absolute;
    bottom: 1em;
    left: 1em;
  }

  :hover {
    cursor: pointer;
    background-blend-mode: overlay;

    button {
      display: flex;
    }
  }
`;

export const StyledMovieTitle = styled.h3`
  margin-block: 0;
  font-size: 1rem;
  font-weight: ${weight.medium};

  @media (${breakpoint.tablet}) {
    font-size: 1.1rem;
  }
  @media (${breakpoint.laptop}) {
    font-size: 1.15rem;
  }
`;

export const StyledMovieDetails = styled.div`
  flex-basis: 25%;
`;

export const StyledMovieSubDetails = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  margin-block: 0.7em 0.4em;
  color: rgba(255, 255, 255, 0.8);
  > span {
    display: block;
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background-color: ${color.gray};
    margin-inline: 0.5em;
  }

  div {
    display: flex;
    align-items: center;

    > span {
      background: no-repeat
        url(${({ category }) => category === "Movie" ? movieCategoryIcon : tvseriesCategoryIcon});
      display: block;
      height: 1em;
      width: 1em;
    }
  }
`;

export default StyledMovieListing;
