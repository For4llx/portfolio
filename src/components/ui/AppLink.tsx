import styled from "styled-components";

interface IAppLink {
  red?: boolean;
}

const AppLink = styled.a<IAppLink>`
  cursor: pointer;
  color: ${(props) => (props.red ? props.theme.red : props.theme.red)};
  fill: ${(props) => (props.red ? props.theme.red : props.theme.greyishBlue)};
  font-weight: 300;
  &:hover {
    fill: ${(props) => props.theme.white};
  }
`;

export default AppLink;
