export function obtenerCategorias() {
    fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(data => {
            const listaCategorias = document.getElementById('tablaCategorias');

            data.forEach(categoria => {
                const enlace = document.createElement('a');
                enlace.href = 'frase.html';
                enlace.target = "_blank"; 
                enlace.textContent = categoria; // Texto del enlace

                // Evento que guarda la categoria seleccionada en el localStorage
                enlace.addEventListener('click', function() {
                    localStorage.setItem("categoria", categoria);
                });

                const saltoLinea = document.createElement('br');

                // Agregar el enlace y el salto de línea al elemento con el id "tablaCategorias"
                listaCategorias.appendChild(enlace);
                listaCategorias.appendChild(saltoLinea);
            });
        })
        .catch(error => {
            console.error('Error al obtener las categorías:', error);
        });
}
