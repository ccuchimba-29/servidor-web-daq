import { sendConfigFbase,sendRecordFbase,sendDataFbase,readConfigFbase,
    updateFbase
 } from "./firebase.js";

const dbManager ={

    defaultConfigDb: {
        config: {
            record_code: "DR1",
            total_records: 1,
            current_record: 1,
            active_record: false 
        },
        info: {
            device_code: "DD1",
            start_date: Date.now(),
            operator_name: "ccuchimba29",
            test_name: "Configuración inicial de la base de datos",
            test_notes: "Esta es la configuración inicial de la base de datos"
        },
        initialData : [22,22,22,22,22,22,22,22,22,22,22,22],
    },

    dbConfig: {
        active_record: true,
        current_record: 0,
        record_code: "",
        total_records: 0,
    } ,

    async initializeDatabase(){
        console.log("Config enviada");
        await sendConfigFbase(
            "config",
            this.defaultConfigDb.config
        );

        await sendRecordFbase(
            "info",
            "DR1",
            this.defaultConfigDb.info
        );

        await sendDataFbase(
            "data",
            "DR1",
            Date.now(),
            this.defaultConfigDb.initialData
        ); 
    },
    
    async configureNewRegister(){
        //let total_records = this.dbConfig.total_records;
        let dataBaseConfig = await readConfigFbase();
        let total_records =  dataBaseConfig.total_records;
        console.log(total_records);
        total_records++;

        updateFbase(
            "config", 
            {
                active_record: true,
                current_record: total_records,
                record_code: "DR" + String(total_records),
                total_records: total_records
            }
        );

        this.dbConfig.active_record = true;
        this.dbConfig.current_record = total_records;
        this.dbConfig.record_code = "DR" + String(total_records);
        this.dbConfig.total_records = total_records;
    
    },

    async addRecord(data){
        await sendRecordFbase(
            "info",
            this.dbConfig.record_code,
            data
        );
    }
};

export default dbManager;