document.addEventListener('DOMContentLoaded', async () => {
    const userId = 4
    const user = await obtenerUsuarios(userId)
    const users = user.find(us => us.id === userId);
    if (user) {
        console.log('Nombre:', users.name);
        console.log('Correo electrónico:', users.email);
    } else {
        console.log('Usuario con ID', userId, 'no encontrado');
    };
    // try {
    //     const userId = 9; // ID del usuario que deseas obtener
    //     const user = await obtenerUsuarios(userId);
    //     console.log('Nombre:', user.name);
    //     console.log('Correo electrónico:', user.email);
    // } catch (error) {
    //     console.error('Error al obtener el usuario:', error);
    // }
});
async function obtenerUsuarios(id1) {
    const solicitud = await fetch('https://jsonplaceholder.typicode.com/users/')
    // const solicitud = await fetch(`https://jsonplaceholder.typicode.com/users/${id1}`);
    // if (!solicitud.ok){
    //     throw new Error('id no encontrado')
    // }
    const datos_cargados = await solicitud.json()
    return datos_cargados
}


