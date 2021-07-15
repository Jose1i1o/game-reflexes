/* DOM VARIABLES */

// ----------------------------------------------Get elements--------------------------------------------
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");
let thankYouPage = document.getElementById("article__page3");
let congratsMessage = document.getElementById("congrats");
// input value

var cardClick = document
    .getElementById("card4") //event to capture click cards events and stop counter
    .addEventListener("click", () => {
        winTime();
        stopInterval();
        page2to3();
        thankYouMessage();
    });
var playerPrueba = document.querySelector("#player1");
//-----------------------------------------------------Variables--------------------------------------------
var counter = 0;
var timing = 0;
var ranking = [];
var playerArray = [];
var playerCom = [];
let player1 = {
    name: "",
    time: 0,
};
let profiles = [];
let profile1 = {
    name: "",
    time: 0,
};
let profile2 = {};
let profile3 = {};
let profile4 = {};
// //------------------------------------------------ Add Event Listener---------------------------------------
let btnNext = document.getElementById("next").addEventListener("click", () => {
    //when you click start game we have two events
    page1to2(); //switch pages
    timer(); //Satr the counter
    getValue();
});

// let clickLevel1 = document
//     .getElementById("nextPage")
//     .addEventListener("click", page2to3);
// () => {
//     page2to3(); //switch pages
// thankYouMessage();
// });
// --------------------------------------------------Functions----------------------------------------
function getValue() {
    let $userName = document.getElementById("inputuser").value;
    playerArray.push($userName); //store the name player in array
    console.log($userName);
}

function page1to2() {
    homePage.style.display = "none"; //switch styles
    gamePage.classList.remove("display-none");
}

function page2to3() {
    gamePage.style.display = "none";
    thankYouPage.classList.remove("display-none");
}

function thankYouMessage() {
    congratsMessage = `Thank you ${$userName}
    your time is ${counter}`;
}

function timer() {
    timing = setInterval(() => {
        //counter start from zero (0.1 sec)
        counter += 0.1;
        console.log(counter);
    }, 100);
}

function winTime() {
    //store the score in array
    ranking.push(counter);
    console.log(ranking);
}

function stopInterval() {
    clearInterval(timing);
    profiles.push(profile1);
}