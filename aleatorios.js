function generarNumerosAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function generarAleatorios() {
    let aleatorios = [];
    let cantidad = parseInt(document.getElementById("txtCantidad").value);

    if (cantidad >= 5 && cantidad <= 20) {
        console.log("cantidad válida: " + cantidad);

        for (let i = 0; i < cantidad; i++) {
            let numeroAleatorio = generarNumerosAleatorio();
            aleatorios.push(numeroAleatorio);
        }
        console.log("Números aleatorios generados:", aleatorios);

    } else {
        console.log("La cantidad debe estar entre 5 y 20");
    }
}