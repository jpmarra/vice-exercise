type Show = {
    id: string
    title: string
    episodes: number
    imageName: string
}

const shows: Show[] = [
    {
        id: "a1",
        title: "Gaycation",
        episodes: 24,
        imageName: "gaycation",
    },
    {
        id: "b2",
        title: "Huang's World",
        episodes: 12,
        imageName: "huangsworld",
    },
    {
        id: "c3",
        title: "King of The Road",
        episodes: 8,
        imageName: "kingoftheroad",
    },
    {
        id: "d5",
        title: "Last Chance High",
        episodes: 15,
        imageName: "lastchancehigh",
    },
    {
        id: "e6",
        title: "Love Industries",
        episodes: 21,
        imageName: "loveindustries",
    },
    {
        id: "f7",
        title: "pilotweek",
        episodes: 3,
        imageName: "pilotweek",
    },
    {
        id: "a8",
        title: "States of Undress",
        episodes: 7,
        imageName: "statesofundress",
    },
    {
        id: "b7",
        title: "VICE",
        episodes: 32,
        imageName: "vicehbo",
    },
    {
        id: "c8",
        title: "Woman",
        episodes: 9,
        imageName: "woman",
    },
    {
        id: "d9",
        title: "VICE World of Sports",
        episodes: 18,
        imageName: "worldofsports",
    },
]

export const fetchData = async (): Promise<Show[]> => Promise.resolve(shows)
