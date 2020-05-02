import React, { useState } from "react"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { AppContainer } from "./App.styles"
import { shows } from "../../shows"
import ShowCard from "../ShowCard"
import ShowList from "../ShowList"

const App: React.FC = () => {
    const [[currentShow, direction], setCurrentShow] = useState([0, 0])

    const handleShowSelection = (idx: number): void => {
        const direction = idx > currentShow ? 1 : 0
        setCurrentShow([idx, direction])
    }

    return (
        <AppContainer>
            <ShowCard
                show={shows[currentShow]}
                showIdx={currentShow}
                direction={direction}
            />
            <ShowList
                shows={shows}
                handleShowSelection={handleShowSelection}
                activeIdx={currentShow}
            />

            <GlobalStyles />
        </AppContainer>
    )
}

export default App
