import { styled } from "styled-components";

const RefreshButtonStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RefreshButtonStyled;
