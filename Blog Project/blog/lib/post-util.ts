import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../models/Post'

const postsDir = path.join(process.cwd(), 'posts')

export const getPostData = (postIdentifier: string) => {
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDir, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContent)

    const postData: Post = {
        slug: postSlug,
        ...data,
        content: content
    }

    return postData
}

export const getPostFiles = () => {
    return fs.readdirSync(postsDir)
}

export const getAllPosts = () => {
    const postFiles: string[] = getPostFiles()
    const allPosts: Post[] = postFiles.map((p: string) => getPostData(p)).sort((a, b) => a.date > b.date ? -1 : 1)
    return allPosts
}

export const getFeaturedPosts = () => {
    const allPosts: Post[] = getAllPosts()
    const featuredPosts = allPosts.filter((p: Post) => p.isFeatured)
    return featuredPosts
}