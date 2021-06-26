import Image from 'next/image'
import { FC } from 'react'
import classes from './post-header.module.css'

const PostHeader: FC<{ title: string, image: string }> = props => {
    const { title, image } = props

    return <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150}></Image>
    </header>
}

export default PostHeader