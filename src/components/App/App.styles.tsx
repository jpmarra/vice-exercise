import styled from "styled-components"
import { above } from "../../styles/utilities"

export const AppContainer = styled.main`
    height: 100%;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    ${above.md`
        flex-direction: column-reverse;
    `}
`
