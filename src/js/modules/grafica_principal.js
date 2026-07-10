
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
            //data: [0],
            //borderColor: 'blue',
            lineTension: 0
        },
        {
            label: 'S2',
            //data: [0],
            //borderColor: 'green',
            lineTension: 0
        },
        {
            label: 'S3',
            //data: [0],
            //borderColor: 'red',
            lineTension: 0
        },
        {
            label: 'S4',
            //data: [0],
            //borderColor: 'blue',
            lineTension: 0
        },
        {
            label: 'S5',
            //data: [0],
            //borderColor: 'green',
            lineTension: 0
        },
        {
            label: 'S6',
            //data: [0],
            //borderColor: 'red',
            lineTension: 0
        },
        {
            label: 'S7',
            //data: [0],
            //borderColor: 'blue',
            lineTension: 0
        },
        {
            label: 'S8',
            //data: [0],
            //borderColor: 'green',
            lineTension: 0
        },
        {
            label: 'S9',
            //data: [0],
            //borderColor: 'red',
            lineTension: 0
        }, 
        {
            label: 'S10',
            //data: [0],
            //borderColor: 'blue',
            lineTension: 0
        },
        {
            label: 'S11',
            //data: [0],
            //borderColor: 'green',
            lineTension: 0
        },
        {
            label: 'S12',
            //data: [0],
            //borderColor: 'red',
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
  //g_principal.style.width = "900px";
  //g_principal.style.height = "400px";
  

  myChart = new Chart(
    g_principal,
    config
  );

    //***********************/
  
}

let arraySensor=[12.4,8.9,67.8,87.5,10.7,19.6];

export function iniciarGrafica_1(){
    contador = contador + 1;
    var randomValues = datosRandom();  
    plotData(randomValues,contador);
    showSensorValues(randomValues, contador);
    
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

function mostrarValores(value, value2, value3, tiempo){
  document.getElementById("estado").innerHTML = 'Activado';
  document.getElementById("estado").style.color = 'green';
  document.getElementById("tiempo").innerHTML =  tiempo;
  document.getElementById("sensor_1").innerHTML = value;
  document.getElementById("sensor_2").innerHTML = value2;
  document.getElementById("sensor_3").innerHTML = value3;
}

export function showSensorValues (sensorValue, counter){
  document.getElementById("estado").innerHTML = 'Activado';
  document.getElementById("estado").style.color = 'green';
  document.getElementById("tiempo").innerHTML =  counter;

  sensorValue.forEach((value,index) => {
    console.log(value);
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