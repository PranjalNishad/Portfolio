import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, FileDown, ExternalLink } from "lucide-react";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Bee Information Website",
      desc: "Educational website about bees and wasps with clean UI built using HTML, CSS, and JavaScript.",
      img: "/projects/bee.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://waspinformation-website.vercel.app/",
      code: "https://github.com/PranjalNishad/Bee-website",
    },
    {
      title: "ShopEasy – E-commerce Website",
      desc: "A fully responsive React-based e-commerce site with category filters, product search, and cart UI.",
      img: "/projects/shopeasy.png",
      tags: ["React", "CSS", "Frontend"],
      demo: "https://shopeasy-website.vercel.app/",
      code: "https://github.com/PranjalNishad/ShopEasy---Ecommerce-website",
    },
    {
      title: "Order Summary Card UI",
      desc: "Frontend Mentor challenge – a modern responsive order summary card.",
      img: "/projects/order-summary.png",
      tags: ["HTML", "CSS"],
      demo: "https://order-summary-card-ui.vercel.app/",
      code: "https://github.com/PranjalNishad/Order-Summary-Card-UI",
    },
    {
      title: "Simple Login Page",
      desc: "A minimal login and registration UI built using HTML and CSS.",
      img: "/projects/login.png",
      tags: ["HTML", "CSS"],
      demo: "https://simple-login-page-ecru.vercel.app/",
      code: "https://github.com/PranjalNishad/Simple-Login-Page",
    },
    {
      title: "Weather App",
      desc: "Weather forecast app using OpenWeather API and responsive design.",
      img: "/projects/weather.png",
      tags: ["JavaScript", "API", "HTML/CSS"],
      demo: "https://weather-app-beige-eta-62.vercel.app/",
      code: "https://github.com/PranjalNishad/Weather-App-",
    },
    {
      title: "College Chatbot",
      desc: "Interactive chatbot for college-related queries built using JavaScript.",
      img: "/projects/chatbot.png",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "#",
      code: "https://github.com/PranjalNishad/College-chatbot",
    },
  ];

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB",],
    programming: ["Python", "Java (Basics)", "C/C++ (Basics)"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS Basics"],
  };

  return (
    <div className="app dark">
      {/* Navbar */}
      <header className="navbar glass">
        <h1 className="logo">
          Pranjal <span>Nishad</span>
        </h1>
        <nav className={menuOpen ? "nav active" : "nav"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-text">
            <h2>
              Hi, I'm <span>Pranjal Nishad</span>
            </h2>
            <h4 className="hero-subtitle">
              Full-Stack Developer | B.Tech CSE Student | Tech Enthusiast
            </h4>
            <p>
              A passionate <strong>Computer Science Engineering student</strong> who loves transforming creative
              ideas into interactive web experiences. I specialize in modern frontend
              frameworks like <strong>React.js</strong> and have experience with backend tools like
              <strong> Node.js</strong> and <strong>MongoDB</strong>.
            </p>
            <p>
              I believe in continuous learning, building real-world projects, and
              creating solutions that are not only functional but also beautiful.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn">
                Explore My Work
              </a>
              <a href="#resume" className="btn-outline">
                Download Resume
              </a>
            </div>
          </div>
          <motion.div className="profile-pic-container" whileHover={{ scale: 1.05 }}>
            <img src="/profile.jpeg" alt="Pranjal Nishad" className="profile-pic" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <h3>About Me</h3>
        <p className="section-subtitle">Who I am and what I do</p>
        <div className="about-container">
          <p>
            I’m <strong>Pranjal Nishad</strong>, a dedicated and ambitious
            <strong> B.Tech Computer Science student</strong> at
            <strong> KIPM Institute of Information and Technology</strong>. I’m passionate about designing and
            developing interactive, accessible, and responsive web applications.
          </p>
          <p>
            My main goal is to become a well-rounded software engineer with a strong
            focus on full-stack web development and UI/UX design. I love experimenting
            with modern tech tools and bringing ideas to life through clean code.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects section">
        <h3>My Projects</h3>
        <p className="section-subtitle">Featured works with live demos and source code</p>
        <div className="project-grid">
          {projects.map((p, i) => (
            <motion.div
              className="project-card glass"
              key={i}
              whileHover={{ scale: 1.04 }}
            >
              <div className="project-image">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-content">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <div className="links">
                  {p.demo !== "#" && (
                    <a
                      href={p.demo}
                      className="btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={p.code}
                    className="btn-outline-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills section">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="skill-list">
                {items.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume section">
        <h3>My Resume</h3>
        <p className="section-subtitle">Preview or download my resume below</p>
        <motion.div className="resume-card glass">
          <img
            src="/projects/resume-preview.png"
            alt="Resume Preview"
            className="resume-preview"
          />
          <div className="resume-buttons">
            <a href="/Pranjal_Resume.pdf" download className="btn">
              <FileDown size={18} /> Download Resume
            </a>
            <a
              href="/Pranjal_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <ExternalLink size={18} /> View Online
            </a>
          </div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact section">
        <h3>Contact Me</h3>
        <p className="section-subtitle">
          Let's connect for collaborations, internships, or opportunities
        </p>
        <div className="contact-container">
          <div className="contact-card">
            <i className="fa-solid fa-envelope"></i>
            <h4>Email</h4>
            <a href="mailto:nishadpranjal450@gmail.com">
              nishadpranjal450@gmail.com
            </a>
          </div>
          <div className="contact-card">
            <i className="fa-brands fa-github"></i>
            <h4>GitHub</h4>
            <a
              href="https://github.com/PranjalNishad"
              target="_blank"
              rel="noreferrer"
            >
              PranjalNishad
            </a>
          </div>
          <div className="contact-card">
            <i className="fa-brands fa-linkedin"></i>
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/pranjal-nishad-14bbb2357"
              target="_blank"
              rel="noreferrer"
            >
              pranjal-nishad
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} <strong>Pranjal Nishad</strong> | Built with ❤️
        using React
      </footer>
    </div>
  );
}
