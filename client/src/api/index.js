import axios from 'axios'

const url = 'http://localhost:1000/posts'

export const fetchPost = () => axios.get(url)

export const createNewPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
