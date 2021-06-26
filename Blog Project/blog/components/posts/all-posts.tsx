import React, { FC } from 'react';
import Post from '../../models/Post';
import classes from './all-posts.module.css';
import PostGrid from './posts-grid';

const AllPosts: FC<{ posts: Post[] }> = props => {
    return <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostGrid posts={props.posts}></PostGrid>
    </section>
}

export default AllPosts