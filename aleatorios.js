function generarNumerosAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorio = [];
    let cantidad = parseInt(document.getElementById("txtCantidad").value);

    if (cantidad >=5 && cantidad <= 20) {
        console.log("cantidad válida: " + cantidad)
    } else {
        console.log("lA CANTIDAD DEBE ESTAR ENTRE 5 Y 20")

    }
}
