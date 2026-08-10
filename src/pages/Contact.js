
 




import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contactItems = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "akritisharma41@gmail.com",
      href: "mailto:akritisharma41@gmail.com",
      className: "email-card",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+49 176 83211760",
      href: "tel:+4917683211760",
      className: "phone-card",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/Akriti70",
      href: "https://github.com/Akriti70",
      className: "github-card",
      external: true,
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/akriti-sharma-314899157",
      href: "https://www.linkedin.com/in/akriti-sharma-314899157",
      className: "linkedin-card",
      external: true,
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page {
          min-height: 100vh;
          padding: 110px 7% 70px;
          position: relative;
          overflow: hidden;
          color: #f8fafc;
          font-family:
            "Segoe UI",
            Tahoma,
            Geneva,
            Verdana,
            sans-serif;

          background:
            radial-gradient(
              circle at 15% 15%,
              rgba(99, 102, 241, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 75%,
              rgba(56, 189, 248, 0.10),
              transparent 28%
            ),
            #070b12;
        }

        .contact-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.07;

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

        .contact-page::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -250px;
          top: 100px;
          border-radius: 50%;
          background: rgba(99, 102, 241, 0.07);
          filter: blur(100px);
          pointer-events: none;
        }

        .contact-container {
          width: 100%;
          max-width: 1150px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* HEADER */

        .contact-header {
          max-width: 800px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .contact-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .contact-title {
          margin: 0;
          font-size: clamp(45px, 7vw, 75px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .contact-title span {
          display: block;
          margin-top: 8px;

          background:
            linear-gradient(
              90deg,
              #818cf8,
              #c084fc,
              #38bdf8
            );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-subtitle {
          max-width: 650px;
          margin: 25px auto 0;
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.8;
        }

        /* MAIN PANEL */

        .contact-panel {
          position: relative;
          padding: 45px;
          border-radius: 24px;
          border: 1px solid #1e293b;

          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.96),
              rgba(7, 11, 18, 0.96)
            );

          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255,255,255,0.03);

          overflow: hidden;
        }

        .contact-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #6366f1,
              #c084fc,
              #38bdf8,
              transparent
            );
        }

        .panel-glow {
          position: absolute;
          width: 250px;
          height: 250px;
          top: -120px;
          right: -80px;
          border-radius: 50%;
          background: rgba(99,102,241,0.10);
          filter: blur(60px);
          pointer-events: none;
        }

        .panel-intro {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 35px;
        }

        .intro-icon {
          width: 55px;
          height: 55px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 14px;

          color: #818cf8;
          font-size: 23px;

          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(129,140,248,0.20);

          box-shadow:
            0 0 25px rgba(99,102,241,0.10);
        }

        .panel-intro h2 {
          margin: 0 0 5px;
          font-size: 25px;
        }

        .panel-intro p {
          margin: 0;
          color: #64748b;
          font-size: 14px;
        }

        /* CONTACT GRID */

        .contact-cards {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .contact-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;

          min-height: 115px;
          padding: 22px;

          text-decoration: none;
          color: #f8fafc;

          border-radius: 16px;
          border: 1px solid #1e293b;

          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.90),
              rgba(9,14,24,0.90)
            );

          overflow: hidden;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .contact-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              120deg,
              transparent,
              rgba(129,140,248,0.07),
              transparent
            );

          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .contact-card:hover::before {
          transform: translateX(100%);
        }

        .contact-card:hover {
          transform: translateY(-7px);
          border-color: rgba(129,140,248,0.55);

          box-shadow:
            0 20px 50px rgba(0,0,0,0.35),
            0 0 30px rgba(99,102,241,0.08);
        }

        .contact-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;

          display: grid;
          place-items: center;

          border-radius: 13px;

          color: #818cf8;
          background: rgba(99,102,241,0.10);
          border: 1px solid rgba(129,140,248,0.15);

          font-size: 21px;

          transition:
            transform 0.35s ease,
            background 0.35s ease;
        }

        .contact-card:hover .contact-icon {
          transform: scale(1.08) rotate(-4deg);
          background: rgba(99,102,241,0.18);
        }

        .contact-info {
          min-width: 0;
        }

        .contact-info h3 {
          margin: 0 0 7px;
          font-size: 17px;
          font-weight: 700;
        }

        .contact-info p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.5;
          word-break: break-word;
        }

        .contact-arrow {
          margin-left: auto;
          color: #475569;
          transition:
            transform 0.3s ease,
            color 0.3s ease;
        }

        .contact-card:hover .contact-arrow {
          color: #818cf8;
          transform: translateX(4px);
        }

        /* BOTTOM CTA */

        .contact-cta {
          margin-top: 35px;
          padding: 45px 30px;
          text-align: center;

          border-radius: 20px;
          border: 1px solid #1e293b;

          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.13),
              transparent 65%
            ),
            #0b1120;
        }

        .cta-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .contact-cta h2 {
          margin: 12px 0 10px;
          font-size: clamp(28px, 4vw, 40px);
        }

        .contact-cta p {
          margin: 0 auto 25px;
          max-width: 600px;
          color: #64748b;
          line-height: 1.7;
        }

        .primary-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 14px 25px;
          border-radius: 10px;

          color: white;
          text-decoration: none;
          font-weight: 700;

          background:
            linear-gradient(
              135deg,
              #6366f1,
              #8b5cf6
            );

          box-shadow:
            0 10px 30px rgba(99,102,241,0.25);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .primary-contact-btn:hover {
          transform: translateY(-3px);
          box-shadow:
            0 15px 40px rgba(99,102,241,0.38);
        }

        /* NAVIGATION */

        .contact-navigation {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 35px;
        }

        .nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 12px 20px;
          border-radius: 10px;

          text-decoration: none;
          font-size: 14px;
          font-weight: 700;

          border: 1px solid #1e293b;
          background: #0f172a;
          color: #cbd5e1;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            color 0.3s ease;
        }

        .nav-btn:hover {
          transform: translateY(-3px);
          border-color: #6366f1;
          color: white;
        }

        /* FOOTER */

        .contact-footer {
          margin-top: 70px;
          padding-top: 30px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;

          border-top: 1px solid #1e293b;
        }

        .footer-brand strong {
          font-size: 23px;
        }

        .footer-brand strong span {
          color: #818cf8;
        }

        .footer-brand p {
          margin: 5px 0 0;
          color: #64748b;
          font-size: 13px;
        }

        .footer-links {
          display: flex;
          gap: 10px;
        }

        .footer-links a {
          width: 40px;
          height: 40px;

          display: grid;
          place-items: center;

          color: #64748b;
          background: #0f172a;
          border: 1px solid #1e293b;
          border-radius: 10px;

          transition:
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease;
        }

        .footer-links a:hover {
          color: #fff;
          border-color: #6366f1;
          transform: translateY(-3px);
        }

        .copyright {
          color: #475569;
          font-size: 12px;
        }

        /* RESPONSIVE */

        @media (max-width: 750px) {
          .contact-page {
            padding: 90px 18px 50px;
          }

          .contact-panel {
            padding: 28px 20px;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .contact-title {
            letter-spacing: -2px;
          }

          .contact-subtitle {
            font-size: 15px;
          }

          .contact-footer {
            justify-content: center;
            text-align: center;
          }

          .footer-brand {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .contact-page {
            padding-top: 75px;
          }

          .contact-title {
            font-size: 44px;
          }

          .panel-intro {
            align-items: flex-start;
          }

          .panel-intro h2 {
            font-size: 21px;
          }

          .contact-card {
            min-height: 105px;
            padding: 18px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .contact-info p {
            font-size: 12px;
          }

          .contact-cta {
            padding: 35px 20px;
          }
        }
      `}</style>

      <section className="contact-page">
        <div className="contact-container">

          {/* HEADER */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-label">
              {"< LET'S CONNECT />"}
            </div>

            <h1 className="contact-title">
              Let's Build
              <span>Something Great.</span>
            </h1>

            <p className="contact-subtitle">
              Have a project, opportunity, or idea you'd like
              to discuss? I'm always open to interesting
              conversations and new challenges.
            </p>
          </motion.div>

          {/* CONTACT PANEL */}
          <motion.div
            className="contact-panel"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="panel-glow"></div>

            <div className="panel-intro">
              <div className="intro-icon">
                <FaPaperPlane />
              </div>

              <div>
                <h2>Get In Touch</h2>
                <p>
                  Choose the best way to reach me.
                </p>
              </div>
            </div>

            <div className="contact-cards">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className={`contact-card ${item.className}`}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.25 + index * 0.08,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div className="contact-info">
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>

                  <FaArrowRight className="contact-arrow" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="cta-label">
              HAVE A PROJECT?
            </div>

            <h2>Let's turn your idea into reality.</h2>

            <p>
              Whether you're building a new product,
              improving an existing application, or looking
              for a Full Stack Developer, let's talk.
            </p>

            <motion.a
              href="mailto:akritisharma41@gmail.com"
              className="primary-contact-btn"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Me an Email
              <FaEnvelope />
            </motion.a>
          </motion.div>

          {/* NAVIGATION */}
          <div className="contact-navigation">
            <Link
              to="/projects"
              className="nav-btn"
            >
              🚀 View Projects
            </Link>

            <Link
              to="/"
              className="nav-btn"
            >
              🏠 Back Home
            </Link>
          </div>

          {/* FOOTER */}
          <footer className="contact-footer">
            <div className="footer-brand">
              <strong>
                Akriti<span>.</span>
              </strong>

              <p>
                Full Stack Developer
              </p>
            </div>

            <div className="footer-links">
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

            <div className="copyright">
              © 2026 Akriti Sharma
            </div>
          </footer>

        </div>
      </section>
    </>
  );
}

