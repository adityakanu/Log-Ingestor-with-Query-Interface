import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
dotenv.config({
    path: "./.env"
});

connectDB()
.then(() => {
    app.on("error", (error) =>{
        console.error("Error in connecting to app: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.error("Error in connecting to database: ", error);
    throw error
})


