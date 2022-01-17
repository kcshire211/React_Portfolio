import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

    return (
      <div className="App">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        {/* <About />
        <Portfolio />
        <Contact />
        <Resume /> */}
        <Footer />
      </div>
    );
  };
  
  export default App;