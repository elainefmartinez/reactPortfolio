import React from "react";
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import About from './components/pages/AboutMe';
import Contact from'./components/pages/Contact';
import Portfolio from'./components/Project';
import Resume from './components/pages/Resume';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Navbar/>
        <Routes>

          <Route path="/" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
         <Footer/>

      </Router>
    </div>
  );
}

export default App;
