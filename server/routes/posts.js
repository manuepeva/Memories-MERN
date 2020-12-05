import express from 'express'
import {getPosts, createPost, updatePost, deletePost} from '../controllers/postsControllers.js'
const router = express.Router()

// First route
router.get('/', getPosts)

router.post('/', createPost)

router.patch('/:id', updatePost)

router.delete('/:id', deletePost)

export default router;