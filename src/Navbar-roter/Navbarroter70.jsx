import React from 'react'
import './Navbar-roter1.css'
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player';
function Navbarroter70() {
    return (
        <>
            <br />
            <br />
            <article className='sahifalar'>
                <h1>O'xshahsh sahifalar</h1>
                <a className='H3' href="/">Bosh sahifaga qaytish</a>
                <br />




                <br />

            </article>
            <div>
               
                <ReactPlayer
                    url="https://youtu.be/I3kHuU5eW0Q"
                    width="100%"
                    height="560px"
                    controls={true}
                />
            </div>
        </>
    )
}

export default Navbarroter70