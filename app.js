/* DOM VARIABLES */

// ----------------------------------------------Get elements--------------------------------------------
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");
let thankYouPage = document.getElementById("article__page3");
let $usernameMens = document.querySelector("#usernameMens");
let $TimeMens = document.querySelector("#TimeMens");
let $player1P = document.querySelectorAll("#player");
let $time1P = document.querySelectorAll("#time");
console.log($player1P, $time1P);
let players = document.getElementById("player1");
let times = document.getElementById("time1");
let playerPrueba = document.querySelector("#player1");
//-----------------------------------------------------Variables--------------------------------------------
let counter = 0;
let timing = 0;
let ranking = [];
let playerArray = [];

let profiles = [];
let profile1 = {
    name: "",
    time: 0,
};
let profile2 = {
    name: "",
    time: 0,
};
let profile3 = {
    name: "",
    time: 0,
};
let profile4 = {
    name: "",
    time: 0,
};
let profile5 = {
    name: "",
    time: 0,
};

// ---------------------------------------------------------addEventListeners-------------------------
let btnNext = document.getElementById("next").addEventListener("click", () => {
    //when you click start game we have two events
    page1to2(); //switch pages
    timer(); //Satr the counter
    getValue();
});
let cardClick = document
    .getElementById("card4") //event to capture click cards events and stop counter
    .addEventListener("click", () => {
        winTime();
        stopInterval();
        page2to3();
        printTable();
    });

let reloadEvent = document
    .getElementById("reload")
    .addEventListener("click", resetGame);

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
    // document
    //     .getElementById("congrats")
    //     .addEventListener("onload", thankYouMessage());
}

function resetGame() {
    thankYouPage.classList.add("display-none");
    homePage.classList.remove("display-none");
}

function timer() {
    timing = setInterval(() => {
        //counter start from zero (0.1 sec)
        counter += 1;
        console.log(counter);
    }, 1000);
}

function winTime() {
    //store the score in array
    ranking.push(counter);
}

function printTable() {
    players.innerHTML = playerArray[0];
    times.innerHTML = ranking[0];
}

function stopInterval() {
    profile1.name = playerArray[playerArray.length - 1];
    profile1.time = ranking[ranking.length - 1];
    profiles.push({
        name: playerArray[playerArray.length - 1],
        time: ranking[ranking.length - 1],
    });
    let nameUser = Object.values(profiles[0]);
    $usernameMens.innerHTML = nameUser[0];
    $TimeMens.innerHTML = nameUser[1];

    console.log(nameUser);

    profiles.sort(function(a, b) {
        return a.time - b.time;
    });

    console.log(profiles);
    for (let i = 0; i < profiles.length; i++) {
        let nameUser = Object.values(profiles[i]);
        nameUser.forEach((element) => {
            $player1P.innerHTML = element;
            $time1P.innerHTML = element;
        });
    }
    clearInterval(timing);
    counter = 0;
}

// function thankYouMessage() {
//     var textMessage = document.createTextNode(
//         `Thank you ${this.playerArray[0]} your time is ${this.ranking[0]}`
//     );

// let table = document.getElementById("table");
// let tableBody = document.createElement("tbody");
// let row = document.createElement("tr");
// let name = document.createElement("td");
// let time = document.createElement("td");
// let nameUser = Object.values(profiles[0]);
// nameUser.forEach((element) => {
//   name.innerHTML = element;
// });
// let timeUser = Object.values(profiles[0]);
// timeUser.forEach((element) => {
//   time.innerHTML = element;
// });
// row.appendChild(name);
// row.appendChild(time);
// tableBody.appendChild(row);
// table.appendChild(tableBody);