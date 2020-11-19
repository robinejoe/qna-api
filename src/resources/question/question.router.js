import Router from 'express'
import { getQuestions, createQuestion } from './question.controllers'

const questionRouter = Router()

questionRouter.get('/', getQuestions)

questionRouter.get('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

questionRouter.get('/categories/:categoryid', (req, res) => {
    res.status(200).json({ categoryId: req.params.categoryid })
})

questionRouter.post('/', createQuestion)

questionRouter.put('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

questionRouter.delete('/:id', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

questionRouter.get('/:id/comments', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

export default questionRouter

//callback functions above are placeholders and will be replaced with controllers