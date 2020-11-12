import Router from 'express'

const questionRouter = Router()

questionRouter.get('/', (req, res) => {
    res.status(200).json({ message: 'hello' })
})

questionRouter.get('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

questionRouter.get('/categories/:categoryid', (req, res) => {
    res.status(200).json({ categoryId: req.params.categoryid })
})

questionRouter.post('/', (req, res) => {
    res.status(201).json(req.body)
})

export default questionRouter

//callback functions above are placeholders and will be replaced with controllers