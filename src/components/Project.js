import '../styles/Project.css'

import dayplanner from "../images/Dayplanner.PNG"
import jsquiz from "../images/javascriptquiz.png"
import teampro from "../images/teamprofilegenerator.png"
import techblog from "../images/techblog.png"


const Portfolio = () => {
    return (
      <section className='portfolio'> 
        
          <h1>Portfolio</h1>
         
          <div className='imgdiv'>
            <img className='img' src={dayplanner} alt='dayplanner' />
          </div>
          
          <div className='imgdiv'>
            <img className='img' src={teampro} alt='team profile generator' />
          </div>

          <div className='imgdiv'>
            <img className='img' src={jsquiz} alt='JavaScript Quiz' />
          </div>

          <div className='imgdiv'>
           <img className='img' src={techblog} alt='Tech Blog' />
          </div>
        
      </section>
    );
  };
  
  export default Portfolio;