/**Jose*/
/* DOM VARIABLES */

// ----------------------------------------------Get elements--------------------------------------------
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");
// input value


var cardClick = document
    .getElementById("card4") //event to capture click cards events and stop counter
    .addEventListener("click", () => {
        winTime();
        stopInterval();
    });
var playerPrueba = document.querySelector("#player1")
    //     //-----------------------------------------------------Variables--------------------------------------------
var counter = 0;
var timing = 0;
var ranking = [];
var playerArray = [];
var playerCom = [];
let player1 = {
    name: "",
    time: 0
}
let profiles = [];
let profile1 = {
    name: "",
    time: 0
};
let profile2 = {};
let profile3 = {};
let profile4 = {};
// //------------------------------------------------ Add Event Listener---------------------------------------
let btnNext = document.getElementById("next").addEventListener("click", () => { //when you click start game we have two events
    page1to2(); //switch pages
    timer(); //Satr the counter
    getValue()
});
// --------------------------------------------------Functions----------------------------------------
function getValue() {
    let $userName = document.getElementById("inputuser").value
    playerArray.push($userName); //store the name player in array
    console.log($userName);
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
    profiles.push(profile1);
    profile1.name = playerArray[0];
    profile1.time = ranking[0];

    profile2.name = playerArray[1];
    profile2.time = ranking[1];
    profiles.push(profile2);

    profile3.name = "name player3";
    profile3.time = 400;
    profiles.push(profile3);

    profile4.name = "name player 4";
    profile4.time = 1900;
    profiles.push(profile4);

    // sort the array by time
    // b - a will make highest first, swap them so a - b to make lowest first
    profiles.sort(function(a, b) {
        return b.time - a.time;
    })

    let profilesDiv = document.getElementsByClassName('profiles')[0];

    profiles.forEach(function(entry) {
        let profile = document.createElement('div');
        profile.className = "profile";
        profile.textContent = entry.name + " -- " + entry.time;
        profilesDiv.appendChild(profile);
    });
}

// // this is the array that will hold all the profile objects