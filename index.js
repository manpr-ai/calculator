// Import de la fonction prompt depuis le fichier prompt.js
import { prompt } from "./prompt.js";

// Affichage des instructions pour l'utilisateur
console.log(`Choose an operator :
1. Addition
2. Soustraction
3. Multiplication
4. Division`);

// Fonction de validation d'un nombre
const validateNumber = (number) => {
  // Vérifie si le nombre n'est pas un nombre ou s'il est trop grand / trop petit
  if (Number.isNaN(number) || Math.abs(number) > 100000000000000) {
    console.log(
      "Error : Number is not a number or is too big / too small (max: 100000000000000)"
    );
  }
};

// Fonction pour demander à l'utilisateur de saisir un opérateur valide
const promptOperator = () => {
  // Demande à l'utilisateur de saisir un opérateur
  const operator = promptNumber("Enter the operator : ");

  // Vérifie si l'opérateur saisi est valide
  if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
    console.log("Operator invalid (1, 2, 3 or 4)");
    // Si l'opérateur est invalide, redemande à l'utilisateur de saisir un opérateur valide
    return promptOperator();
  }
  return operator;
};

// Fonction pour demander à l'utilisateur de saisir un nombre
const promptNumber = (message) => {
  // Demande à l'utilisateur de saisir un nombre en affichant un message
  const number = Number(prompt(message));
  // Valide le nombre saisi
  validateNumber(number);
  return number;
};
const restartCalculator = () => {
  const choice = prompt("Another calculate ? (Y/N) : ");
  if (choice.toLocaleUpperCase() === "Y") {
    console.log("\n");
    calculator();
  } else if (choice.toLocaleUpperCase() === "N") {
    console.log("Ok! Ciao! 😊");
  } else {
    console.log("Invalid choice, only Y or N");
    restartCalculator();
  }
};
// Fonction principale du calculateur
const calculator = () => {
  // Fonction pour calculer le résultat en fonction de l'opérateur et des nombres saisis
  const calculateResult = (operator, firstNumber, secondNumber) => {
    if (operator === 1) {
      return console.log(
        "The result of addition is :",
        firstNumber + secondNumber
      );
    }
    if (operator === 2) {
      return console.log(
        "The result of soustraction is :",
        firstNumber - secondNumber
      );
    }
    if (operator === 3) {
      return console.log(
        "The result of multiplication is : ",
        firstNumber * secondNumber
      );
    }
    if (operator === 4) {
      // Vérifier si le deuxième nombre est égal à zéro
      while (secondNumber === 0) {
        console.log("Division by zero is not allowed");
        // Redemander le deuxième nombre si saisi égal à 0
        secondNumber = promptNumber("Enter a non-zero second number : ");
      }
      return console.log(
        "The result of division is : ",
        firstNumber / secondNumber
      );
    }
  };

  // Demande à l'utilisateur de saisir un opérateur
  const operator = promptOperator();

  // Demande à l'utilisateur de saisir le premier nombre
  const firstNumber = promptNumber("Enter the first number : ");
  // Demande à l'utilisateur de saisir le deuxième nombre
  const secondNumber = promptNumber("Enter the second number : ");

  // Calcule et affiche le résultat en fonction de l'opérateur et des nombres saisis
  calculateResult(operator, firstNumber, secondNumber);
  restartCalculator();
};

// Appel de la fonction principale pour démarrer le calculateur
calculator();
