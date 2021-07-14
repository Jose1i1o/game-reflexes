/**Jose*/
/* DOM VARIABLES */

// ----------------------------------------------Get elements--------------------------------------------
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");
var $userName = document.querySelector("#input-username").value // input value
var $inputConfirm = document.querySelector("#input-confirm");
var cardClick = document
    .getElementById("card4") //event to capture click cards events and stop counter
    .addEventListener("click", () => {
        winTime();
        stopInterval();
    });
var playerPrueba = document.querySelector("#player1")
    //-----------------------------------------------------Variables--------------------------------------------
var counter = 0;
var timing = 0;
var ranking = [];
var playerArray = [];
var playerCom = [];
let player1 = {
        name: "",
        time: 0
    }
    //------------------------------------------------ Add Event Listener---------------------------------------
let btnNext = document.getElementById("next").addEventListener("click", () => { //when you click start game we have two events
    page1to2(); //switch pages
    timer(); //Satr the counter
});
$inputConfirm.addEventListener("click", getValue);
// --------------------------------------------------Functions----------------------------------------
function getValue() { //store the name player in array
    playerArray.push($userName);
    console.log(playerArray);
    playerPrueba.textContent = "player1.name"
}



function page1to2() {
    homePage.style.display = "none"; //switch styles 
    gamePage.classList.remove("display-none");
}

function timer() {
    timing = setInterval(() => { //counter start from zero (0.1 sec)
        counter += 0.1;
        console.log(counter);
    }, 100);
}

function winTime() { //store the score in array
    ranking.push(counter);
    console.log(ranking);

}

function stopInterval() {
    clearInterval(timing);
    player1["name"] = playerArray[0];
    player1["time"] = ranking[0];
    console.log(player1);
    playerPrueba.textContent = "player1.name"
}



/* let planA = +
    console.log(planA); */
// arrays
/* var playerCom =
    playerCom.push()
console.log(playerCom) */
//