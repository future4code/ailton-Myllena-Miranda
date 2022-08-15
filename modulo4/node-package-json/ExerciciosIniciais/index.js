// como fazemos para acessar os parâmetros passados na linha de comando para o Node? //
const red = "\u001b[31m";
const blue = "\u001b[34m";
//Questão 1//

const recebaIdade = () => {
  const nome = process.argv[2];
  const idade = Number(process.argv[3]);
  if (process.argv.length === 4) {
    return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7} anos.`;
  } else {
    return `Esperava 2 parâmetros só recebi um.`;
  }
};
console.log(`${blue}${recebaIdade()}`);

//Questão 2//

const conta = () => {
  const tipo = process.argv[2];
  const num1 = Number(process.argv[3]);
  const num2 = Number(process.argv[4]);
  if (process.argv.length === 5) {
    if (tipo === `add`) {
      return num1 + num2;
    } else if (tipo === "sub") {
      return num1 - num2;
    } else if (tipo === "mult") {
      return num1 * num2;
    } else if (tipo === "div") {
      return num1 / num2;
    } else {
      return "Deu ruim";
    }
  } else {
    return "Você precisa informar 3 parâmetros tipo da conta(add, sub, div, mult) e 2 valores";
  }
};
// console.log(`${red} ${conta()}`);

//Exercicio 3//

const listaTarefa = () => {
  const tarefa = process.argv[2];
  let arrayTarefas = [{ tarefa: "comer" }];
  arrayTarefas.push({ tarefa: tarefa });
  return arrayTarefas;
};

// console.table(listaTarefa());


