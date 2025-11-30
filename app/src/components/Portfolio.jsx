import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

import { SiLeetcode } from "react-icons/si";
import bg2 from "../assets/Images/bg2.png";
import mine1 from "../assets/Images/mine1.jpeg";
import Sacredstones from "../assets/Images/Sacredstones.jpg";
import Mrm from "../assets/Images/Mrm.jpg";
import LGS from "../assets/Images/LGS.jpg";
import Netflix from "../assets/Images/Netflix.jpg";
import User from "../assets/Images/User.jpg";
import Student from "../assets/Images/Students.jpg";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Sacredstones E-Commerce Platform (Personal Project)",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and real-time inventory management.",
      image:
        Sacredstones,
      tags: ["Express js", "Node.js", "MongoDB", "EJS" ],
    },
    {
      id: 2,
      title: "MRM Handyman Service (Freelance project)",
    
       description: "A static website for MRM Handyman Service, showcasing services, contact forms, and portfolio of home repair projects.",
      image:
        Mrm,
      tags: ["HTML", "CSS", "JavaScript" ],
    },
    {
      id: 3,
      title: "Legitimate Solutions (Freelance project)",
      description:
        'A static freelance website for Legitimate Solution, highlighting services, client testimonials, and project gallery.',
      image:
        LGS,
      tags: ["HTML", "CSS", "JavaScript" ],
    },
    {
      id: 4,
      title: "User management System (Personal Project)",
      description:
        "Full-stack authentication and admin dashboard with role-based access, and complete CRUD. Built using MERN and Redux Toolkit.",
      image:
        User,
      tags: ["React.js", "Express.js", "Node.js", "MongoDB", "Redux Toolkit", 'JWT', "Cloudinary" ],
    },
    {
      id: 5,
      title: "Student Management System (Personal Project)",
      description:
        "A student management system  with admin panel, search & filter, and a responsive dashboard. Built with TypeScript-backed EJS.",
      image:
        Student,
      tags: ["Express.js", "Node.js", "Typescript", "Ejs", "MongoDB" ],
    },
    {
      id: 6,
      title: "Netflix Responsive Clone (Personal Project)",
      description:
        "Pixel-perfect, fully responsive Netflix UI clone with smooth carousels, hover effects, and mobile-first design. ",
      image:
        Netflix,
      tags: ["React.js", "CSS"],
    },
  ];

const services = [
  {
    title: "Static Website Development",
    description:
      "Fast, responsive, and SEO-friendly static websites for small businesses, portfolios, and personal brands.",
    icon: "🌐",
  },
  {
    title: "Dynamic Website Development (MERN)",
    description:
      "Full-stack dynamic web applications built using MongoDB, Express.js, React.js, and Node.js with modern UI and secure backend.",
    icon: "⚙️",
  },
  {
    title: "Logo & Branding Design",
    description:
      "Professional logo creation and brand identity design tailored to your business vision and audience.",
    icon: "🎨",
  },
  {
    title: "Backend Development & REST APIs",
    description:
      "Scalable Node.js backend development with secure REST APIs for both web and mobile applications.",
    icon: "🔌",
  },
  {
    title: "Frontend Development (React.js)",
    description:
      "Interactive, user-friendly, and mobile-responsive frontend applications developed using modern React.js best practices.",
    icon: "💻",
  },
  {
    title: "Technical Consultation",
    description:
      "Guidance on application architecture, tech stack selection, and development workflow to bring your ideas to reality.",
    icon: "💡",
  },
];


  const NavBar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm height-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
       
          </div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "services", "projects", "contact"].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`capitalize transition-colors ${
                    currentPage === page
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {["home", "about", "services", "projects", "contact"].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMenuOpen(false);
                  }}
                  className={`block w-full text-left py-2 capitalize ${
                    currentPage === page ? "text-purple-400" : "text-gray-300"
                  }`}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-[100dvh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
        <div className="max-w-2xl">
       <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-up">
  Hi, I’m{' '}
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
    Neena
  </span>
  <span className="text-white">,</span>
  <br />
  <span className="text-6xl block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-slide-in">
   Full Stack Web Developer
  </span>
</h1>
 <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Crafting exceptional digital experiences with modern technologies and innovative solutions.
          </p>
        
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage("projects")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Projects
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="border-2 border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-[100dvh] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={mine1}
              alt="Profile"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-6 text-gray-300">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Neena Rajendran S
          </div>
            <p className="text-lg">
              I'm a passionate full-stack developer with over 2 years of
              experience creating innovative digital solutions. My journey in
              tech began with a curiosity for how things work and evolved into a
              career building products that make a difference.
            </p>
            <p className="text-lg">
              I specialize in modern web technologies, user experience design. My approach combines technical excellence
              with creative problem-solving to deliver solutions that exceed
              expectations.
            </p>
            <p className="text-lg">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "JavaScript",
                  "TypeScript",
                  "Figma",
                  "SQL",
                  "MongoDB",
                  "PostgreSQL",
                  "Restful APIs",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS",
                  "Git & GitHub",
                  "Redux",
                  "Redux Toolkit",
                  "Firebase",
                  

                  
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-900 bg-opacity-50 text-purple-300 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ServicesPage = () => (
    <div className="min-h-[100dvh] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900 bg-opacity-20 to-black p-8 rounded-lg border border-purple-800 hover:border-purple-600 transition-all hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-[100dvh] pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

 
const ContactPage = () => (
  <div className="min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-16 px-4">
    {/* Main Container */}
    <div className="w-full max-w-2xl">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        Get In Touch
      </h2>

      {/* Contact Info & Socials – Centered */}
      <div className="space-y-12 text-center">

        {/* Email */}
        <div className="flex flex-col items-center gap-3">
          <Mail className="text-purple-400" size={28} />
          <h3 className="text-xl font-bold text-white">Email</h3>
          <a
            href="mailto:neenarajendrans@gmail.com"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            neenarajendrans@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex flex-col items-center gap-3">
          <MapPin className="text-purple-400" size={28} />
          <h3 className="text-xl font-bold text-white">Location</h3>
          <p className="text-gray-300">Alappuzha, Kerala, India</p>
        </div>

        {/* Social Media */}
        <div className="pt-8">
          <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/neenarajendrans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/neena-rajendran-s-94492029a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://www.instagram.com/websolutionsofficial/"
              className="text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              aria-label="Instagram (Coming Soon)"
            >
              <Instagram size={32} />
            </a>
        
            <a
              href="https://leetcode.com/u/Neena_Rajendran_S/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-all hover:scale-110"
              aria-label="LeetCode"
            >
              <SiLeetcode size={32} />
            </a>
          </div>
        </div>

        {/* Friendly Message */}
        <p className="text-gray-400 mt-10">
          Feel free to reach out via email or connect on any platform above!
        </p>
      </div>
    </div>
  </div>
);
  return (
    <div className="bg-black text-white min-h-screen">
      <NavBar />

      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "projects" && <ProjectsPage />}
      {currentPage === "contact" && <ContactPage />}
    </div>
  );
};

export default Portfolio;
