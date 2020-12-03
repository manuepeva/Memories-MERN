import express from 'express'
import {getPosts, createPost, updatePost} from '../controllers/postsControllers.js'
const router = express.Router()

// First route
router.get('/', getPosts)


router.post('/', createPost)

router.patch('/:id', updatePost)

export default router;