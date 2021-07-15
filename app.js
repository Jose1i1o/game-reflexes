/* DOM VARIABLES */

// ----------------------------------------------Get elements--------------------------------------------
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");
let thankYouPage = document.getElementById("article__page3");
// let congratsMessage = document.getElementById("congrats");

var cardClick = document
    .getElementById("card4") //event to capture click cards events and stop counter
    .addEventListener("click", () => {
        winTime();
        stopInterval();
        page2to3();
    });

var reloadEvent = document
    .getElementById("reload")
    .addEventListener("click", resetGame);

var playerPrueba = document.querySelector("#player1");
//-----------------------------------------------------Variables--------------------------------------------
var counter = 0;
var timing = 0;
var ranking = [];
var playerArray = [];

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
    pageReset();
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
}

function page1to2() {
    homePage.classList.add("display-none"); //switch styles
    gamePage.classList.remove("display-none");
}

function page2to3() {
    gamePage.classList.add("display-none");
    thankYouPage.classList.remove("display-none");
}

function resetGame() {
    thankYouPage.classList.add("display-none");
    homePage.classList.remove("display-none");
}

// function thankYouMessage() {
//     congratsMessage = `Thank you ${$userName}
//     your time is ${counter}`;
// }

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
}

function stopInterval() {
    // for (let i = 0; i < playerArray.length; i++) {
    // profile1.name = playerArray[playerArray.length - 1];
    // profile1.time = ranking[ranking.length - 1];
    // profiles.push(profile1);
    // console.log(profiles);

    profile1.name = playerArray[playerArray.length - 1];
    profile1.time = ranking[ranking.length - 1];
    profiles.push({
        name: playerArray[playerArray.length - 1],
        time: ranking[ranking.length - 1],
    });
    profiles.sort(function(a, b) {
        return a.time - b.time;
    });

    console.log(profiles);

    clearInterval(timing);
    counter = 0;
}

//     // profile2.name = playerArray[1];
//     // profile2.time = ranking[1];
//     // profiles.push(profile2);

//     // profile3.name = "name player3";
//     // profile3.time = 400;
//     // profiles.push(profile3);

//     // profile4.name = "name player 4";
//     // profile4.time = 1900;
//     // profiles.push(profile4);

//     let profilesDiv = document.getElementsByClassName("profiles")[0];

//     profiles.forEach(function(entry) {
//         let profile = document.createElement("div");
//         profile.className = "profile";
//         profile.textContent = entry.name + " -- " + entry.time;
//         profilesDiv.appendChild(profile);
//     });
// // }

// // //select every card by id
// // fu;
// // var cards = document.getElementsByClassName("card");
// // console.log(cards);
// // //get a random number between 1 and 6
// // function getRandom() {
// //     var randomIndex = Math.floor(Math.random() * 6);
// //     return randomIndex;
// // }