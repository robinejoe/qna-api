import Router from 'express'
import { Comment } from '../../models/comment'
import mongoose from 'mongoose'

export const createComment = async (req, res) => {
    const comment = new Comment({
        questionId: req.body.questionId,
        user: req.body.user,
        content: req.body.content
    })
    await comment.save()
    res.send(comment)
}

export const updateCommentById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const updatedCommentById = await Comment
        .findOneAndUpdate(
            {
                _id: req.params.id
            },
            req.body,
            { new: true }
        )
        if (!updatedCommentById) {
            return res.status(400).end()
        }
        res.status(200).json({ data: updatedCommentById })
}

export const deleteCommentById = async (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).end()
    }
    const removed = await Comment.findOneAndRemove(
        {
            _id: req.params.id
        })
    res.status(204).json()
} 
