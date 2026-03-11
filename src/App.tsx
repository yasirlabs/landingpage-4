/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Code,
  Layout,
  Search,
  Star,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 32px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "72px",
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              className="w-12 h-12 object-contain"
              src="src/public/images/logo.png"
              alt="Alrawi Logo"
            />
            <span
              style={{
                color: "white",
                fontWeight: 600,
                fontSize: "42px",
                letterSpacing: "-0.3px",
                lineHeight: 1,
              }}
            >
              Yasir
            </span>
          </div>

          {/* Nav Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            {["ABOUT", "PROGRAM", "COURSES", "REVIEWS"].map((item) => {
              const [hovered, setHovered] = useState(false);
              return (
                <a
                  key={item}
                  href="#"
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

          {(() => {
            const [hovered, setHovered] = useState(false);
            return (
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
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
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
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
                    boxShadow: hovered
                      ? "0 4px 16px rgba(0,0,0,0.14)"
                      : "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "all 0.2s ease",
                  }}
                >
                  {/* Ortadan yayılan renk */}
                  <span
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: hovered ? "400px" : "0px",
                      height: hovered ? "400px" : "0px",
                      background: "#ebc7b5",
                      borderRadius: "50%",
                      transform: "translate(-50%, -50%)",
                      transition:
                        "width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 0,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    SIGN IN
                  </span>
                </button>
              </div>
            );
          })()}
        </div>
      </div>
    </nav>
  );
};

const bgImage =
  "data:image/png;base64,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";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url(src/public/images/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "120px",
      }}
      className="rounded-b-[128px]"
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          {/* Left Content */}
          <div>
            <h4
              style={{
                fontSize: "clamp(80px, 6vw, 80px)",
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
                fontSize: "25px",
                lineHeight: 1.6,
                margin: "0 0 40px 0",
                maxWidth: "380px",
              }}
            >
              The ideal framework to learn how to manage all aspects of startup.
            </p>
            {(() => {
              const [hovered, setHovered] = useState(false);
              return (
                <button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  className="relative overflow-hidden"
                  style={{
                    background: "#f6c7b2",
                    color: "#1a1a1a",
                    border: "none",
                    borderRadius: "50px",
                    padding: "20px 45px",
                    fontWeight: 700,
                    fontSize: "20px",
                    letterSpacing: "1.5px",
                    cursor: "pointer",
                    transition: "all 0.5s ease",
                  }}
                >
                  {/* Ortadan yayılan beyaz renk */}
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
                        "width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 0,
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    START FOR FREE
                  </span>
                </button>
              );
            })()}
          </div>
          {/* Right — Illustration */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src="src/public/images/hero-yasir.png"
              alt="Hero"
              style={{ width: "100%", maxWidth: "720px", height: "auto" }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        {/* Logos — full width, centered */}
        <div
          className="w-100 my-10"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div
            style={{
              width: "100%",
              marginTop: "60px",
              padding: "0 40px",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "nowrap",
              gap: "60px",
              opacity: 0.7,
              filter: "brightness(0) invert(1)",
            }}
          >
            <img
              src="src/public/images/TransferWiseLogo.png"
              alt="Logo 1"
              style={{ height: "40px" }}
              referrerPolicy="no-referrer"
              className="mx-10"
            />
            <img
              src="src/public/images/WooCommerceLogo.png"
              alt="Logo 2"
              style={{ height: "40px" }}
              referrerPolicy="no-referrer"
              className="mx-10"
            />
            <img
              src="src/public/images/huaweiLogo.png"
              alt="Logo 3"
              style={{ height: "40px" }}
              referrerPolicy="no-referrer"
              className="mx-10"
            />
            <img
              src="src/public/images/paypalLogo.png"
              alt="Logo 4"
              style={{ height: "40px" }}
              referrerPolicy="no-referrer"
              className="mx-10"
            />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

const Stats = () => {
  const stats = [
    {
      value: ".200+",
      description:
        "Ideal courses to sell physical and digital products from your site on WordPress.com",
      icon: "src/public/images/numb-01.png",
    },
    {
      value: ".150+",
      description:
        "Experts share their knowledge on building and growing a web presence.",
      icon: "src/public/images/numb-02.png",
    },
    {
      value: ".10k+",
      description:
        "Small businesses and online stores call WordPress.com home. No code, no complexities.",
      icon: "src/public/images/numb-03.png",
    },
  ];

  return (
    <div
      style={{
        background: "rgba(245, 238, 228, 0.92)",
        borderRadius: "98px",
        padding: "48px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
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
            padding: "30px 90px",
            borderRight: i < stats.length - 1 ? "1.5px dashed #c8b89a" : "none",
            position: "relative",
          }}
        >
          {/* Circle decoration top-right */}
          <img
            src={stat.icon}
            alt="alt"
            className="w-full h-full"
            referrerPolicy="no-referrer"
            style={{
              width: "128px",
              height: "128px",
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0.5,
            }}
          />

          <h2
            style={{
              fontSize: "56px",
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

const Syllabus = () => {
  const steps = [
    {
      num: "01",
      title: "Videos from professionals",
      desc: "Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation.",
      icon: "src/public/images/numb-04.png",
    },
    {
      num: "02",
      title: "Practical independent work",
      desc: "Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings.",
      icon: "src/public/images/numb-05.png",
    },
    {
      num: "03",
      title: "Feedback from specialists",
      desc: "Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.",
      icon: "src/public/images/numb-06.png",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="src/public/images/women_ilist.png"
              alt="Syllabus Illustration"
              className="w-full pt-10 mx-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
            <h4 className="text-6xl mb-12">Syllabus of courses</h4>
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
                  {/* idx === 1: ok en sola */}
                  {idx === 1 && (
                    <img
                      src="src/public/images/arrow-ilist.png"
                      alt="Arrow"
                      className="w-20 flex-shrink-0 scale-x-[-1]"
                      referrerPolicy="no-referrer"
                    />
                  )}

                  {/* İkon */}
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

                  {/* Metin + diğer oklar */}
                  <div className="border-b border-slate-200 pb-8 w-full">
                    <h3 className="text-2xl flex items-center justify-between h-[60px]">
                      {step.title}
                      {idx !== 1 && (
                        <img
                          src={
                            idx === 2
                              ? "src/public/images/arrow-airplane-ilist.png"
                              : "src/public/images/arrow-ilist.png"
                          }
                          alt="Arrow"
                          className={idx === 2 ? `w-40 mt-40` : `w-20 mt-40`}
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

const Courses = () => {
  const courses = [
    {
      category: "design",
      title:
        "How to make a quality site in WordPress in 40 hours without experience",
      icon: <Layout className="text-orange-500" />,
      illustr_01: "src/public/images/design-01.png",
      illustr_02: "src/public/images/design-02.png",
    },
    {
      category: "programming",
      title:
        "WordPress: How to start in a developer without any basic knowledge",
      icon: <Code className="text-blue-500" />,
      illustr_01: "src/public/images/programming-01.png",
      illustr_02: "src/public/images/programming-02.png",
    },
    {
      category: "seo",
      title:
        "Creating dynamic sites with CMS WordPress + SEO for WordPress websites",
      icon: <Search className="text-emerald-500" />,
      illustr_01: "src/public/images/seo-01.png",
      illustr_02: "src/public/images/seo-02.png",
    },
  ];

  return (
    <section
      className="py-24 rounded-b-[128px]"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative", // İçerideki absolute div için şart
        paddingTop: "120px",
        overflow: "hidden", // Arka planın rounded köşelerden taşmaması için
      }}
    >
      {/* Arka Plan Katmanı */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
          zIndex: -1,
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-8 text-left">
          <h4 className="text-6xl lg:w-1/2 font-semibold text-white">
            Professional courses on creating websites
          </h4>
          <p
            className="lg:w-2/5 text-2xl font-normal"
            style={{ color: "rgb(255 255 255 / 65%)" }}
          >
            Our courses are complete professional courses of high quality that
            include a set of video lessons, practical and training materials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="course-card relative bg-[#f5ede0] rounded-3xl overflow-hidden flex flex-col group"
              style={{ minHeight: "500px" }}
            >
              {/* Üst içerik */}
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <span className="text-xl font-medium uppercase tracking-widest text-[#333] mb-4">
                  {course.category}
                </span>

                <h3
                  className="text-2xl font-bold leading-snug mb-6  transition-colors"
                  style={{ maxWidth: "280px" }}
                >
                  {course.title}
                </h3>

                {/* Dekoratif noktalar */}
                <div className="relative px-8 pb-8 z-10">
                  <div className="absolute top-4 right-12 w-3 h-3 rounded-full bg-rose-300 opacity-70" />
                  <div className="absolute top-16 right-4 w-2 h-2 rounded-full border border-slate-400 opacity-50" />
                  <div className="absolute top-20 left-8 w-1 h-1 rounded-full bg-slate-500 opacity-60" />
                  <div className="absolute bottom-4 left-2 w-4 h-4 rounded-full border border-slate-400 opacity-40" />
                </div>
              </div>

              {/* Alt illüstrasyon + link */}
              <div className="relative px-8 pb-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-brand-blue font-bold text-xl uppercase tracking-wider hover:gap-4 transition-all mb-6"
                >
                  Read more <ChevronRight size={16} />
                </a>

                {/* İllüstrasyon — sağ alta yaslanmış, taşan */}
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

const Reviews = () => {
  const reviews = [
    {
      name: "Sedanur Arslan",
      text: "The course is great! Teachers talks very interesting and accessible. Thank you very much!",
      avatar: "src/public/images/person-01.png",
    },
    {
      name: "Yasir Alrawi",
      text: "The course is clear enough. Well explained a lot of practice. I recommend to everyone!",
      avatar: "src/public/images/person-02.png",
    },
    {
      name: "Ahmed Ayhan",
      text: "The training was in one breath. Very accessible courses, everything is very clear and good.",
      avatar: "src/public/images/person-03.png",
    },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center"
      style={{ background: "#f5ede0" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h4 className="text-6xl text-center mb-24 font-medium text-[#222]">
          Students reviews
        </h4>

        <div className="grid md:grid-cols-3">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="relative flex flex-col items-center text-center px-12"
            >
              {idx !== 0 && (
                <div
                  className="absolute left-0 top-0 h-full"
                  style={{ borderLeft: "1.5px dashed #c5b8a8" }}
                />
              )}

              {/* Avatar */}
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

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-center rounded-b-[128px]"
      style={{
        backgroundImage: "url(src/public/images/footer-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "160px",
        paddingBottom: "80px",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sol — Metin + Form */}
          <div>
            <h4 className="text-6xl w-2xl font-medium text-white leading-tight">
              Still have questions?
            </h4>
            <p
              className="text-2xl  font-normal my-10"
              style={{ color: "rgb(255 255 255 / 65%)" }}
            >
              Leave a request and we will contact you to help you choose the
              best training format.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-3 max-w-md"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="flex-1 border border-[#b1afaf] rounded-full px-16 py-5 text-white placeholder:text-[#ffffffbd] focus:outline-none focus:border-[#fff] hover:border-white transition-colors bg-transparent text-xl"
                />
                {(() => {
                  const [hovered, setHovered] = useState(false);
                  return (
                    <button
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      className="relative overflow-hidden"
                      style={{
                        background: "#f6c7b2",
                        color: "#1a1a1a",
                        border: "none",
                        borderRadius: "50px",
                        padding: "20px 100px",
                        fontWeight: 700,
                        fontSize: "20px",
                        letterSpacing: "1.5px",
                        cursor: "pointer",
                        transition: "all ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Ortadan yayılan beyaz renk */}
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
                            "width 0.8s cubic-bezier(0.4, 0, 0.2, 1), height 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
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

          {/* Sağ — İllüstrasyon */}
          <div className="relative hidden lg:flex items-end justify-center border-b-2 border-[#777]">
            <img
              src="src/public/images/footer-com.png"
              className="absolute w-[90%]"
              referrerPolicy="no-referrer"
            />
            <img
              src="src/public/images/footer-yasir.png"
              alt="Questions Illustration"
              className="relative z-10 w-full"
              referrerPolicy="no-referrer"
            />
            <motion.img
              animate={{ x: [0, 18, 0], y: [0, -18, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              src="src/public/images/paper-airplane.png"
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

const Footer = () => {
  return (
    <footer className="pt-12 pb-0" style={{ background: "#f5ede0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ana footer satırı */}
        <div className="flex flex-wrap items-center justify-between gap-8 py-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="src/public/images/alrawiLogo.png"
              alt="Alrawi"
              className="h-12 mr-12"
              referrerPolicy="no-referrer"
            />
          </div>

          <img
            src="src/public/images/dahsed-ilist.png"
            alt=""
            className="h-15"
          />

          {/* Nav linkleri */}
          <div className="flex items-start gap-2">
            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
              {["About", "Courses", "Program", "Reviews"].map((item) => {
                const [hovered, setHovered] = useState(false);
                return (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="relative pb-1 text-[#555] text-lg font-normal uppercase tracking-widest hover:text-[#1a1a1a] transition-colors"
                    style={{ textDecoration: "none" }}
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

          <img
            src="src/public/images/dahsed-ilist.png"
            alt=""
            className="h-15"
          />

          {/* İletişim */}
          <div className="grid grid-cols-2 gap-y-2">
            {[
              "www.yasiralrawi.com",
              "+90 555 555 55 55",
              "Ankara, Türkiye",
              "yasir7alrawi23@gmail.com",
            ].map((item) => (
              <span
                key={item}
                className="text-[#555] text-lg font-normal tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Alt çizgi */}
        <div
          style={{ borderTop: "1px solid #ddd4c4" }}
          className="flex flex-wrap items-center justify-between gap-6 py-6"
        >
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <img
              src="src/public/images/alrawiikon.png"
              alt="Yasir Alrawi"
              className="h-7"
              referrerPolicy="no-referrer"
            />
            <span className="text-[#888] text-xs uppercase tracking-widest">
              2026 Alrawi. All rights reserved
            </span>
          </div>

          {/* Sosyal medya ikonları */}
          <div className="flex items-center gap-5 text-[rgba(16,16,16,.2)]">
            {[
              "src/public/images/ico_soc-01.svg",
              "src/public/images/ico_soc-02.svg",
              "src/public/images/ico_soc-03.svg",
              "src/public/images/ico_soc-04.svg",
              "src/public/images/ico_soc-05.svg",
            ].map((src, i) => (
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
                    e.currentTarget.style.filter = "brightness(0) invert(1)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "brightness(0)";
                    e.currentTarget.style.opacity = "0.6";
                  }}
                  referrerPolicy="no-referrer"
                />
              </a>
            ))}
          </div>
        </div>

        {/* En alt — Like & Follow */}
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

export default function App() {
  return (
    <div className="min-h-screen">
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
