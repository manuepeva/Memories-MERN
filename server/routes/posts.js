import express from 'express'
import {getPosts, createPost} from '../controllers/postsControllers.js'
const router = express.Router()

// First route
router.get('/', getPosts)


router.get('/', createPost)

export default router;