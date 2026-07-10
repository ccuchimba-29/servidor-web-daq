/**Este archivo hace el llamado a todos los módulos de 
 * JavaScript del software
 */
//importar todos los módulos

import {iniciarDatos} from "../modules/datos_iniciales.js";
import { graficaLimpia_1 } from "../modules/grafica_principal.js";
import { iniciarGrafica_1 } from "../modules/grafica_principal.js";
import { detenerGrafica_1 } from "../modules/grafica_principal.js";
import { reiniciarGrafica_1 } from "../modules/grafica_principal.js";
import { iniciarReloj } from "../modules/datos_iniciales.js";
import { cambiarAInput } from "../modules/cambiarNombregrafica.js";
import { nombreArchivoADescargar } from "../modules/cambiarNombregrafica.js";
import { descargarArchivoComoCSV, descargarArchivoComoTXT, miArreglodeObjetos } from "../modules/archivoCSV.js";


//Declaracion de variables
//Estas variables contienen la información de los botones iniciar, detener y reiniciar
var bandera_iniciar = 0;
var bandera_detener = 0;
var bandera_reiniciar = 0;
var banderaNombreGrafica = 0;

let BotonDB = document.querySelector("#btn_db"); 

document.getElementById("nombreGrafica").addEventListener("dblclick", cambiarAInput);
document.getElementById("btn_CSV").onclick =  descargarCSV;
document.getElementById("btn_TXT").onclick =  descargarTXT;
document.getElementById("btn_volver_pagina_web").onclick = confirmacionDeSalir;


iniciarReloj();
iniciarDatos();

var interval_1_ID;
var interval_2_ID;

graficaLimpia_1();

/**Dispositivo */
/** boton Iniciar: aparece el formulario de 
 * datos de la prueba.
 * Boton confirmar: inicia captura de datos desde el esp
 * envia a firebas, grafica en tiempo real
 * */

const startButton = document.getElementById("btn_iniciar");
const modal = document.getElementById("modal_captura");
const cancelButton = document.getElementById("btn_cancelar");
const confirmButton = document.getElementById("btn_confirmar");

startButton.addEventListener("click",()=>{
    modal.classList.remove("modal_oculto");
    modal.classList.add("modal_visible");
});

cancelButton.addEventListener("click",()=>{
    modal.classList.remove("modal_visible");
    modal.classList.add("modal_oculto");
});

confirmButton.addEventListener("click",()=>{
    let operador = document.getElementById("nombre_operador").value;
    let prueba = document.getElementById("nombre_prueba").value;
    let observaciones = document.getElementById("observaciones").value;

    console.log(operador);
    console.log(prueba);
    console.log(observaciones);

    modal.classList.remove("modal_visible");
    modal.classList.add("modal_oculto");

    if(bandera_iniciar == 0){
        interval_1_ID = window.setInterval(iniciarGrafica_1,1000);
    }
    bandera_iniciar = 1;
    bandera_detener = 0;
});

/** boton detener: detiene momentaneamente la captura y grafica.
 **/
const stopButton = document.getElementById("btn_detener");

stopButton.addEventListener("click", ()=>{
    detenerGrafica_1();
    clearInterval(interval_1_ID);
    bandera_iniciar = 0;
    bandera_detener = 1;
});

/** boton reiniciar: Deja de recibir datos del esp, limpia la grafica.
**/

const restartButton = document.getElementById("btn_reiniciar");

restartButton.addEventListener("click", ()=>{
    if(bandera_detener == 1){
        clearInterval(interval_1_ID);
        reiniciarGrafica_1();
        graficaLimpia_1();
        iniciarDatos();
        bandera_iniciar = 0;
        bandera_detener = 0;
    }else{
        alert("¡Detenga la adquisición de datos!")
    }
});


//============Guardar=====================//
/**Guardar */
//**Guardar como  */


function descargarCSV(){
    if(miArreglodeObjetos.length != 0){
        if(bandera_detener == 1 ){
            descargarArchivoComoCSV(nombreArchivoADescargar); 
            
        }else{
            
            alert("¡Detenga la adquisición de datos!");
        }
    }else{
        alert("¡No hay datos que descargar!"); 
    }
}

function descargarTXT(){
    if(miArreglodeObjetos.length != 0){
        if(bandera_detener == 1 ){
            descargarArchivoComoTXT(nombreArchivoADescargar); 
            
        }else{
            alert("¡Detenga la adquisición de datos!");
        }
    }else{
        
        alert("¡No hay datos que descargar!"); 
    }
}

function confirmacionDeSalir(){
   
        if(confirm("¿Seguro que desea salir?")){
            window.location.href = "../../public/index.html"
            //window.open("../../public/index.html", "Thanks for Visiting!");
        }
}

const btnHistorial = document.getElementById("btn_historial");
const panelHistorial = document.getElementById("panel_historial");

btnHistorial.addEventListener("click",()=>{
    panelHistorial.classList.toggle("oculto");
});

