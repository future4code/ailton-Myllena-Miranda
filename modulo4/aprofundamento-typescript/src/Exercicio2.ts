
function obterEstatisticas(numeros:number[]) {
    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )
    let soma = 0
    for (let num of numeros) {
        soma += num
    }
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([20,1,2,2,3,4,5,7,8,9,10,11,15]))
