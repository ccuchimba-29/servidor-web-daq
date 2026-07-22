/**Este archivo genera los datos que se van a graficar*/

export default function datosRandom(){
    let values = [];

    for (let i=0; i<12; i++){
        values[i] = Number((Math.random() * (37 - 35) + 35).toFixed(1));;
    }
    return values;
}