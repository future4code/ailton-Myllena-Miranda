import express from "express";
import { AddressInfo } from "net";
import { consumers } from "stream";
import { Tarefa, tarefas } from "./data";

const app = express();

app.use(express.json());

// http://localhost:3003/ping
app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

app.get("/tarefa/:boolean", (req, res) => {
  const status: string = req.params.boolean;

  const retornarStatus: Tarefa[] = tarefas.filter((item) => {
    return item.completed.toString() === status;
  });
  res.send(retornarStatus);
});

app.post("/novaTarefa", (req, res) => {
  const { userId, id, title, completed }: Tarefa = req.body;
  const novaTarefa: Tarefa = {
    userId,
    id,
    title,
    completed,
  };
  tarefas.push(novaTarefa);
  res.send(tarefas);
});

app.put("/tarefa/:id", (req, res) => {
  const idTarefa: number = Number(req.params.id);
  const TarefaAlterada: Tarefa[] = tarefas
    .filter((item) => {
      return item.id === idTarefa;
    })
    .map((item) => {
      return { ...item, completed: !item.completed };
    });
  res.send(TarefaAlterada);
});

app.delete("/deletaTarefa/:id", (req, res) => {
  const tarefa: number = Number(req.params.id);
  const deletaTarefa: Tarefa[] = tarefas.filter((item) => {
    return item.id !== tarefa;
  });
  res.send(deletaTarefa);
});

app.get("/tarefas/:userId", (req, res) => {
  const idUser: number = Number(req.params.userId);
  const tarefasUser: Tarefa[] = tarefas.filter((item) => {
    return idUser === item.userId;
  });
  res.send(tarefasUser);
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
