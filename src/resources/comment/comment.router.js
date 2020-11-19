import Router from 'express'

const commentRouter = Router()

commentRouter.post('/', (req, res) => {
    res.status(201).json(req.body)
})

commentRouter.put('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

commentRouter.delete('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

export default commentRouter

//callback functions above are placeholders and will be replaced with controllers