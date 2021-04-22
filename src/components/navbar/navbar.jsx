import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (
        <>
            <header className="container-fluid navbar-expand-md  bg-secondary">
                <nav className="row justify-content-evenly navbar navbar-expand-md navbar-secondary bg-secondary text-primary">
                    <div className="col-1 ">
                        <Link to="/" className="navbar-brand text-decoration-none">
                            <FontAwesomeIcon icon={['fas', 'couch']} size="lg"/> <strong>CMR</strong>
                        </Link>
                    </div>
                    <div className="col-7 collapse navbar-collapse ml-4" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="navbar-item">
                                <Link className="nav-link"><FontAwesomeIcon icon={['fas', 'film']} size="sm"/>  Movies</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link"><FontAwesomeIcon icon={['fas', 'tv']} size="sm"/>  TV Shows</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link"><FontAwesomeIcon icon={['fas', 'globe-americas']} size="sm"/>  Community</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link"><strong>Sign In</strong></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="d-md-none col-1">
                        <FontAwesomeIcon icon={['fas', 'bars']} size="lg"/>
                    </div>
                </nav>
            </header>
        </>
    )
}
