
function retornaNumero(num1:number, num2:number):string{
    let soma:number = num1 + num2;
    let mult:number = num1 * num2;
    if(num1>num2){
        return `O número maior é ${num1},
         a soma é ${soma},
         a subtração ${num1-num2},
         a multiplicação ${mult}`
    }else{
        return `O número maior é ${num2},
        a soma é ${soma},
        a subtração ${num2 - num1},
        a multiplicação ${mult} `
    }
}
console.log(retornaNumero(20,30))