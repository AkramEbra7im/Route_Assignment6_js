import details from "../details.module.js";
import games from "../games.module.js"



$('#btnClose').on('click', () => {
    $('#details').addClass('d-none');
    $('#games').removeClass('d-none');
})

//--------Games------------------------------------------
let gameCLass = new games
let detailsClass = new details
let gamesList = await gameCLass.displayGames('mmorpg')
$('#gamesList').html(gamesList);
showDetails()

$('.navbar a').on('click', async function (e) {
    await gameCLass.changeCatagory(e, '#gamesList', '.navbar a')
    showDetails()
})
// ---------------------------------------------------------

function showDetails(){
    $('.gameCard').on('click',async function(){
        console.log('cwsfcw')
        let gameDetails = await detailsClass.displayDetails(this.getAttribute('data-id'))
        $('#showDetails').html(gameDetails)
        $('#games').addClass('d-none');
        $('#details').removeClass('d-none');
    })
}



