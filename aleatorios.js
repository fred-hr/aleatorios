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
        mostrarResultados(aleatorios);

    } else {
        console.log("La cantidad debe estar entre 5 y 20");
    }
}

function mostrarResultados(arregloNumeros) {
    let contenido = "<table border='1'>";
    contenido += "<tr><th>Número aleatorio</th></tr>";

    for (let i = 0; i < arregloNumeros.length; i++) {
        contenido += "<tr><td>" + arregloNumeros[i] + "</td></tr>";
    }

    contenido += "</table>";

    let divResultados = document.getElementById("divResultados");
    divResultados.innerHTML = contenido;
}