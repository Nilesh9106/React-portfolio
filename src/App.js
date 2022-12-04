
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Nav from './components/Nav'
import Project from "./components/Project";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Footer from './components/Footer';
import TimeLine from "./components/TimeLine";
import Skill from "./components/Skill";

  function App() {
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });
    return (
      <>
        <ThemeProvider theme={darkTheme}>
          <Nav />
          <Hero />
          <hr />
          <About />
          <hr />
          <TimeLine/>

          <br />
          <Skill/>
          <Project />
          <hr />
          <Contact />
          <Footer/>
        </ThemeProvider>
      </>
    );
  }

export default App;
