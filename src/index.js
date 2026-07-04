import "./config/env.js";
// import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"

// dotenv.config({
//     path: "./.env"
// })

// console.log("INDEX API KEY:", process.env.CLOUDINARY_API_KEY);

connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection error", error)
})



















/*
;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch(error) {
        console.error("ERROR: ", error)
    }
})()
*/