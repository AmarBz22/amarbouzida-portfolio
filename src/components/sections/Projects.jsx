import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">HealthLink</h3>
              <p className="text-gray-400 mb-4">
                A digital bridge for healthcare supply and operations, streamlining medical procurement and connecting healthcare professionals with AI-based recommendations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Laravel", "Python Flask", "MySQL" , "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 items-center">
                <a
                  href="https://github.com/AmarBz22/HealthLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Frontend →
                </a>
                <a
                  href="https://github.com/hakimskills/health_link_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Backend →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">GO Platform</h3>
              <p className="text-gray-400 mb-4">
                Collaborative web platform developed using MEVN stack. A comprehensive platform providing various services and solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Vue.js", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://www.go-platform.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">LaibClinic</h3>
              <p className="text-gray-400 mb-4">
                Professional clinic website created with two colleagues using MERN stack. Features appointment booking and medical services information.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Express", "MongoDB"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://laibclinic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
                <div className="flex gap-3 text-sm">
                  <a
                    href="https://github.com/amineallioua/laib-clinique-front"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-300 transition-colors"
                  >
                    Frontend
                  </a>
                  <a
                    href="https://github.com/AmarBz22/laib_clinique_admin_dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Dashboard
                  </a>
                  <a
                    href="https://github.com/amineallioua/laib-clinique"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-300 transition-colors"
                  >
                    Backend
                  </a>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};