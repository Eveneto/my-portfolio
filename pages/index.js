import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            {/* <div
              className="slide"
            >
              <img src="assets/images/profile.png" alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div> */}
            <div className="content">
              <div className="titles">
                <div className="subtitle">Front-end Web Developer</div>
                <h2 className="title">Everaldo Neto</h2>
              </div>
              <div className="description">
                <p>
                  Passionate Front-end Developer from Recife, Brazil, with over two years of 
                  experience in designing and building dynamic, scalable, and responsive web applications. 
                  Proficient in XAMPP, PHP, Python, and modern front-end technologies.
                </p>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/everaldo-neto">
                    <i aria-hidden="true" className="fab fa-linkedin" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Eveneto">
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Based in <strong>Recife, Brazil</strong>
                </li>
                <li>
                  Experience <strong>2+ Years</strong>
                </li>
                <li>
                  Education <strong>Bachelor’s in Information Systems (UFRPE)</strong>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
            {/* Section Heading */}
            <div className="m-titles">
              <h2 className="m-title">About Me</h2>
            </div>

            <div className="row row-custom">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
                {/* Section numbers */}
                <div className="numbers-items">
                  <div className="numbers-item">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-check-circle" />
                    </div>
                    <div className="num">11</div>
                    <div className="title">
                      Completed <br />
                      Projects
                    </div>
                  </div>
                  <div className="numbers-item">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-smile-beam" />
                    </div>
                    <div className="num">5</div>
                    <div className="title">
                      Happy <br />
                      Clients
                    </div>
                  </div>
                  {/* <div className="numbers-item">
                    <div className="icon">
                      <i aria-hidden="true" className="far fa-gem" />
                    </div>
                    <div className="num">N/A</div>
                    <div className="title">
                      Awards <br />
                      Won
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
                {/* Section Profile */}
                <div className="profile-box">
                  <div className="text">
                    <p>
                      My name is Everaldo Neto. I am a Front-end Web Developer from Recife, Brazil, 
                      with over two years of experience in designing and building dynamic, scalable, 
                      and responsive web applications.
                    </p>
                    <p>
                      I am proficient in XAMPP, PHP, Python, and cutting-edge front-end technologies 
                      like React and Bootstrap. I enjoy working with agile methodologies such as Scrum 
                      and am passionate about contributing to innovative projects.
                    </p>
                    <p>
                      I'm an advanced English speaker and open to relocation abroad. I’m always eager 
                      to learn new technologies and improve my skills in both front-end and back-end development.
                    </p>
                    <a href="#contact-section" className="btn">
                      <span>Contact Me</span>
                    </a>
                    {/* Optional Signature */}
                    {/* <div className="signature">
                      <img src="assets/images/signature.png" alt="signature" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2 className="m-title">My Resume</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* About Me */}
              <div className="text">
                <p>
                  Passionate Front-end Web Developer from Recife, Brazil, with over two years 
                  of experience in designing and building dynamic, scalable, and responsive web 
                  applications. Proficient in XAMPP, PHP, Python, and cutting-edge front-end 
                  technologies. Advanced English speaker with experience in Scrum methodologies, 
                  eager to contribute to innovative projects, and available for relocation abroad.
                </p>
              </div>

              {/* Skills */}
              <div className="skills-items">
                <div className="p-title">SKILLS</div>
                {[
                  { name: "PHP", value: 90 },
                  { name: "Python", value: 80 },
                  { name: "HTML", value: 95 },
                  { name: "CSS", value: 90 },
                  { name: "JavaScript", value: 85 },
                  { name: "Bootstrap", value: 80 },
                  { name: "React", value: 70 },
                  { name: "MySQL", value: 75 },
                ].map((skill, index) => (
                  <div key={index} className="skills-item">
                    <div className="name">{skill.name}</div>
                    <div className={`dots dots-${skill.value}`}>
                      <div className="dots-row">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <div key={i} className="dot" />
                        ))}
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">{skill.value}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="p-title">SERVICES</div>
              <div className="services-items">
                {[
                  { icon: "fab fa-chrome", title: "Web Development", desc: "Creating scalable and responsive websites with modern technologies." },
                  { icon: "fas fa-server", title: "Back-end Development", desc: "Building secure and efficient APIs using PHP, Python, and Node.js." },
                  { icon: "fas fa-database", title: "Database Management", desc: "Designing and optimizing relational and non-relational databases." },
                  { icon: "fas fa-code", title: "Automation & DevOps", desc: "Automating workflows with Docker, Git, and CI/CD pipelines." },
                ].map((service, index) => (
                  <div key={index} className="services-col">
                    <div className="services-item">
                      <div className="icon">
                        <i aria-hidden="true" className={service.icon} />
                      </div>
                      <div className="title">{service.title}</div>
                      <div className="text">
                        <p>{service.desc}</p>
                      </div>
                      <a href="#contact-section" className="lnk">
                        Order now
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="history-left">
                <div className="history-items">
                  <div className="p-title">EDUCATION</div>
                  <div className="history-item">
                    <div className="date">2018 - 2025</div>
                    <div className="name">Bachelor’s in Information Systems</div>
                    <div className="subname">Federal Rural University of Pernambuco (UFRPE)</div>
                  </div>
                </div>

                {/* Projects */}
                <div className="history-items">
                  <div className="p-title">PROJECTS</div>
                  <div className="history-item">
                    <div className="name">LACTOSAFE</div>
                    <div className="text">
                      <p>
                        Designed and implemented a back-end system to assist people with lactose 
                        intolerance. Developed a Python-based API with user authentication, 
                        recipe search, and database integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="history-right">
                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  <div className="history-item">
                    <div className="date">August 2022 - Present</div>
                    <div className="name">Ser Digital</div>
                    <div className="subname">Front-end Web Developer</div>
                    <div className="text">
                      <p>
                        - Designed and optimized scalable web applications using the XAMPP stack. <br />
                        - Configured Apache servers and managed MySQL/PostgreSQL databases. <br />
                        - Built responsive, user-centered interfaces with HTML, CSS, JavaScript, and Bootstrap. <br />
                        - Integrated APIs and implemented security measures for robust applications. <br />
                        - Automated workflows and developed back-end features using Python. <br />
                        - Applied Scrum methodologies to manage development processes and ensure project delivery. <br />
                        - Collaborated with cross-functional teams in agile environments to deliver high-performance solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Eveneto"
                className="btn"
              >
                <span>View GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
};
export default Index;
