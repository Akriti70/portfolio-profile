// src/components/Navbar.js

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaUserCircle,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= 768
  );

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);

      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      name: "Profile",
      path: "/",
      icon: <FaUserCircle />,
    },
    {
      name: "Skills",
      path: "/skills",
      icon: <FaTools />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Education",
      path: "/education",
      icon: <FaGraduationCap />,
    },
    {
      name: "Work",
      path: "/work",
      icon: <FaBriefcase />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelope />,
    },
  ];

  const styles = {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      background: "rgba(7, 11, 18, 0.88)",
      borderBottom: "1px solid rgba(99, 102, 241, 0.18)",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
    },

    wrapper: {
      maxWidth: "1250px",
      margin: "0 auto",
      padding: "14px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    },

    logo: {
      color: "#fff",
      fontSize: "23px",
      fontWeight: "800",
      textDecoration: "none",
      letterSpacing: "-0.5px",
      display: "flex",
      alignItems: "center",
      gap: "9px",
    },

    logoIcon: {
      color: "#818cf8",
      fontSize: "22px",
    },

    logoDot: {
      color: "#818cf8",
    },

    desktopMenu: {
      display: "flex",
      gap: "5px",
      alignItems: "center",
    },

    link: (active) => ({
      color: active ? "#ffffff" : "#94a3b8",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "9px 13px",
      borderRadius: "9px",
      transition: "all 0.25s ease",
      background: active
        ? "rgba(99, 102, 241, 0.15)"
        : "transparent",
      border: active
        ? "1px solid rgba(129, 140, 248, 0.25)"
        : "1px solid transparent",
      fontSize: "14px",
      fontWeight: active ? "600" : "500",
    }),

    icon: {
      fontSize: "15px",
    },

    contactLink: {
      color: "#fff",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginLeft: "8px",
      padding: "10px 16px",
      borderRadius: "9px",
      background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      boxShadow: "0 5px 20px rgba(99, 102, 241, 0.22)",
      fontSize: "14px",
      fontWeight: "700",
    },

    mobileBtn: {
      color: "#e2e8f0",
      fontSize: "24px",
      background: "rgba(15, 23, 42, 0.8)",
      border: "1px solid #334155",
      borderRadius: "9px",
      width: "42px",
      height: "42px",
      display: "grid",
      placeItems: "center",
      cursor: "pointer",
    },

    mobileMenu: {
      position: "absolute",
      top: "70px",
      left: "5%",
      width: "90%",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      borderRadius: "14px",
      background: "rgba(10, 15, 25, 0.97)",
      border: "1px solid #263244",
      boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(20px)",
    },

    mobileLink: (active) => ({
      color: active ? "#ffffff" : "#94a3b8",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "13px 15px",
      borderRadius: "9px",
      background: active
        ? "rgba(99, 102, 241, 0.15)"
        : "transparent",
      fontSize: "15px",
      fontWeight: active ? "600" : "500",
    }),
  };

  return (
    <nav style={styles.nav}>

      <div style={styles.wrapper}>

        {/* LOGO */}
        <Link to="/" style={styles.logo}>
          <FaCode style={styles.logoIcon} />

          <span>
            Dev
            <span style={styles.logoDot}>.</span>
            Showcase
          </span>
        </Link>


        {/* DESKTOP NAVIGATION */}
        {isDesktop ? (

          <div style={styles.desktopMenu}>

            {menuItems.map((item) => {

              const isActive =
                location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  style={styles.link(isActive)}
                >

                  <span style={styles.icon}>
                    {item.icon}
                  </span>

                  {item.name}

                </Link>
              );
            })}

            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              style={styles.contactLink}
            >
              <FaEnvelope />
              Let's Talk
            </Link>

          </div>

        ) : (

          <>
            {/* MOBILE BUTTON */}

            <button
              style={styles.mobileBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>


            {/* MOBILE MENU */}

            {isOpen && (

              <div style={styles.mobileMenu}>

                {menuItems.map((item) => {

                  const isActive =
                    location.pathname === item.path;

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      style={styles.mobileLink(isActive)}
                    >

                      <span style={styles.icon}>
                        {item.icon}
                      </span>

                      {item.name}

                    </Link>
                  );

                })}

              </div>

            )}

          </>
        )}

      </div>
    </nav>
  );
}

