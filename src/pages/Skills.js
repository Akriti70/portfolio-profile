


import React from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaCode,
  FaServer,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Programming Languages",
      description:
        "Languages I use to build applications, APIs and data-driven solutions.",
      skills: [
        { name: "JavaScript", level: 95, icon: <FaJs /> },
        { name: "TypeScript", level: 85, icon: <FaCode /> },
        { name: "Python", level: 80, icon: <FaPython /> },
        { name: "SQL", level: 82, icon: <FaDatabase /> },
      ],
    },
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description:
        "Creating responsive, interactive and user-friendly web interfaces.",
      skills: [
        { name: "React", level: 95, icon: <FaReact /> },
        { name: "Next.js", level: 80, icon: <FaCode /> },
        { name: "HTML5", level: 95, icon: <FaCode /> },
        { name: "CSS3", level: 90, icon: <FaCode /> },
      ],
    },
    {
      icon: <FaNodeJs />,
      title: "Backend & APIs",
      description:
        "Building scalable backend systems, APIs and server-side applications.",
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs /> },
        { name: "Express.js", level: 80, icon: <FaServer /> },
        { name: "Django", level: 75, icon: <FaPython /> },
        { name: "REST APIs", level: 85, icon: <FaCode /> },
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      description:
        "Working with relational and NoSQL databases for modern applications.",
      skills: [
        { name: "MongoDB", level: 80, icon: <FaDatabase /> },
        { name: "PostgreSQL", level: 75, icon: <FaDatabase /> },
        { name: "MySQL", level: 80, icon: <FaDatabase /> },
        { name: "SQL Server", level: 70, icon: <FaDatabase /> },
      ],
    },
    {
      icon: <FaTools />,
      title: "DevOps & Tools",
      description:
        "Development tools and workflows used to build and maintain applications.",
      skills: [
        { name: "Git", level: 90, icon: <FaGitAlt /> },
        { name: "GitHub", level: 90, icon: <FaGitAlt /> },
        { name: "Docker", level: 75, icon: <FaDocker /> },
        { name: "CI/CD", level: 65, icon: <FaTools /> },
      ],
    },
    {
      icon: <FaServer />,
      title: "Development Practices",
      description:
        "Engineering practices that help create clean and maintainable software.",
      skills: [
        { name: "Clean Code", level: 90, icon: <FaCode /> },
        { name: "Responsive Design", level: 92, icon: <FaCode /> },
        { name: "Problem Solving", level: 90, icon: <FaCode /> },
        { name: "API Integration", level: 85, icon: <FaServer /> },
      ],
    },
  ];

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .skills-page {
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

        .skills-page::before {
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

        .skills-container {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 2;
        }

        .skills-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 65px;
        }

        .skills-label {
          color: #818cf8;
          font-family: monospace;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .skills-title {
          font-size: clamp(42px, 6vw, 70px);
          margin: 0;
          line-height: 1;
          letter-spacing: -3px;
          font-weight: 800;
        }

        .skills-title span {
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

        .skills-subtitle {
          color: #94a3b8;
          font-size: 17px;
          line-height: 1.8;
          margin-top: 22px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .skill-card {
          position: relative;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid #1e293b;
          background:
            linear-gradient(
              145deg,
              rgba(15,23,42,0.95),
              rgba(9,14,24,0.95)
            );
          transition:
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          overflow: hidden;
        }

        .skill-card::before {
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

        .skill-card:hover::before {
          transform: scaleX(1);
        }

        .skill-card:hover {
          border-color: rgba(129,140,248,0.55);
          box-shadow:
            0 20px 60px rgba(0,0,0,0.35),
            0 0 35px rgba(99,102,241,0.08);
        }

        .card-top {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 25px;
        }

        .category-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: rgba(99,102,241,0.12);
          border: 1px solid rgba(129,140,248,0.15);
          color: #818cf8;
          font-size: 23px;
        }

        .category-info h2 {
          margin: 0 0 7px;
          font-size: 20px;
          color: #f8fafc;
        }

        .category-info p {
          margin: 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.6;
        }

        .skill-item {
          margin-bottom: 18px;
        }

        .skill-item:last-child {
          margin-bottom: 0;
        }

        .skill-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .skill-name {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #cbd5e1;
          font-size: 14px;
          font-weight: 600;
        }

        .skill-name svg {
          color: #818cf8;
          font-size: 15px;
        }

        .skill-percent {
          color: #64748b;
          font-family: monospace;
          font-size: 12px;
        }

        .skill-bar {
          width: 100%;
          height: 7px;
          border-radius: 10px;
          background: #172033;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          border-radius: 10px;
          background:
            linear-gradient(
              90deg,
              #6366f1,
              #8b5cf6,
              #38bdf8
            );
          box-shadow:
            0 0 12px rgba(99,102,241,0.35);
        }

        .skills-cta {
          margin-top: 65px;
          text-align: center;
          padding: 55px 25px;
          border: 1px solid #1e293b;
          border-radius: 18px;
          background:
            radial-gradient(
              circle at center,
              rgba(99,102,241,0.12),
              transparent 60%
            ),
            #0b1120;
        }

        .skills-cta h2 {
          font-size: 32px;
          margin: 0 0 10px;
        }

        .skills-cta p {
          color: #64748b;
          margin-bottom: 28px;
        }

        .contact-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 10px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #6366f1,
              #8b5cf6
            );
          text-decoration: none;
          font-weight: 700;
          box-shadow:
            0 10px 30px rgba(99,102,241,0.25);
        }

        @media (max-width: 850px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .skills-page {
            padding: 95px 18px 60px;
          }

          .skills-title {
            font-size: 45px;
          }

          .skills-subtitle {
            font-size: 15px;
          }

          .skill-card {
            padding: 22px;
          }

          .category-icon {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .category-info h2 {
            font-size: 18px;
          }

          .skills-cta {
            padding: 40px 20px;
          }

          .skills-cta h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <section className="skills-page">
        <div className="skills-container">

          <motion.div
            className="skills-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="skills-label">
              {"< MY SKILLS />"}
            </div>

            <h1 className="skills-title">
              Tools I Use
              <span>& Technologies I Love</span>
            </h1>

            <p className="skills-subtitle">
              A collection of technologies and development
              practices I use to turn ideas into reliable,
              scalable and beautiful software.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <motion.div
                className="skill-card"
                key={category.title}
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
                <div className="card-top">
                  <div className="category-icon">
                    {category.icon}
                  </div>

                  <div className="category-info">
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                  </div>
                </div>

                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="skills-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="skills-label">
              LET'S BUILD SOMETHING
            </p>

            <h2>Have an idea in mind?</h2>

            <p>
              Let's turn it into a real product.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="contact-button"
            >
              Get In Touch
              <FaArrowRight />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SkillBadge({ name, level, icon }) {
  return (
    <div className="skill-item">
      <div className="skill-label">
        <span className="skill-name">
          {icon}
          {name}
        </span>

        <span className="skill-percent">
          {level}%
        </span>
      </div>

      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>
    </div>
  );
}
