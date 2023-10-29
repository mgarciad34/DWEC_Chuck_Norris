function obtenerRandom() {
    const categoria = 'random'; // Cambia 'random' por la categoría que desees guardar
    localStorage.setItem('categoria', categoria);
    window.open('frase.html', '_blank');
}
