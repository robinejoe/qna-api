import express from 'express'
import bodyParser from 'body-parser'
import questionRouter from './resources/question/question.router'

export const app = express()
const SERVER_PORT = 3000

app.use(bodyParser.json())

app.use('/api/questions', questionRouter)

app.listen(SERVER_PORT, () => {
    console.log(`REST API on http://localhost:${SERVER_PORT}/api`)
})
