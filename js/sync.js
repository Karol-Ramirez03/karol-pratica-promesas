// Ejercicio 5: Uso de async/await
// Reescribe cualquiera de los ejercicios anteriores utilizando async/await en lugar de promesas y .then().
let heroes = []
document.addEventListener('DOMContentLoaded', async (e) => {
    heroes= await loadData()
    console.log(heroes)
    heroes.forEach(element => {
        console.log(element.username)
    });
})


async function loadData() {
    const cargaDatos =  await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await cargaDatos.json()
    return data 
    
}