
import datosRandom from "./datos_aleatorios.js";
import { iniciarDatos } from "./datos_iniciales.js";
import { cargarArregloDeObjetosADescargar, limpiarArregloDeObjetosADescargar } from "./archivoCSV.js";


var data, config, g_principal, myChart;
var contador = 0;
var data_2, config_2, g_secundaria, myChart_2;

export function graficaLimpia_1(){
data = {
    labels: [0],
    datasets:[
        {
            label: 'Sensor 1',
            data: [0],
            borderColor: 'blue',
            lineTension: 0
        },
        {
            label: 'Sensor 2',
            data: [0],
            borderColor: 'green',
            lineTension: 0
        },
        {
            label: 'Sensor 3',
            data: [0],
            borderColor: 'red',
            lineTension: 0
        } 
    ]
  };
  
config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
              beginAtZero: true
            }
          },
          elements:{
            point:{
              radius: 0
            }
          }
    }
  };

  g_principal = document.getElementById('myChart');
  g_principal.style.width = "900px";
  g_principal.style.height = "400px";
  

  myChart = new Chart(
    g_principal,
    config
  );

    //***********************/

  
}

export function iniciarGrafica_1(){
    contador = contador + 1;
    var [value, value2, value3] = datosRandom();
    myChart.data.labels.push(contador);
    myChart.data.datasets[0].data.push(value);
    myChart.data.datasets[1].data.push(value2);
    myChart.data.datasets[2].data.push(value3);

    myChart.update();

    mostrarValores(value, value2, value3, contador);
    cargarArregloDeObjetosADescargar(value,value2,value3);
    
}
export function detenerGrafica_1(){
    myChart.stop();
    //myChart_2.stop();
    //detenerGrafica_2();
    document.getElementById("estado").innerHTML = 'Detenido';
    document.getElementById("estado").style.color = 'red';
    
}

export function reiniciarGrafica_1(){
  myChart.destroy();
  //myChart_2.destroy();
  contador = 0;
  limpiarArregloDeObjetosADescargar();
}

function mostrarValores(value, value2, value3, tiempo){
  document.getElementById("estado").innerHTML = 'Activado';
  document.getElementById("estado").style.color = 'green';
  document.getElementById("tiempo").innerHTML =  tiempo;
  document.getElementById("sensor_1").innerHTML = value;
  document.getElementById("sensor_2").innerHTML = value2;
  document.getElementById("sensor_3").innerHTML = value3;
}
