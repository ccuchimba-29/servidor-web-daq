
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
            label: 'S1',
            lineTension: 0
        },
        {
            label: 'S2',
            lineTension: 0
        },
        {
            label: 'S3',
            lineTension: 0
        },
        {
            label: 'S4',
            lineTension: 0
        },
        {
            label: 'S5',
            lineTension: 0
        },
        {
            label: 'S6',
            lineTension: 0
        },
        {
            label: 'S7',
            lineTension: 0
        },
        {
            label: 'S8',
            lineTension: 0
        },
        {
            label: 'S9',
            lineTension: 0
        }, 
        {
            label: 'S10',
            lineTension: 0
        },
        {
            label: 'S11',
            lineTension: 0
        },
        {
            label: 'S12',
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
  
  myChart = new Chart(
    g_principal,
    config
  );
}

let arraySensor=[12.4,8.9,67.8,87.5,10.7,19.6];

export function iniciarGrafica_1(){
    contador = contador + 1;
    var randomValues = datosRandom();  
    plotData(randomValues,contador);
    showSensorValues(randomValues, contador);
    cargarArregloDeObjetosADescargar(randomValues);
    
}
export function detenerGrafica_1(){
    myChart.stop();
    document.getElementById("estado").innerHTML = 'Detenido';
    document.getElementById("estado").style.color = 'red'; 
}

export function reiniciarGrafica_1(){
  myChart.destroy();
  contador = 0;
  limpiarArregloDeObjetosADescargar();
}

export function showSensorValues (sensorValue, counter){
  document.getElementById("estado").innerHTML = 'Activado';
  document.getElementById("estado").style.color = 'green';
  document.getElementById("tiempo").innerHTML =  counter;

  sensorValue.forEach((value,index) => {
    document.getElementById(`sensor_${index + 1}`).textContent = value;
  });
}

export function plotData(values, counter){
  myChart.data.labels.push(contador);
  values.forEach((element, index) => {
  if (index < myChart.data.datasets.length) {
    myChart.data.datasets[index].data.push(element);
  }
  });
  myChart.update();
}