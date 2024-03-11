let puntos = 0;

function actualizarPuntos() {
    document.getElementById('puntos').innerText = `${puntos} puntos`;
}

function agregarPuntos(cantidad) {
    puntos += cantidad;
    actualizarPuntos();
}

function agregarPuntosPersonalizado() {
    const cantidad = prompt('Ingrese la cantidad de puntos:');
    if (cantidad !== null && !isNaN(cantidad) && cantidad !== "") {
        puntos += parseInt(cantidad);
        actualizarPuntos();
    } else {
        alert('Por favor, ingrese una cantidad válida.');
    }
}

// Inicialización al cargar la página
actualizarPuntos();
