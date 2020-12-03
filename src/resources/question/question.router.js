import Router from 'express'
import { getQuestions, createQuestion, getQuestionById, getQuestionsByCategory, updateQuestion, deleteQuestion, getCommentsByQuestionId } from './question.controllers'

const questionRouter = Router()

questionRouter.get('/', getQuestions)

questionRouter.get('/:id', getQuestionById)

questionRouter.get('/categories/:category', getQuestionsByCategory)

questionRouter.post('/', createQuestion)

questionRouter.put('/:id', updateQuestion)

questionRouter.delete('/:id', deleteQuestion)

questionRouter.get('/:id/comments', getCommentsByQuestionId)

export default questionRouter