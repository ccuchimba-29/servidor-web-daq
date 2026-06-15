
import { iniciarGrafica_1 } from "./grafica_principal.js";

var data_2, config_2, g_secundaria, myChart_2;

export function graficaLimpia_2(){
data_2 = {
    labels: ["Sensor 1", "Sensor 2", "Sensor 3"],
    datasets:[
        {
            label: 'Datos',
            data: [0, 0, 0],
            borderColor: 'blue',
        }
    ]
  };
  
config_2 = {
    type: 'bar',
    data: data_2,
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

  g_secundaria = document.getElementById('grafica_secundaria');
  g_secundaria.style.width = "300px";
  g_secundaria.style.height = "400px";
  

  myChart_2 = new Chart(
    g_secundaria,
    config_2
  );
}

export function iniciarGrafica_2(){
    var [value, value2, value3] = iniciarGrafica_1();
    myChart_2.data.datasets.data.push([value,value2,value3]);

    myChart_2.update();
}
export function detenerGrafica_2(){
    myChart_2.stop();
}

export function reiniciarGrafica_2(){
  myChart_2.destroy();
  contador = 0;
  
}
