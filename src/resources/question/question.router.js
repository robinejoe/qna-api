import Router from 'express'
import { getQuestions, createQuestion, getQuestionById, getQuestionsByCategory, updateQuestion, deleteQuestion } from './question.controllers'

const questionRouter = Router()

questionRouter.get('/', getQuestions)

questionRouter.get('/:id', getQuestionById)

questionRouter.get('/categories/:categoryid', getQuestionsByCategory)

questionRouter.post('/', createQuestion)

questionRouter.put('/:id', updateQuestion)

questionRouter.delete('/:id', deleteQuestion)

questionRouter.get('/:id/comments', (req, res) => {
    res.status(200).json({ id: req.params.id })
})

export default questionRouter

//callback functions above are placeholders and will be replaced with controllers