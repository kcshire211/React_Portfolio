import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


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