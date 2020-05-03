type RawShow = {
    id: string
    title: string
    episodes: number
    product_image_url: string
}

export type Show = {
    id: string
    title: string
    episodes: number
    imageName: string
}

const _formatData = (shows: RawShow[]): Show[] => {
    return shows.map((show) => {
        const imagePathArray = show.product_image_url.split("/")
        const fileName = imagePathArray[imagePathArray.length - 1].split(".")
        return {
            id: show.id,
            title: show.title,
            episodes: show.episodes,
            imageName: fileName[0].toLowerCase(),
        }
    })
}

export const fetchData = async (): Promise<Show[]> => {
    try {
        const data = await fetch("https://jpmarra.s3.amazonaws.com/shows.json")
        console.log("~~~HERE IS THE DATA: ", data)
        const response: { shows: RawShow[] } = await data.json()
        return _formatData(response.shows)
    } catch (err) {
        console.error("~~~~", err)
        return []
    }
}
