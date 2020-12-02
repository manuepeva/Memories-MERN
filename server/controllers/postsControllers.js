import postMessage from '../models/postsMessage.js'

export const getPosts = async (req, res) => {
    try {
        const PostMessages = await postMessage.find()
        console.log(PostMessages)
        res.status(200).json(PostMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
        console.log(error)
    }
}
export const createPost = async (req, res) =>{
    const post = req.body

    const newPost = new postMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}