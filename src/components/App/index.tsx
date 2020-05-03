import React, { useEffect, useState } from "react"
import { fetchData, Show } from "../../utils"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { AppContainer } from "./App.styles"
// import { shows } from "../../shows"
import ShowCard from "../ShowCard"
import ShowList from "../ShowList"

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [shows, setShows] = useState<Show[]>([])
    const [[currentShow, direction], setCurrentShow] = useState([0, 0])

    useEffect(() => {
        fetchData().then((shows) => {
            setShows(shows)
            setIsLoading(false)
        })
    }, [])

    const handleShowSelection = (idx: number): void => {
        const direction = idx > currentShow ? 1 : 0
        setCurrentShow([idx, direction])
    }

    return (
        <AppContainer>
            {isLoading ? (
                <div className="loading-display" />
            ) : (
                <>
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
                </>
            )}

            <GlobalStyles />
        </AppContainer>
    )
}

export default App
