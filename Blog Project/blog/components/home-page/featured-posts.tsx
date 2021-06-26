import { FC } from 'react'
import Post from '../../models/Post'
import PostGrid from '../posts/posts-grid'
import classes from './featured-post.module.css'

const FeaturedPosts: FC<{ posts: Post[] }> = props => {
    return <section className={classes.latest}>
        <h2>Featured Posts</h2>
        <PostGrid posts={props.posts}></PostGrid>
    </section>
}

export default FeaturedPosts