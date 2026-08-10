
import React from "react";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaCode,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const projects = [
  {
    title: "Apartment Rentals App",
    category: "Frontend Application",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    description:
      "A modern apartment rental platform with CRUD functionality, bookmarking, reusable components, and a fully responsive user interface.",
    link: "https://reactapartment.netlify.app/",
    icon: <FaReact />,
    featured: true,
  },
  {
    title: "Pizza Ordering SPA",
    category: "Full Stack Application",
    tech: ["React", "JavaScript", "Mock API"],
    description:
      "A complete pizza ordering experience featuring cart management, checkout flow, product administration, and mock backend integration.",
    link: "https://pizaaareact.netlify.app/",
    icon: <FaReact />,
    featured: true,
  },
  {
    title: "DevShowcase",
    category: "MERN Application",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "A full-stack developer portfolio platform with authentication, project uploads, profile management, and dynamic content.",
    link: "https://devshowcaseportfolio.netlify.app/",
    icon: <FaNodeJs />,
    featured: true,
  },
  {
    title: "Job Tracker App",
    category: "Full Stack Application",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    description:
      "A job application management dashboard with status tracking, REST APIs, dynamic React components, and organized application workflows.",
    link: "https://job-track-app-express.netlify.app/",
    icon: <FaNodeJs />,
  },
  {
    title: "2D Space Defender",
    category: "JavaScript Game",
    tech: ["JavaScript", "Canvas", "CSS"],
    description:
      "A browser-based 2D space shooter featuring animations, game physics, scoring mechanics, responsive controls, and mobile support.",
    link: "https://spacedefender-game.netlify.app/",
    icon: <FaCode />,
  },
  {
    title: "Automated Keyword Extraction",
    category: "NLP / Data Science",
    tech: ["Python", "NLTK", "Scikit-learn"],
    description:
      "An NLP pipeline developed at HTW Berlin to extract, analyze, and classify trending keywords from social media data.",
    link: null,
    icon: <FaPython />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .projects-page {
          min-height: 100vh;
          padding: 110px 7% 90px;
          color: #f8fafc;
          font-family: Arial, sans-serif;
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 10% 10%,
              rgba(99, 102, 241, 0.16),
              transparent 28%
            ),
            radial-gradient(
              circle at 90% 25%,
              rgba(56, 189, 248, 0.10),
              transparent 25%
            ),
            radial-gradient(
              circle at 50% 100%,
              rgba(168, 85, 247, 0.10),
              transparent 35%
            ),
            #070b12;
        }

        .projects-page::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;

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

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* HEADER */

        .projects-header {
          max-width: 850px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .projects-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 18px;
        }

        .projects-title {
          margin: 0;
          font-size: clamp(45px, 7vw, 75px);
          line-height: 1;
          letter-spacing: -4px;
          font-weight: 800;
        }

        .projects-title span {
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

        .projects-subtitle {
          max-width: 700px;
          margin: 25px auto 0;
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.8;
        }

        /* STATS */

        .project-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          max-width: 850px;
          margin: 0 auto 65px;
          border: 1px solid #1e293b;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(12px);
        }

        .project-stat {
          padding: 22px;
          text-align: center;
          border-right: 1px solid #1e293b;
        }

        .project-stat:last-child {
          border-right: none;
        }

        .project-stat strong {
          display: block;
          font-size: 30px;
          color: #818cf8;
          margin-bottom: 5px;
        }

        .project-stat span {
          color: #64748b;
          font-size: 13px;
        }

        /* GRID */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        /* CARD */

        .project-card {
          position: relative;
          min-height: 360px;
          padding: 30px;
          border-radius: 20px;
          border: 1px solid #1e293b;

          background:
            linear-gradient(
              145deg,
              rgba(15, 23, 42, 0.96),
              rgba(7, 11, 18, 0.96)
            );

          overflow: hidden;

          box-shadow:
            0 20px 60px rgba(0,0,0,0.28);

          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .project-card::before {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -80px;
          top: -80px;
          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(99,102,241,0.18),
              transparent 70%
            );

          transition: 0.4s;
        }

        .project-card:hover {
          border-color: rgba(129,140,248,0.55);

          box-shadow:
            0 30px 80px rgba(0,0,0,0.45),
            0 0 45px rgba(99,102,241,0.10);
        }

        .project-card:hover::before {
          transform: scale(1.6);
        }

        .featured-card {
          border-color: rgba(99,102,241,0.28);
        }

        /* TOP */

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 25px;
        }

        .project-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 15px;

          background:
            linear-gradient(
              135deg,
              rgba(99,102,241,0.16),
              rgba(56,189,248,0.08)
            );

          border: 1px solid rgba(129,140,248,0.20);

          color: #818cf8;
          font-size: 26px;

          box-shadow:
            0 0 25px rgba(99,102,241,0.08);
        }

        .featured-badge {
          padding: 6px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-family: monospace;
          letter-spacing: 1px;
          color: #a5b4fc;
          border: 1px solid rgba(129,140,248,0.25);
          background: rgba(99,102,241,0.08);
        }

        /* CONTENT */

        .project-category {
          color: #818cf8;
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .project-card h2 {
          margin: 0 0 14px;
          font-size: 26px;
          color: #f8fafc;
        }

        .project-description {
          color: #94a3b8;
          line-height: 1.75;
          font-size: 15px;
          margin-bottom: 25px;
        }

        /* TECHNOLOGIES */

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .tech-badge {
          padding: 7px 10px;
          border-radius: 8px;
          color: #cbd5e1;
          background: #0b1120;
          border: 1px solid #1e293b;
          font-family: monospace;
          font-size: 11px;
          transition: 0.25s;
        }

        .project-card:hover .tech-badge {
          border-color: rgba(129,140,248,0.25);
        }

        /* LINK */

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #c4b5fd;
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          transition: 0.3s;
        }

        .project-link:hover {
          color: #38bdf8;
          gap: 13px;
        }

        .project-link svg {
          font-size: 12px;
        }

        .private-project {
          color: #64748b;
          font-size: 13px;
          font-family: monospace;
        }

        /* BOTTOM CTA */

        .projects-cta {
          margin-top: 70px;
          padding: 65px 25px;
          text-align: center;
          border: 1px solid #1e293b;
          border-radius: 20px;

          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.14),
              transparent 60%
            ),
            #0b1120;

          box-shadow:
            0 25px 70px rgba(0,0,0,0.25);
        }

        .projects-cta h2 {
          margin: 0 0 12px;
          font-size: clamp(28px, 4vw, 42px);
        }

        .projects-cta p {
          color: #64748b;
          margin-bottom: 28px;
        }

        .projects-cta-button {
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
            0 12px 35px rgba(99,102,241,0.25);

          transition: 0.3s;
        }

        .projects-cta-button:hover {
          box-shadow:
            0 16px 45px rgba(99,102,241,0.4);
        }

        /* RESPONSIVE */

        @media (max-width: 850px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .projects-page {
            padding: 90px 18px 60px;
          }

          .projects-title {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .projects-subtitle {
            font-size: 15px;
          }

          .project-stats {
            grid-template-columns: 1fr;
          }

          .project-stat {
            border-right: none;
            border-bottom: 1px solid #1e293b;
          }

          .project-stat:last-child {
            border-bottom: none;
          }

          .project-card {
            padding: 23px;
            min-height: auto;
          }

          .project-card h2 {
            font-size: 23px;
          }
        }
      `}</style>

      <section className="projects-page">
        <div className="projects-container">

          {/* HEADER */}

          <motion.header
            className="projects-header"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="projects-label">
              {"< MY PROJECTS />"}
            </div>

            <h1 className="projects-title">
              Things I've
              <span>Built & Shipped</span>
            </h1>

            <p className="projects-subtitle">
              A selection of full-stack applications, web experiences,
              experiments, and software projects built with modern
              technologies and a focus on clean engineering.
            </p>
          </motion.header>

          {/* STATS */}

          <motion.div
            className="project-stats"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="project-stat">
              <strong>06</strong>
              <span>Featured Projects</span>
            </div>

            <div className="project-stat">
              <strong>04+</strong>
              <span>Full-Stack Apps</span>
            </div>

            <div className="project-stat">
              <strong>10+</strong>
              <span>Technologies Used</span>
            </div>
          </motion.div>

          {/* PROJECT GRID */}

          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className={`project-card ${
                  project.featured ? "featured-card" : ""
                }`}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
              >
                <div className="project-top">
                  <div className="project-icon">
                    {project.icon}
                  </div>

                  {project.featured && (
                    <span className="featured-badge">
                      FEATURED
                    </span>
                  )}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h2>{project.title}</h2>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((technology) => (
                    <span
                      className="tech-badge"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <FaExternalLinkAlt />
                  </a>
                ) : (
                  <span className="private-project">
                    // Academic project
                  </span>
                )}
              </motion.article>
            ))}
          </motion.div>

          {/* CTA */}

          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="projects-label">
              {"< MORE ON GITHUB />"}
            </div>

            <h2>
              Let's build something
              <br />
              extraordinary.
            </h2>

            <p>
              Explore more of my code, experiments, and development work.
            </p>

            <motion.a
              href="https://github.com/Akriti70"
              target="_blank"
              rel="noopener noreferrer"
              className="projects-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaGithub />
              Explore GitHub
              <FaArrowRight />
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
}