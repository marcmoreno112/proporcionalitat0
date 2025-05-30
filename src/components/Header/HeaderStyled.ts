import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  /* margin-top: 90px; */

  .logo {
    object-fit: contain;
    width: auto;
    max-height: 200px;
    background-color: white;
  }
`;

export default HeaderStyled;
