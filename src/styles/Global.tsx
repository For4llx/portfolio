import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Outfit', sans-serif;
    }
    html, body, #__next {
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme.darkBlue};
    }
    a {
        text-decoration: none;
    }
    em {
        font-style: normal;
    }
    li {
        list-style: none;
    }
    button {
        border: none;
        background-color: transparent;
    }
    input, textarea {
        border: none;
        background-color: transparent;
    }
    input:focus, textarea:focus {
            outline: none;
    }
`;
