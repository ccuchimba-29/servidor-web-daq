var nombreGrafica = document.getElementById("nombreGrafica");
var nombregraficaAuxiliar = document.getElementById("nombreGraficaAuxiliar");
var contenedorTituloGrafica = document.getElementById("contenedorTituloGrafica");
var input;
export var nombreArchivoADescargar = nombreGrafica.textContent;


export function cambiarAInput(){

    input = document.createElement("input");
    input.type = "text";
    input.value = nombreGrafica.textContent;
    contenedorTituloGrafica.appendChild(input);
    contenedorTituloGrafica.replaceChild(input, nombreGrafica);

    input.focus();

    input.addEventListener("blur", function() {
        // Cambiar el input a un h2 cuando se pierde el foco
        cambiarAHeader2(input.value);
    });

}
function cambiarAHeader2(texto){
    nombreGrafica = document.createElement("h2");
    nombreGrafica.id = "nombreGrafica";
    nombreGrafica.textContent = texto;
    contenedorTituloGrafica.appendChild(nombreGrafica);
    contenedorTituloGrafica.replaceChild(nombreGrafica,input);
    nombregraficaAuxiliar.textContent = texto;
    nombreGrafica.addEventListener("dblclick", cambiarAInput);
    nombreArchivoADescargar = texto;
}
