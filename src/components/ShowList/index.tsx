import React from "react"
import { ShowListNav, ListImage } from "./ShowList.styles"
import { AnimatePresence, motion } from "framer-motion"
import { Show } from "../../shows"
import { images } from "../../images"

type Props = {
    activeIdx: number
    handleShowSelection: (idx: number) => void
    shows: Show[]
}

const ShowList: React.FC<Props> = ({
    handleShowSelection,
    shows,
    activeIdx,
}) => {
    return (
        <ShowListNav>
            <ul className="show-list">
                {shows.map((show, idx) => (
                    <li
                        key={show.id}
                        className="show-list__item"
                        onClick={(): void => handleShowSelection(idx)}
                    >
                        <div className="slide">
                            <ListImage
                                whileHover={{ scale: 1.12 }}
                                alt={`${show.title} nav item`}
                                className="show-list__item--image"
                                src={images[show.productImageName]}
                            />
                            <AnimatePresence>
                                {idx === activeIdx && (
                                    <motion.div
                                        className="slide__indicator"
                                        initial={{ y: 30, opacity: 0 }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                            transition: { delay: 0.2 },
                                        }}
                                        exit={{ y: 30, opacity: 0 }}
                                        transition={{ damping: 50 }}
                                    >
                                        <span className="slide__indicator--number">
                                            {idx + 1}
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </li>
                ))}
            </ul>
        </ShowListNav>
    )
}

export default ShowList
