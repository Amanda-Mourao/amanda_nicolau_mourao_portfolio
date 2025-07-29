import React from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github, Monitor } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-black/80 border border-white/20 rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden backdrop-blur-xl shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/20">
          <h2 className="text-3xl text-white">
            {project.title}
          </h2>
          <button
            className="p-2 hover:bg-white/20 rounded-xl transition-colors duration-200 text-white/80 hover:text-white"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="space-y-4">
            <div className="relative aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src={project.deployedUrl}
                title={project.title}
                className="w-full h-full border-none"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white text-sm hover:bg-white/30 transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
                >
                  <Monitor className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/20 border border-white/30 rounded-xl text-white text-sm hover:bg-white/30 transition-all duration-200 flex items-center gap-2 backdrop-blur-md"
                >
                  <Github className="w-4 h-4" />
                  Code ansehen
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-white mb-3">
                Beschreibung
              </h3>
              <p className="text-white/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">
                Technologien
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-xl text-sm text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl text-white mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-white/80">
                {project.features?.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo besuchen
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-white/30 text-white rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
