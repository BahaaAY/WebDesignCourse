let lives = 5;
let age = Math.floor(Math.random() * 70) + 1; // Random number between 1 and 70
console.log(age);
let livesList = document.querySelector(".lives ul");

for (let i = 0; i < lives; i++) {
  let livesItem = document.createElement("li");
  livesItem.innerHTML = `<i class="fa-solid fa-heart" style="color: #e74c3c;"></i>`;
  livesList.appendChild(livesItem);
}

let livesItems = document.querySelectorAll(".lives ul li");
let messageHolder = document.querySelector(".message");

let guessInput = document.querySelector(".guess");
let checkButton = document.querySelector(".check");
checkButton.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  let result = checkAnswer(guess);
  if (result === "Try a lower number" || result === "Try a higher number") {
    messageHolder.textContent = result;
    messageHolder.style.color = "#e74c3c";
    decrementLives();
  }
  if (result === "Congratulations! You guessed my age!") {
    winGame();
  }
  guessInput.value = "";
});

function checkAnswer(guess) {
  //validate input
  if (guess < 1 || guess > 70) {
    alert("Please enter a number between 1 and 70");
    return;
  }
  if (guess === age) {
    return "Congratulations! You guessed my age!";
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

  livesItems[
    lives
  ].innerHTML = `<i class="fa-solid fa-heart-crack" style="color: #e74c3c;"></i>`;

  livesList.innerHTML = ""; // Clear the current list
  for (let i = 0; i < 5; i++) {
    livesList.appendChild(livesItems[i]); // Append only the visible hearts
  }
  if (lives === 0) {
    gameOver();
  }
}

document.querySelector(".restart").addEventListener("click", function () {
  lives = 5;
  age = Math.floor(Math.random() * 70) + 1;
  livesList.innerHTML = "";
  for (let i = 0; i < lives; i++) {
    let livesItem = document.createElement("li");
    livesItem.innerHTML = `<i class="fa-solid fa-heart" style="color: #e74c3c;"></i>`;
    livesList.appendChild(livesItem);
  }
  messageHolder.textContent = "Lets Start Again!...";
  messageHolder.style.color = "black";
  guessInput.value = "";
  livesItems = document.querySelectorAll(".lives ul li");
  checkButton.disabled = false;
  checkButton.setAttribute("style", "cursor: pointer;");
  guessInput.disabled = false;
  document.body.style.backgroundColor = "#f1f1f1";
});

function gameOver() {
  checkButton.disabled = true;
  checkButton.setAttribute("style", "cursor: not-allowed;");
  messageHolder.textContent = "Game Over!";
  messageHolder.style.color = "#e74c3c";
  guessInput.disabled = true;
  document.body.style.backgroundColor = "#e74c3c";
}

function winGame() {
  checkButton.disabled = true;
  checkButton.setAttribute("style", "cursor: not-allowed;");

  messageHolder.textContent = "Congratulations! You guessed my age!";
  messageHolder.style.color = "#1abc9c";
  guessInput.disabled = true;
  document.body.style.backgroundColor = "#1abc9c";
}
