import express, { response } from "express";
import cors from "cors";
import { User, users, posts, Post } from "./data";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/oi", (req, res) => {
  res.send("Rolou");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/posts", (req, res) => {
  res.send(posts);
});
app.get("/posts/:id", (req, res) => {
  const post: number = Number(req.params.id);
  const achaPost: Post[] = posts.filter((item) => {
    return item.userId === post;
  });
  res.send(achaPost);
});

app.delete("/apagarPost/:id", (req, res) => {
  const post = Number(req.params.id);
  const deletaPost: Post[] = posts.filter((item) => {
    return item.userId !== post;
  });
  res.send(deletaPost);
});

app.delete("/apagarUser/:id", (req, res) => {
  const user = Number(req.params.id);
  const deletaUser: User[] = users.filter((item) => {
    return item.id !== user;
  });
  res.send(deletaUser);
});

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
