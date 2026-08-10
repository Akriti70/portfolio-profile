

import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const educationData = [
  {
    degree: "Ironhack Web Development Bootcamp",
    school: "Ironhack",
    location: "Berlin, Germany",
    period: "June 2025 – Nov 2025",
    description:
      "Intensive full-stack web development program with hands-on projects and modern software engineering practices.",
    modules: [
      "Frontend: React.js, Next.js, TypeScript, Material-UI",
      "Backend: Node.js, Express, Django, Flask",
      "CI/CD with Docker & Jenkins",
      "Team projects with clean architecture & TDD",
    ],
  },
  {
    degree: "Master's Degree in Information Technology",
    school: "HTW Berlin – Hochschule für Technik und Wirtschaft",
    location: "Berlin, Germany",
    period: "Oct 2021 – Sep 2023",
    description:
      "Advanced IT and web development studies with focus on full-stack applications, digital solutions and modern IT systems.",
    modules: [
      "Data Science",
      "Cloud Computing",
      "Mobile Computing",
      "Internet of Things",
      "Data Ethics, Privacy and Governance",
      "Enterprise Architecture Management",
      "IT Security",
      "Requirements Engineering",
    ],
  },
  {
    degree: "Postgraduate Diploma in Computer Science",
    school: "CDAC – Centre for Development of Advanced Computing",
    location: "Hyderabad, India",
    period: "Jul 2017",
    description:
      "Advanced computing and programming curriculum with practical software development projects.",
    modules: [
      "Advanced Programming: C++, Java, Python",
      "Database Management & SQL",
      "Web Development Basics",
      "Software Engineering Principles",
    ],
  },
  {
    degree: "Bachelor of Engineering in Electronics",
    school: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "India",
    period: "Sep 2012 – Jun 2016",
    description:
      "Core electronics and engineering education with practical laboratory work and engineering design.",
    modules: [
      "Electronics & Communication Systems",
      "Signal Processing & Control Systems",
      "Embedded Systems & Microcontrollers",
      "Project Work & Engineering Design",
    ],
  },
];

const moduleIcons = [
  <FaCode />,
  <FaDatabase />,
  <FaCloud />,
  <FaShieldAlt />,
];

function EducationCard({ edu, index }) {
  return (
    <motion.article
      className="education-card"
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.55,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -7,
      }}
    >
      <div className="education-accent"></div>

      <div className="education-icon">
        <FaGraduationCap />
      </div>

      <div className="education-content">
        <div className="education-top">
          <div>
            <h2>{edu.degree}</h2>

            <div className="education-school">
              <FaUniversity />
              {edu.school}
            </div>
          </div>

          <span className="education-period">
            {edu.period}
          </span>
        </div>

        <div className="education-location">
          {edu.location}
        </div>

        <p className="education-description">
          {edu.description}
        </p>

        <div className="modules-title">
          Key Modules
        </div>

        <div className="modules-grid">
          {edu.modules.map((module, i) => (
            <motion.div
              className="module-item"
              key={module}
              whileHover={{
                x: 5,
              }}
            >
              <span className="module-icon">
                {moduleIcons[i % moduleIcons.length]}
              </span>

              <span>{module}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .education-page {
          min-height: 100vh;
          padding: 110px 7% 80px;
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

        .education-page::before {
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

        .education-container {
          max-width: 1100px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .education-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 65px;
        }

        .education-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .education-title {
          font-size: clamp(42px, 6vw, 70px);
          margin: 0;
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .education-title span {
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

        .education-subtitle {
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.8;
          margin-top: 22px;
        }

        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .education-card {
          position: relative;
          display: flex;
          gap: 25px;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid #1e293b;
          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.95),
              rgba(9,14,24,0.95)
            );
          overflow: hidden;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .education-card::before {
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
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .education-card:hover::before {
          transform: scaleX(1);
        }

        .education-card:hover {
          border-color:
            rgba(129,140,248,0.55);

          box-shadow:
            0 20px 60px rgba(0,0,0,0.35),
            0 0 35px rgba(99,102,241,0.08);
        }

        .education-accent {
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 100%;
          background:
            linear-gradient(
              180deg,
              #6366f1,
              #c084fc,
              #38bdf8
            );
        }

        .education-icon {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background:
            rgba(99,102,241,0.12);
          border:
            1px solid rgba(129,140,248,0.15);
          color: #818cf8;
          font-size: 25px;
        }

        .education-content {
          flex: 1;
          min-width: 0;
        }

        .education-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .education-top h2 {
          margin: 0 0 8px;
          color: #f8fafc;
          font-size: 22px;
          line-height: 1.35;
        }

        .education-school {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #818cf8;
          font-size: 14px;
          font-weight: 600;
        }

        .education-period {
          flex-shrink: 0;
          color: #64748b;
          font-family: monospace;
          font-size: 12px;
          padding: 8px 12px;
          border:
            1px solid #1e293b;
          border-radius: 8px;
          background: #0b1120;
        }

        .education-location {
          color: #64748b;
          font-size: 13px;
          margin-top: 6px;
        }

        .education-description {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.7;
          margin: 18px 0;
        }

        .modules-title {
          color: #cbd5e1;
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .modules-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .module-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.5;
          padding: 9px 10px;
          border-radius: 8px;
          background: rgba(255,255,255,0.02);
          transition:
            color 0.25s ease,
            background 0.25s ease;
        }

        .module-item:hover {
          color: #cbd5e1;
          background:
            rgba(99,102,241,0.07);
        }

        .module-icon {
          color: #818cf8;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 700px) {
          .education-page {
            padding: 95px 18px 60px;
          }

          .education-title {
            font-size: 45px;
          }

          .education-subtitle {
            font-size: 15px;
          }

          .education-card {
            padding: 22px;
            gap: 16px;
          }

          .education-icon {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .education-top {
            flex-direction: column;
            gap: 10px;
          }

          .education-top h2 {
            font-size: 18px;
          }

          .modules-grid {
            grid-template-columns: 1fr;
          }

          .education-period {
            align-self: flex-start;
          }
        }

        @media (max-width: 480px) {
          .education-card {
            display: block;
          }

          .education-icon {
            margin-bottom: 18px;
          }
        }
      `}</style>

      <section className="education-page">
        <div className="education-container">

          <motion.div
            className="education-header"
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
            <div className="education-label">
              {"< EDUCATION />"}
            </div>

            <h1 className="education-title">
              My Academic
              <span>Journey</span>
            </h1>

            <p className="education-subtitle">
              My academic background and professional
              training that shaped my foundation in
              software engineering and information
              technology.
            </p>
          </motion.div>

          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <EducationCard
                key={edu.degree}
                edu={edu}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            style={{
              marginTop: "60px",
              textAlign: "center",
            }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 24px",
                borderRadius: "10px",
                color: "#fff",
                background:
                  "linear-gradient(135deg, #6366f1, #8b5cf6)",
                textDecoration: "none",
                fontWeight: 700,
                boxShadow:
                  "0 10px 30px rgba(99,102,241,0.25)",
              }}
            >
              Let's Connect
              <FaArrowRight />
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}

