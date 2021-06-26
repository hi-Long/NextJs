import React, { FC, Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from '../lib/post-util'
import Post from '../models/Post'
import styles from '../styles/Home.module.css'

const HomePage: FC<{ posts: Post[] }> = props => {

  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </Fragment>
  )
}

export const getStaticProps = async () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: { posts: featuredPosts }
  }
}

export default HomePage


