async function crearNuevoPost() {
    // Datos del nuevo post
    const nuevoPost = {
        title: 'Nuevo post',
        body: 'Contenido del nuevo post',
        userId: 8  // ID del usuario que crea el post (puedes cambiar este valor)
    };

    try {
        // Hacer la solicitud POST para crear el nuevo post
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoPost)
        });

        // Verificar si la solicitud fue exitosa
        if (!response.ok) {
            throw new Error('La solicitud para crear el nuevo post no fue exitosa');
        }

        // Convertir la respuesta a formato JSON
        const data = await response.json();

        // Imprimir en la consola el ID asignado al nuevo post
        console.log('ID del nuevo post:', data.id);
    } catch (error) {
        console.error('Error al crear el nuevo post:', error);
    }
}

// Llamar a la función para crear el nuevo post
crearNuevoPost();