import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import "./Styles/App.scss"
import "./Styles/Header.scss"
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import "./Styles/Home.scss"
import Footer from './Components/Footer'
import "./Styles/Footer.scss"
import "./Styles/Contact.scss"
import Contact from './Components/Contact'
import Services from './Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
    {/* <Contact/> */}
      

    </>
  )
}

export default App
