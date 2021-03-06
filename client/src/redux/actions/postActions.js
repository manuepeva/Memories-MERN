import * as api from '../../api'
import {createNewPost} from '../../api'
import {fetchPost} from '../../api'
import {CREATE, FETCH_ALL, UPDATE, DELETE, LIKE} from '../types'
// Actions Creators 
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await fetchPost()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const createNPost = (post) => async (dispatch) => {
    console.log(post, 'post from actions')
    try {
        const {data} = await createNewPost(post)
        console.log(data, 'data after sending')
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) =>{
    try {
        const { data } =  await api.updatePost(id, post)
        console.log(id, 'from actions')
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({
            type: DELETE,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id)
        dispatch({
            type: LIKE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}