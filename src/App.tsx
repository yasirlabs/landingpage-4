/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Code,
  Layout,
  Search,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

// ─── Images ────────────────────────────────────────────────
import alrawiikon from "./public/images/alrawiikon.png";
import alrawiLogo from "./public/images/alrawiLogo.png";
import arrowAirplane from "./public/images/arrow-airplane-ilist.png";
import arrowIlist from "./public/images/arrow-ilist.png";
import dahsedIlist from "./public/images/dahsed-ilist.png";
import design01 from "./public/images/design-01.png";
import design02 from "./public/images/design-02.png";
import footerBg from "./public/images/footer-bg.png";
import footerCom from "./public/images/footer-com.png";
import footerYasir from "./public/images/footer-yasir.png";
import heroBg from "./public/images/hero-bg.png";
import heroYasir from "./public/images/hero-yasir.png";
import huaweiLogo from "./public/images/huaweiLogo.png";
import icoSoc01 from "./public/images/ico_soc-01.svg";
import icoSoc02 from "./public/images/ico_soc-02.svg";
import icoSoc03 from "./public/images/ico_soc-03.svg";
import icoSoc04 from "./public/images/ico_soc-04.svg";
import icoSoc05 from "./public/images/ico_soc-05.svg";
import logo from "./public/images/logo.png";
import numb01 from "./public/images/numb-01.png";
import numb02 from "./public/images/numb-02.png";
import numb03 from "./public/images/numb-03.png";
import numb04 from "./public/images/numb-04.png";
import numb05 from "./public/images/numb-05.png";
import numb06 from "./public/images/numb-06.png";
import paperAirplane from "./public/images/paper-airplane.png";
import paypalLogo from "./public/images/paypalLogo.png";
import person01 from "./public/images/person-01.png";
import person02 from "./public/images/person-02.png";
import person03 from "./public/images/person-03.png";
import programming01 from "./public/images/programming-01.png";
import programming02 from "./public/images/programming-02.png";
import syllabusWomen from "./public/images/syllabus_women.png";
import transferWiseLogo from "./public/images/TransferWiseLogo.png";
import womenIlist from "./public/images/women_ilist.png";
import wooCommerceLogo from "./public/images/WooCommerceLogo.png";
import seo01 from "./public/images/seo-01.png";
import seo02 from "./public/images/seo-02.png";

export const images = {
  alrawiikon,
  alrawiLogo,
  arrowAirplane,
  arrowIlist,
  dahsedIlist,
  design01,
  design02,
  footerBg,
  footerCom,
  footerYasir,
  heroBg,
  heroYasir,
  huaweiLogo,
  icoSoc01,
  icoSoc02,
  icoSoc03,
  icoSoc04,
  icoSoc05,
  logo,
  numb01,
  numb02,
  numb03,
  numb04,
  numb05,
  numb06,
  paperAirplane,
  paypalLogo,
  seo01,
  seo02,
  person01,
  person02,
  person03,
  programming01,
  programming02,
  syllabusWomen,
  transferWiseLogo,
  womenIlist,
  wooCommerceLogo,
};

// ─── Responsive Hook ────────────────────────────────────────────────
const useWidth = () => {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
};

// ─── Spring Scroll Utilities ─────────────────────────────────────────
// Gerçek fizik tabanlı yay simülasyonu:
// position ve velocity state'i her frame'de güncellenir,
// hedefe yaklaştıkça yavaşlar, geçer (overshoot), geri döner → elastik his
let springRAF: number | null = null;

const springScrollTo = (targetY: number) => {
  if (springRAF !== null) cancelAnimationFrame(springRAF);

  // Yay sabitleri — stiffness düşük + damping düşük = çok elastik
  const stiffness = 0.045; // ne kadar sert çeker (düşük = yumuşak)
  const damping = 0.62; // ne kadar sönümlenir (düşük = çok sallanır)
  const mass = 1;

  let position = window.scrollY;
  let velocity = 0;
  let lastTime: number | null = null;

  const step = (now: number) => {
    const dt = lastTime ? Math.min((now - lastTime) / 16, 4) : 1; // normalize ~60fps
    lastTime = now;

    const force = (targetY - position) * stiffness;
    const damper = velocity * damping;
    const accel = (force - damper) / mass;

    velocity += accel * dt;
    position += velocity * dt;

    window.scrollTo(0, position);

    // Yeterince yakınsa ve hız düştüyse dur
    if (Math.abs(targetY - position) < 0.5 && Math.abs(velocity) < 0.5) {
      window.scrollTo(0, targetY);
      springRAF = null;
      return;
    }

    springRAF = requestAnimationFrame(step);
  };

  springRAF = requestAnimationFrame(step);
};

const useSmoothNav = () => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    springScrollTo(top);
  };
  return handleNav;
};

// ─── Scroll Progress Bar ───────────────────────────────────────────
const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 9999,
        background: "rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          height: "100%",
          background: "linear-gradient(90deg, #f6c7b2, #e8926f)",
          width: `${progress}%`,
          borderRadius: "0 2px 2px 0",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
};

// ─── Navbar ────────────────────────────────────────────────────────
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [signHovered, setSignHovered] = useState(false);
  const w = useWidth();
  const isMobile = w < 768;
  const handleNav = useSmoothNav();

  const NAV_ITEMS = ["ABOUT", "PROGRAM", "COURSES", "REVIEWS"];

  return (
    <nav
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "16px 20px" : "16px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: isMobile ? "60px" : "72px",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              className={
                isMobile ? "w-9 h-9 object-contain" : "w-12 h-12 object-contain"
              }
              src={images.logo}
              alt="Alrawi Logo"
            />
            <span
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: isMobile ? "28px" : "42px",
                letterSpacing: "-0.3px",
                lineHeight: 1,
              }}
            >
              Yasir
            </span>
          </div>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
              {NAV_ITEMS.map((item) => {
                const [hovered, setHovered] = useState(false);
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNav(e, item.toLowerCase())}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative pb-1 text-white/90 hover:text-white font-semibold tracking-widest text-xl transition-opacity duration-200"
                    style={{ textDecoration: "none" }}
                  >
                    {item}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-white transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: hovered ? "left" : "right",
                      }}
                    />
                  </a>
                );
              })}
            </div>
          )}

          {/* Desktop: Search + Sign In */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <button
                onMouseEnter={() => setSignHovered(true)}
                onMouseLeave={() => setSignHovered(false)}
                className="relative overflow-hidden"
                style={{
                  background: "white",
                  color: "#1a1a1a",
                  border: "1.5px solid rgba(0,0,0,0.12)",
                  borderRadius: "50px",
                  padding: "10px 32px",
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "1px",
                  cursor: "pointer",
                  boxShadow: signHovered
                    ? "0 4px 16px rgba(0,0,0,0.14)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: signHovered ? "400px" : "0px",
                    height: signHovered ? "400px" : "0px",
                    background: "#ebc7b5",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    transition:
                      "width 0.8s cubic-bezier(0.4,0,0.2,1), height 0.8s cubic-bezier(0.4,0,0.2,1)",
                    zIndex: 0,
                  }}
                />
                <span style={{ position: "relative", zIndex: 1 }}>SIGN IN</span>
              </button>
            </div>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "white",
                padding: 0,
              }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: "rgba(15,15,20,0.97)",
              borderRadius: "20px",
              padding: "24px",
              marginTop: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  handleNav(e, item.toLowerCase());
                  setIsOpen(false);
                }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "18px",
                  letterSpacing: "2px",
                }}
              >
                {item}
              </a>
            ))}
            <button
              style={{
                background: "white",
                color: "#1a1a1a",
                border: "none",
                borderRadius: "50px",
                padding: "12px 28px",
                fontWeight: 700,
                fontSize: "16px",
                cursor: "pointer",
                width: "fit-content",
                marginTop: "4px",
              }}
            >
              SIGN IN
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// ─── Hero ───────────────────────────────────────────────────────────
const Hero = () => {
  const w = useWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${images.heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: isMobile ? "88px" : "120px",
      }}
      className={isMobile ? "rounded-b-[64px]" : "rounded-b-[128px]"}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isMobile ? "0 20px" : isTablet ? "0 32px" : "0",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          {/* Left Content */}
          <div style={{ textAlign: isMobile ? "center" : "left" }}>
            <h4
              style={{
                fontSize: isMobile
                  ? "clamp(40px,10vw,60px)"
                  : isTablet
                    ? "clamp(56px,8vw,72px)"
                    : "clamp(80px,6vw,80px)",
                fontWeight: 500,
                color: "white",
                lineHeight: 1.1,
                margin: "0 0 24px 0",
                letterSpacing: "-2px",
              }}
            >
              Your next big
              <br />
              idea starts here
            </h4>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: isMobile ? "18px" : "25px",
                lineHeight: 1.6,
                margin: "0 0 40px 0",
                maxWidth: isMobile ? "100%" : "380px",
              }}
            >
              The ideal framework to learn how to manage all aspects of startup.
            </p>
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="relative overflow-hidden"
              style={{
                background: "#f6c7b2",
                color: "#1a1a1a",
                border: "none",
                borderRadius: "50px",
                padding: isMobile ? "16px 36px" : "20px 45px",
                fontWeight: 700,
                fontSize: isMobile ? "16px" : "20px",
                letterSpacing: "1.5px",
                cursor: "pointer",
                transition: "all 0.5s ease",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: hovered ? "500px" : "0px",
                  height: hovered ? "500px" : "0px",
                  background: "white",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  transition:
                    "width 0.8s cubic-bezier(0.4,0,0.2,1), height 0.8s cubic-bezier(0.4,0,0.2,1)",
                  zIndex: 0,
                }}
              />
              <span style={{ position: "relative", zIndex: 1 }}>
                START FOR FREE
              </span>
            </button>
          </div>

          {/* Right — Illustration (hidden on mobile/tablet) */}
          {!isMobile && !isTablet && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={images.heroYasir}
                alt="Hero"
                style={{ width: "100%", maxWidth: "720px", height: "auto" }}
                referrerPolicy="no-referrer"
              />
            </div>
          )}
        </div>

        {/* Logos */}
        <div
          className="w-100 my-10"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            style={{
              width: "100%",
              marginTop: isMobile ? "20px" : "60px",
              padding: "0 40px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: isMobile ? "20px" : "60px",
              opacity: 0.7,
              filter: "brightness(0) invert(1)",
            }}
          >
            {[
              images.transferWiseLogo,
              images.wooCommerceLogo,
              images.huaweiLogo,
              images.paypalLogo,
            ].map((logo) => (
              <img
                key={logo}
                src={logo}
                alt={logo}
                style={{ height: isMobile ? "24px" : "40px" }}
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

// ─── Stats ──────────────────────────────────────────────────────────
const Stats = () => {
  const w = useWidth();
  const isMobile = w < 768;

  const stats = [
    {
      value: ".200+",
      description:
        "Ideal courses to sell physical and digital products from your site on WordPress.com",
      icon: numb01,
    },
    {
      value: ".150+",
      description:
        "Experts share their knowledge on building and growing a web presence.",
      icon: numb02,
    },
    {
      value: ".10k+",
      description:
        "Small businesses and online stores call WordPress.com home. No code, no complexities.",
      icon: numb03,
    },
  ];

  return (
    <div
      style={{
        background: "rgba(245,238,228,0.92)",
        borderRadius: isMobile ? "40px" : "98px",
        padding: isMobile ? "32px 24px" : "48px 60px",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
        gap: "0",
        margin: "32px auto",
        position: "relative",
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: isMobile ? "28px 20px" : "30px 90px",
            borderRight:
              !isMobile && i < stats.length - 1
                ? "1.5px dashed #c8b89a"
                : "none",
            borderBottom:
              isMobile && i < stats.length - 1
                ? "1.5px dashed #c8b89a"
                : "none",
            position: "relative",
          }}
        >
          <img
            src={stat.icon}
            alt="alt"
            referrerPolicy="no-referrer"
            style={{
              width: isMobile ? "96px" : "128px",
              height: isMobile ? "96px" : "128px",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.5,
            }}
          />
          <h2
            style={{
              fontSize: isMobile ? "44px" : "56px",
              fontWeight: 800,
              color: "#111",
              margin: "24px 0 20px",
              letterSpacing: "-1.5px",
              lineHeight: 1,
              position: "relative",
              zIndex: 1,
            }}
          >
            {stat.value}
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: 1.65,
              margin: 0,
              maxWidth: "220px",
            }}
          >
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
};

// ─── Syllabus ───────────────────────────────────────────────────────
const Syllabus = () => {
  const w = useWidth();
  const isMobile = w < 768;

  const steps = [
    {
      num: "01",
      title: "Videos from professionals",
      desc: "Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation.",
      icon: numb04,
    },
    {
      num: "02",
      title: "Practical independent work",
      desc: "Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings.",
      icon: numb05,
    },
    {
      num: "03",
      title: "Feedback from specialists",
      desc: "Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.",
      icon: numb06,
    },
  ];

  return (
    <section id="program" className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={
            isMobile
              ? "flex flex-col gap-12"
              : "grid lg:grid-cols-2 gap-16 items-center"
          }
        >
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={images.womenIlist}
                alt="Syllabus Illustration"
                className="w-full pt-10 mx-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
          <div>
            <h4 className={isMobile ? "text-4xl mb-10" : "text-6xl mb-12"}>
              Syllabus of courses
            </h4>
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  {idx === 1 && !isMobile && (
                    <img
                      src={images.arrowIlist}
                      alt="Arrow"
                      className="w-20 flex-shrink-0 scale-x-[-1]"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative">
                      <img
                        src={step.icon}
                        alt={step.num}
                        className="w-full h-full"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-white text-xl">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-slate-200 pb-8 w-full">
                    <h3
                      className={
                        isMobile
                          ? "text-xl flex items-center justify-between"
                          : "text-2xl flex items-center justify-between h-[60px]"
                      }
                    >
                      {step.title}
                      {idx !== 1 && !isMobile && (
                        <img
                          src={
                            idx === 2 ? images.arrowAirplane : images.arrowIlist
                          }
                          alt="Arrow"
                          className={idx === 2 ? "w-40 mt-40" : "w-20 mt-40"}
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </h3>
                    <p className="leading-relaxed w-100 text-lg">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Courses ────────────────────────────────────────────────────────
const Courses = () => {
  const w = useWidth();
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;

  const courses = [
    {
      category: "design",
      title:
        "How to make a quality site in WordPress in 40 hours without experience",
      icon: <Layout className="text-orange-500" />,
      illustr_01: images.design01,
      illustr_02: images.design02,
    },
    {
      category: "programming",
      title:
        "WordPress: How to start in a developer without any basic knowledge",
      icon: <Code className="text-blue-500" />,
      illustr_01: programming01,
      illustr_02: programming02,
    },
    {
      category: "seo",
      title:
        "Creating dynamic sites with CMS WordPress + SEO for WordPress websites",
      icon: <Search className="text-emerald-500" />,
      illustr_01: seo01,
      illustr_02: seo02,
    },
  ];

  return (
    <section
      id="courses"
      className={isMobile ? "rounded-b-[64px]" : "py-24 rounded-b-[128px]"}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: isMobile ? "60px" : "120px",
        paddingBottom: isMobile ? "60px" : "80px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${images.heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
          zIndex: -1,
        }}
      />
      <div
        className={
          isMobile
            ? "px-5 w-full"
            : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        }
      >
        <div
          className={
            isMobile
              ? "flex flex-col gap-6 mb-10"
              : "flex flex-col lg:flex-row justify-between items-center mb-20 gap-8 text-left"
          }
        >
          <h4
            className={
              isMobile
                ? "text-3xl font-semibold text-white"
                : "text-6xl lg:w-1/2 font-semibold text-white"
            }
          >
            Professional courses on creating websites
          </h4>
          <p
            className={
              isMobile
                ? "text-base font-normal"
                : "lg:w-2/5 text-2xl font-normal"
            }
            style={{ color: "rgb(255 255 255 / 65%)" }}
          >
            Our courses are complete professional courses of high quality that
            include a set of video lessons, practical and training materials.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : isTablet
                ? "1fr 1fr"
                : "1fr 1fr 1fr",
            gap: "32px",
          }}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="course-card relative bg-[#f5ede0] rounded-3xl overflow-hidden flex flex-col group"
              style={{ minHeight: isMobile ? "380px" : "500px" }}
            >
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <span className="text-xl font-medium uppercase tracking-widest text-[#333] mb-4">
                  {course.category}
                </span>
                <h3
                  className="text-2xl font-bold leading-snug mb-6 transition-colors"
                  style={{ maxWidth: "280px" }}
                >
                  {course.title}
                </h3>
                <div className="relative px-8 pb-8 z-10">
                  <div className="absolute top-4 right-12 w-3 h-3 rounded-full bg-rose-300 opacity-70" />
                  <div className="absolute top-16 right-4 w-2 h-2 rounded-full border border-slate-400 opacity-50" />
                  <div className="absolute top-20 left-8 w-1 h-1 rounded-full bg-slate-500 opacity-60" />
                  <div className="absolute bottom-4 left-2 w-4 h-4 rounded-full border border-slate-400 opacity-40" />
                </div>
              </div>
              <div className="relative px-8 pb-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand-blue font-bold text-xl uppercase tracking-wider hover:gap-4 transition-all mb-6"
                >
                  Read more <ChevronRight size={16} />
                </a>
                <div className="absolute bottom-0 right-0 w-90 overflow-hidden rounded-br-3xl pointer-events-none">
                  <img
                    src={course.illustr_01}
                    alt="Course illustration"
                    className="w-full h-full object-contain translate-x-6 translate-y-6 z-1 transition-opacity duration-300 group-hover:opacity-0"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src={course.illustr_02}
                    alt="Course illustration hover"
                    className="w-full h-full object-contain translate-x-6 translate-y-6 z-1 absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Reviews ────────────────────────────────────────────────────────
const Reviews = () => {
  const w = useWidth();
  const isMobile = w < 768;

  const reviews = [
    {
      name: "Sedanur Arslan",
      text: "The course is great! Teachers talks very interesting and accessible. Thank you very much!",
      avatar: person01,
    },
    {
      name: "Yasir Alrawi",
      text: "The course is clear enough. Well explained a lot of practice. I recommend to everyone!",
      avatar: person02,
    },
    {
      name: "Ahmed Ayhan",
      text: "The training was in one breath. Very accessible courses, everything is very clear and good.",
      avatar: person03,
    },
  ];

  return (
    <section
      id="reviews"
      className="min-h-screen flex flex-col justify-center"
      style={{ background: "#f5ede0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h4
          className={
            isMobile
              ? "text-4xl text-center mb-14 font-medium text-[#222]"
              : "text-6xl text-center mb-24 font-medium text-[#222]"
          }
        >
          Students reviews
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          }}
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="relative flex flex-col items-center text-center px-12"
            >
              {idx !== 0 && !isMobile && (
                <div
                  className="absolute left-0 top-0 h-full"
                  style={{ borderLeft: "1.5px dashed #c5b8a8" }}
                />
              )}
              {idx !== 0 && isMobile && (
                <div
                  style={{
                    borderTop: "1.5px dashed #c5b8a8",
                    width: "100%",
                    marginBottom: "32px",
                  }}
                />
              )}

              <div className="relative w-56 h-56 mb-12 flex items-center justify-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="relative z-10 object-cover"
                  style={{ width: "155px" }}
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute rounded-full border border-[#555]"
                  style={{
                    width: "24px",
                    height: "24px",
                    top: idx === 1 ? "18px" : "10px",
                    left: idx === 2 ? "8px" : idx === 1 ? "auto" : "10px",
                    right: idx === 1 ? "18px" : "auto",
                    opacity: 0.6,
                  }}
                />
                <div
                  className="absolute rounded-full bg-[#333]"
                  style={{
                    width: "8px",
                    height: "8px",
                    top: idx === 2 ? "30px" : "22px",
                    right: idx === 0 ? "18px" : "auto",
                    left: idx === 1 ? "14px" : idx === 2 ? "0px" : "auto",
                    opacity: 0.55,
                  }}
                />
                {idx !== 1 && (
                  <div
                    className="absolute rounded-full border border-[#555]"
                    style={{
                      width: "18px",
                      height: "18px",
                      bottom: idx === 0 ? "14px" : "10px",
                      right: idx === 2 ? "10px" : "auto",
                      opacity: 0.45,
                    }}
                  />
                )}
                {idx === 1 && (
                  <div
                    className="absolute rounded-full bg-[#f2b8a0]"
                    style={{
                      width: "14px",
                      height: "14px",
                      bottom: "20px",
                      right: "8px",
                      opacity: 0.7,
                    }}
                  />
                )}
              </div>
              <h4 className="font-bold text-2xl text-[#1a1a1a] mb-5">
                {review.name}
              </h4>
              <p className="text-[#555] text-lg leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── ContactForm ────────────────────────────────────────────────────
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const w = useWidth();
  const isMobile = w < 768;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className={
        isMobile
          ? "rounded-b-[64px]"
          : "min-h-screen flex flex-col justify-center rounded-b-[128px]"
      }
      style={{
        backgroundImage: `url(${images.footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: isMobile ? "auto" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: isMobile ? "80px" : "160px",
        paddingBottom: "80px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={
            isMobile
              ? "flex flex-col gap-10"
              : "grid lg:grid-cols-2 gap-16 items-center"
          }
        >
          <div>
            <h4
              className={
                isMobile
                  ? "text-4xl font-medium text-white leading-tight"
                  : "text-6xl w-2xl font-medium text-white leading-tight"
              }
            >
              Still have questions?
            </h4>
            <p
              className={
                isMobile
                  ? "text-lg font-normal my-6"
                  : "text-2xl font-normal my-10"
              }
              style={{ color: "rgb(255 255 255 / 65%)" }}
            >
              Leave a request and we will contact you to help you choose the
              best training format.
            </p>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "stretch" : "center",
                  gap: "12px",
                  maxWidth: isMobile ? "100%" : "500px",
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 border border-[#b1afaf] rounded-full text-white placeholder:text-[#ffffffbd] focus:outline-none focus:border-[#fff] hover:border-white transition-colors bg-transparent"
                  style={{
                    padding: isMobile ? "14px 24px" : "20px 64px",
                    fontSize: isMobile ? "16px" : "20px",
                  }}
                />
                {(() => {
                  const [hovered, setHovered] = useState(false);
                  return (
                    <button
                      type="submit"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className="relative overflow-hidden"
                      style={{
                        background: "#f6c7b2",
                        color: "#1a1a1a",
                        border: "none",
                        borderRadius: "50px",
                        padding: isMobile ? "16px 36px" : "20px 100px",
                        fontWeight: 700,
                        fontSize: isMobile ? "16px" : "20px",
                        letterSpacing: "1.5px",
                        cursor: "pointer",
                        transition: "all ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: hovered ? "500px" : "0px",
                          height: hovered ? "500px" : "0px",
                          background: "white",
                          borderRadius: "50%",
                          transform: "translate(-50%, -50%)",
                          transition:
                            "width 0.8s cubic-bezier(0.4,0,0.2,1), height 0.8s cubic-bezier(0.4,0,0.2,1)",
                          zIndex: 0,
                        }}
                      />
                      <span style={{ position: "relative", zIndex: 1 }}>
                        Submit
                      </span>
                    </button>
                  );
                })()}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-4 text-emerald-700 bg-emerald-50 p-6 rounded-2xl border border-emerald-200 max-w-md"
              >
                <CheckCircle2 size={32} />
                <div>
                  <p className="font-bold text-lg">Thank you!</p>
                  <p className="text-sm opacity-80">
                    Your submission has been received!
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right illustration — desktop only */}
          <div className="relative hidden lg:flex items-end justify-center border-b-2 border-[#777]">
            <img
              src={images.footerCom}
              className="absolute w-[90%]"
              referrerPolicy="no-referrer"
            />
            <img
              src={images.footerYasir}
              alt="Questions Illustration"
              className="relative z-10 w-full"
              referrerPolicy="no-referrer"
            />
            <motion.img
              animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src={images.paperAirplane}
              className="absolute top-4 right-4 w-20 z-20"
              referrerPolicy="no-referrer"
            />
            <div
              className="absolute bottom-8 left-8 rounded-full border-2 border-[#aaa] opacity-40"
              style={{ width: "40px", height: "40px" }}
            />
            <div
              className="absolute top-12 left-12 rounded-full bg-[#f2b8a0] opacity-60"
              style={{ width: "16px", height: "16px" }}
            />
            <div
              className="absolute bottom-16 right-12 rounded-full bg-[#333] opacity-30"
              style={{ width: "8px", height: "8px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Footer ─────────────────────────────────────────────────────────
const Footer = () => {
  const w = useWidth();
  const isMobile = w < 768;
  const handleNav = useSmoothNav();

  return (
    <footer className="pt-12 pb-0" style={{ background: "#f5ede0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={
            isMobile
              ? "flex flex-col gap-8 py-10"
              : "flex flex-wrap items-center justify-between gap-8 py-10"
          }
        >
          <div className="flex items-center gap-3">
            <img
              src={images.alrawiLogo}
              alt="Alrawi"
              className={isMobile ? "h-10" : "h-12 mr-12"}
              referrerPolicy="no-referrer"
            />
          </div>

          {!isMobile && (
            <img src={images.dahsedIlist} alt="" className="h-15" />
          )}

          <div className="flex items-start gap-2">
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {["About", "Courses", "Program", "Reviews"].map((item) => {
                const [hovered, setHovered] = useState(false);
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => handleNav(e, item.toLowerCase())}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative pb-1 text-[#555] font-normal uppercase hover:text-[#1a1a1a] transition-colors"
                    style={{
                      textDecoration: "none",
                      fontSize: isMobile ? "13px" : "18px",
                      letterSpacing: isMobile ? "0.5px" : "0.1em",
                    }}
                  >
                    {item}
                    <span
                      className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#555] transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        transform: hovered ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: hovered ? "left" : "right",
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {!isMobile && (
            <img src={images.dahsedIlist} alt="" className="h-15" />
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "6px" : "0 0",
            }}
          >
            {[
              "www.yasiralrawi.com",
              "+90 555 555 55 55",
              "Ankara, Türkiye",
              "yasir7alrawi23@gmail.com",
            ].map((item) => (
              <span
                key={item}
                className="text-[#555] font-normal tracking-wide"
                style={{ fontSize: isMobile ? "15px" : "18px" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #ddd4c4" }}
          className={
            isMobile
              ? "flex flex-col gap-4 py-6"
              : "flex flex-wrap items-center justify-between gap-6 py-6"
          }
        >
          <div className="flex items-center gap-3">
            <img
              src={images.alrawiikon}
              alt="Yasir Alrawi"
              className="h-7"
              referrerPolicy="no-referrer"
            />
            <span className="text-[#888] text-xs uppercase tracking-widest">
              2026 Alrawi. All rights reserved
            </span>
          </div>
          <div className="flex items-center gap-5 text-[rgba(16,16,16,.2)]">
            {[icoSoc01, icoSoc02, icoSoc03, icoSoc04, icoSoc05].map(
              (src, i) => (
                <a
                  key={i}
                  href="#"
                  className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "transparent" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#4f94b2")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <img
                    src={src}
                    alt="social"
                    className="border rounded-full border-[rgba(16,16,16,.2)] transition-all duration-200"
                    style={{ filter: "brightness(0)", opacity: 0.6 }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.filter =
                        "brightness(0) invert(1)";
                      (e.currentTarget as HTMLImageElement).style.opacity = "1";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.filter =
                        "brightness(0)";
                      (e.currentTarget as HTMLImageElement).style.opacity =
                        "0.6";
                    }}
                    referrerPolicy="no-referrer"
                  />
                </a>
              ),
            )}
          </div>
        </div>

        <div
          style={{ borderTop: "1px solid #ddd4c4" }}
          className="py-5 text-center"
        >
          <p className="text-[#888] text-sm">
            <span className="text-rose-400">♥</span>{" "}
            <a
              href="https://www.linkedin.com/in/yasir-alrawi-12814521a/"
              className="text-[#555] underline hover:text-[#1a1a1a] transition-colors"
            >
              Like
            </a>
            {" & "}
            <a
              href="https://www.linkedin.com/in/yasir-alrawi-12814521a/"
              className="text-[#555] underline hover:text-[#1a1a1a] transition-colors"
            >
              Follow
            </a>
            {" from you. New free to use projects from us."}
          </p>
        </div>
      </div>
    </footer>
  );
};

// ─── App ────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Syllabus />
        <Courses />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
