import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Portfolio from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";


const App = () => {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </div>
    );
  };
  
  export default App;