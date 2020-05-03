import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Show } from "../../utils"
import { ShowCardWrapper } from "./ShowCard.styles"
import { images } from "../../images"

type Props = {
    showIdx: number
    direction: number
    show: Show
}

type Variant = {
    x: number
    opacity: number
    zIndex?: number
}

const slideVariants = {
    enter: (direction: number): Variant => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number): Variant => {
        return {
            zIndex: 0,
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }
    },
}

const ShowCard: React.FC<Props> = ({ show, showIdx, direction }) => {
    return (
        <ShowCardWrapper>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    className="show-card"
                    key={showIdx}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 200 },
                        opacity: { duration: 0.2 },
                    }}
                >
                    <img
                        className="show__image"
                        alt={`${show.title} show image`}
                        src={images[show.imageName]}
                    />
                    <h5 className="show__episodes">{show.episodes} episodes</h5>
                    <h2 className="show__title">{show.title}</h2>
                </motion.div>
            </AnimatePresence>
        </ShowCardWrapper>
    )
}

export default ShowCard
