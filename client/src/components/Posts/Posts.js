import React from 'react'
import Post from './Post/Post'
import makeStyles from './styles'

const Posts = () => {
    const classes = makeStyles()
    return (
        <div>
           <h1>POSTS</h1>
           <Post />
           <Post />
        </div>
    )
}

export default Posts
