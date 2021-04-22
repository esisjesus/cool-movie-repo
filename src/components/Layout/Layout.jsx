import React from 'react'
import Navbar from '../navbar/navbar'

export default function Layout({children}) {
    return (
        <React.Fragment>
            <Navbar/>
            <main>{children}</main>
        </React.Fragment>
    )
}
