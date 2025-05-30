import { styled } from "styled-components";

const MyListPageStyled = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  .page-title {
    font-size: 3rem;
    color: ${(props) => props.theme.colors.secondary};
    background-color: white;
    margin-top: 20px;
  }

  .no-rated-films-message {
    background-color: white;
    padding: 50px;
  }
`;

export default MyListPageStyled;
