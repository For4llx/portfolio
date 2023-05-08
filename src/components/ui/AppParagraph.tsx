import { bodyMedium, BodySmall } from "@/styles/mixins";
import styled from "styled-components";

interface IAppParagraph {
  small?: boolean;
}

const AppParagraph = styled.p<IAppParagraph>`
  color: ${(props) => props.theme.white};
  ${(props) => (props.small ? BodySmall : bodyMedium)}
`;

export default AppParagraph;
