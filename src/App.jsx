import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { HelmetProvider } from "react-helmet-async"
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import WhatsAppButton from "./components/WhatsAppButton"
import BackgroundAnimation from "./components/BackgroundAnimation"

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router>
          <div className="App">
            <Navbar toggleTheme={toggleTheme} />
            <BackgroundAnimation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
            <WhatsAppButton />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App

