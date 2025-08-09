import mongoose from "mongoose";

mongoose.connect("URL_dbserver")
    .then((data)=>{
        console.log('MongoDB Connected');
    }).catch((err) => {
        console.log('Erro na conexão com Db');
    });

let db = mongoose.connection;

export default db;

