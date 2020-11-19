import express from 'express'
import bodyParser from 'body-parser'
import questionRouter from './resources/question/question.router'
import commentRouter from './resources/comment/comment.router'
import categoryRouter from './resources/category/category.router'
import mongoose from 'mongoose'

mongoose
    .connect("mongodb://localhost:27017/q-and-a-app", { useNewUrlParser: true })
    .then(() => {
        const app = express()
        const SERVER_PORT = 3000
        
        app.use(bodyParser.json())
        
        app.use('/api/questions', questionRouter)
        app.use('/api/comments', commentRouter)
        app.use('/api/categories', categoryRouter)
        
        app.listen(SERVER_PORT, () => {
            console.log(`REST API on http://localhost:${SERVER_PORT}/api`)
        })  
    })