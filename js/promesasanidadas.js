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
        reject(new Error(`${numero} no es un número válido.`));
      } else {
        resolve(resultado);
      }
    });
  }
  
  // Ejemplo de uso
  const numero = 0; // Cambia este número para probar diferentes casos
  
  verificarParidad(numero)
    .then(resultadoParidad => {
      console.log(resultadoParidad);
      // Luego de verificar la paridad, elevamos al cuadrado si es par
      return elevarAlCuadrado(numero);
    })
    .then(resultadoCuadrado => {
      console.log(`El cuadrado de ${numero} es ${resultadoCuadrado}.`);
    })
    .catch(error => {
      console.error(error.message);
    });