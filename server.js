import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoute.js'

dotenv.config();

connectDb();

const app = express();

app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/v1/auth',authRoutes);

//rest apis

app.get('/',(req,res) => {
    res.send('<h1>Welcome to Ecommerce App</h1>')
})

const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white);
})