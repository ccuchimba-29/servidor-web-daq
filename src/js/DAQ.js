/**Este archivo hace el llamado a todos los módulos de 
 * JavaScript del software
 */
//importar todos los módulos

import {iniciarDatos} from "./modules/datos_iniciales.js";
import { graficaLimpia_1 } from "./modules/grafica_principal.js";
import { iniciarGrafica_1 } from "./modules/grafica_principal.js";
import { detenerGrafica_1 } from "./modules/grafica_principal.js";
import { reiniciarGrafica_1 } from "./modules/grafica_principal.js";
import { iniciarReloj } from "./modules/datos_iniciales.js";
import { cambiarAInput } from "./modules/cambiarNombregrafica.js";
import { nombreArchivoADescargar } from "./modules/cambiarNombregrafica.js";
import { descargarArchivoComoCSV, descargarArchivoComoTXT, miArreglodeObjetos } from "./modules/archivoCSV.js";


//Declaracion de variables
//Estas variables contienen la información de los botones iniciar, detener y reiniciar
var bandera_iniciar = 0;
var bandera_detener = 0;
var bandera_reiniciar = 0;
var banderaNombreGrafica = 0;

let BotonDB = document.querySelector("#btn_db"); 

document.getElementById("btn_iniciar").onclick = iniciar;
document.getElementById("btn_detener").onclick = detener;
document.getElementById("btn_reiniciar").onclick = reiniciar;
document.getElementById("nombreGrafica").addEventListener("dblclick", cambiarAInput);
document.getElementById("btn_CSV").onclick =  descargarCSV;
document.getElementById("btn_TXT").onclick =  descargarTXT;
document.getElementById("btn_volver_pagina_web").onclick = confirmacionDeSalir;


iniciarReloj();
iniciarDatos();

var interval_1_ID;
var interval_2_ID;



graficaLimpia_1();
/*
BotonDB.addEventListener("click", (e)=>{
    window.location.href = "/../../src/javascrip-firebase/index.html"

}); */


function iniciar(){
    
    if(bandera_iniciar == 0){
        interval_1_ID = window.setInterval(iniciarGrafica_1,1000);
    }
    bandera_iniciar = 1;
    bandera_detener = 0;
}

function detener(){
    detenerGrafica_1();
    clearInterval(interval_1_ID);
    bandera_iniciar = 0;
    bandera_detener = 1;
}

function reiniciar(){
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
}

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