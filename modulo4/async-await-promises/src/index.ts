
import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { data, news, user } from "./data/type";
import axios from "axios";
import { BASE_URL } from "./data/BASE_URL";
const app: Express = express();

app.use(express.json());
app.use(cors());

// Ex 1

async function getSubscribers(): Promise<any> {
    try {
      const { data }: data = await axios.get(`${BASE_URL}/subscribers`);
      return data;
    } catch (error: any) {
      return [{ message: error.message }];
    }
  }




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});