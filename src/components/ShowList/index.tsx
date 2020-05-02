import React from "react"
import { ShowListNav } from "./ShowList.styles"
import { Show } from "../../shows"
import { images } from "../../images"

type Props = {
    handleShowSelection: (idx: number) => void
    shows: Show[]
}

const ShowList: React.FC<Props> = ({ handleShowSelection, shows }) => {
    return (
        <ShowListNav>
            <ul className="show-list">
                {shows.map((show, idx) => (
                    <li
                        key={show.id}
                        className="show-list__item"
                        onClick={(): void => handleShowSelection(idx)}
                    >
                        <img
                            alt={`${show.title} nav item`}
                            className="show-list__item--image"
                            src={images[show.productImageName]}
                        />
                    </li>
                ))}
            </ul>
        </ShowListNav>
    )
}

export default ShowList
