import React from "react"
import { ShowListNav, ListImage } from "./ShowList.styles"
import { AnimatePresence, motion } from "framer-motion"
import { Show } from "../../utils"
import { images } from "../../images"

type Props = {
    activeIdx: number
    handleShowSelection: (show: Show, idx: number) => void
    shows: Show[]
}

const ShowList: React.FC<Props> = ({ handleShowSelection, shows, activeIdx }) => {
    return (
        <ShowListNav>
            <ul className="show-list">
                {shows.map((show, idx) => (
                    <li key={show.id} className="show-list__item">
                        <div className="slide">
                            <motion.button
                                whileHover={{ scale: 1.12 }}
                                className="slide__button"
                                onClick={(): void => handleShowSelection(show, idx)}
                                data-testid={`nav-${show.id}`}
                            >
                                <ListImage
                                    alt={`${show.title} nav item`}
                                    className="show-list__item--image"
                                    src={images[show.imageName]}
                                />
                            </motion.button>
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
                                        <span className="slide__indicator--number">{idx + 1}</span>
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
