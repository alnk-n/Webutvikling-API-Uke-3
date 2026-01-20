import { useQuery } from "@tanstack/react-query"


export useGames = () => {
    return useQuery({
        queryKey: ["gameList"],
        queryFn: async () => {
            const response = await fetch("https://tillerapi.tiller.blog/api/v2/games")
            return response.json()}
    })
}