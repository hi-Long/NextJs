import { FC } from "react"
import Image from 'next/image'

import classes from './hero.module.css'

const Hero: FC<{}> = props => {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/avatar.jpg' alt="An image showing Max" width={300} height={300}></Image>
        </div>
        <h1>Hi, I am Long</h1>
        <p>
            I blog about web dev - especially frameworks ...
        </p>
    </section>
}

export default Hero