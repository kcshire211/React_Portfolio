import '../styles/Resume.css'
import resume from "../images/CheshireResume.pdf"


const Resume = () => {
    return (
      <div className='resumeDiv'>
        <h1>Resume</h1>
        <a className='resume' href={resume}>Click here to view resume</a>
      </div>
    );
  };
  export default Resume;