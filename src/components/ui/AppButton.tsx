import styled from "styled-components";

const AppButton = styled.button`
  cursor: pointer;
  padding: 1rem;
  background-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  font-size: 15px;
  font-weight: 300;

  &:hover {
    color: ${(props) => props.theme.semiDarkBlue};
    background-color: ${(props) => props.theme.white};
  }
`;

export default AppButton;
