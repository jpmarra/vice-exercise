import styled from "styled-components"
import { Label, Title, above } from "../../styles/utilities"

export const ShowCardWrapper = styled.section`
    height: 75%;
    position: relative;
    .show-card {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .show {
            &__image {
                width: 220px;
                margin-bottom: 10px;

                ${above.md`
                    width: 275px;
                `}
            }

            &__episodes {
                ${Label};
                margin-bottom: 10px;
            }

            &__title {
                ${Title};
            }
        }
    }
`
