/**Este archivo genera los datos que se van a graficar*/

export default function datosRandom(){
    var value_1 = Math.floor(Math.random() * (37 - 35) + 37, -1);
    var value_2 = Math.floor(Math.random() * (45 - 40) + 40, -1);
    var value_3 = Math.floor(Math.random() * (30 - 25) + 25, -1);

    return [value_1, value_2, value_3]
}