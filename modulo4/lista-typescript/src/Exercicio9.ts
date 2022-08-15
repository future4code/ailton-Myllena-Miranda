const fatorial = (texto:string):number =>{
    let resultado = 1;
    let i = 1
    for ( i; i<= texto.length; i++ ){
        resultado *=i;
    }
    return resultado
}
console.log(fatorial("julia"))