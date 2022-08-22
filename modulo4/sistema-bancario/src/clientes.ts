import { cliente } from "./data";

export const clientes:cliente[]=[
    {
        id: 666,
        nome: "Myllena Moreira Miranda",
        cpf: 986648,
        dataNascimento: new Date("1997-11-14"),
        total: 5,
        fluxo: [],
      },
      {
        id:123,
        nome:"Post Malone",
        cpf: 15648646,
        dataNascimento: new Date("1995-07-04"),
        total:500000000,
        fluxo:[{total:1000, data: new Date("2022-05-15"), tipo:"Cinema"}],
      },
      {
        id:321,
        nome:"Timothee",
        cpf: 9655118,
        dataNascimento: new Date("1995-12-27"),
        total:300000000,
        fluxo:[], 
      },
      {
        id:467,
        nome:"Anakin Miranda",
        cpf: 14511552214,
        dataNascimento: new Date("2016-12-24"),
        total:800000000,
        fluxo:[],
      } 
]