import dotenv from "dotenv";
import connectDB from "./db/index.js";

connectDB()


dotenv.config({
    path:'./env'
})






// ;(async()=>{
// try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error)=>{
//         console.error("error",error);
//         throw error
//     })
//     app.listen(process.env.PORT, ()=>{
//         console.log(`app is listening on port ${process.env.PORT}`);
//     })
// } catch (error) {
//     console.log("ERROR", error);
// }

// })()