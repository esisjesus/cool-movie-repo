import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Header() {
    return (
        <>
            <header className="container-fluid navbar-expand-md  bg-secondary">
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" >
                    <Navbar.Brand>
                        <Link to="/" className="text-decoration-none text-dark">
                            <FontAwesomeIcon icon={['fas', 'couch']} size="lg"/> <strong>CMR</strong>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle className="text-dark" aria-controls="responsive-navbar-nav"><FontAwesomeIcon icon={['fas', 'bars']} /></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto text-left">
                            <Link to='/' className="nav-link text-dark"><FontAwesomeIcon icon={['fas', 'film']} size="sm"/>  Movies</Link>
                            <Link to='/' className="nav-link text-dark"><FontAwesomeIcon icon={['fas', 'tv']} size="sm"/>  TV Shows</Link>
                            <Link to='/' className="nav-link text-dark"><FontAwesomeIcon icon={['fas', 'globe-americas']} size="sm"/>  Community</Link>
                        </Nav>
                        <Nav>
                            <Link to='/' className="nav-link text-dark text-left"><FontAwesomeIcon icon={['fas', 'user']} size="sm"/>  Sign In</Link>
                            <Link to='/' className="nav-link text-dark text-left"><strong>Create an Account</strong></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}
