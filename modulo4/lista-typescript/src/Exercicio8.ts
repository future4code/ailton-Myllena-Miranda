function checaRenovacaoId(dataNascimento: string, dataEmissao: string):boolean {
  let anoAtual: Date = new Date();
  let idadeUser: number = Math.abs(
    anoAtual.getFullYear() - new Date(dataNascimento).getFullYear());
  const tempoId: number = Math.abs(
    anoAtual.getFullYear() - new Date(dataEmissao).getFullYear());
   if(idadeUser <= 20 && tempoId >= 5 ||idadeUser>20 && idadeUser<=50 && tempoId >= 10 || idadeUser > 50 && tempoId>=15){
return true
   }else {
    return false
   }
}
//Não entendi pq não rolou?//
console.log(checaRenovacaoId('14/11/1997', '14/01/2005'))

