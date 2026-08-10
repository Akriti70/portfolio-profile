





import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaReact,
  FaArrowRight,
} from "react-icons/fa";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Bosch",
    location: "Berlin, Germany",
    period: "May 2024 – April 2025",
    icon: <FaCode />,
    type: "Software Engineering",
    responsibilities: [
      "Developed scalable backend application services and customer-facing web applications using Node.js, TypeScript, React, Express.js, Python, and Kotlin.",
      "Designed and implemented RESTful APIs supporting microservices architecture and scalable application development.",
      "Improved PostgreSQL schema design, query optimization, backend performance, and API response times.",
      "Implemented authentication, authorization, input validation, and secure API development practices.",
      "Collaborated with product managers, designers, and platform engineers to deliver production-ready software.",
      "Built and maintained Docker-based deployments and automated CI/CD pipelines using GitHub Actions, Kubernetes, AWS, and Terraform.",
      "Performed backend debugging, logging analysis, monitoring, and production issue resolution.",
      "Optimized backend services through caching techniques and performance tuning.",
    ],
  },
  {
    title: "Software Working Student",
    company: "Getsafe GmbH",
    location: "Berlin, Germany",
    period: "Nov 2022 – Mar 2024",
    icon: <FaReact />,
    type: "Full Stack Development",
    responsibilities: [
      "Developed robust APIs and SQL integrations to improve customer data access and application workflows.",
      "Built automated tests with Jest to improve software quality and release stability.",
      "Redesigned e-commerce functionality using React.js, Redux, and Material-UI, contributing to a 50% improvement in conversion rates.",
      "Worked closely with Agile teams through sprint planning, code reviews, pair programming, and technical discussions.",
      "Improved application performance, scalability, and security using Docker and Kubernetes.",
      "Collaborated with engineers and product stakeholders to deliver reliable customer-facing features.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Vertex Infotech Services",
    location: "India",
    period: "Aug 2017 – Sept 2019",
    icon: <FaServer />,
    type: "Web & Backend Engineering",
    responsibilities: [
      "Developed responsive web and mobile applications using JavaScript, TypeScript, Node.js, and Vue.js.",
      "Designed and integrated RESTful APIs for frontend and backend application communication.",
      "Optimized database queries and application performance using MongoDB and SQL Server.",
      "Collaborated with cross-functional teams during requirements gathering, development, testing, and deployment.",
      "Contributed to code reviews, technical documentation, debugging, and software maintenance.",
      "Supported production issue resolution and backend development using Flask and Django.",
    ],
  },
];

const technologies = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Terraform",
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
          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(99, 102, 241, 0.14),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(56, 189, 248, 0.10),
              transparent 25%
            ),
            #070b12;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

        /* HEADER */

        .work-header {
          text-align: center;
          max-width: 850px;
          margin: 0 auto 70px;
        }

        .work-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 16px;
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
          max-width: 700px;
          margin: 25px auto 0;
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.8;
        }

        /* EXPERIENCE TIMELINE */

        .experience-list {
          position: relative;
          max-width: 1050px;
          margin: auto;
        }

        .experience-list::before {
          content: "";
          position: absolute;
          left: 31px;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            #6366f1,
            #8b5cf6,
            #38bdf8,
            transparent
          );
          opacity: 0.6;
        }

        /* EXPERIENCE CARD */

        .experience-card {
          position: relative;
          margin-bottom: 30px;
          margin-left: 75px;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #1e293b;
          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.96),
              rgba(7, 11, 18, 0.96)
            );
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.28);
          overflow: hidden;
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .experience-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(
            180deg,
            #6366f1,
            #c084fc,
            #38bdf8
          );
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.45);
        }

        .experience-card:hover {
          border-color: rgba(129, 140, 248, 0.5);
          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.45),
            0 0 40px rgba(99, 102, 241, 0.08);
        }

        /* TIMELINE ICON */

        .timeline-icon {
          position: absolute;
          left: -75px;
          top: 28px;
          width: 62px;
          height: 62px;
          display: grid;
          place-items: center;
          border-radius: 16px;
          color: #a5b4fc;
          background:
            linear-gradient(
              145deg,
              rgba(99, 102, 241, 0.20),
              rgba(139, 92, 246, 0.08)
            );
          border: 1px solid rgba(129, 140, 248, 0.35);
          box-shadow:
            0 0 25px rgba(99, 102, 241, 0.16);
          font-size: 22px;
          z-index: 3;
        }

        /* CARD HEADER */

        .experience-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 25px;
          margin-bottom: 25px;
        }

        .experience-info {
          flex: 1;
        }

        .experience-type {
          display: inline-block;
          margin-bottom: 10px;
          color: #818cf8;
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .experience-title {
          margin: 0 0 8px;
          color: #f8fafc;
          font-size: 27px;
          line-height: 1.2;
          font-weight: 750;
        }

        .experience-company {
          margin: 0;
          color: #c084fc;
          font-size: 16px;
          font-weight: 600;
        }

        .experience-location {
          color: #64748b;
          font-weight: 400;
        }

        .experience-period {
          flex-shrink: 0;
          padding: 9px 13px;
          border-radius: 8px;
          border: 1px solid #263244;
          background: #0b1120;
          color: #94a3b8;
          font-family: monospace;
          font-size: 12px;
          white-space: nowrap;
        }

        /* RESPONSIBILITIES */

        .responsibilities {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 12px;
        }

        .responsibility-item {
          position: relative;
          padding-left: 26px;
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.75;
        }

        .responsibility-item::before {
          content: "▹";
          position: absolute;
          left: 0;
          top: 0;
          color: #818cf8;
          font-size: 17px;
          font-weight: bold;
        }

        .responsibility-item:hover {
          color: #e2e8f0;
        }

        /* TECHNOLOGY TAGS */

        .technology-section {
          max-width: 1050px;
          margin: 55px auto 0;
          padding: 35px;
          border-radius: 18px;
          border: 1px solid #1e293b;
          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.08),
              transparent 65%
            ),
            #0b1120;
        }

        .technology-heading {
          text-align: center;
          margin-bottom: 25px;
        }

        .technology-heading h2 {
          margin: 0;
          font-size: 24px;
        }

        .technology-heading p {
          margin: 8px 0 0;
          color: #64748b;
          font-size: 14px;
        }

        .technology-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .technology-tag {
          padding: 9px 14px;
          border-radius: 8px;
          border: 1px solid #263244;
          background: #0f172a;
          color: #cbd5e1;
          font-family: monospace;
          font-size: 12px;
          transition: 0.3s ease;
        }

        .technology-tag:hover {
          color: #fff;
          border-color: #6366f1;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(99,102,241,0.12);
        }

        /* CTA */

        .work-cta {
          margin: 70px auto 0;
          max-width: 850px;
          padding: 55px 25px;
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
          margin: 0 0 12px;
          font-size: 32px;
        }

        .work-cta p {
          margin: 0 0 28px;
          color: #64748b;
        }

        .work-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 23px;
          border-radius: 10px;
          color: white;
          text-decoration: none;
          font-weight: 700;
          background: linear-gradient(
            135deg,
            #6366f1,
            #8b5cf6
          );
          box-shadow:
            0 10px 30px rgba(99,102,241,0.25);
          transition: 0.3s ease;
        }

        .work-button:hover {
          box-shadow:
            0 15px 40px rgba(99,102,241,0.4);
        }

        /* RESPONSIVE */

        @media (max-width: 800px) {
          .work-page {
            padding: 90px 18px 70px;
          }

          .experience-list::before {
            left: 24px;
          }

          .experience-card {
            margin-left: 58px;
            padding: 24px;
          }

          .timeline-icon {
            left: -58px;
            width: 48px;
            height: 48px;
            border-radius: 13px;
            font-size: 18px;
          }

          .experience-top {
            flex-direction: column;
            gap: 12px;
          }

          .experience-period {
            white-space: normal;
          }
        }

        @media (max-width: 600px) {
          .work-title {
            font-size: 45px;
          }

          .work-subtitle {
            font-size: 15px;
          }

          .experience-card {
            margin-left: 0;
            padding: 22px;
            padding-top: 75px;
          }

          .experience-list::before {
            display: none;
          }

          .timeline-icon {
            left: 22px;
            top: 20px;
          }

          .experience-title {
            font-size: 23px;
          }

          .experience-company {
            font-size: 14px;
          }

          .responsibility-item {
            font-size: 13px;
          }

          .technology-section {
            padding: 28px 18px;
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
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="work-label">
              {"< PROFESSIONAL EXPERIENCE />"}
            </div>

            <h1 className="work-title">
              Building Software
              <span>That Makes an Impact</span>
            </h1>

            <p className="work-subtitle">
              Experience across software engineering, full-stack
              development, backend systems, cloud infrastructure,
              and production-ready applications.
            </p>
          </motion.div>

          {/* EXPERIENCE */}

          <div className="experience-list">
            {experiences.map((job, index) => (
              <motion.article
                className="experience-card"
                key={job.company}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -7,
                }}
              >
                <motion.div
                  className="timeline-icon"
                  whileHover={{
                    scale: 1.08,
                    rotate: 3,
                  }}
                >
                  {job.icon}
                </motion.div>

                <div className="experience-top">
                  <div className="experience-info">
                    <span className="experience-type">
                      {job.type}
                    </span>

                    <h2 className="experience-title">
                      {job.title}
                    </h2>

                    <p className="experience-company">
                      {job.company}
                      <span className="experience-location">
                        {" "}• {job.location}
                      </span>
                    </p>
                  </div>

                  <div className="experience-period">
                    {job.period}
                  </div>
                </div>

                <ul className="responsibilities">
                  {job.responsibilities.map((responsibility, i) => (
                    <motion.li
                      className="responsibility-item"
                      key={i}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          {/* TECHNOLOGIES */}

          <motion.section
            className="technology-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="technology-heading">
              <h2>Technologies Used</h2>
              <p>
                A modern engineering toolkit across frontend,
                backend, databases, cloud and DevOps.
              </p>
            </div>

            <div className="technology-list">
              {technologies.map((technology, index) => (
                <motion.span
                  className="technology-tag"
                  key={technology}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* CTA */}

          <motion.section
            className="work-cta"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="work-label">
              LET'S BUILD SOMETHING
            </div>

            <h2>
              Ready for the next challenge?
            </h2>

            <p>
              I'm interested in building reliable products,
              scalable systems, and meaningful digital experiences.
            </p>

            <motion.a
              href="/contact"
              className="work-button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
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

