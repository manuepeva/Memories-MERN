import * as api from '../../api'
import {createNewPost} from '../../api'
import {fetchPost} from '../../api'
import {CREATE, FETCH_ALL, UPDATE} from '../types'
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
        const {data } =  await api.updatePost(id, post)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error.message)
    }
}