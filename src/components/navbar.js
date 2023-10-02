import React from 'react';
import './navbar.css';
import photo from '../assets/Elaine.JPG'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src ={photo} alt="headshot" className='headshot'/>
            <div className="menu"></div>
                <Link className="link" to="/"> About Me </Link>
                <Link className="link" to ="/contact"> Contact </Link>
                <Link className= "link" to ="/portfolio"> Portfolio </Link>
                <Link className= "link" to ="/resume"> Resume </Link>

        </nav>
    )
}
export default Navbar;
