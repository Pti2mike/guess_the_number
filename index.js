import { prompt } from "./prompt.js";

const name = prompt("Salut ! Quel est ton nom ? ");

console.log(`Bienvenue ${name}! Jouons à Guess the number`);

const targetNumber = Math.floor(Math.random() * 101);

const isValidNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

const playAgain = () => {
  const retry = prompt("Voulez-vous rejouer Y/N ? ");
  if (retry === "Y") {
    guestTheNumber();
    return;
  }

  if (retry === "N") {
    return;
  }
};

let attempt = 0;

const guestTheNumber = () => {
  attempt += 1;
  const chooseNumber = Number(prompt("Choisis un nombre entre 0 et 100 "));

  if (!isValidNumber(chooseNumber)) {
    console.log("Il faut un nombre entre 0 et 100");
    guestTheNumber();
    return;
  }

  if (chooseNumber < targetNumber) {
    console.log("C'est plus grand");
    guestTheNumber();
    return;
  }
  if (chooseNumber > targetNumber) {
    console.log("C'est plus petit");
    guestTheNumber();
    return;
  }
  if (chooseNumber === targetNumber) {
    console.log(`Bravo c'est gagné ! En ${attempt} fois. `);
    playAgain();
    return;
  }
};

guestTheNumber();
