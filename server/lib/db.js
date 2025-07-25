import mongoose from "mongoose";
//  function to connect to the mongodb database
export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Database connected..")
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/chart-app`)
    } catch (error)
    {
        console.log(error)
    }
}