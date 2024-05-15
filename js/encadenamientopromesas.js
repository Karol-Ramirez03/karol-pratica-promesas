// Ejercicio 3: Encadenamiento de promesas
// Haz dos solicitudes consecutivas a la API JSONPlaceholder: una para obtener la lista de usuarios y otra para obtener la lista de álbumes. Imprime en la consola el nombre del primer usuario y el título del primer álbum.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud de usuarios no fue exitosa');
        }
        return response.json();
    })
    .then(usuarios => {
        // Envolver la lista de usuarios en una promesa
        console.log('Nombre del primer usuario:', usuarios[0].name);
        return fetch('https://jsonplaceholder.typicode.com/albums')
    })

    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud de álbumes no fue exitosa');
        }
        return response.json();
    })
    .then(albums => {
        // Imprimir el nombre del primer usuario y el título del primer álbum
        console.log('Título del primer álbum:', albums[0].title);
    })
    .catch(error => {
        console.error('Error:', error);
    });