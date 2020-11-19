import Router from 'express'

const categoryRouter = Router()

categoryRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'hello' })
})

categoryRouter.get('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

categoryRouter.post('/', (req, res) => {
    res.status(201).json(req.body)
})

categoryRouter.put('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

categoryRouter.delete('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

export default categoryRouter

//callback functions above are placeholders and will be replaced with controllers