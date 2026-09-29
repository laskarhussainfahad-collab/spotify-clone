require('dotenv').config();
const connectDB = require('./src/db/db');
const app =require("./src/app");

const dns = require("dns");
dns.setServers(['8.8.8.8','1.1.1.1'])

connectDB();


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
