
import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .profile-page {
          min-height: 100vh;
          background: #070b12;
          color: #f8fafc;
          font-family: Arial, sans-serif;
          overflow-x: hidden;
        }

        /* ================= HERO ================= */

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 7%;
          position: relative;

          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(99, 102, 241, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 10% 80%,
              rgba(14, 165, 233, 0.1),
              transparent 30%
            ),
            #070b12;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            );

          background-size: 50px 50px;
        }

        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: auto;

          display: grid;
          grid-template-columns: 1.1fr 0.9fr;

          gap: 70px;
          align-items: center;

          position: relative;
          z-index: 2;
        }

        /* ================= HERO CONTENT ================= */

        .availability {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 8px 15px;

          border: 1px solid #334155;
          border-radius: 30px;

          color: #a5b4fc;
          background: rgba(99,102,241,0.08);

          font-size: 14px;
          margin-bottom: 25px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;

          background: #22c55e;

          box-shadow: 0 0 12px #22c55e;
        }

        .code-intro {
          color: #818cf8;
          font-family: monospace;
          font-size: 18px;
        }

        .hero h1 {
          font-size: clamp(48px, 6vw, 80px);
          line-height: 1;
          margin: 15px 0;
          letter-spacing: -3px;
        }

        .gradient-text {
          display: block;

          background: linear-gradient(
            90deg,
            #818cf8,
            #c084fc,
            #38bdf8
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero h2 {
          font-size: 32px;
          color: #cbd5e1;
          font-weight: 500;
        }

        .cursor {
          color: #818cf8;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        .hero-description {
          color: #94a3b8;
          font-size: 18px;
          line-height: 1.8;
          max-width: 650px;
        }

        /* ================= BUTTONS ================= */

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          padding: 14px 24px;

          border-radius: 10px;

          text-decoration: none;
          font-weight: bold;

          transition: all 0.3s ease;
        }

        .primary-btn {
          color: white;

          background: linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
          );

          box-shadow:
            0 10px 30px rgba(99,102,241,0.25);
        }

        .primary-btn:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 40px rgba(99,102,241,0.4);
        }

        .secondary-btn {
          color: #cbd5e1;

          border: 1px solid #334155;

          background: #0f172a;
        }

        .secondary-btn:hover {
          transform: translateY(-4px);

          border-color: #6366f1;
          color: white;

          box-shadow:
            0 10px 30px rgba(99,102,241,0.15);
        }

        /* ================= SOCIAL ================= */

        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 30px;
        }

        .social-links a,
        .footer-socials a {
          width: 42px;
          height: 42px;

          display: grid;
          place-items: center;

          border-radius: 10px;

          color: #94a3b8;

          background: #0f172a;
          border: 1px solid #1e293b;

          transition: all 0.3s ease;
        }

        .social-links a:hover,
        .footer-socials a:hover {
          color: white;
          border-color: #6366f1;

          transform: translateY(-4px);

          box-shadow:
            0 10px 25px rgba(99,102,241,0.2);
        }

        /* ================= PROFILE IMAGE ================= */

        .hero-visual {
          position: relative;
        }

        .profile-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;

          margin-bottom: 30px;
        }

        .profile-image {
          width: 230px;
          height: 230px;

          object-fit: cover;

          border-radius: 50%;

          display: block;

          border: 4px solid #6366f1;

          background: #0f172a;

          box-shadow:
            0 0 0 8px rgba(99,102,241,0.08),
            0 0 50px rgba(99,102,241,0.4);

          transition: all 0.4s ease;
        }

        .profile-image:hover {
          transform: scale(1.04);

          box-shadow:
            0 0 0 12px rgba(99,102,241,0.08),
            0 0 70px rgba(99,102,241,0.55);
        }

        /* ================= CODE WINDOW ================= */

        .code-window {
          max-width: 520px;
          margin: auto;

          border-radius: 16px;

          overflow: hidden;

          border: 1px solid #263244;

          background: #0f172a;

          box-shadow:
            0 30px 80px rgba(0,0,0,0.5);
        }

        .window-header {
          height: 50px;

          display: flex;
          align-items: center;

          gap: 20px;

          padding: 0 18px;

          border-bottom: 1px solid #1e293b;

          background: #0b1120;
        }

        .window-dots {
          display: flex;
          gap: 7px;
        }

        .window-dots span {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #475569;
        }

        .window-title {
          color: #64748b;

          font-size: 13px;
          font-family: monospace;
        }

        .code-content {
          padding: 28px;

          color: #cbd5e1;

          font-family: monospace;

          font-size: 14px;

          line-height: 1.9;
        }

        .code-content p {
          margin: 0;
        }

        .indent {
          padding-left: 25px;
        }

        .indent2 {
          padding-left: 50px;
        }

        .purple {
          color: #c084fc;
        }

        .green {
          color: #4ade80;
        }

        .orange {
          color: #fb923c;
        }

        .code-comment {
          color: #64748b;
          margin-top: 15px !important;
        }

        /* ================= FLOATING CARDS ================= */

        .floating-card {
          position: absolute;

          display: flex;
          align-items: center;

          gap: 8px;

          padding: 12px 16px;

          border-radius: 10px;

          border: 1px solid #334155;

          background: rgba(15,23,42,0.92);

          color: #cbd5e1;

          font-size: 13px;

          box-shadow:
            0 15px 35px rgba(0,0,0,0.4);
        }

        .floating-card svg {
          color: #818cf8;
        }

        .card-one {
          top: 20%;
          left: -35px;
        }

        .card-two {
          bottom: 15%;
          right: -25px;
        }

        /* ================= GENERAL SECTIONS ================= */

        .section {
          padding: 100px 7%;
          background: #0b1120;
        }

        .section-heading {
          max-width: 800px;
          margin: auto;
          text-align: center;
        }

        .section-label {
          color: #818cf8;

          font-family: monospace;

          font-size: 13px;

          letter-spacing: 2px;

          font-weight: bold;
        }

        .section h2 {
          font-size: clamp(32px, 4vw, 50px);
          margin: 15px 0;
        }

        /* ================= TECH ================= */

        .tech-grid {
          max-width: 1100px;

          margin: 50px auto 0;

          display: grid;

          grid-template-columns: repeat(6, 1fr);

          gap: 15px;
        }

        .tech-card {
          padding: 25px 10px;

          text-align: center;

          border: 1px solid #1e293b;

          border-radius: 12px;

          background: #0f172a;

          transition: all 0.3s ease;
        }

        .tech-card:hover {
          border-color: #6366f1;

          transform: translateY(-5px);

          box-shadow:
            0 15px 35px rgba(99,102,241,0.12);
        }

        .tech-icon {
          font-size: 30px;

          color: #818cf8;

          margin-bottom: 10px;
        }

        .tech-card span {
          color: #cbd5e1;
          font-size: 14px;
        }

        /* ================= ABOUT ================= */

        .about-section {
          padding: 100px 7%;
          background: #070b12;
        }

        .about-container {
          max-width: 1150px;

          margin: auto;

          display: grid;

          grid-template-columns: 0.8fr 1.2fr;

          gap: 70px;
        }

        .about-heading h2 {
          font-size: 48px;
          margin-top: 15px;
        }

        .about-heading h2 span {
          display: block;
          color: #818cf8;
        }

        .about-text {
          color: #94a3b8;

          font-size: 17px;

          line-height: 1.9;
        }

        /* ================= SERVICES ================= */

        .services-grid {
          max-width: 1150px;

          margin: 50px auto 0;

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 20px;
        }

        .developer-card {
          padding: 35px;

          min-height: 240px;

          border-radius: 16px;

          border: 1px solid #1e293b;

          background: #0f172a;

          transition: all 0.3s ease;
        }

        .developer-card:hover {
          border-color: #6366f1;

          box-shadow:
            0 20px 50px rgba(0,0,0,0.3);
        }

        .service-icon {
          width: 55px;
          height: 55px;

          display: grid;
          place-items: center;

          border-radius: 12px;

          background: rgba(99,102,241,0.12);

          color: #818cf8;

          font-size: 25px;

          margin-bottom: 20px;
        }

        .developer-card h3 {
          font-size: 21px;
        }

        .developer-card p {
          color: #94a3b8;

          line-height: 1.7;
        }

        /* ================= STATS ================= */

        .stats-section {
          padding: 70px 7%;

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          background: #0b1120;

          text-align: center;
        }

        .stat {
          padding: 20px;

          border-right: 1px solid #1e293b;
        }

        .stat strong {
          display: block;

          font-size: 42px;

          color: #818cf8;
        }

        .stat span {
          color: #64748b;
        }

        /* ================= CTA ================= */

        .cta-section {
          padding: 110px 7%;

          text-align: center;

          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.15),
              transparent 55%
            ),
            #070b12;
        }

        .cta-content {
          max-width: 800px;
          margin: auto;
        }

        .cta-content h2 {
          font-size: clamp(35px, 5vw, 60px);

          margin: 15px 0;
        }

        .cta-content h2 span {
          display: block;
          color: #818cf8;
        }

        .cta-content p {
          color: #94a3b8;

          line-height: 1.8;

          margin-bottom: 30px;
        }

        /* ================= FOOTER ================= */

        .developer-footer {
          padding: 40px 7%;

          border-top: 1px solid #1e293b;

          background: #05080d;

          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          flex-wrap: wrap;
        }

        .developer-footer strong {
          font-size: 24px;
        }

        .developer-footer strong span {
          color: #818cf8;
        }

        .developer-footer p {
          color: #64748b;

          margin: 5px 0 0;
        }

        .footer-socials {
          display: flex;
          gap: 10px;
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1000px) {
          .hero-container {
            grid-template-columns: 1fr;

            text-align: center;
          }

          .hero-content {
            margin: auto;
          }

          .hero-buttons,
          .social-links {
            justify-content: center;
          }

          .hero-visual {
            max-width: 650px;
            width: 100%;
            margin: auto;
          }

          .tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .about-container {
            grid-template-columns: 1fr;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
          }

          .card-one {
            left: 0;
          }

          .card-two {
            right: 0;
          }
        }

        @media (max-width: 600px) {
          .hero {
            padding: 80px 20px;
          }

          .hero h1 {
            font-size: 48px;
          }

          .hero h2 {
            font-size: 25px;
          }

          .hero-description {
            font-size: 15px;
          }

          .profile-image {
            width: 190px;
            height: 190px;
          }

          .code-content {
            padding: 18px;
            font-size: 11px;
          }

          .floating-card {
            display: none;
          }

          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats-section {
            grid-template-columns: 1fr;
          }

          .stat {
            border-right: none;

            border-bottom: 1px solid #1e293b;
          }

          .developer-footer {
            justify-content: center;

            text-align: center;
          }

          .footer-socials {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="profile-page">

        {/* ================= HERO ================= */}

        <section className="hero">

          <div className="hero-grid"></div>

          <div className="hero-container">

            <motion.div
              className="hero-content"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="availability">
                <span className="status-dot"></span>
                Available for opportunities
              </div>

              <p className="code-intro">
                &lt;hello world /&gt;
              </p>

              <h1>
                Hi, I'm
                <span className="gradient-text">
                  Akriti Sharma
                </span>
              </h1>

              <h2>
                Full Stack Developer
                <span className="cursor">_</span>
              </h2>

              <p className="hero-description">
                I build modern, responsive and scalable web
                applications with clean code and great user
                experiences.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/projects"
                  className="primary-btn"
                >
                  View My Work
                  <FaArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="secondary-btn"
                >
                  Let's Connect
                </Link>

              </div>

              <div className="social-links">

                <a
                  href="https://github.com/Akriti70"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/akriti-sharma-314899157"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:akritisharma41@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

              </div>

            </motion.div>

            {/* ================= RIGHT SIDE ================= */}

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <div className="profile-image-wrapper">

                <motion.img
                  src={profilePic}
                  alt="Akriti Sharma"
                  className="profile-image"
                  onError={(e) => {
                    console.error(
                      "Could not load profile image:",
                      profilePic
                    );

                    e.currentTarget.style.display = "none";
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                />

              </div>

              {/* CODE WINDOW */}

              <div className="code-window">

                <div className="window-header">

                  <div className="window-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span className="window-title">
                    developer.js
                  </span>

                </div>

                <div className="code-content">

                  <p>
                    <span className="purple">
                      const
                    </span>{" "}
                    developer = {"{"}
                  </p>

                  <p className="indent">
                    name:{" "}
                    <span className="green">
                      "Akriti Sharma"
                    </span>,
                  </p>

                  <p className="indent">
                    role:{" "}
                    <span className="green">
                      "Full Stack Developer"
                    </span>,
                  </p>

                  <p className="indent">
                    passion:{" "}
                    <span className="green">
                      "Building Products"
                    </span>,
                  </p>

                  <p className="indent">
                    skills: [
                  </p>

                  <p className="indent2">
                    <span className="orange">
                      "React"
                    </span>,
                    {" "}
                    <span className="orange">
                      "Node.js"
                    </span>,
                  </p>

                  <p className="indent2">
                    <span className="orange">
                      "Python"
                    </span>,
                    {" "}
                    <span className="orange">
                      "Django"
                    </span>
                  </p>

                  <p className="indent">
                    ]
                  </p>

                  <p>
                    {"}"};
                  </p>

                  <p className="code-comment">
                    // Let's build something amazing.
                  </p>

                </div>

              </div>

              {/* FLOATING CARDS */}

              <motion.div
                className="floating-card card-one"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
              >
                <FaCode />
                Clean Code
              </motion.div>

              <motion.div
                className="floating-card card-two"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
              >
                <FaLaptopCode />
                10+ Projects
              </motion.div>

            </motion.div>

          </div>

        </section>

        {/* ================= TECH STACK ================= */}

        <section className="section">

          <div className="section-heading">

            <p className="section-label">
              TECH STACK
            </p>

            <h2>
              Technologies I Work With
            </h2>

          </div>

          <div className="tech-grid">

            {[
              {
                name: "React",
                icon: <FaReact />,
              },
              {
                name: "Node.js",
                icon: <FaNodeJs />,
              },
              {
                name: "Python",
                icon: <FaPython />,
              },
              {
                name: "Django",
                icon: <FaCode />,
              },
              {
                name: "Database",
                icon: <FaDatabase />,
              },
              {
                name: "Full Stack",
                icon: <FaLaptopCode />,
              },
            ].map((tech, index) => (

              <motion.div
                className="tech-card"
                key={tech.name}
                whileHover={{
                  y: -6,
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <div className="tech-icon">
                  {tech.icon}
                </div>

                <span>
                  {tech.name}
                </span>

              </motion.div>

            ))}

          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section className="about-section">

          <div className="about-container">

            <div className="about-heading">

              <p className="section-label">
                ABOUT ME
              </p>

              <h2>
                Turning ideas into
                <span>
                  digital experiences.
                </span>
              </h2>

            </div>

            <div className="about-text">

              <p>
                I'm a passionate Full Stack Developer who
                enjoys creating modern, responsive and
                high-performance digital experiences.
              </p>

              <p>
                I work across the stack, building interactive
                React interfaces and scalable backend systems
                using Node.js, Python and Django.
              </p>

              <p>
                I enjoy solving real-world problems, learning
                new technologies and transforming ideas into
                functional products.
              </p>

            </div>

          </div>

        </section>

        {/* ================= SERVICES ================= */}

        <section className="section">

          <div className="section-heading">

            <p className="section-label">
              WHAT I DO
            </p>

            <h2>
              Building things that matter.
            </h2>

          </div>

          <div className="services-grid">

            <motion.div
              className="developer-card"
              whileHover={{
                y: -8,
              }}
            >
              <div className="service-icon">
                <FaReact />
              </div>

              <h3>
                Frontend Development
              </h3>

              <p>
                Building responsive and interactive interfaces
                with React and modern UI practices.
              </p>
            </motion.div>

            <motion.div
              className="developer-card"
              whileHover={{
                y: -8,
              }}
            >
              <div className="service-icon">
                <FaNodeJs />
              </div>

              <h3>
                Backend Development
              </h3>

              <p>
                Creating scalable APIs and backend systems
                using Node.js, Python and Django.
              </p>
            </motion.div>

            <motion.div
              className="developer-card"
              whileHover={{
                y: -8,
              }}
            >
              <div className="service-icon">
                <FaLaptopCode />
              </div>

              <h3>
                Full Stack Applications
              </h3>

              <p>
                Turning ideas into complete production-ready
                web applications.
              </p>
            </motion.div>

          </div>

        </section>

        {/* ================= STATS ================= */}

        <section className="stats-section">

          <div className="stat">
            <strong>10+</strong>
            <span>Projects Built</span>
          </div>

          <div className="stat">
            <strong>5+</strong>
            <span>Technologies</span>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <span>Passion for Code</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>Learning Mindset</span>
          </div>

        </section>

        {/* ================= CONTACT ================= */}

        <section
          className="cta-section"
          id="contact"
        >

          <div className="cta-content">

            <p className="section-label">
              HAVE A PROJECT?
            </p>

            <h2>
              Let's build something
              <span>
                awesome together.
              </span>
            </h2>

            <p>
              I'm always interested in new opportunities,
              interesting projects and great conversations.
            </p>

            <a
              href="mailto:akritisharma41@gmail.com"
              className="primary-btn"
            >
              Get In Touch
              <FaEnvelope />
            </a>

          </div>

        </section>

        {/* ================= FOOTER ================= */}

        <footer className="developer-footer">

          <div>
            <strong>
              Akriti<span>.</span>
            </strong>

            <p>
              Full Stack Developer
            </p>
          </div>

          <div className="footer-socials">

            <a
              href="https://github.com/Akriti70"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akriti-sharma-314899157"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:akritisharma41@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

          <p>
            © 2026 Akriti Sharma. Built with React.
          </p>

        </footer>

      </div>
    </>
  );
}