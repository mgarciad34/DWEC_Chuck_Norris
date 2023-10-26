export function obtenerCategorias() {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            // El resultado de la solicitud se encuentra en 'data'
            console.log(data);
        })
        .catch(error => {
            console.error('Error al obtener las categorías:', error);
        });
}