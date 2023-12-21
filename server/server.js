const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./src/routes/userRoute')
const recipeRoute = require('./src/routes/recipeRoute')

app.use(express.json());
app.use(cors());

app.use('/auth',userRoute);
app.use('/recipes',recipeRoute);


mongoose.connect("mongodb+srv://practiceapp:himanshu12@cluster0.ixs7cc5.mongodb.net/Cluster0?retryWrites=true&w=majority").then(console.log('db connected')).catch((err)=>console.log('db connection failed'));
app.listen(3003,()=>console.log("Server started"));