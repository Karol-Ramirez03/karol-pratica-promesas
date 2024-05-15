// Supongamos que estás construyendo una función para verificar si un número es pa

//forma 1
let number = 5

function pares(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0){
            resolve(`${numero} es par`)
        } else {
            // reject(`${numero} no es par`)
            reject(new Error(`${numero} no es par`))
        }
    })
}
// function viewpar(mensaje) {
//     console.log(mensaje)
// }
// function viewError(error) {
//     console.log(error)
// }
// pares(number).then(viewpar).catch(viewError)

pares(number)
    .then(resultado => {
        console.log(resultado)
    })
    .catch(error => {
        // console.log(error)
        console.log(error.message)
    })