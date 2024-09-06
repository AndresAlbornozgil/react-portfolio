import './AboutMe.css';

function AboutMe() {
  

    return (
      <div id='aboutme-container' className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-lg-6">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Andres Albornoz</h1>
        <p className="lead">I'm a Full-Stack Web Developer passionate about crafting meaningful online experiences. Whether it's designing intuitive user interfaces or building robust back-end systems, I'm all about bringing ideas to life on the web.</p>
      </div>
      <div className="col-10 col-sm-8 col-lg-6">
        <img id='portfolio-picture' src="src\assets\images\my-picture.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
    </div>
  </div>
    )
  }
  
  export default AboutMe
  