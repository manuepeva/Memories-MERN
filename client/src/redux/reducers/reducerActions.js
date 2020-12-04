import {
FETCH_ALL,
CREATE,
UPDATE
} from '../types'
export default (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...posts, action.payload]
        case UPDATE:
            return 
        default:
        return posts
    }
}