import { isTemplateExpression } from "typescript";

type Clientes = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};

const clientes: Clientes[] = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

const banco = (clientes: Clientes[]): string[] => {
  const SomaDebts = clientes.map((item) => {
    return item.debitos.reduce((a, b) => a + b, 0);
  });
  const clientesNegativos = clientes.map((item, index)=>{
    return{
        ...item,
        saldoTotal: item. saldoTotal - SomaDebts[index],
        debitos:[]
    }
  }).filter((item)=>{
    return item.saldoTotal < 0;
  }).map((item)=>{
    return item.cliente
  })
  return clientesNegativos
};
console.table(banco(clientes))
