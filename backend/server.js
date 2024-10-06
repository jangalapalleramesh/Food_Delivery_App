import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import 'dotenv/config'
import userRouter from "./routes/userRoutes.js";
import cartRoute from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";




//app config

const app = express();
const PORT = process.env.PORT | 9000;


//middleware

app.use(express.json());
app.use(cors());

//db connection
connectDB();

//API EndPoints

app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRoute);
app.use("/api/order",orderRoutes);

app.get("/",(req,res)=>{
    res.send("API IS WORKINGGGGG")
})

//to runserver
app.listen(PORT,()=>{
    console.log(`server is started on http://localhost:${PORT}`);
})

//mongodb+srv://venkataramesh255:<password>@cluster0.gcdl3nx.mongodb.net/?
