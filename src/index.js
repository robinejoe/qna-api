import express from 'express'

const app = express()
const SERVER_PORT = 3000

app.use('/api', function(req, res, next) {
    res.send('Hello World!')
})

app.listen(SERVER_PORT, () => {
    console.log(`REST API on http://localhost:${SERVER_PORT}/api`)
})