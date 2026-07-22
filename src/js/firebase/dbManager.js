import { sendConfigFbase,sendRecordFbase,sendDataFbase,readConfigFbase,
    updateFbase
 } from "./firebase.js";

const dbManager ={
    configData: {
       codigo_registro: "DR",
        total_registros: 0,
        registro_actual: 0,
        registro_activo: false 
    },

    initializeDatabase(){

        
    },

    sendConfigData() {
        console.log("Config enviada")
        sendConfigFbase("configuracion",this.configData);
    },

};

export default dbManager;