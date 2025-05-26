import './Resume.css';

function Resume() {
  return (
    <div id='resumeContainer'>
      <div id='resume' className="container">
        <div className="header">
          <h1>ANDRES ALBORNOZ</h1>
          <p>Orlando, FL ⧫ (407) 318-0321 ⧫ <a href="mailto:aalborgil002@gmail.com">aalborgil002@gmail.com</a> ⧫ <a href="https://www.linkedin.com/in/a-albornoz/">LinkedIn</a> ⧫ <a href="https://github.com/AndresAlbornozgil">GitHub</a></p>
        </div>
        <hr />

        <div className="section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>
            A versatile professional with a background in Psychology and over a decade of experience in sales and marketing across Real Estate, Insurance, Retail, SaaS, and Education. Completed a 24-week intensive full-stack development program focused on modern web technologies. Solution-oriented and adaptable, with a unique blend of technical proficiency and human-centered insight. Strong understanding of user behavior, combined with business acumen and technical skills to deliver innovative and intuitive solutions.
          </p>
        </div>

        <div className="section">
          <h2>TECHNICAL SKILLS</h2>
          <p>JavaScript, HTML5, CSS3, Python | React.js, Handlebars.js, Bootstrap, Tailwind CSS, jQuery | Node.js, Express.js, REST APIs, GraphQL | PostgreSQL, MongoDB, Sequelize, Mongoose | Git, GitHub, Render, Postman | Agile, MVC, CRUD, Responsive Design</p>
        </div>

        <div className="section">
          <h2>CERTIFICATIONS</h2>
          <ul>
            <li>Google IT Support Professional Certificate</li>
            <li>Codecademy Computer Science Career Path</li>
          </ul>
        </div>

        <div className="section">
          <h2>EDUCATION</h2>
          <p><strong>University of Central Florida</strong> — Software Development Bootcamp <span className="date">Graduated September 2024</span></p>
          <p><strong>University of Central Florida</strong> — B.S. in Psychology <span className="date">Graduated August 2016</span></p>
        </div>

        <div className="section">
          <h2>WORK EXPERIENCE</h2>
          <p><strong>808 MultiMedia</strong> — Junior Software Developer <span className="date">June 2024 – Present</span></p>
          <ul>
            <li>Collaborated on real-world software projects with guidance from mentors.</li>
            <li>Refactored existing code to improve clarity and performance.</li>
            <li>Updated documentation and contributed to technical team discussions.</li>
          </ul>

          <p><strong>Sales & Marketing Consultant</strong> <span className="date">2011 – Present</span></p>
          <ul>
            <li>Delivered results-driven sales and marketing strategies across multiple industries.</li>
            <li>Created and executed outreach campaigns and client engagement strategies.</li>
            <li>Maintained up-to-date knowledge on trends and certifications in multiple sectors.</li>
          </ul>
        </div>

        <div className="section">
          <h2>PROJECT EXPERIENCE</h2>
          <p><strong>Mood-Sync</strong> — <a href="https://github.com/Mtduffey36/mood-sync">GitHub Repo</a></p>
          <p>Mental health tracking app built with MVC architecture. Features include mood logging, authentication, data visualization. Built with Node.js, Express, PostgreSQL, Sequelize, Handlebars, Bootstrap.</p>

          <p><strong>Hair & Co</strong> — <a href="https://github.com/Mtduffey36/hair-and-co">GitHub Repo</a></p>
          <p>Salon appointment booking system with admin and client views. Built using React.js, Tailwind, Node.js, GraphQL, MongoDB.</p>

          <p><strong>OUTLets</strong> — <a href="https://github.com/fsfgroup8/OUTlets">GitHub Repo</a></p>
          <p>Event discovery platform using JavaScript, Bootstrap, HTML, and third-party APIs. Focused on mobile-first, responsive design and accessibility.</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
