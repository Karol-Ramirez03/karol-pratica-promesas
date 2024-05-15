// Utiliza la API JSONPlaceholder (https://jsonplaceholder.typicode.com/) para obtener una lista de publicaciones (posts). Imprime el título de cada publicación en la consola.
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Verificar si la respuesta es exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    // Convertir la respuesta a formato JSON
    return response.json();
  })
  .then(posts => {
    // Iterar sobre la lista de publicaciones e imprimir el título de cada una
    posts.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

