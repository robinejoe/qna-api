import Router from 'express'
import { Question } from '../../models/question'
import { Comment } from '../../models/comment'
import mongoose from 'mongoose'

export const getQuestions = async (req, res) => {
    const questions = await Question.find()
        .populate('category')
        .exec()
    res.send(questions)
}

export const createQuestion = async (req, res) => {
    const question = new Question({
        user: req.body.user,
        category: req.body.category,
        title: req.body.title,
        description: req.body.description
    })
    await question.save()
    res.send(question)
}

export const getQuestionById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const question = await Question.findOne({_id: req.params.id})
        .populate('category')
        .exec()
    if(question === null) {
        return res.status(404).end()
    }
    res.send(question)
}

export const getQuestionsByCategory = async (req, res) => {
    const questions = await Question.find({category: req.params.categoryid})
    res.send(questions)
}

export const updateQuestion = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const updatedQuestion = await Question
        .findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (!updatedQuestion) {
            return res.status(400).end()
        }
        res.status(200).json({ data: updatedQuestion })
}

export const deleteQuestion = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const removed = await Question.findOneAndRemove(
        {
            _id: req.params.id
        })
    res.status(204).json()
} 

export const getCommentsByQuestionId = async (req, res) => {
    const comments = await Comment.find({questionId: req.params.id})
    res.send(comments)
}

