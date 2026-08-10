





import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Bosch",
    location: "Berlin, Germany",
    period: "May 2024 – April 2025",
    type: "Software Engineering • Backend • Full Stack",
    description:
      "Worked on scalable backend services and customer-facing web applications, contributing across API development, system performance, security, cloud infrastructure, and production reliability.",
    highlights: [
      "Developed scalable backend application services and customer-facing web applications using Node.js, TypeScript, React, Express.js, Python, and Kotlin.",
      "Designed and implemented RESTful APIs supporting microservices architecture and scalable application development.",
      "Improved PostgreSQL schema design, query optimization, backend performance, and API response times.",
      "Implemented authentication, authorization, input validation, and secure API development practices.",
      "Collaborated with product managers, designers, and platform engineers to deliver production-ready software.",
      "Built and maintained Docker-based deployments and automated CI/CD pipelines using GitHub Actions, Kubernetes, AWS, and Terraform.",
      "Performed backend debugging, logging analysis, monitoring, and production issue resolution.",
      "Optimized backend services through caching strategies and performance tuning.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "Express.js",
      "Python",
      "Kotlin",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "GitHub Actions",
    ],
    icon: <FaRocket />,
  },

  {
    title: "Software Working Student",
    company: "Getsafe GmbH",
    location: "Berlin, Germany",
    period: "Nov 2022 – Mar 2024",
    type: "Full Stack Development • APIs • Cloud",
    description:
      "Contributed to production web applications and backend services with a strong focus on API reliability, automated testing, frontend performance, scalability, and secure engineering practices.",
    highlights: [
      "Developed robust backend APIs with SQL integration to streamline customer data access and application workflows.",
      "Automated application testing with Jest, improving code reliability and reducing regression issues.",
      "Redesigned and enhanced e-commerce interfaces using React.js, Redux, and Material-UI.",
      "Contributed to frontend improvements that helped increase platform conversion rates by approximately 50%.",
      "Participated in Agile ceremonies, code reviews, pair programming, and collaborative technical discussions.",
      "Optimized application performance, scalability, and security using Docker and Kubernetes.",
      "Worked closely with engineers and product teams to deliver maintainable production-ready features.",
    ],
    technologies: [
      "React.js",
      "Redux",
      "Node.js",
      "SQL",
      "Jest",
      "Material-UI",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "Agile",
    ],
    icon: <FaCode />,
  },

  {
    title: "Junior Software Engineer",
    company: "Vertex Infotech Services",
    location: "India",
    period: "Aug 2017 – Sept 2019",
    type: "Web Development • Backend • APIs",
    description:
      "Built and maintained web and mobile applications while working across frontend development, backend services, databases, API integration, testing, and production support.",
    highlights: [
      "Built responsive web and mobile applications using JavaScript, TypeScript, Node.js, and Vue.js.",
      "Designed and integrated RESTful APIs for frontend and backend application workflows.",
      "Optimized database queries and application performance using MongoDB and SQL Server.",
      "Collaborated with cross-functional teams during requirements gathering, development, testing, and delivery.",
      "Participated in code reviews and maintained technical documentation for application features.",
      "Supported production issue resolution and backend development using Flask and Django.",
      "Implemented reusable components and maintainable application structures to support long-term development.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Vue.js",
      "MongoDB",
      "SQL Server",
      "Python",
      "Flask",
      "Django",
      "REST APIs",
    ],
    icon: <FaDatabase />,
  },
];

const engineeringAreas = [
  {
    icon: <FaCode />,
    title: "Software Engineering",
    text: "Clean, maintainable and scalable application development.",
  },
  {
    icon: <FaDatabase />,
    title: "Backend & APIs",
    text: "REST APIs, databases, performance optimization and microservices.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps",
    text: "Docker, Kubernetes, AWS, Terraform and automated CI/CD.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Reliability",
    text: "Secure APIs, authentication, monitoring and production support.",
  },
];

export default function Work() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .work-page {
          min-height: 100vh;
          padding: 110px 7% 90px;
          color: #f8fafc;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(99, 102, 241, 0.13),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 40%,
              rgba(56, 189, 248, 0.08),
              transparent 28%
            ),
            radial-gradient(
              circle at 50% 100%,
              rgba(168, 85, 247, 0.08),
              transparent 30%
            ),
            #070b12;
          position: relative;
          overflow: hidden;
        }

        .work-page::before {
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

        .work-container {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .work-header {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 75px;
        }

        .work-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .work-title {
          margin: 0;
          font-size: clamp(42px, 6vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .work-title span {
          display: block;
          margin-top: 8px;
          background: linear-gradient(
            90deg,
            #818cf8,
            #c084fc,
            #38bdf8
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .work-subtitle {
          margin: 25px auto 0;
          max-width: 720px;
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.8;
        }

        .experience-list {
          position: relative;
          max-width: 1050px;
          margin: auto;
        }

        .experience-list::before {
          content: "";
          position: absolute;
          left: 27px;
          top: 20px;
          bottom: 20px;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            #6366f1,
            #8b5cf6,
            #38bdf8,
            transparent
          );
        }

        .experience-card {
          position: relative;
          margin-bottom: 35px;
          margin-left: 70px;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid #1e293b;
          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.96),
              rgba(8,13,23,0.96)
            );
          box-shadow: 0 20px 60px rgba(0,0,0,0.28);
          overflow: hidden;
          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(99,102,241,0.12),
              transparent 30%
            );
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .experience-card:hover {
          border-color: rgba(129,140,248,0.55);
          box-shadow:
            0 25px 70px rgba(0,0,0,0.4),
            0 0 40px rgba(99,102,241,0.08);
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-node {
          position: absolute;
          left: -70px;
          top: 30px;
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          color: #a5b4fc;
          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.25),
              rgba(139,92,246,0.12)
            );
          border: 1px solid rgba(129,140,248,0.4);
          box-shadow:
            0 0 25px rgba(99,102,241,0.18);
          font-size: 21px;
          z-index: 3;
        }

        .experience-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          position: relative;
          z-index: 2;
        }

        .experience-title {
          margin: 0 0 8px;
          color: #f8fafc;
          font-size: 25px;
          font-weight: 750;
        }

        .experience-company {
          color: #a5b4fc;
          font-size: 16px;
          font-weight: 650;
        }

        .experience-location {
          color: #64748b;
          font-size: 14px;
          margin-left: 8px;
        }

        .experience-period {
          flex-shrink: 0;
          padding: 8px 13px;
          border-radius: 8px;
          color: #c4b5fd;
          background: rgba(99,102,241,0.1);
          border: 1px solid rgba(99,102,241,0.18);
          font-family: monospace;
          font-size: 12px;
        }

        .experience-type {
          display: inline-flex;
          margin-top: 18px;
          padding: 6px 10px;
          border-radius: 7px;
          color: #7dd3fc;
          background: rgba(56,189,248,0.07);
          border: 1px solid rgba(56,189,248,0.12);
          font-family: monospace;
          font-size: 11px;
        }

        .experience-description {
          position: relative;
          z-index: 2;
          margin: 22px 0;
          color: #94a3b8;
          line-height: 1.8;
          font-size: 15px;
        }

        .highlights {
          position: relative;
          z-index: 2;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .highlight {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin-bottom: 13px;
          color: #cbd5e1;
          font-size: 14px;
          line-height: 1.7;
        }

        .highlight svg {
          flex-shrink: 0;
          margin-top: 4px;
          color: #818cf8;
          font-size: 13px;
        }

        .technology-area {
          position: relative;
          z-index: 2;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #1e293b;
        }

        .technology-title {
          margin-bottom: 12px;
          color: #64748b;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .technology-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .technology {
          padding: 7px 10px;
          border-radius: 7px;
          color: #c4b5fd;
          background: #0b1120;
          border: 1px solid #263244;
          font-family: monospace;
          font-size: 11px;
          transition: 0.25s ease;
        }

        .technology:hover {
          color: #fff;
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .engineering-section {
          margin: 80px auto 0;
          max-width: 1050px;
        }

        .engineering-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .engineering-header h2 {
          margin: 10px 0;
          font-size: 32px;
        }

        .engineering-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .engineering-card {
          padding: 25px 20px;
          border-radius: 15px;
          border: 1px solid #1e293b;
          background: #0b1120;
          text-align: center;
          transition: 0.3s ease;
        }

        .engineering-card:hover {
          border-color: #6366f1;
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .engineering-icon {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          margin: 0 auto 15px;
          border-radius: 12px;
          color: #818cf8;
          background: rgba(99,102,241,0.1);
          font-size: 20px;
        }

        .engineering-card h3 {
          margin: 0 0 8px;
          color: #f8fafc;
          font-size: 15px;
        }

        .engineering-card p {
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.6;
        }

        .work-cta {
          max-width: 900px;
          margin: 75px auto 0;
          padding: 50px 25px;
          text-align: center;
          border-radius: 20px;
          border: 1px solid #1e293b;
          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.13),
              transparent 60%
            ),
            #0b1120;
        }

        .work-cta h2 {
          margin: 8px 0 12px;
          font-size: 32px;
        }

        .work-cta p {
          color: #64748b;
          margin-bottom: 25px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 22px;
          border-radius: 10px;
          color: #fff;
          background: linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
          );
          text-decoration: none;
          font-weight: 700;
          box-shadow: 0 10px 30px rgba(99,102,241,0.25);
          transition: 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(99,102,241,0.35);
        }

        @media (max-width: 900px) {
          .engineering-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .experience-top {
            flex-direction: column;
            gap: 12px;
          }

          .experience-period {
            align-self: flex-start;
          }
        }

        @media (max-width: 650px) {
          .work-page {
            padding: 90px 18px 60px;
          }

          .work-title {
            font-size: 45px;
          }

          .work-subtitle {
            font-size: 15px;
          }

          .experience-list::before {
            left: 15px;
          }

          .experience-card {
            margin-left: 42px;
            padding: 22px;
            border-radius: 15px;
          }

          .experience-node {
            left: -42px;
            width: 31px;
            height: 31px;
            top: 25px;
            border-radius: 9px;
            font-size: 13px;
          }

          .experience-title {
            font-size: 20px;
          }

          .experience-company {
            font-size: 14px;
          }

          .experience-location {
            display: block;
            margin: 3px 0 0;
          }

          .engineering-grid {
            grid-template-columns: 1fr;
          }

          .engineering-header h2 {
            font-size: 27px;
          }

          .work-cta {
            padding: 40px 20px;
          }

          .work-cta h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="work-page">
        <div className="work-container">

          {/* HEADER */}
          <motion.div
            className="work-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="work-label">
              {"< EXPERIENCE />"}
            </div>

            <h1 className="work-title">
              Building Software
              <span>That Makes an Impact</span>
            </h1>

            <p className="work-subtitle">
              4+ years of professional software engineering experience
              across backend systems, full-stack applications, APIs,
              databases, cloud infrastructure, security, and
              production environments.
            </p>
          </motion.div>

          {/* EXPERIENCE */}
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <motion.article
                className="experience-card"
                key={`${experience.company}-${experience.title}`}
                initial={{ opacity: 0, x: 45 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="experience-node">
                  {experience.icon}
                </div>

                <div className="experience-top">
                  <div>
                    <h2 className="experience-title">
                      {experience.title}
                    </h2>

                    <div className="experience-company">
                      {experience.company}
                      <span className="experience-location">
                        • {experience.location}
                      </span>
                    </div>
                  </div>

                  <div className="experience-period">
                    {experience.period}
                  </div>
                </div>

                <div className="experience-type">
                  {experience.type}
                </div>

                <p className="experience-description">
                  {experience.description}
                </p>

                <ul className="highlights">
                  {experience.highlights.map((highlight, i) => (
                    <li className="highlight" key={i}>
                      <FaCheckCircle />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="technology-area">
                  <div className="technology-title">
                    TECHNOLOGIES & TOOLS
                  </div>

                  <div className="technology-list">
                    {experience.technologies.map((technology) => (
                      <span
                        className="technology"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ENGINEERING AREAS */}
          <motion.section
            className="engineering-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="engineering-header">
              <div className="work-label">
                ENGINEERING FOCUS
              </div>

              <h2>
                What I Bring to a Team
              </h2>
            </div>

            <div className="engineering-grid">
              {engineeringAreas.map((area, index) => (
                <motion.div
                  className="engineering-card"
                  key={area.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="engineering-icon">
                    {area.icon}
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            className="work-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="work-label">
              {"< LET'S BUILD />"}
            </div>

            <h2>
              Ready to build something great?
            </h2>

            <p>
              I'm interested in software engineering,
              full-stack development, backend and cloud
              engineering opportunities.
            </p>

            <motion.a
              href="/contact"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Let's Connect
              <FaArrowRight />
            </motion.a>
          </motion.section>

        </div>
      </section>
    </>
  );
}
