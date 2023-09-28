import React from "react";
import './Portfolio.css';


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2 className='portfolioTitle'> Recent Projects</h2>
            <span className="description"> Below are links to some of my recent projects </span>
            <li>
                
            <h1> <a href= "https://github.com/elainefmartinez/e-commerce.git"> E-Commerce Back End</a></h1>
            <h1> <a href= "https://github.com/elainefmartinez/Note-Taker.git"> Note Taker</a></h1>   
            <h1> <a href= "https://github.com/elainefmartinez/readme-generator.git"> README generator</a></h1>
            <h1> <a href= "https://github.com/elainefmartinez/employee-tracker.git"> Employee Tracker</a></h1>
            </li>


        </section>
    )

}

export default Portfolio;
