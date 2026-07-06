/**Este archivo genera los datos que se van a graficar*/

export default function datosRandom(){
    let values = [];
    
    //var value_1 = Math.floor(Math.random() * (37 - 35) + 37, -1);
    //var value_2 = Math.floor(Math.random() * (45 - 40) + 40, -1);
    //var value_3 = Math.floor(Math.random() * (30 - 25) + 25, -1);
    for (let i=0; i<12; i++){
        values[i] = Number((Math.random() * (37 - 35) + 35).toFixed(1));;
    }
/*
    return [
        value_1, value_2, value_3,
        value_4, value_5, value_6,
        value_7, value_8, value_9,
        value_10, value_11, value_12
    ]*/

    return values;
}