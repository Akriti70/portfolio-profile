




import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email Me",
      text: "akritisharma41@gmail.com",
      href: "mailto:akritisharma41@gmail.com",
      className: "email",
    },
    {
      icon: <FaPhone />,
      title: "Call Me",
      text: "+49 176 83211760",
      href: "tel:+4917683211760",
      className: "phone",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      text: "github.com/Akriti70",
      href: "https://github.com/Akriti70",
      className: "github",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      text: "linkedin.com/in/akriti-sharma-314899157",
      href: "https://www.linkedin.com/in/akriti-sharma-314899157",
      className: "linkedin",
    },
  ];

  return (
    <section className="contact-page">
      <div className="contact-grid-bg"></div>

      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-label">
            &lt; LET'S CONNECT /&gt;
          </div>

          <h1>
            Let's Build
            <span>Something Great.</span>
          </h1>

          <p>
            I'm always open to discussing software engineering opportunities,
            interesting projects, collaboration, and new ideas.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="contact-cards">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.href}
              target={
                contact.className === "github" ||
                contact.className === "linkedin"
                  ? "_blank"
                  : undefined
              }
              rel={
                contact.className === "github" ||
                contact.className === "linkedin"
                  ? "noopener noreferrer"
                  : undefined
              }
              className={`contact-card ${contact.className}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="contact-icon">
                {contact.icon}
              </div>

              <div className="contact-info">
                <h3>{contact.title}</h3>
                <p>{contact.text}</p>
              </div>

              <FaArrowRight className="contact-arrow" />
            </motion.a>
          ))}
        </div>

        {/* MAIN CTA */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-icon">
            <FaCode />
          </div>

          <div>
            <p className="cta-label">AVAILABLE FOR OPPORTUNITIES</p>

            <h2>
              Have a project or opportunity?
            </h2>

            <p className="cta-text">
              Let's discuss how we can turn your idea into a
              reliable and scalable software solution.
            </p>
          </div>

          <a
            href="mailto:akritisharma41@gmail.com"
            className="contact-main-button"
          >
            Get In Touch
            <FaArrowRight />
          </a>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          className="contact-navigation"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects" className="nav-btn">
            View Projects
            <FaArrowRight />
          </Link>

          <Link to="/" className="nav-btn secondary">
            Back Home
          </Link>
        </motion.div>

      </div>

      {/* FOOTER */}
      <footer className="contact-footer">
        <div>
          <strong>
            Akriti<span>.</span>
          </strong>

          <p>Full Stack Developer</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/Akriti70"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akriti-sharma-314899157"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p>© 2026 Akriti Sharma</p>
      </footer>
    </section>
  );
}

