import React, { useState } from "react";
import Navbar from "../components/navbar";
import About from "./AboutMe";
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './components/Projects';
import './Portfolio.css';


function PortfolioContainer ()  {
   const [currentPage, setCurrentPage] = useState('About');

   const renderPage =() => {
    if (currentPage === "About") {
        return <About/>;
    }
    if (currentPage ==="Contact") {
        return<Contact/>;
    }
    if (currentPage === "Portfolio") {
        return<Projects/>;
    }
    return <Resume/>

 };


 const handlePageChange =(page) => setCurrentPage(page);

 return (
    <div>
        <Navbar currentPage ={currentPage} handlePageChange ={handlePageChange} />
        {renderPage}
    </div>
 )

}

export default PortfolioContainer;
