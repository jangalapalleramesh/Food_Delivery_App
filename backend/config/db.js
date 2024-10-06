import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://venkataramesh255:Jarvis7815@cluster0.4op3nbs.mongodb.net/fooddeliveryapp").then(()=>{console.log("DBConnected")});
}