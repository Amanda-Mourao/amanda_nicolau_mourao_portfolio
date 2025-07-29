import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Monitor,
  Maximize,
  Image as ImageIcon,
} from "lucide-react";

const ProjectPreview = ({ project, viewMode, onOpenModal }) => {
  const [previewLoaded, setPreviewLoaded] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleIframeLoad = () => {
    setPreviewLoaded(true);
    setPreviewError(false);
  };

  const handleIframeError = () => {
    setPreviewError(true);
    setPreviewLoaded(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };


  const getImageSize = () => {
    if (project.title === "Code Buddy") {
      return "w-26 h-26";
    }
    if (project.title === "Hogwarts And The Hat") {
      return "w-90 h-90";
    }
    if (project.title === "Glowify Shop") {
      return "w-70 h-70";
    }
    if (project.title === "Trip Scheduler") {
      return "w-70 h-70";
    }
    return "w-48 h-48";
  };

  return (
    <div className="relative w-full h-full">
      {viewMode === "iframe" ? (
        <div className="relative w-full h-full">
          {!previewLoaded && !previewError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-sm font-semibold">Lade Vorschau...</p>
            </div>
          )}

          {previewError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black text-white p-6">
              <Monitor className="w-12 h-12 opacity-50 mb-3" />
              <p className="text-sm mb-4 font-semibold">
                Vorschau nicht verfügbar
              </p>
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black hover:bg-gray-200 rounded-lg text-sm transition-colors duration-200 flex items-center gap-2 font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Externe Seite öffnen
              </a>
            </div>
          )}

          <iframe
            src={project.deployedUrl}
            title={project.title}
            className={`w-full h-full border-none transition-opacity duration-300 ${
              previewLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
          />
        </div>
      ) : (
        <div className="relative w-full h-full group">
          <div className="w-full h-full flex items-center justify-center p-8 bg-gray-900/20">
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                className={`${getImageSize()} object-contain transition-transform duration-300 group-hover:scale-105`}
                onError={handleImageError}
              />
            ) : (
              <div
                className={`${getImageSize()} flex flex-col items-center justify-center`}
              >
                <ImageIcon className="w-16 h-16 text-white/40 mb-3" />
                <p className="text-white/60 text-sm text-center px-4 font-semibold">
                  {project.title}
                </p>
                <p className="text-white/40 text-xs mt-1 font-semibold">
                  Logo nicht verfügbar
                </p>
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-3">
              <button
                onClick={() => onOpenModal(project)}
                className="p-3 bg-gray-800/60 hover:bg-gray-700/60 border border-white/30 rounded-full text-white transition-all duration-200 hover:scale-110"
              >
                <Maximize className="w-5 h-5" />
              </button>
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/60 hover:bg-gray-700/60 border border-white/30 rounded-full text-white transition-all duration-200 hover:scale-110"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800/60 hover:bg-gray-700/60 border border-white/30 rounded-full text-white transition-all duration-200 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
