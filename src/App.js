import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './pages/AboutMe';
import Portfolio from'./pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About/>}/> 
          <Route path="/" element={<Portfolio/>}/>
          {/* <Route path="/" element ={<Contact/>}/>
          <Route path="/" element ={<Resume/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
