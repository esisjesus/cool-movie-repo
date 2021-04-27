import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Footer() {
    return (
        <>
            <footer className="container text-light mt-5 px-auto" style={{maxWidth: 400}}>
                <div className='row justify-content-center' >
                    <div className='col'><a className="text-decoration-none text-secondary" href="https//youtube.com"><FontAwesomeIcon icon={['fab', 'youtube']} size="lg"/></a></div>
                    <div className='col'><a className="text-decoration-none text-secondary" href="https//facebook.com"><FontAwesomeIcon icon={['fab', 'facebook']} size="lg"/></a></div>
                    <div className='col'><a className="text-decoration-none text-secondary" href="https//twitter.com"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg"/></a></div>
                    <div className='col'><a className="text-decoration-none text-secondary" href="https//twitch.com"><FontAwesomeIcon icon={['fab', 'twitch']} size="lg"/></a></div>
                    <div className='col'><a className="text-decoration-none text-secondary" href="https//instagram.com"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg"/></a></div>
                    <div className='col'><a className="text-decoration-none text-secondary" href="https//tiktok.com"><FontAwesomeIcon icon={['fab', 'tiktok']} size="lg"/></a></div>
                    <div className='col-12 mt-5'><span> An app developed by <a className="text-light" href="https://github.com/esisjesus"> <FontAwesomeIcon icon={['fab', 'github']} size="lg"/> github.com/esisjesus</a></span></div>
                    <div className='col-12 my-3'><span><a className="text-light" href="https://developers.themoviedb.org/"><img style={{width:50}} src="//www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="the movie database"/></a></span></div>
                </div>
            </footer>
        </>
    )
}
