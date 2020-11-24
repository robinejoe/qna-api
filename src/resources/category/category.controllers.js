import Router from 'express'
import { Category } from '../../models/category'
import mongoose from 'mongoose'

export const getCategories = async (req, res) => {
    const categories = await Category.find()
    res.send(categories)
}

export const getCategoryById = async (req, res) => {
    const category = await Category.findOne({name: req.params.id})
    if(category === null) {
        return res.status(404).end()
    }
    res.send(category)
}

export const createCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name
    })
    await category.save()
    res.send(category)
}

export const updateCategoryById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const updatedCategoryById = await Category
        .findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (!updatedCategoryById) {
            return res.status(400).end()
        }
        res.status(200).json({ data: updatedCategoryById })
}

export const deleteCategoryById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const removed = await Category.findOneAndRemove(
        {
            _id: req.params.id
        })
    res.status(204).json()
} 