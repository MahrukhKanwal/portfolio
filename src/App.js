import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import ReachMe from './components/ReachMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div  style={{width:"100%"}}  >
      
   <Navbar/>
   <Profile  />
      <AboutMe  />
      <Services />
      <Projects  />
      <Footer/>



    </div>
  );
}

export default App;
