import styled, { keyframes } from "styled-components";
import { weights as weight } from "../../utils/variables";

const AlertAppear = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  1% {
    transform: translateY(0%);
    opacity: 1;
  }

  99%  {
    transform: translateY(0%);
    opacity: 1;
  }
  
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

const StyledAlert = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    position: absolute;
    top: 3em;
    align-items: center;
    animation: ${AlertAppear} 4s linear alternate forwards;
    background-color: ${({ type }) =>
      type === "success" ? "rgb(200, 255, 200)" : "rgb(255, 175, 175) "};
    border: solid 2px
      ${({ type }) =>
        type === "success" ? "rgb(10, 95, 80)" : "rgb(150, 15, 15)"};
    border-radius: 5px;
    color: rgb(30, 30, 50);
    display: ${({ type }) => (type === "" ? "none" : "flex")};
    font-size: 1.15em;
    padding-inline: 0.7em;
    padding-block: 0.7em;
  }

  img {
    flex-basis: 7%;
    margin-right: 0.5em;
    width: 20px;
    height: 20px;
    max-width: 100%;
  }

  p {
    margin: 0;
    display: flex;
    flex-basis: 93%;
    strong {
      font-weight: ${weight.medium};
    }
  }
`;

export default StyledAlert;