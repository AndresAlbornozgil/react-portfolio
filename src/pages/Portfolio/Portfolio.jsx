import "./Portfolio.css";
import project from "../../assets/images/under-construction.jpg";
import airplane from "../../assets/images/steampunk-city-airplane.jpg";
import gears from "../../assets/images/steampunk-gears.jpg";
import Project from "../../components/Project/Project";
import moodsync from "../../assets/images/projects/Mood-Sync.jpg";
import outlets from "../../assets/images/projects/Outlets.jpg";


function Portfolio() {
  return (
    <div>
      <img id="airplane" src={airplane} alt="Image of airplane" />
      <div id="projects" className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <Project image={outlets} description="Welcome to OUTLets, the perfect place to find a new event to attend in your area." href="https://github.com/AndresAlbornozgil/OUTlets"/>
            </div>
            <div className="col">
              <Project image={moodsync} description="Mood-Sync is an application used to track patterns in users mental health." href="https://github.com/AndresAlbornozgil/mood-sync"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
            <div className="col">
              <Project image={project} description="Coming soon" href="https://example.com"/>
            </div>
          </div>
        </div>
      </div>
      <img
        id="gears"
        src={gears}
        className="d-block mx-lg-auto img-fluid"
        alt="Image of gears"
        width="100%"
        height="20px"
        loading="lazy"
      ></img>
    </div>
  );
}

export default Portfolio;
