import styled from "styled-components";

const StyledIcon = styled.div`
  background: no-repeat;
  background-image: url(${({ icon }) => icon});
  background-position: 50%;
  height: 1.5em;
  width: 1.5em;
`;

export default StyledIcon;
