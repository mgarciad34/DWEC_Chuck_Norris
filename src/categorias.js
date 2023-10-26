export function obtenerCategorias() {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            // El resultado de la solicitud se encuentra en 'data'
            const listaCategorias = document.getElementById('tablaCategorias');

            data.forEach(categoria => {
                // Crear un elemento de enlace <a> por cada categoría
                const enlace = document.createElement('a');
                enlace.href = `https://api.chucknorris.io/jokes/random?category=${categoria}`;
                enlace.textContent = categoria;
                enlace.target = "_blank"; // Abrir el enlace en una nueva pestaña

                // Agregar el enlace al elemento <ul> (o <div>, <p>, etc.) en tu HTML
                listaCategorias.appendChild(enlace);
                listaCategorias.appendChild(document.createElement('br')); // Agregar un salto de línea
            });
        })
        .catch(error => {
            console.error('Error al obtener las categorías:', error);
        });
}