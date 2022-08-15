const conta = () => {
    const tipo = process.argv[2];
    const num1 = Number(process.argv[3]);
    const num2 = Number(process.argv[4]);
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
  };
  console.log(conta());