import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import React, { FC, Fragment } from "react"
import MainNavigation from "./main-navigation"

const Layout: FC<{}> = props => {
    return <Fragment>
        <MainNavigation></MainNavigation>
        <main>{props.children}</main>
    </Fragment>
}

export default Layout