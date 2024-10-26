import styles from './App.module.css';
import Navbar from "./components/Navbar/Navabar"
import HeroSection from "./components/HeroSection/HeroSection"
import About from "./components/About/About"
import Projects from './components/Projects/Projects';
import Footer from "./components/Footer/Footer"
import Experience from "./components/Experience/Experience"
function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
