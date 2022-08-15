type Estoque = {
  nome: string;
  quantidade: number;
  valorUnitario: number| string;
};

const EstoqueLoja: Estoque[] = [
  { nome: "MacMugffin", quantidade: 37, valorUnitario: 51.04 },
  { nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0 },
  { nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5 },
  { nome: "O precioso", quantidade: 1, valorUnitario: 9181.923 },
  { nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17 },
  { nome: "Plumbus", quantidade: 13, valorUnitario: 140.44 },
  { nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915 },
];

const ordenaEstoque = (estoques:Estoque[])=>{
    const ajustaPreco = estoques.map((item):Estoque => {
        const valorAjustado: string = Number(item.valorUnitario).toFixed(2).replace('.', ',')
        return {
            ...item,
            valorUnitario: "R$ "+valorAjustado
    }}).sort((a, b)=> {return b.quantidade - a.quantidade})
return ajustaPreco
}
console.table(ordenaEstoque(EstoqueLoja))