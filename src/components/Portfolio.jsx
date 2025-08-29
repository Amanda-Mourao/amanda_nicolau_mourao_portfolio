import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Monitor,
  Smartphone,
  Eye,
  Linkedin,
  Download,
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import ProjectPreview from "./ProjectPreview";
import CodeShowcase from "./CodeShowcase";
import { projects, personalInfo, skills } from "../data/projectData";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("preview");

  const getProjectIcon = (type) => {
    switch (type) {
      case "frontend":
        return <Monitor className="w-6 h-6" />;
      case "backend":
        return <Database className="w-6 h-6" />;
      case "fullstack":
        return <Globe className="w-6 h-6" />;
      case "blockchain":
        return <Code className="w-6 h-6" />;
      case "mobile":
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Code className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-x-hidden">
      <motion.section
        className="min-h-screen flex items-center px-8 relative bg-gradient-to-b from-black via-gray-900/50 to-transparent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/30 via-black to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-2">
              <span className="text-white whitespace-nowrap uppercase ">
                {personalInfo.name}
              </span>
            </h1>
            <div className="text-2xl md:text-3xl lg:text-4xl uppercase text-gray-400 mb-6 ">
              {personalInfo.title}
            </div>

            <p className="text-lg text-white/80 mb-6 max-w-md">
              Motivierte Full Stack Web & App Entwicklerin mit fundierten
              Kenntnissen in HTML, CSS und JavaScript, erworben durch ein
              intensives, projektbasiertes und teamorientiertes Bootcamp.
              Spezialisiert auf moderne Technologien - von Frontend bis Backend
              verwandle ich innovative Ideen in leistungsstarke digitale
              Lösungen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                className="px-8 py-4 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Projekte ansehen
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Kontakt
              </motion.button>
              {personalInfo.resume && (
                <motion.a
                  href="/certificate_amanda_nicolau_mourao.pdf"
                  download="certificate_amanda_nicolau_mourao.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full  hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    setTimeout(() => {
                      const link = document.createElement("a");
                      link.href = "/certificate_amanda_nicolau_mourao.pdf";
                      link.download = "certificate_amanda_nicolau_mourao.pdf";
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }, 100);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Zertifikat
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 lg:h-[500px] flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative w-80 lg:w-96 h-80 lg:h-96 flex items-center justify-center mb-8">
              <div className="relative w-80 lg:w-96 h-96 lg:h-[450px] z-10">
                <img
                  src="/portfolio_picture.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 rounded-2xl"
                  style={{
                    mask: "linear-gradient(to bottom, black 0%, black 90%, transparent 100%), linear-gradient(to right, black 0%, black 80%, transparent 100%)",
                    WebkitMask:
                      "linear-gradient(to bottom, black 0%, black 90%, transparent 100%), linear-gradient(to right, black 0%, black 80%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "intersect",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section
        className="py-32 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"
        id="skills"
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-center uppercase mb-16 text-white leading-normal px-4 pb-5 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technologien & Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs], index) => (
              <motion.div
                key={category}
                className="bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:transform hover:-translate-y-2 hover:border-white/40 hover:bg-black/90 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-2xl mb-4 text-white ">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/60 border border-white/20 rounded-xl text-sm text-white hover:bg-gray-700/60 hover:border-white/30 hover:scale-105 transition-all duration-300 "
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-transparent via-gray-800/10 to-transparent backdrop-blur-xl overflow-hidden">
        <div className="max-w-5xl mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-center uppercase mb-16 text-white leading-normal "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Was ich biete
          </motion.h2>

          <div className="relative">
            <div className="flex gap-8 slider-animation slider-paused">
              {[
                {
                  icon: "🚀",
                  title: "Performance",
                  desc: "Blitzschnelle und optimierte Anwendungen für beste User Experience",
                },
                {
                  icon: "🎨",
                  title: "Design",
                  desc: "Moderne, intuitive UI/UX Designs die Benutzer begeistern",
                },
                {
                  icon: "📱",
                  title: "Responsive",
                  desc: "Perfekte Darstellung auf allen Geräten und Bildschirmgrößen",
                },
                {
                  icon: "⚡",
                  title: "Innovation",
                  desc: "Neueste Technologien für zukunftssichere Lösungen",
                },
                {
                  icon: "🔒",
                  title: "Sicherheit",
                  desc: "Höchste Standards für Datenschutz und Anwendungssicherheit",
                },
                {
                  icon: "💡",
                  title: "Kreativität",
                  desc: "Einzigartige Lösungen für individuelle Anforderungen",
                },
                {
                  icon: "🚀",
                  title: "Performance",
                  desc: "Blitzschnelle und optimierte Anwendungen für beste User Experience",
                },
                {
                  icon: "🎨",
                  title: "Design",
                  desc: "Moderne, intuitive UI/UX Designs die Benutzer begeistern",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[300px] h-48 bg-black/60 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-sm border border-white/10 hover:transform hover:-translate-y-2 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-4 opacity-60 grayscale">
                    {item.icon}
                  </div>
                  <h3 className="text-lg  mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed ">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-gradient-to-b from-transparent via-gray-900/15 to-transparent"
        id="projects"
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl text-center uppercase mb-16 text-white leading-normal pb-5 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meine Projekte
          </motion.h2>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button
              className={`px-6 py-3 border rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2  ${
                viewMode === "preview"
                  ? "bg-white text-black border-white"
                  : "bg-transparent border-white/40 text-white hover:bg-gray-800/30 hover:border-white/60"
              }`}
              onClick={() => setViewMode("preview")}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              className={`px-6 py-3 border rounded-full cursor-pointer transition-all duration-300 flex items-center gap-2  ${
                viewMode === "iframe"
                  ? "bg-white text-black border-white"
                  : "bg-transparent border-white/40 text-white hover:bg-gray-800/30 hover:border-white/60"
              }`}
              onClick={() => setViewMode("iframe")}
            >
              <Monitor className="w-4 h-4" />
              Live View
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-black/80 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-md hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50 hover:border-white/40 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden bg-black/60 backdrop-blur-sm">
                  <ProjectPreview
                    project={project}
                    viewMode={viewMode}
                    onOpenModal={(proj) => setSelectedProject(proj)}
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl text-white ">{project.title}</h3>
                    <div className="p-2 bg-gray-800/60 rounded-xl text-white">
                      {getProjectIcon(project.type)}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 ">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/60 border border-white/20 rounded-xl text-xs text-white "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-32 bg-gradient-to-b from-transparent via-gray-900/20 to-black"
        id="contact"
      >
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-16 text-white leading-normal "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Kontakt
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl mb-4 text-white ">
                Lass uns zusammenarbeiten!
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4 ">
                Ich freue mich darauf, von Ihnen zu hören und gemeinsam
                großartige Projekte zu entwickeln.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-black/70 border border-white/20 rounded-xl hover:bg-black/80 hover:border-white/30 hover:transform hover:translate-x-1 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-gray-300 transition-colors "
                  >
                    {personalInfo.email}
                  </a>
                </div>
                {/* <div className="flex items-center gap-4 p-4 bg-black/70 border border-white/20 rounded-xl hover:bg-black/80 hover:border-white/30 hover:transform hover:translate-x-1 transition-all duration-300">
                  <Phone className="w-5 h-5" />
                  <span className="">{personalInfo.phone}</span>
                </div> */}
                <div className="flex items-center gap-4 p-4 bg-black/70 border border-white/20 rounded-xl hover:bg-black/80 hover:border-white/30 hover:transform hover:translate-x-1 transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                  <span className="">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-black/70 border border-white/20 rounded-xl hover:bg-black/80 hover:border-white/30 hover:transform hover:translate-x-1 transition-all duration-300">
                  <Github className="w-5 h-5" />
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors "
                  >
                    GitHub Profile
                  </a>
                </div>
                {personalInfo.linkedin && (
                  <div className="flex items-center gap-4 p-4 bg-black/70 border border-white/20 rounded-xl hover:bg-black/80 hover:border-white/30 hover:transform hover:translate-x-1 transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors "
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-3xl p-4"
            >
              <CodeShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;
