const styles = {
  card: {
    marginLeft: 35,
    marginRight: 35,
    // background: '#e8eaf6',
    // color: 'teal',
  },
  heading: {
    // background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

const Contact = () => {
    return (
      <section style={styles.card}>
        <h1>Contact</h1>
        <h2>(541) 914-7458</h2>
        <button href="mailto: korey.cheshire@gmail.com">Email Me</button>
      </section>
    );
  };

  export default Contact;