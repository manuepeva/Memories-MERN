import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
// Importing port routes
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'
 
// Initializing server
const app = express()
dotenv.config()
app.use(cors())
app.get('/', (req, res) => {
    res.send('Connected to Memories API')
})
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use('/posts', postRoutes)

// Connecting to DB
//const CONNECTION_URL = 'mongodb+srv://ILD3UCfZmAizIzZ6:iDzaOIM62N74xjkJ@cluster0.12kcg.mongodb.net/Memories-MERN?retryWrites=true&w=majority'
const PORT = process.env.PORT || 1000

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}, and MongoDB Connected`)))
.catch((error) => console.log(error.message))


