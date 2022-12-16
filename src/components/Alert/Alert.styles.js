import styled from "styled-components";

const StyledAlert = styled.section`
  position: absolute;
  top: 15px;
  display: flex;
  align-items: center;
  color: ${({type}) =>
    type === "err" ? "rgb(150, 15, 15)" : "rgb(10, 105, 70)"};
  background-color: ${({type}) =>
    type === "err" ? "rgb(255, 175, 175)" : "rgb(200, 255, 200)"};
  border: solid 1px
    ${({type}) => (type === "err" ? "rgb(150, 15, 15)" : "rgb(10, 105, 70)")};
  border-radius: 5px;
  max-width: 400px;
  padding-inline: 0.5em 3em;
  padding-block: 0.5em;

  img {
    flex-basis: 7%;
    margin-right: 0.7em;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export default StyledAlert;
