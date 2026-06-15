export function graficasIniciales(){
  var data3 = {
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
  
  var config3 = {
    type: 'line',
    data: data3,
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

  var g_principal3 = document.getElementById('myChart');
  g_principal3.style.width = "900px";
  g_principal3.style.height = "400px";
  g_principal3.style.margin = "auto auto auto auto";



    var myChart3 = new Chart(
    g_principal3,
    config3
  );


/*************************************** */
var data4 = {
  labels: ['Sensor 1', 'Sensor 2', 'Sensor 3'],
  datasets:[
      {
          label: ['Datos'],
          data: [0, 0, 0],
          
      } 
  ]
};

var config4 = {
  type: 'bar',
  data: data4,
  options: {
      scales: {
          y: {
            beginAtZero: true
          }
        },
        borderColor: 'blue',
          backGroundColor: 'red'
  }
};
var g_secundaria4 = document.getElementById('grafica_secundaria');
g_secundaria4.style.width = "300px";
g_secundaria4.style.height = "400px";
g_secundaria4.style.margin = "auto auto auto auto";

var myChart4 = new Chart(
  g_secundaria4,
  config4
);

}