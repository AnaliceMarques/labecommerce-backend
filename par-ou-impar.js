const evenOrOdd = process.argv[2].toLowerCase();
const number = +process.argv[3];

//Número aleatório entre o valor min e o valor max (incluem ambas extremidades).
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRndInteger(0, 10);
console.log(`Número escolhido pelo computador: ${randomNumber}`);

const total = number + randomNumber;

function checkParity() {
  if (total % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

if (!evenOrOdd || !number) {
  console.log(
    "Faltou o argumento esperado: escolher entre par/impar ou o número de 0-10."
  );
} else {
  console.log(
    `Você escolheu ${evenOrOdd} e o computador escolheu ${
      evenOrOdd === "par" ? "impar" : "par"
    }. O resultado foi ${total}. ${
      checkParity() === evenOrOdd ? "Você venceu!" : "Você perdeu!"
    }`
  );
}
