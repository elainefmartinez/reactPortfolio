import React from 'react';
import './navbar.css';
import photo from '../assets/Elaine.JPG'
import {Link} from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src ={photo} alt="headshot" className='headshot'/>
            <div className='menu'></div>
            <Link className='menu'> About Me </Link>
            <Link className='menu'> Contact </Link>
            <Link className='menu'> Portfolio </Link>
            <Link className='menu'> Resume </Link>



        </nav>
    )
}
export default Navbar
