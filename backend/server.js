require('dotenv').config();
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
const foodRouter = require("./router/foodRouter")
const userRouter = require("./router/userRouter")
const cookieParser = require('cookie-parser');
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json())
const allowedOrigins = ["http://localhost:5173"] 
app.use(cors({
    origin: allowedOrigins,
    credentials: true
})) 
app.use(cookieParser())

app.use("/user", userRouter)
app.use("/food", foodRouter)


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('mongodb server started')
})
app.listen(process.env.PORT, () => {
    console.log('listening on port: ' + process.env.PORT);
});