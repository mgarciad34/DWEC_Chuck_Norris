function generarChiste() {
    var texto = document.getElementById('textoChiste');
    console.log(texto.value)
    var categoriaChiste = localStorage.getItem("categoria");
        
    fetch(`https://api.chucknorris.io/jokes/random?category=${categoriaChiste}`)
        .then(response => response.json())
        .then(data => {
            texto.innerHTML = data.value;
        })
        .catch(error => {
            console.error('Error al obtener el chiste:', error);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    generarChiste();
});