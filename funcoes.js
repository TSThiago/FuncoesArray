// let array = []

// // // Função .push:
// // // A função .push acrescenta uma "casa" no array e a preenche com a informação
// // // que estiver entre parênteses

// array.push(1)
// array.push(2)
// array.push(3)
// console.log(array.push(6))

// console.log(array)

// // Função .join([separator = '']):
// // A função .join faz uma concatenação com as informações (que se tornam strings) dentro do array. 

// console.log(array.join(" - "))

// // Função .concat()
// // A função .concat() cria um novo array e junta todas as informações 
// // passadas dentro do parâmetro.

// array2 = [2,3,4]

// arrayNovo = array.concat(array2)
// console.log(arrayNovo)

// // Função .filter
// // A função .filter cria um array novo de acordo com a função
// // passada dentro do parâmetro.

// function EhMaior(valor){
//     return valor > 1
// }

// arrayNovo2 = arrayNovo.filter(EhMaior)
// console.log(arrayNovo2)


// // Função .slice
// // A função .slice serve para retornar uma parte de um array.

// console.log(parteArray = array.slice(1,3))

// Parte 2 - Replicando as funções

let arrayTeste = [3,5,7,2,1]

console.log(arrayTeste)
console.log(ReplicandoIncludes(9))


// Função .push

function ReplicandoPush(parametro){
    arrayTeste[arrayTeste.length] = parametro 
    return arrayTeste.length
}

// Função .pop

function ReplicandoPop(){
    let arrayAux = []
    let numeroRetirado = arrayTeste[arrayTeste.length - 1] 
    arrayTeste[arrayTeste.length - 1] = null
    for(let index = 0; index < arrayTeste.length; index++){
        if(arrayTeste[index] != null){
            arrayAux[index] = arrayTeste[index]
        }
    }
    arrayTeste = arrayAux
    return numeroRetirado
}

// Função indexOf

function ReplicandoIndexOf(parametro){
    for(let index = 0; index < arrayTeste.length; index++){
        if(parametro == arrayTeste[index]){
            return index
        }
    }
    return -1
}

// Função includes

function ReplicandoIncludes(parametro){
    for(let index = 0; index < arrayTeste.length; index++){
        if(parametro == arrayTeste[index]){
            return true
        }
    }
    return false
}