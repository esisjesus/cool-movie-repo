import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../Footer/Footer'

export default function Layout({children}) {
    return (
        <React.Fragment>
            <Navbar/>
                <main>{children}</main>
            <Footer/>
        </React.Fragment>
    )
}
