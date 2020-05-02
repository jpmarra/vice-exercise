import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { above, White, Black } from "../../styles/utilities"

export const ShowListNav = styled.nav`
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: flex-start;

    ${above.sm`
        justify-content: center;
    `}
    .show-list {
        list-style: none;
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
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

            .slide {
                display: flex;
                flex-direction: column;
                align-items: center;

                &__indicator {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    z-index: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15px;
                    background-color: ${White};
                    color: ${Black};
                    font-size: 12px;
                }
            }
        }
    }
`

export const ListImage = styled(motion.img)`
    height: 70px;

    ${above.sm`
        height: 150px;
    `}

    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.6),
            0 10px 10px rgba(0, 0, 0, 0.6);
    }
`
