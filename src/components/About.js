import '../styles/About.css'

const About = () => {
    return (
      <section className='bio'>
        <section>
          <h1 className='aboutMe'>About Me</h1>
        </section>
        <section>
          <p>
          I grew up in Eugene, Oregon and found myself with a desire to expand my horizons a few years after college, having attended college in my hometown. This brings me to today, where I now live in one of the tech capitols of the world in Seattle, Washington. 
            I've always had a fondness for computer sciences having gotten my first taste in an intro class in highschool. I've decided now, at the age of 31, to pursue this interest as a full-time career. This profile contains a few samples of individual and group work I've 
            done while attending a full-stack development bootcamp. You will also find links to my GitHub, LinkedId, and resume included.
          </p>
          <img src="./public/images/korey2.png" alt='korey' />
        </section>
      </section>
    );
  };
  
  export default About;