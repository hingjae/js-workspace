const generateNumber = document.querySelector(".generate-number input");
const guessNumber = document.querySelector(".guess-number");
const btn = document.querySelector(".button");
const explanation = document.querySelector(".explanation");

function play(event) {
  event.preventDefault();
  const lastNumber = generateNumber.value;
  const randomNumber = Math.ceil(Math.random() * lastNumber);
  const inputNumber = document.querySelector(".guess-number input");
  const myNumber = parseInt(inputNumber.value);
  const result = document.querySelector(".result");
  explanation.innerText = `You chose: ${myNumber}, the machine chose: ${randomNumber}`;
  if (randomNumber === myNumber) {
    result.innerText = `You win!`;
  } else {
    result.innerText = `You lost!`;
  }
}

guessNumber.addEventListener("submit", play);
