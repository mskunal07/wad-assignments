

import connectDB from "./db/index.js";
import dotenv from 'dotenv';
import { app } from "./app.js";

dotenv.config({
    path: './evn'
})

connectDB()
.then( () => {
    app.on('err', (err) => {
        console.log("express connection err : ",err);
        throw err;
    })
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server running on port : ${process.env.PORT}`);
    })
})
.catch( (err) => {
    console.log("MongoDB connection failed !! ",err );
})