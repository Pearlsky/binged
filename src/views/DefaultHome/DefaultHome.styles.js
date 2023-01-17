import styled from "styled-components";
import homeBg from "../../assets/homebg.png";

export const StyledDefaultHomePage = styled.section`
  background: url(${homeBg});
  background-repeat: repeat-y;
  background-size: cover;
  background-position: center;
  background-color: rgb(22, 29, 47);
  background-blend-mode: overlay;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 90%;
    max-width: 300px;
  }
`;
