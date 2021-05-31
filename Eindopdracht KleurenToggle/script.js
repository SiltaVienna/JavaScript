//HTML elementen
const background = document.querySelector(".body-background");
const dropDownDiv = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".ul-menu");
const hamburger = document.querySelector(".hamburger");

//Background elementen
const homeBackground = document.querySelector(".home");
const redBackground = document.querySelector(".red");
const blueBackground = document.querySelector(".blue");
const greenBackground = document.querySelector(".green");

//Bonus
let textBackground = document.querySelector(".text-background");

//Menu zichtbaar / click gewijzigd naar mouseover voor de Bonus Requirements
hamburger.addEventListener("mouseover", () => {
    dropDownMenu.classList.toggle("visible");
})

// //Veranderen achtergrond

//Home
homeBackground.addEventListener("click", () => {
    background.className = "home-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "Hi this is a mint green color!";
})

//Rood
redBackground.addEventListener("click", () => {
    background.className = "red-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is red!";

})

//Blauw
blueBackground.addEventListener("click", () => {
    background.className = "blue-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is blue!";
})

//Groen
greenBackground.addEventListener("click", () => {
    background.className = "green-background";
    dropDownMenu.classList.remove("visible");
    textBackground.innerHTML = "This background is green!";
})

