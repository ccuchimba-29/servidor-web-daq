/**Este archivo contiene los datos 
 * iniciales del software*/
import { muestraReloj } from "./reloj.js";

/**Los estados del software son:
 * Activado: El software está obteniendo datos
 * Detenido: El software no está obteniendo datos
 * El estado inicial por defecto es detenido
 */

export function iniciarReloj(){
//Se inicia la fecha y hora
setInterval(muestraReloj,2000);
}

export function iniciarDatos(){
    
    document.getElementById("estado").innerHTML = 'Detenido';
    document.getElementById("estado").style.color = 'Red';
    document.getElementById("tiempo").innerHTML = '0';
    document.getElementById("sensor_1").innerHTML = '0';
    document.getElementById("sensor_2").innerHTML = '0';
    document.getElementById("sensor_3").innerHTML = '0';

}