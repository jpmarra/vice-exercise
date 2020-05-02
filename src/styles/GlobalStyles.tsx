import { createGlobalStyle } from "styled-components"
import { Black, White, Grey } from "./utilities/Colors"

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }

    body {
        background: ${Black};
        color: ${White};
        font-family: 'Open Sans', sans-serif;
        scrollbar-width: thin;
        scrollbar-color: ${Grey} ${Black};
    }

    html,
    body,
    #app {
        margin: 0;
        height: 100%;
        width: 100%;
    }
`
