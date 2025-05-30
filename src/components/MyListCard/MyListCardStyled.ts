import { styled } from "styled-components";

const MyListCardStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  /* font-size: 1.5rem; */
  /* color: ${(props) => props.theme.colors.primary}; */
  padding: 10px;

  .card {
    &-image {
      object-fit: contain;
    }
  }
`;

export default MyListCardStyled;
