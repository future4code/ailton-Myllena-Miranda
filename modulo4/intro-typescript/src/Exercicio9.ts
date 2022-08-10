function analise(
  idade: number,
  medio: boolean,
  horas: number,
  curso: string
): boolean {
  if (idade >= 18 && medio === true && curso === "integral" && horas >= 40) {
    return true;
  } else if (
    idade >= 18 &&
    medio === true &&
    curso === "noturno" &&
    horas >= 20
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(analise(20, true, 20, "noturno"));
