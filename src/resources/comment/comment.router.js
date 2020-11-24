import Router from 'express'
import { createComment, updateCommentById, deleteCommentById } from './comment.controllers'


const commentRouter = Router()

commentRouter.post('/', createComment)

commentRouter.put('/:id', updateCommentById)

commentRouter.delete('/:id', deleteCommentById)

export default commentRouter

//callback functions above are placeholders and will be replaced with controllers