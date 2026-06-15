/**Este archivo crea un reloj:Fecha, hora, minuto, segundo*/
var [anio, mes, dia, hora, minuto, segundo] = Reloj();

export function Reloj() {
    var fechaHora = new Date();
    var anio = fechaHora.getFullYear();
    var mes = fechaHora.getMonth()+1;
    var dia = fechaHora.getDate();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    return[anio, mes, dia, horas, minutos, segundos]
}

export function muestraReloj(){
    /*
    mes = (mes < 10)? '0' + mes : mes;
    dia = (dia < 10)? '0' + dia : dia;
    hora = (hora < 10)? '0' + hora : hora;
    minuto = (minuto < 10)? '0' + minuto : minuto;
    segundo = (segundo < 10)? '0' + segundo : segundo;*/

    document.getElementById("fecha").innerHTML =  anio + '/'+ mes +'/' +dia ;
    document.getElementById("hora").innerHTML = +hora+':'+minuto;
}