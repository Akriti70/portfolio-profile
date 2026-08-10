

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaHome,
  FaRocket,
  FaCode,
} from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      title: "Email Me",
      value: "akritisharma41@gmail.com",
      icon: <FaEnvelope />,
      href: "mailto:akritisharma41@gmail.com",
      className: "email",
    },
    {
      title: "Call Me",
      value: "+49 176 83211760",
      icon: <FaPhone />,
      href: "tel:+4917683211760",
      className: "phone",
    },
    {
      title: "GitHub",
      value: "github.com/Akriti70",
      icon: <FaGithub />,
      href: "https://github.com/Akriti70",
      className: "github",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/akriti-sharma-314899157",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/akriti-sharma-314899157",
      className: "linkedin",
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        /* ==============================
           PAGE
        ============================== */

        .contact-page {
          min-height: 100vh;
          padding: 110px 7% 50px;

          color: #f8fafc;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(99, 102, 241, 0.12),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(56, 189, 248, 0.08),
              transparent 25%
            ),
            #070b12;

          position: relative;
          overflow: hidden;

          font-family:
            "Segoe UI",
            Tahoma,
            Geneva,
            Verdana,
            sans-serif;
        }

        /* ==============================
           GRID BACKGROUND
        ============================== */

        .contact-page::before {
          content: "";

          position: absolute;
          inset: 0;

          opacity: 0.08;

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

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;

          position: relative;
          z-index: 2;
        }

        /* ==============================
           HEADER
        ============================== */

        .contact-header {
          text-align: center;

          max-width: 800px;

          margin:
            0 auto 60px;
        }

        .contact-label {
          color: #818cf8;

          font-family: monospace;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 3px;

          margin-bottom: 15px;
        }

        .contact-title {
          font-size:
            clamp(42px, 6vw, 70px);

          margin: 0;

          line-height: 1;

          letter-spacing: -3px;

          font-weight: 800;
        }

        .contact-title span {
          display: block;

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
          color: #94a3b8;

          font-size: 17px;

          line-height: 1.8;

          margin-top: 22px;
        }

        /* ==============================
           TERMINAL
        ============================== */

        .contact-terminal {
          max-width: 760px;

          margin:
            0 auto 55px;

          border:
            1px solid #263244;

          border-radius: 14px;

          overflow: hidden;

          background: #0b1120;

          box-shadow:
            0 25px 70px
            rgba(0,0,0,0.35);
        }

        .terminal-header {
          height: 45px;

          display: flex;

          align-items: center;

          padding: 0 16px;

          gap: 8px;

          border-bottom:
            1px solid #1e293b;
        }

        .terminal-dot {
          width: 10px;
          height: 10px;

          border-radius: 50%;

          background: #475569;
        }

        .terminal-title {
          margin-left: 10px;

          color: #64748b;

          font-family: monospace;

          font-size: 12px;
        }

        .terminal-body {
          padding:
            20px 24px;

          font-family: monospace;

          font-size: 14px;

          color: #94a3b8;

          line-height: 1.8;
        }

        .terminal-green {
          color: #4ade80;
        }

        .terminal-purple {
          color: #c084fc;
        }

        .terminal-blue {
          color: #60a5fa;
        }

        /* ==============================
           CONTACT GRID
        ============================== */

        .contact-cards {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 22px;

          margin-bottom: 50px;
        }

        /* ==============================
           CONTACT CARD
        ============================== */

        .contact-card {
          position: relative;

          display: flex;

          align-items: center;

          gap: 18px;

          padding: 25px;

          border:
            1px solid #1e293b;

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.95),
              rgba(9,14,24,0.95)
            );

          color: #f8fafc;

          text-decoration: none;

          overflow: hidden;

          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              transparent,
              #818cf8,
              #c084fc,
              #38bdf8,
              transparent
            );

          transform:
            scaleX(0);

          transition:
            transform 0.4s ease;
        }

        .contact-card:hover::before {
          transform:
            scaleX(1);
        }

        .contact-card::after {
          content: "";

          position: absolute;

          width: 150px;
          height: 150px;

          right: -80px;
          bottom: -80px;

          border-radius: 50%;

          background:
            rgba(99,102,241,0.08);

          filter: blur(20px);

          pointer-events: none;
        }

        .contact-card:hover {
          transform:
            translateY(-6px);

          border-color:
            rgba(129,140,248,0.55);

          box-shadow:
            0 20px 60px
            rgba(0,0,0,0.35),

            0 0 35px
            rgba(99,102,241,0.08);
        }

        /* ==============================
           ICON
        ============================== */

        .contact-icon {
          width: 55px;
          height: 55px;

          flex-shrink: 0;

          display: grid;

          place-items: center;

          border-radius: 14px;

          background:
            rgba(99,102,241,0.12);

          border:
            1px solid
            rgba(129,140,248,0.15);

          color: #818cf8;

          font-size: 23px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-card:hover
        .contact-icon {
          transform:
            translateY(-3px);

          box-shadow:
            0 8px 25px
            rgba(99,102,241,0.2);
        }

        /* ==============================
           CARD CONTENT
        ============================== */

        .contact-card-content {
          min-width: 0;
        }

        .contact-card-title {
          display: block;

          margin-bottom: 5px;

          color: #f8fafc;

          font-size: 18px;

          font-weight: 700;
        }

        .contact-card-value {
          display: block;

          color: #64748b;

          font-family: monospace;

          font-size: 12px;

          line-height: 1.5;

          word-break: break-word;

          transition:
            color 0.25s ease;
        }

        .contact-card:hover
        .contact-card-value {
          color: #cbd5e1;
        }

        /* ==============================
           NAVIGATION
        ============================== */

        .contact-navigation {
          display: flex;

          justify-content: center;

          gap: 15px;

          flex-wrap: wrap;

          margin-bottom: 70px;
        }

        .nav-btn {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding:
            13px 22px;

          border-radius: 10px;

          text-decoration: none;

          font-weight: 700;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .nav-btn:hover {
          transform:
            translateY(-3px);
        }

        .projects {
          color: white;

          background:
            linear-gradient(
              135deg,
              #6366f1,
              #8b5cf6
            );

          box-shadow:
            0 10px 30px
            rgba(99,102,241,0.25);
        }

        .projects:hover {
          box-shadow:
            0 15px 35px
            rgba(99,102,241,0.35);
        }

        .home {
          color: #cbd5e1;

          background:
            rgba(15,23,42,0.9);

          border:
            1px solid #1e293b;
        }

        .home:hover {
          border-color:
            rgba(129,140,248,0.55);
        }

        /* ==============================
           FOOTER
        ============================== */

        .footer {
          padding-top: 30px;

          border-top:
            1px solid #1e293b;

          text-align: center;

          color: #475569;

          font-size: 13px;
        }

        .footer p {
          margin: 0 0 15px;
        }

        .footer-links {
          display: flex;

          justify-content: center;

          gap: 25px;
        }

        .footer-links a {
          color: #64748b;

          text-decoration: none;

          font-family: monospace;

          font-size: 12px;

          transition:
            color 0.25s ease;
        }

        .footer-links a:hover {
          color: #818cf8;
        }

        /* ==============================
           RESPONSIVE
        ============================== */

        @media (max-width: 700px) {
          .contact-page {
            padding:
              95px 18px 40px;
          }

          .contact-title {
            font-size: 45px;
          }

          .contact-subtitle {
            font-size: 15px;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .terminal-body {
            font-size: 11px;

            padding: 18px;
          }

          .contact-card {
            padding: 22px;
          }

          .contact-icon {
            width: 48px;
            height: 48px;

            font-size: 20px;
          }

          .contact-card-title {
            font-size: 17px;
          }

          .contact-navigation {
            flex-direction: column;
          }

          .nav-btn {
            width: 100%;
          }

          .footer {
            font-size: 12px;
          }
        }
      `}</style>

      <section className="contact-page">
        <div className="contact-container">

          {/* HEADER */}

          <motion.div
            className="contact-header"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="contact-label">
              {"< CONTACT />"}
            </div>

            <h1 className="contact-title">
              Let's Connect
              <span>& Build Something</span>
            </h1>

            <p className="contact-subtitle">
              I love collaborating, sharing ideas, and
              building useful software. Feel free to
              reach out anytime.
            </p>
          </motion.div>

          {/* TERMINAL */}

          <motion.div
            className="contact-terminal"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="terminal-header">
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>
              <span className="terminal-dot"></span>

              <span className="terminal-title">
                akriti@developer: ~/contact
              </span>
            </div>

            <div className="terminal-body">
              <div>
                <span className="terminal-green">
                  akriti@dev
                </span>
                :
                <span className="terminal-blue">
                  ~/portfolio
                </span>
                $ npm run connect
              </div>

              <div>
                <span className="terminal-purple">
                  ✓
                </span>{" "}
                Initializing connection...
              </div>

              <div>
                <span className="terminal-purple">
                  ✓
                </span>{" "}
                Email channel available
              </div>

              <div>
                <span className="terminal-purple">
                  ✓
                </span>{" "}
                Professional networks available
              </div>

              <div>
                <span className="terminal-purple">
                  ✓
                </span>{" "}
                Ready to build something great
              </div>
            </div>
          </motion.div>

          {/* CONTACT CARDS */}

          <div className="contact-cards">
            {contactMethods.map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.href}
                className={`contact-card ${contact.className}`}
                target={
                  contact.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
              >
                <div className="contact-icon">
                  {contact.icon}
                </div>

                <div className="contact-card-content">
                  <span className="contact-card-title">
                    {contact.title}
                  </span>

                  <span className="contact-card-value">
                    {contact.value}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* NAVIGATION */}

          <motion.div
            className="contact-navigation"
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
          >
            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                to="/projects"
                className="nav-btn projects"
              >
                <FaRocket />
                View Projects
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                to="/"
                className="nav-btn home"
              >
                <FaHome />
                Back Home
              </Link>
            </motion.div>
          </motion.div>

          {/* FOOTER */}

          <footer className="footer">
            <p>
              © 2025 Akriti Sharma | Full Stack Developer
            </p>

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
          </footer>

        </div>
      </section>
    </>
  );
}

