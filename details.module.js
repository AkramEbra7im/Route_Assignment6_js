import ui from "./ui.module.js";

export default class details {

    async displayDetails(gameId) {
        let temp = ''
        let uiGames = new ui
        let gameDetails = await uiGames.getDetails(gameId)
        let { title, thumbnail, status, description, game_url, genre, platform } = gameDetails
        temp = `<div class="col-md-4">
                    <img src="${thumbnail}" alt="" class="w-100">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${title}</h3>
                    <p>
                        <span>Category: </span>
                        <span class="badge text-bg-info">${genre}</span>
                    </p>
                    <p>
                        <span>Platform: </span>
                        <span class="badge text-bg-info">${platform}</span>
                    </p>
                    <p>
                        <span>Status: </span>
                        <span class="badge text-bg-info">${status}</span>
                    </p>
                    <p class="small">${description}</p>
                    <a href="${game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
                </div>`

        return temp
    }

}