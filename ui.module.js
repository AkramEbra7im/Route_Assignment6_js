export default class ui {
    async getGames(catagory = 'mmorpg') {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '64fe19339emshfa2d90055c06692p191d2bjsn06b40658f860',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catagory}`, options)
        let data = await req.json()
        return data
    }

    async getDetails(gameId) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '64fe19339emshfa2d90055c06692p191d2bjsn06b40658f860',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let req = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
        let data = await req.json()
        
        return data
    }


}