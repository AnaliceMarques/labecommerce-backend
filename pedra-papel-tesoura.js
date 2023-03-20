const choice = process.argv[2].toLowerCase();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function machineChoice() {
  const randomNumber = getRndInteger(1, 3);
  switch (randomNumber) {
    case 1:
      return "pedra";
    case 2:
      return "papel";
    case 3:
      return "tesoura";
  }
}

const computer = machineChoice();

function result() {
  if (choice === computer) {
    return "Empate!";
  } else if (
    (computer === "pedra" && choice === "tesoura") ||
    (computer === "papel" && choice === "pedra") ||
    (computer === "tesoura" && choice === "papel")
  ) {
    return "Você perdeu!";
  } else {
    return "Você ganhou!";
  }
}

if (!choice) {
  rconsole.log("Faltou o argumento esperado: escolha pedra, papel ou tesoura");
} else {
  console.log(
    `Você escolheu ${choice} e o computador escolheu ${computer}. ${result()}`
  );
}
