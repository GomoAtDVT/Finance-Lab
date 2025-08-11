import express from 'express';
import cors from 'cors';
import { Client } from 'pg';
import  { AllRoutes }  from './routes/AllRoutes.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();


const PORT = 5000;
const app = express();

export const client = new Client({
connectionString: process.env.DATABASE_URL,});
//require('crypto').randomBytes(64).toString('hex')
client.connect().then(() => console.log("Connected to the database")).catch((err) => console.log(err.message));

//Brother please don't forget to add the frontend url in the cors origin
app.use(cors({origin: 'http://localhost:5174',credentials: true})); 
app.use(express.json());
app.use(cookieParser());
app.use("/api", AllRoutes);

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});


app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));