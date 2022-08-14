const meuAniverEmeuNome = (name: string, date: string): string => {
  const dateSeparada: string[] = date.split("/");
  return `Olá me chamo ${name}, nasci no dia ${dateSeparada[0]} do mês ${dateSeparada[1]} do ano de ${dateSeparada[2]} `;
};

console.log(meuAniverEmeuNome("Myllena", "14/11/1997"))