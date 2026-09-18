import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#home" className="logo">
          Topu<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="small-title">FULL-STACK DEVELOPER</p>

            <h1>
              Hi, I'm <span>Mahmudul Hasan Topu</span>
            </h1>

            <h2>Building modern web experiences.</h2>

            <p className="hero-text">
              I'm a CSE student at United International University and a
              passionate Full-Stack Developer focused on building clean,
              responsive, and user-friendly web applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>

              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-social">
              <a href="https://github.com/topu-00" target="_blank" rel="noreferrer">
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/topusorker/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/topu-00/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-glow"></div>

            <div className="image-box">
              <img src="/profile.jpeg" alt="Mahmudul Hasan Topu" />
            </div>

            <div className="floating-card">
              <span>✦</span>

              <div>
                <strong>MERN Stack</strong>
                <small>Full-Stack Developer</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Turning ideas into digital experiences.</h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm Mahmudul Hasan Topu, a Computer Science and Engineering
                student at United International University with a strong
                interest in Full-Stack Web Development.
              </p>

              <p>
                I enjoy creating responsive websites and web applications
                using modern technologies. My main focus is writing clean,
                maintainable code and building interfaces that are simple and
                enjoyable to use.
              </p>

              <p>
                Currently, I'm improving my skills in the MERN stack,
                TypeScript, databases, problem solving, and modern frontend
                development.
              </p>
            </div>

            <div className="about-info">
              <div>
                <span>Name</span>
                <strong>Mahmudul Hasan Topu</strong>
              </div>

              <div>
                <span>Education</span>
                <strong>CSE — United International University</strong>
              </div>

              <div>
                <span>Focus</span>
                <strong>Full-Stack Development</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>topusorker087@gmail.com</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p>TECH STACK</p>
            <h2>Tools I work with.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <span>01</span>
              <h3>Frontend</h3>
              <p>
                React.js, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind
                CSS
              </p>
            </div>

            <div className="skill-card">
              <span>02</span>
              <h3>Backend</h3>
              <p>
                Node.js, Express.js, PHP and REST API development for modern
                web applications.
              </p>
            </div>

            <div className="skill-card">
              <span>03</span>
              <h3>Database</h3>
              <p>
                MongoDB, MySQL and PostgreSQL for storing and managing
                application data.
              </p>
            </div>

            <div className="skill-card">
              <span>04</span>
              <h3>Programming</h3>
              <p>
                C/C++, Java, JavaScript and PHP with a focus on problem solving
                and application development.
              </p>
            </div>

            <div className="skill-card">
              <span>05</span>
              <h3>Tools</h3>
              <p>
                Git, GitHub, Figma, VS Code and other tools for efficient
                development.
              </p>
            </div>

            <div className="skill-card">
              <span>06</span>
              <h3>UI & Styling</h3>
              <p>
                Tailwind CSS and modern responsive design principles for clean
                user interfaces.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p>SELECTED WORK</p>
            <h2>Projects I've built.</h2>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div>
                <p className="project-number">01</p>
                <p className="project-type">WEB APPLICATION</p>

                <h3>DevStack Builder</h3>

                <p>
                  A developer stack builder that helps users explore
                  technologies and create their own development stack.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href="https://max-devstack-builder-2026.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <div className="project-card">
              <div>
                <p className="project-number">02</p>
                <p className="project-type">CONFERENCE WEBSITE</p>

                <h3>DevConf</h3>

                <p>
                  A modern developer conference website designed to present
                  event information, speakers, schedules and conference
                  details.
                </p>

                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href="https://topu-00.github.io/B14-Assignment-01-DevConf-2026/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <div className="project-card">
              <div>
                <p className="project-number">03</p>
                <p className="project-type">WEB PROJECT</p>

                <h3>E-Waste Manager</h3>

                <p>
                  A web project focused on presenting an organized solution for
                  managing and handling electronic waste.
                </p>

                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href="https://topu-00.github.io/Web-Project/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <div className="project-card">
              <div>
                <p className="project-number">04</p>
                <p className="project-type">UTILITY APP</p>

                <h3>Currency Converter</h3>

                <p>
                  A simple and responsive currency converter interface for
                  converting values between different currencies.
                </p>

                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>API</span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href="https://topu-00.github.io/currency-converter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <div className="project-card">
              <div>
                <p className="project-number">05</p>
                <p className="project-type">GAME</p>

                <h3>Rock Paper Scissors</h3>

                <p>
                  A simple interactive Rock Paper Scissors game with a clean
                  interface and browser-based gameplay.
                </p>

                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
              </div>

              <div className="project-links">
                <a
                  href="https://topu-00.github.io/rock-paper-scissors-Game/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="journey">
          <div className="section-heading">
            <p>DEVELOPMENT JOURNEY</p>
            <h2>Learning, building and growing.</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>STARTED</span>
              <h3>Programming Journey</h3>
              <p>
                Started learning programming fundamentals and building a strong
                foundation in computer science.
              </p>
            </div>

            <div className="timeline-item">
              <span>LEARNING</span>
              <h3>Web Development</h3>
              <p>
                Started building websites and learning HTML, CSS, JavaScript
                and modern frontend technologies.
              </p>
            </div>

            <div className="timeline-item">
              <span>BUILDING</span>
              <h3>React & Full-Stack</h3>
              <p>
                Moved into React, TypeScript, Node.js, Express.js and database
                technologies.
              </p>
            </div>

            <div className="timeline-item">
              <span>NEXT</span>
              <h3>Growing as a Developer</h3>
              <p>
                Continuing to build real-world projects and improve problem
                solving, system design and full-stack development skills.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="profiles">
          <div className="section-heading">
            <p>CODING PROFILES</p>
            <h2>Find me online.</h2>
          </div>

          <div className="profile-grid">
            <a
              href="https://github.com/topu-00"
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <span>GitHub</span>
              <strong>@topu-00 ↗</strong>
            </a>

            <a
              href="https://leetcode.com/u/topu-00/"
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <span>LeetCode</span>
              <strong>@topu-00 ↗</strong>
            </a>

            <a
              href="https://www.hackerrank.com/profile/topusorker087"
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <span>HackerRank</span>
              <strong>@topusorker087 ↗</strong>
            </a>

            <a
              href="https://judge.beecrowd.com/en/profile/502564"
              target="_blank"
              rel="noreferrer"
              className="profile-card"
            >
              <span>Beecrowd</span>
              <strong>Profile ↗</strong>
            </a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-box">
            <p>GET IN TOUCH</p>

            <h2>Have a project in mind?</h2>

            <p className="contact-text">
              I'm always interested in learning, collaborating and building
              useful digital experiences. Feel free to reach out.
            </p>

            <a
              href="mailto:topusorker087@gmail.com"
              className="primary-button"
            >
              Send Me an Email ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="footer-logo">
          Topu<span>.</span>
        </a>

        <p>Full-Stack Developer & CSE Student</p>

        <div className="footer-links">
          <a
            href="https://github.com/topu-00"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/topusorker/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:topusorker087@gmail.com">
            Email
          </a>
        </div>

        <p className="copyright">
          © 2026 Mahmudul Hasan Topu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
