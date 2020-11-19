import Router from 'express'
import { Question } from '../../models/question'

export const getQuestions = async (req, res) => {
    const questions = await Question.find()
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