/**Jose*/
/* DOM VARIABLES */

// Pages
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");

// Next buttons
let btnNext = document.getElementById("next").addEventListener("click", () => {
    page1to2();
    timer();
});

function page1to2() {
    homePage.style.display = "none";
    gamePage.classList.remove("display-none");
}

function activateCounter() {}
/**Andres */
let $inputConfirm = document.querySelector("#input-confirm");
$inputConfirm.addEventListener("click", getValue);

function getValue() {
    var $userName = document.querySelector("#input-username").value;
    console.log($userName);
    let player = $userName;
    let playerArray = [];
    for (let $usernames of player) {
        playerArray.push($usernames);
        let userNameComp = playerArray.join("");
        $classification = document.querySelector("#player").innerHTML = userNameComp
        console.log($classification)
    }
    /*for (let index = 0; index < $classification.length; index++) {
        const element = array[index];
        console.log(element)

    }

    //let playersss = playerArray.join("")
    // console.log(typeof(playersss))*/
}
/* const ranking = {
                length: 5,
                player: $userName.textContent
            } */
/**Yaiser */

// var startBtn = document
//     .getElementById("main-button-click")
//     .addEventListener("click", timer);
var cardClick = document
    .getElementById("card4")
    .addEventListener("click", () => {
        winTime();
        stopInterval();
    });

var counter = 0;
var timing = 0;

function timer() {
    timing = setInterval(() => {
        counter += 0.1;
        console.log(counter);
    }, 100);
}

function winTime() {
    var ranking = [];
    var timeMine = ranking.push(counter);
    console.log(timeMine);
    console.log(ranking);
}

function stopInterval() {
    clearInterval(timing);
}