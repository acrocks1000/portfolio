"use client";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  featured: boolean;
  year: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "StateCraft",
    description: "Angular + NgRx State Management Showcase",
    longDescription: "Built an Angular 19 application using standalone components and signal-based store architecture to explore and master NgRx state management. Implemented feature stores, selectors, actions, and effects to manage UI and entity state across shopping features. Integrated mock backend via Node.js Express with proxy setup to simulate realistic API behavior. Features TailwindCSS and Angular Material for responsive UI.",
    image: "🏗️",
    tags: ["Angular", "NgRx", "TailwindCSS", "TypeScript"],
    link: "https://statecraft-demo.com",
    github: "https://github.com/acrocks1000/statecraft",
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    title: "EdTech Analytics Dashboard",
    description: "Role-based analytics dashboard with real-time data filtering",
    longDescription: "Built a fully responsive analytics dashboard in Angular 14+ for an EdTech client featuring role-based access control and dynamic data filtering. Implemented with Angular Material components ensuring consistency, accessibility, and rapid UI prototyping. Achieved 85%+ unit test coverage with Jasmine and Karma.",
    image: "📊",
    tags: ["Angular", "Angular Material", "RxJS", "Jasmine"],
    link: "https://edtech-analytics-demo.com",
    github: "https://github.com",
    featured: true,
    year: 2023,
  },
  {
    id: 3,
    title: "Micro Frontend Architecture",
    description: "MFE dashboard with independent feature deployment",
    longDescription: "Designed and implemented a Micro Frontend (MFE) architecture enabling independent deployment and scaling of dashboard features. Improved maintainability and team velocity by 30%. Implemented using module federation for seamless integration across multiple Angular modules.",
    image: "🔗",
    tags: ["Angular", "MFE", "Module Federation", "NgRx"],
    link: "https://mfe-demo.com",
    github: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    id: 4,
    title: "RxJS Observable Patterns",
    description: "Advanced RxJS data flow management and optimization",
    longDescription: "Mastered and optimized RxJS-driven data flows using Observable, Subject, BehaviorSubject, and ReplaySubject patterns. Optimized API orchestration using operators like switchMap, mergeMap, combineLatest, forkJoin, and debounceTime to improve responsiveness and reduce unnecessary network calls.",
    image: "🌊",
    tags: ["RxJS", "TypeScript", "Angular", "Reactive Programming"],
    link: "https://rxjs-patterns-demo.com",
    github: "https://github.com",
    featured: false,
    year: 2024,
  },
  {
    id: 5,
    title: "Server-Side Rendering (SSR)",
    description: "Angular 19 SSR for improved SEO and performance",
    longDescription: "Developed high-performance Angular 19 SSR (Server-Side Rendering) project to improve first contentful paint and SEO rankings across public pages. Implemented efficient server-side logic and caching strategies to optimize performance metrics.",
    image: "⚡",
    tags: ["Angular", "SSR", "Performance", "SEO"],
    link: "https://ssr-demo.com",
    github: "https://github.com",
    featured: false,
    year: 2024,
  },
  {
    id: 6,
    title: "Face Recognition Tool",
    description: "ML-based face recognition using Python and OpenCV",
    longDescription: "Created an ML-based face recognition tool using Python and OpenCV, trained on custom image datasets. Built a basic frontend interface to manage Kubernetes/Docker environments. Explored and documented use of modern tools like Flutter, K8s, and Docker as part of cross-functional exposure.",
    image: "🤖",
    tags: ["Python", "OpenCV", "Machine Learning", "Docker"],
    link: "https://face-recognition-demo.com",
    github: "https://github.com",
    featured: false,
    year: 2021,
  },
];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "React", "Angular", "TypeScript", "Node.js"];
  
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedCategory));

  return (
    <div className="w-full py-20 px-4" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects I&apos;ve built showcasing my expertise in modern web development
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                ? "bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black"
                : "border border-[#740580] text-white hover:border-[#F2C447]"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-gradient-to-br from-[#740580] from-opacity-10 to-[#740580] to-opacity-5 border border-[#740580] border-opacity-20 rounded-xl overflow-hidden hover:border-opacity-50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-[#F2C447] to-[#FF1D68] bg-opacity-10 group-hover:bg-opacity-20 transition-all flex items-center justify-center border-b border-[#740580] border-opacity-20">
                <div className="text-center">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-gray-400 text-sm">{project.title}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F2C447] transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="text-xs bg-[#740580] bg-opacity-30 text-[#F2C447] px-2 py-1 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-[#740580] bg-opacity-20 text-[#F2C447] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Year */}
                <p className="text-xs text-gray-500">{project.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-900 rounded-xl max-w-2xl w-full border border-[#740580] border-opacity-30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 bg-gradient-to-br from-[#F2C447] to-[#FF1D68] bg-opacity-10 flex items-center justify-center">
                <div className="text-6xl">💻</div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-white hover:text-[#F2C447] transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">{selectedProject.year}</p>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tags */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-[#F2C447] mb-3 uppercase">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-[#740580] bg-opacity-20 text-[#F2C447] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-[#F2C447] to-[#FF1D68] text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#740580] transition-all text-center"
                  >
                    Visit Project
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3 border-2 border-[#740580] text-white font-bold rounded-lg hover:bg-[#740580] hover:bg-opacity-10 transition-all text-center"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}