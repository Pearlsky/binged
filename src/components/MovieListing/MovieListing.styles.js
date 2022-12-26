import styled from "styled-components";
import { colors as color, weights as weight } from "../../utils/variables";

import bookmarkIconFull from "../../assets/icon-bookmark-full.svg";
import bookmarkIconEmpty from "../../assets/icon-bookmark-empty.svg";
import movieCategoryIcon from "../../assets/icon-category-movie.svg";
import tvseriesCategoryIcon from "../../assets/icon-category-tv.svg"

const StyledMovieListing = styled.article``;

export const StyledMovieDetails = styled.div`
    display: flex;
    align-items: center;
    height: fit-content;
    > span {
        display: block;
        height: 2px;
        width: 2px;
        border-radius: 50%;
        background-color: ${color.gray};
        margin-inline: .5em;
    }

    div {
        display: flex;
        align-items: center;

        > span {
            background: no-repeat url(${({category}) => category === "Movie" ? movieCategoryIcon : tvseriesCategoryIcon});
            display: block;
            height: 1em;
            width: 1em;
        }
    }
`;

export const StyledBookmarkButton = styled.button`
  background: no-repeat url(${({ isBookmarked }) => isBookmarked ? bookmarkIconFull : bookmarkIconEmpty});
  background-color: rgba(16, 20, 30, 0.6);
  border: none;
  background-position: center;
  background-size: 15px;
  width: 3em;
  height: 3em;
  text-indent: 4em;
  white-space: nowrap;
  overflow: hidden;
  padding: 1em;
  border-radius: 50%;
`;

export const StyledPlayButton = styled.button`
  font-size: 1.15rem;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  border: none;
  color: ${color.white};
  padding-block: 0.7em;
  padding-inline: 0.7em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${weight.medium};
  font-family: "Outfit", sans-serif;

  svg,
  span {
    margin-right: 1.1em;
  }
`;

export default StyledMovieListing;
