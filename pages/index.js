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
            <div className="slide">
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
            </div>
            <div className="content">
              <div className="titles">
                <div className="subtitle">Full-Stack Web Developer - AI Integration Specialist</div>
                <h2 className="title">Everaldo Neto</h2>
              </div>
              <div className="description">
                <p>
                  Passionate Full-Stack Developer and AI Integration Specialist from Recife, Brazil, 
                  with over three years of experience in building scalable web applications using 
                  Angular, React, Django, Node.js, and TensorFlow. Proficient in creating dynamic, 
                  responsive, and AI-driven solutions.
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
                  Experience <strong>3+ Years</strong>
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
          <div className="m-titles">
            <h2 className="m-title">About Me</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
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
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              <div className="profile-box">
                <div className="text">
                  <p>
                    My name is Everaldo Neto. I am a Full-Stack Web Developer and AI Integration 
                    Specialist from Recife, Brazil, with over three years of experience in designing 
                    and building dynamic, scalable, and responsive web applications.
                  </p>
                  <p>
                    I am proficient in front-end technologies like Angular, React, and Tailwind CSS, 
                    as well as back-end frameworks such as Django, Flask, and Node.js. I specialize 
                    in integrating AI models using TensorFlow, Pandas, and NumPy to create intelligent, 
                    user-centered solutions.
                  </p>
                  <p>
                    I’m an advanced English speaker, fluent in Portuguese, and have intermediate Spanish 
                    proficiency. I’m passionate about agile methodologies like Scrum and am open to 
                    relocation abroad to contribute to innovative projects.
                  </p>
                  <a href="#contact-section" className="btn">
                    <span>Contact Me</span>
                  </a>
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
          <div className="m-titles">
            <h2 className="m-title">My Resume</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-11 vertical-line">
              <div className="text">
                <p>
                  Full-Stack Web Developer and AI Integration Specialist from Recife, Brazil, with over 
                  three years of experience in building scalable, responsive, and AI-driven web applications. 
                  Proficient in Angular, React, Django, Node.js, and TensorFlow. Advanced English speaker, 
                  experienced in Scrum methodologies, and available for relocation abroad.
                </p>
              </div>
              <div className="skills-items">
                <div className="p-title">SKILLS</div>
                {[
                  { name: "HTML", value: 95 },
                  { name: "CSS", value: 90 },
                  { name: "JavaScript", value: 85 },
                  { name: "Angular", value: 80 },
                  { name: "React", value: 75 },
                  { name: "Python", value: 85 },
                  { name: "Django", value: 80 },
                  { name: "Node.js", value: 75 },
                  { name: "TensorFlow", value: 70 },
                  { name: "MySQL", value: 80 },
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
              <div className="p-title">SERVICES</div>
              <div className="services-items">
                {[
                  { icon: "fab fa-chrome", title: "Web Development", desc: "Creating scalable and responsive websites with Angular, React, and Tailwind CSS." },
                  { icon: "fas fa-server", title: "Back-end Development", desc: "Building secure APIs using Django, Flask, Node.js, and PHP (Laravel, CodeIgniter)." },
                  { icon: "fas fa-database", title: "Database Management", desc: "Optimizing MySQL, PostgreSQL, and MongoDB databases for performance." },
                  { icon: "fas fa-brain", title: "AI Integration", desc: "Integrating AI models with TensorFlow for intelligent, data-driven applications." },
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
                    </div>
                  </div>
                ))}
              </div>
              <div className="history-left">
                <div className="history-items">
                  <div className="p-title">EDUCATION</div>
                  <div className="history-item">
                    <div className="date">2018 - 2025</div>
                    <div className="name">Bachelor’s in Information Systems</div>
                    <div className="subname">Federal Rural University of Pernambuco (UFRPE)</div>
                  </div>
                </div>
                <div className="history-items">
                  <div className="p-title">PROJECTS</div>
                  <div className="history-item">
                    <div className="name">LACTOSAFE</div>
                    <div className="text">
                      <p>
                        Developed a web application for lactose intolerance management, with a Python (Flask) 
                        back-end and TensorFlow for AI-driven personalized recommendations. Features include 
                        user authentication, profile management, and intelligent recipe search, serving 500+ active users.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div className="p-title">EXPERIENCE</div>
                  <div className="history-item">
                    <div className="date">August 2022 - Present</div>
                    <div className="name">Ser Digital</div>
                    <div className="subname">Front-End Web Developer</div>
                    <div className="text">
                      <p>
                        - Developed and maintained scalable systems with PHP (CodeIgniter, Laravel), JavaScript (React, jQuery), and responsive UIs using HTML, CSS, and Bootstrap. <br />
                        - Optimized application performance by 25% through efficient code and database management. <br />
                        - Built and integrated RESTful APIs and third-party services for enhanced functionality. <br />
                        - Automated workflows using Docker, Git, and CI/CD pipelines. <br />
                        - Applied Scrum methodologies to ensure timely project delivery in agile environments. <br />
                        - Collaborated with cross-functional teams to deliver high-performance, user-centered solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clear" />
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
          <div className="m-titles">
            <h2 className="m-title">My Projects</h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              <div className="text">
                <p>
                  A collection of my favorite projects, including AI-driven applications and scalable web solutions, 
                  built with modern technologies like React, Angular, Django, and TensorFlow.
                </p>
              </div>
            </div>
          </div>
          <ProjectIsotop />
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
};
export default Index;