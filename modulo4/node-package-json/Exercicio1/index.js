
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
  
  console.log(recebaIdade())