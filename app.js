/**Jose*/

/**Andres */

/**Yaiser */

var startBtn = document
    .getElementById("main-button-click")
    .addEventListener("click", timer);
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