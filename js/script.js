const inputOperator = document.getElementById("inputOperator");
const inputFirstNumber = document.getElementById("inputFirstNumber");
const inputSecondNumber = document.getElementById("inputSecondNumber");
const calculatorButton = document.getElementById("calculatorButton");
const result = document.getElementById("result");
const resultOperator = document.getElementById("resultOperator");

const validateNumber = (number) => {
  // Vérifie si le nombre n'est pas un nombre valide ou s'il est trop grand / trop petit
  if (isNaN(number) || Math.abs(number) > 100000000000000) {
    return false; // Retourne false si le nombre est invalide
  }
  return true; // Retourne true si le nombre est valide
};

const calculator = () => {
  // Réinitialiser le style et le message d'erreur pour l'opérateur
  inputOperator.style.border = "1.5px solid #1d2f6f";
  resultOperator.textContent = "";

  // Réinitialiser le style et le message d'erreur pour le premier nombre
  inputFirstNumber.style.border = "1.5px solid #1d2f6f";
  result.style.color = "initial";
  result.textContent = "";

  // Réinitialiser le style et le message d'erreur pour le deuxième nombre
  inputSecondNumber.style.border = "1.5px solid #1d2f6f";

  const operator = inputOperator.value;

  // Validation de l'opérateur
  if (
    operator !== "1" &&
    operator !== "2" &&
    operator !== "3" &&
    operator !== "4"
  ) {
    resultOperator.style.color = "red";
    resultOperator.textContent = "Operator invalid (1, 2, 3 or 4)";
    inputOperator.style.border = "1.5px solid red";
    return; // Arrête la fonction si l'opérateur est invalide
  }

  // Demande à l'utilisateur de saisir les nombres
  const firstNumber = parseFloat(inputFirstNumber.value);
  const secondNumber = parseFloat(inputSecondNumber.value);

  // Validation des nombres
  const isFirstNumberValid = validateNumber(firstNumber);
  const isSecondNumberValid = validateNumber(secondNumber);

  // Vérifie si les nombres sont valides
  if (!isFirstNumberValid) {
    result.style.color = "red";
    result.textContent =
      "Les nombres saisis sont trop grand / manquants ou ne sont pas des nombres";
    inputFirstNumber.style.border = "1.5px solid red";

    return; // Arrête la fonction si les nombres ne sont pas valides
  }
  if (!isSecondNumberValid) {
    result.style.color = "red";
    result.textContent =
      "Les nombres saisis sont trop grand / ou ne sont pas des nombres";
    inputSecondNumber.style.border = "1.5px solid red";

    return; // Arrête la fonction si les nombres ne sont pas valides
  }

  // Calcule et affiche le résultat en fonction de l'opérateur et des nombres saisis
  if (operator === "1") {
    result.textContent =
      "Le résultat de l'addition est : " + (firstNumber + secondNumber);
  } else if (operator === "2") {
    result.textContent =
      "Le résultat de la soustraction est : " + (firstNumber - secondNumber);
  } else if (operator === "3") {
    result.textContent =
      "Le résultat de la multiplication est : " + firstNumber * secondNumber;
  } else if (operator === "4") {
    if (secondNumber === 0) {
      result.textContent = "Le deuxième nombre ne peut pas être égal à 0";
      result.style.color = "red";
      inputSecondNumber.style.border = "1.5px solid red";
      return; // Arrête la fonction si le deuxième nombre est égal à 0
    }
    result.textContent =
      "Le résultat de la division est : " + firstNumber / secondNumber;
  }
};

// Attache l'événement "click" au bouton de calcul
calculatorButton.addEventListener("click", calculator);
