import express, { Request, Response } from "express";
import cors from "cors";
import { clientes } from "./clientes";
import { NOMEM } from "dns";
import { cliente, fluxoConta } from "./data";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/clientes", (req: Request, res: Response) => {
  try {
    if (!clientes.length) {
      res.statusCode = 404;
      throw new Error("Não existem clientes :(");
    }

    res.status(200).send(clientes);
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
});

app.post("/clientes", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { nome, cpf, dataNascimento } = req.body;

    if (!nome || !cpf || !dataNascimento) {
      errorCode = 406;
      throw new Error("Cheque se você preencheu os campos corretamente");
    }
    if (typeof nome !== "string") {
      errorCode = 422;
      throw new Error("Insira um texto no campo nome");
    }
    let novoCpf = cpf.toString();
    if (typeof cpf !== "number" && novoCpf.length !== 11) {
      errorCode = 422;
      throw new Error("Insira um número válido no campo cpf");
    }

    const [dia, mes, ano] = dataNascimento.split("/");
    const dataNascimentoArrumada = new Date(`${ano}-${mes}-${dia}`);
    const vamosLa = dataNascimentoArrumada.getTime();
    const hoje = new Date().getTime();
    const idade = Math.floor((hoje - vamosLa) / (1000 * 60 * 60 * 24 * 365));
    if (idade < 18) {
      errorCode = 406;
      throw new Error("Cliente precisa ser maior de 18 anos!");
    }

    const clienteIndex = clientes.findIndex((client) => client.cpf === cpf);

    if (clienteIndex >= 0) {
      errorCode = 409;
      throw new Error("Já existe um cliente cadastrado com esse CPF!");
    }

    const novoUser: cliente = {
      id: clientes.length + 1,
      nome,
      cpf,
      dataNascimento: dataNascimentoArrumada,
      total: 0,
      fluxo: [],
    };

    clientes.push(novoUser);
    res.status(201).send("Cliente cadastrado com sucesso :)");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/clientes/:cpf", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const cpf = req.params.cpf;
    const encontrarCliente = clientes.find(
      (item) => item.cpf.toString() === cpf
    );
    if (!encontrarCliente) {
      errorCode = 404;
      throw new Error("Cliente não encontrado");
    }
    res.status(200).send({ saldo: encontrarCliente.total });
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/clientes/:cpf/pagamento", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const cpf = req.params.cpf;
    const { total, tipo } = req.body;
    let { data } = req.body;

    if (!data) {
      data = new Date(Date.now());
    }
    const [dia, mes, ano] = data.split("/");
    const dataFormatada = new Date(`${ano}-${mes}-${dia}`);
    if (!total || !tipo) {
      errorCode = 400;
      throw new Error(
        "Não foi possível realizer o pagamento, cheque os campos novamente"
      );
    }
    const clienteIndex = clientes.findIndex(
      (client) => client.cpf.toString() === cpf
    );
    if (clienteIndex < 0) {
      errorCode = 404;
      throw new Error("Cliente não localizado");
    }
    const Cliente = clientes[clienteIndex];

    const novaTransacao: fluxoConta = {
      total: total * -1,
      data: dataFormatada,
      tipo,
    };

    if (Math.abs(total) > Cliente.total) {
      errorCode = 406;
      throw new Error("Saldo insuficiente");
    }
    Cliente.fluxo.push(novaTransacao);

    res.status(201).send("Pagamento realizado com sucesso :)");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.put("/clientes/:cpf/:nome/deposito", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { cpf, nome } = req.params;
    const { total, tipo } = req.body;
    let { data } = req.body;

    const [dia, mes, ano] = data.split("/");
    const dataFormatada = new Date(`${ano}-${mes}-${dia}`);
    if (!cpf || !nome || !total || !tipo || !data) {
      errorCode = 400;
      throw new Error(
        "Não foi possível atualizar o cliente, passou algum dado não preenchido"
      );
    }
    const clienteIndex = clientes.findIndex(
      (client) =>
        client.cpf.toString() === cpf &&
        client.nome.toLowerCase() === nome.toLowerCase()
    );
    if (clienteIndex < 0) {
      errorCode = 404;
      throw new Error(
        "Não foi possível atualizar o cliente, verifique se o cpf e o nome passado estão corretos."
      );
    }

    clientes[clienteIndex].fluxo.push({
      total,
      tipo,
      data: dataFormatada,
    });
    res.status(200).send("Depósito realizado com sucesso :)");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// app.post(
//   "/clientes/:cpf/:nome/transferencia",
//   (req: Request, res: Response) => {
//     let errorCode: number = 400;
//     try {
//       const { cpf, nome } = req.params;
//       const { nomeDestino, cpfDestino } = req.body;
//       const { fluxo } = req.body;
//       const { total, tipo } = fluxo;
//       let { data } = fluxo;

//       const [dia, mes, ano] = data.split("/");
//       const dataFormatada = new Date(`${ano}-${mes}-${dia}`);
//       if (!cpf || !nome || !nomeDestino || !cpfDestino) {
//         errorCode = 400;
//         throw new Error(
//           "Não foi possível realizar a transferência, passou algum dado não preenchido"
//         );
//       }
//       const clienteIndex = clientes.findIndex(
//         (cliente) =>
//           cliente.cpf.toString() === cpf &&
//           cliente.nome.toLowerCase() === nome.toLowerCase()
//       );
//       if (clienteIndex < 0) {
//         errorCode = 404;
//         throw new Error(
//           "Não localizar um cliente cadastrado com esse nome e CPF"
//         );
//       }

//       const Cliente = clientes[clienteIndex];

//       if (Math.abs(total) > Cliente.total) {
//         res.statusCode = 406;
//         throw new Error("Saldo insuficiente");
//       }

//       const destinoClienteIndex = clientes.findIndex(
//         (cliente) => cliente.cpf.toString() === cpfDestino
//       );

//       if (destinoClienteIndex < 0) {
//         res.statusCode = 404;
//         throw new Error(
//           "Não foi possível realizar a transferência, não existe um cliente cadastrado com esse CPF"
//         );
//       }

//       const clienteDestino = clientes[destinoClienteIndex];
//       const novaTransacao: fluxoConta = {
//         total: -total,
//         data: new Date(),
//         tipo: `Transferência de ${Cliente.nome} para ${nomeDestino}`,
//       };

//       const novaTransacao2: fluxoConta = {
//         total: total,
//         data: new Date(),
//         tipo: `Transferência de ${Cliente.nome} para ${nomeDestino}`,
//       };

//       Cliente.fluxo.push(novaTransacao);
//       clienteDestino.fluxo.push(novaTransacao2);
//       res.status(200).send("Transferência realizado com sucesso");
//     } catch (error: any) {
//       res.status(errorCode).send({ message: error.message });
//     }
//   }
// );

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
