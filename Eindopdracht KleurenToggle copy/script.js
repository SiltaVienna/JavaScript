//HTML elementen
const background = document.querySelector(".body-background");
const dropDownDiv = document.querySelector(".dropdown");
const dropDownMenu = document.querySelector(".ul-menu");
const hamburger = document.querySelector(".hamburger");

//Background elementen
const redBackground = document.querySelector(".red");
const blueBackground = document.querySelector(".blue");
const greenBackground = document.querySelector(".green");

//Menu zichtbaar
hamburger.addEventListener("click", () => {
    //console.log("hello world"); test of klik werkt
    dropDownMenu.classList.toggle("visible");
})

// //Veranderen achtergrond

//Rood
redBackground.addEventListener("click", () => {
    background.classList.add("red-background");
    dropDownMenu.classList.remove("visible");
})

//Blauw
blueBackground.addEventListener("click", () => {
    background.classList.add("blue-background");
    dropDownMenu.classList.remove("visible");
})

//Groen
greenBackground.addEventListener("click", () => {
    background.classList.add("green-background");
    dropDownMenu.classList.remove("visible");
})

//Hamburger hover
hamburger.addEventListener("mouseover", () => {
    dropDownMenu.classList.toggle("visible");
})
