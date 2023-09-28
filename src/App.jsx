import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/Skill'
import Projects from './Components/Projects'
import Certificate from './Components/Certificate'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import FooterLast from './Components/FooterLast'
import './App.css'


function App() {
  return (
    <div className='App'>
     <Header/>
     <Home/>
     <About/>
     <Skill/>
     <Projects/>
     <Certificate/>
     <Contact/>
     <Footer/>
     <FooterLast/>
    </div>
  )
}

export default App
