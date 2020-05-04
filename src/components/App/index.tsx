import React, { useEffect, useState } from "react"
import { createBrowserHistory } from "history"
import { fetchData, Show } from "../../utils"
import { GlobalStyles } from "../../styles/GlobalStyles"
import { AppContainer } from "./App.styles"
import ShowCard from "../ShowCard"
import ShowList from "../ShowList"

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [shows, setShows] = useState<Show[]>([])
    const [[currentShow, direction], setCurrentShow] = useState([0, 0])
    const history = createBrowserHistory()

    useEffect(() => {
        fetchData().then((shows) => {
            const urlParams = new URLSearchParams(window.location.search)
            const paramId = urlParams.get("id")
            const currentShow = shows.findIndex((show) => show.id === paramId)

            if (currentShow !== -1) {
                setCurrentShow([currentShow, 0])
            }

            setShows(shows)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        const unlisten = history.listen((location, action) => {
            const locationState: any = location.state
            if (action === "POP") {
                const showIdx = locationState && locationState.showIdx ? locationState.showIdx : 0
                const direction = showIdx > currentShow ? 1 : 0
                setCurrentShow([showIdx, direction])
            }
        })
        return (): void => unlisten()
    }, [])

    const handleShowSelection = (show: Show, idx: number): void => {
        const direction = idx > currentShow ? 1 : 0
        setCurrentShow([idx, direction])
        history.push(`/?id=${show.id}`, { showIdx: idx })
    }

    return (
        <AppContainer>
            {isLoading ? (
                <div className="loading-display" data-testid="loading" />
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
