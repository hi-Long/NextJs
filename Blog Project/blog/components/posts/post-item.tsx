import Link from "next/link";
import Image from "next/image";
import Post from '../../models/Post'
import classes from './post-item.module.css'
import { FC } from "react";

const PostItem: FC<{ post: Post }> = props => {
    const { title, image, excerpt, date, slug } = props.post

    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const imagePath = `/images/posts/${image}`
    console.log(imagePath)

    return <li className={classes.post}>
        <Link href={`/posts/${slug}`}>
            <a>
                <div className={classes.image}>
                    <Image src={imagePath} alt='title' width={300} height={200} layout='responsive'></Image>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>
}

export default PostItem