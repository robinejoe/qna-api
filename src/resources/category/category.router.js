import Router from 'express'
import { getCategories, getCategoryById, createCategory, updateCategoryById, deleteCategoryById } from './category.controllers'


const categoryRouter = Router()

categoryRouter.get('/', getCategories)

categoryRouter.get('/:id', getCategoryById)

categoryRouter.post('/', createCategory)

categoryRouter.put('/:id', updateCategoryById)

categoryRouter.delete('/:id', deleteCategoryById)

export default categoryRouter