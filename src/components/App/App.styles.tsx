import styled from "styled-components"
import { above, Black } from "../../styles/utilities"

export const AppContainer = styled.main`
    position: relative;
    height: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .loading-display {
        height: 100%;
        width: 100%;
        background: ${Black};
    }

    ${above.md`
        flex-direction: column-reverse;
        min-height: 820px;
    `}
`
