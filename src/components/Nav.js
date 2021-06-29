import { useState,useEffect } from 'react'
import '../styles/nav.css'
import netflixLogo from '../assets/netflix_logo.png'
import netflixAvatar from '../assets/netflix_avatar.png'

const Nav = () => {
    const [show,handleShow] =  useState('')
    useEffect(() => {
        window.addEventListener("scroll",()=>{ // check if double quote is needed for event nam
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <nav className= {`nav ${show && 'nav_bg'}`}>
            <img 
            src={netflixLogo}
            alt="Netflix Logo" 
            className="nav__logo" />
            
            <img 
            src={netflixAvatar}
            alt="Netflix Avatar" 
            className="nav__avatar" />
            
        </nav>
    )
}

export default Nav
