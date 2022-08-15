import { isTemplateExpression } from "typescript"

type dosRomanos={
letra:string,
valor:number
}

const romanos:dosRomanos[]=[
    {letra: "M", valor: 1000},
    {letra: "CM", valor: 900},
    {letra: "D", valor: 500},
    {letra: "CD", valor: 400},
    {letra: "C", valor: 100},
    {letra: "XC", valor: 90},
    {letra: "L", valor: 50},
    {letra: "XL", valor: 40},
    {letra: "X", valor: 10},
    {letra: "IX", valor: 9},
    {letra: "V", valor: 5},
    {letra: "IV", valor: 4},
    {letra: "I", valor: 1}]

const normalParaRomano = (data:number):string=>{
   let resultado:string =""
   let novaData:number = data
   for (let numero of romanos){
       while (novaData >= numero.valor){
        resultado += numero.letra;
        novaData -=numero.valor;
       }
   } 
   return resultado
}
console.log(normalParaRomano(1997))