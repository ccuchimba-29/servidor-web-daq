import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    set,
    push, 
    get,
    child,
    update
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCJzJu3Jb4J4CXD2IS9Xic-8ACcS0VC1dk",
  authDomain: "daq-pt100.firebaseapp.com",
  databaseURL: "https://daq-pt100-default-rtdb.firebaseio.com",
  projectId: "daq-pt100",
  storageBucket: "daq-pt100.firebasestorage.app",
  messagingSenderId: "911921890439",
  appId: "1:911921890439:web:189a803a3982dfdfed2422"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function sendConfigFbase(
    rootNode, configData
){
    set(ref(database, `${rootNode}` ), configData);
}

export async function sendRecordFbase(
    rootNode, recordHistory, data, 
){
    set(ref(database,`${rootNode}/${recordHistory}`), data);
}

export async function sendDataFbase(
    rootNode, recordHistory, dataKey, data
){
    set(ref(database,`${rootNode}/${recordHistory}/${dataKey}`),data);
}

export async function readConfigFbase() {
    const snapshot = await get(
        ref(database,"config")
    );

    return snapshot.val();
}

export async function updateFbase(
    rootNode, data
) {
    update( ref(database,`${rootNode}`),data);
}