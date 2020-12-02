import axios from 'axios'

const url = 'http://localhost:1000/posts'

export const fetchPost = () => axios.get(url)