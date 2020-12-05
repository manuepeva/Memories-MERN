import express from 'express'
import {getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/postsControllers.js'
const router = express.Router()

// First route
router.get('/', getPosts)

router.post('/', createPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)

router.patch('/:id/likePost', likePost)

export default router;