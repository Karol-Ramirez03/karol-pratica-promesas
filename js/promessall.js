const num = 2


function verificarParidad(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve(`${numero} es un número par.`);
      } else {
        reject(new Error(`${numero} es un número impar.`));
      }
    });
  }
  
  function elevarAlCuadrado(numero) {
    return new Promise((resolve, reject) => {
      const resultado = numero * numero;
      if (isNaN(resultado)) {
        reject(`${numero} no es un número válido.`);
      } else {
        resolve(resultado);
      }
    });
}
const par = verificarParidad(num)
const cuadrado = elevarAlCuadrado(num)
const promesas = [par, cuadrado]

Promise.all(promesas)
    .then((values) => {
        console.log(values)
    })
    .catch((error)=>{
        console.log(error)
    })