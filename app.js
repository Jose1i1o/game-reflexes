/**Jose*/

/* DOM VARIABLES */

// Pages
let homePage = document.getElementById("article__page1");
let gamePage = document.getElementById("article__page2");

// Next buttons
let btnNext = document
    .getElementById("next")
    .addEventListener("click", page1to2);

function page1to2() {
    homePage.style.display = "none";
    gamePage.classList.remove("display-none");
}

function activateCounter() {}

/**Andres */

/**Yaiser */