import './AboutMe.css';

function AboutMe() {
  

    return (
      <div>
      <div id='aboutme-container' className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-lg-6">
        <h1 id='aboutMeTitle' className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Hello, I'm Andres</h1>
        <strong><p id='aboutMeParagraph' className="lead">A Full-Stack Web Developer passionate about crafting meaningful experiences. Whether it's designing intuitive user interfaces or building robust back-end systems, I'm all about bringing ideas to life on the web.</p></strong>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
        <img id='portfolio-picture' src="src\assets\images\my-picture.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="450" loading="lazy" />
      </div>
    </div>
  </div>
  </div>
    )
  }
  
  export default AboutMe
  