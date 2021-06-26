import { GetStaticProps } from "next"
import { FC } from "react"
import PostContent from "../../components/posts/post-detail/post-content"
import PostHeader from "../../components/posts/post-detail/post-header"
import { getPostData, getPostFiles } from "../../lib/post-util"
import Post from "../../models/Post"

const PostDetailPage: FC<{ post: Post }> = props => {
    return <div>
        <PostContent post={props.post}></PostContent>
    </div>
}

export const getStaticProps: GetStaticProps = async context => {
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)

    return {
        props: { post: postData },
        revalidate: 600
    }
}

export const getStaticPaths = async () => {
    const postFiles = getPostFiles().map(f => f.replace(/\.md$/, ''))

    return {
        paths: postFiles.map(p => ({ params: { slug: p } })),
        fallback: true
    }
}

export default PostDetailPage