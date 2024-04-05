let lives = 3;
let age = Math.floor(Math.random() * 70) + 1; // Random number between 1 and 70

let livesList = document.querySelector(".lives ul");

for (let i = 0; i < lives; i++) {
  let livesItem = document.createElement("li");
  livesItem.textContent = `❤️`;
  livesList.appendChild(livesItem);
}

let livesItems = document.querySelectorAll(".lives ul li");
let messageHolder = document.querySelector(".message");

let guessInput = document.querySelector(".guess");
document.querySelector(".check").addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  let result = checkAnswer(guess);
  if (result === "Try a lower number" || result === "Try a higher number") {
    messageHolder.textContent = result;
    messageHolder.style.color = "red";
    decrementLives();
  }
  if (result === "Congratulations! You guessed my age!") {
    messageHolder.textContent = result;
    messageHolder.style.color = "green";
  }
  guessInput.value = "";
});

function checkAnswer(guess) {
  //validate input
  if (guess < 1 || guess > 70) {
    alert("Please enter a number between 1 and 70");
    return;
  }
  if (lives === 0) {
    alert("You have no lives left. Game over!");
    return;
  }
  if (guess === age) {
    alert("Congratulations! You guessed my age!");
    return;
  }
  if (guess > age) {
    return "Try a lower number";
  }
  if (guess < age) {
    return "Try a higher number";
  }
}

function decrementLives() {
  lives--;
  console.log("Lives: ", lives);
  console.log("Items: ", livesItems);
  livesItems[lives].style.visibility = "hidden";

  livesList.innerHTML = ""; // Clear the current list
  for (let i = 0; i < 3; i++) {
    livesList.appendChild(livesItems[i]); // Append only the visible hearts
  }
  if (lives === 0) {
    //todo: end game
  }
}

document.querySelector(".restart").addEventListener("click", function () {
  lives = 3;
  age = Math.floor(Math.random() * 70) + 1;
  livesList.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    let livesItem = document.createElement("li");
    livesItem.textContent = `❤️`;
    livesList.appendChild(livesItem);
  }
  messageHolder.textContent = "Lets Start Again!...";
  messageHolder.style.color = "black";
  guessInput.value = "";
  livesItems = document.querySelectorAll(".lives ul li");
});
