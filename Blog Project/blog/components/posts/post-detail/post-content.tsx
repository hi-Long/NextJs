import PostHeader from "./post-header"
import classes from './post-content.module.css'
import ReactMarkdown from "react-markdown"
import { FC } from "react"
import Image from "next/image"
import Post from "../../../models/Post"
import { Prism } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostContent: FC<{ post: Post }> = props => {
    const imagePath = `/images/posts/${props.post.image}`

    const customRenderers = {
        paragraph(paragraph) {
            const { node } = paragraph
            if (node.children[0].type === 'image') {
                const image = node.children[0]
                return <div className={classes.image}>
                    <Image src={`/images/posts/${image.url}`} alt={image.alt} width={600} height={300}></Image>
                </div>
            }
            return <p>{paragraph.children}</p>
        },
        code(code) {
            const { language, value } = code
            return <Prism language={language} style={atomDark} children={value}></Prism>
        }
    }

    return <article className={classes.content}>
        <PostHeader title={props.post.title} image={imagePath}></PostHeader>
        <ReactMarkdown renderers={customRenderers}>
            {props.post.content}
        </ReactMarkdown>
    </article >
}

export default PostContent