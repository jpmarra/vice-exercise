import styled from "styled-components"
import { above } from "../../styles/utilities"

export const ShowListNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: flex-start;

    ${above.sm`
        justify-content: center;
    `}
    .show-list {
        list-style: none;
        display: flex;
        overflow-x: scroll;
        margin: 0;
        padding: 0;

        &__item {
            margin: 15px;

            &:first-child {
                padding-left: 30px;
            }

            &:last-child {
                padding-right: 30px;
            }

            &--image {
                height: 70px;

                ${above.sm`
                    height: 150px;
                `}
            }
        }
    }
`
