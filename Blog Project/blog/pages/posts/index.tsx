import React, { FC } from "react"
import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/post-util"
import Post from "../../models/Post"

const AllPostPage: FC<{ posts: Post[] }> = props => {
    return <div>
        <AllPosts posts={props.posts}></AllPosts>
    </div>
}

export default AllPostPage

export const getStaticProps = async () => {
    const allPosts = getAllPosts()

    return ({
        props: { posts: allPosts }
    })
}