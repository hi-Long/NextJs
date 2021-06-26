import React, { FC } from "react"
import Link from 'next/link'
import Logo from "./logo"

import classes from './main-navigation.module.css'

const MainNavigation: FC<{}> = props => {

    return <header className={classes.header}>
        <Link href='/'>
            <a><Logo></Logo></a>
        </Link>
        <nav>
            <ul>
                <li><Link href='/posts'>Posts</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation