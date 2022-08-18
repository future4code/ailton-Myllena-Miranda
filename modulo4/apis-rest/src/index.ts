import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Users, users } from "./data";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req: Request, res: Response) => {
  try {
    res.send(users);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

app.get("/users/type", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const type: string = (req.query.type as string).toUpperCase();
    if (type !== "ADMIN" && type !== "NORMAL") {
      errorCode = 422;
      throw new Error(
        "Invalid value for a type. Please send Admin or Normal as a type."
      );
    }
    const findType: Users[] = users.filter((item) => {
      return item.type === type;
    });
    res.status(200).send(findType);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.get("/users/:name", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.params.name.toLowerCase() as string;
    const findNome: Users | undefined = users.find(
      (user) => user.name.toLowerCase() === name
    );
   
    if (!findNome) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(findNome);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});


app.post("/users",(req: Request, res: Response) =>{
    let errorCode: number = 400;
    try{
const{id, name,email, type, age}:Users= req.body;
if (!id || !name || !email || !type || !age) {
    errorCode = 422;
    throw new Error("Please check the fields!");
  }
  if(typeof id !== "number"){
    errorCode = 422;
    throw new Error("Please send a number as an id");
  }

  if(typeof age !== "number"){
    errorCode = 422;
    throw new Error("Please send a number as an age");
  }

if(typeof name !== "string"){
    errorCode = 422;
    throw new Error("You cannot write a number, a name must be a text.");
}
if(typeof email !== "string"){
    errorCode = 422;
    throw new Error("You cannot write a number, an email must be a text.");
}
if (type !== "ADMIN" && type !== "NORMAL") {
    errorCode = 422;
    throw new Error(
      "Invalid value for a type. Please send ADMIN or NORMAL as a type."
    );
  }

  const newUser:Users={
    id,
    email,
    type,
    age,
    name
  }
  users.push(newUser),
  res.status(201).send({message: "User created successfully :)"})
    }catch(error:any){
res.status(errorCode).send({message: error.message})
    } 
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
