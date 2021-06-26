import React, { FC } from 'react'
import Post from '../../models/Post'
import classes from './posts-grid.module.css'
import PostItem from './post-item'

const PostGrid: FC<{ posts: Post[] }> = props => {
    const { posts } = props

    return <ul className={classes.grid}>
        {posts.map((p: Post) => <PostItem key={p.slug} post={p}></PostItem>)}
    </ul>
}

export default PostGrid