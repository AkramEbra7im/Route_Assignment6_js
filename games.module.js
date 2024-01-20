import ui from "./ui.module.js";

export default class games {
    async displayGames(catagory) {
        let temp = ``
        let uiGames = new ui
        let gamesList = await uiGames.getGames(catagory)
        gamesList.forEach(element => {
            temp += `                
            <div class="col-lg-3 col-md-6 gameCard" data-id=${element.id}>
                <div class="card p-3 h-100">
                    <img src="${element.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body px-0 py-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6>${element.title}</h6>
                            <span class="badge text-bg-primary p-2" >Free</span>
                        </div>
                        <p class="card-text text-center opacity-50">${element.short_description}</p>
                    </div>
                    <div class="card-footer small d-flex justify-content-between px-0 pb-0 m-0">
                        <span class="badge badge-color">${element.genre}</span>
                        <span class="badge badge-color">${element.platform}</span>
                    </div>
                </div>
            </div>`
        });
        return temp
    }

    async changeCatagory(event, box, linksList) {
        let gamesList = await this.displayGames(event.target.getAttribute('data-cat'))
        $(box).html(gamesList);
        $(event.target).addClass('active')
        $(linksList).not(event.target).removeClass('active')
    }
}