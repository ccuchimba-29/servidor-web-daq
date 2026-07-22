import { sendConfigFbase,sendRecordFbase,sendDataFbase,readConfigFbase,
    updateFbase
 } from "./firebase.js";

const dbManager ={
    

    defaultConfigDb: {
        config: {
            record_code: "DR",
            total_record: 1,
            current_record: 1,
            active_record: false 
        },
        register: {
            device_code: "DD1",
            start_date: Date.now(),
            operator_name: "ccuchimba29",
            test_name: "Configuración inicial de la base de datos",
            test_notes: "Esta es la configuración inicial de la base de datos"
        },
        initialData : [22,22,22,22,22,22,22,22,22,22,22,22],
    },

    async initializeDatabase(){
        console.log("Config enviada");
        await sendConfigFbase(
            "config",
            this.defaultConfigDb.config
        );

        await sendRecordFbase(
            "registers",
            "DR1",
            this.defaultConfigDb.register
        );

        await sendDataFbase(
            "data",
            "DR1",
            Date.now(),
            this.defaultConfigDb.initialData
        ); 
    },

    sendConfigData() {
        console.log("Config enviada")
        sendConfigFbase("configuracion",this.configData);
    },

};

export default dbManager;