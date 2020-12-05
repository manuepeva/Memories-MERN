import axios from 'axios'

const url = 'https://pure-ravine-43218.herokuapp.com/posts'

export const fetchPost = () => axios.get(url)

export const createNewPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)

export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
