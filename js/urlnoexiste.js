//   Haz una solicitud a una URL que no existe utilizando fetch. Maneja el error en el código e imprime un mensaje en la consola indicando que la solicitud no se pudo completar.
fetch('https://jsonplaceholder.typicode.com/nonexistent')
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no ha sido exitosa');
        }
        return response.json();
    })
    .then(posts => {
        // No llegaremos aquí porque la solicitud falló
    })
    .catch(error => {
        console.log(error);
    });