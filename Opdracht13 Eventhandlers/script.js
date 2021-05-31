//Opdracht 1 clickevent vastmaken aan een button

const button = document.querySelector (".btn-alert");

const showText = () => {
    alert ("Button clicked");
};

button.addEventListener("click", showText);

//Opdracht 2 kleur veranderen

// const backgroundButton = document.querySelector (".change-background");
// const body = document.querySelector (".blue-background");

// const redBackground = () => {
//     body.classList.add ("red-background");
// }

// backgroundButton.addEventListener ("click", redBackground);

//Opdracht 3 toggle functie

const backgroundButton = document.querySelector (".change-background");
const body = document.querySelector (".blue-background");

const redBackground = () => {
    body.classList.toggle ("red-background");
}

backgroundButton.addEventListener ("click", redBackground);