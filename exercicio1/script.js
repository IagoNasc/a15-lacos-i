let pergunta = prompt("Deseja comer mais coxinha?\nS para sim \nN para não");
let conta = 0;

while (pergunta === "S" || pergunta === "s") {
  conta = conta + 2;
  pergunta = prompt("Deseja comer mais coxinha?\nS para sim \nN para não");
}

console.log(`O total da conta é: R$${conta}`);