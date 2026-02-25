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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    longDescription: "Built a scalable e-commerce platform using React and Angular with dynamic product catalog, shopping cart functionality, and secure payment integration. Implemented real-time inventory tracking and admin dashboard for order management.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "https://ecommerce-demo.com",
    github: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    id: 2,
    title: "Social Media Analytics Dashboard",
    description: "Real-time analytics dashboard for social media metrics and insights",
    longDescription: "Developed an interactive dashboard that aggregates data from multiple social platforms, providing real-time analytics, performance metrics, and AI-powered insights. Features include custom reports, data visualization, and export functionality.",
    image: "/projects/analytics.jpg",
    tags: ["Angular", "D3.js", "REST API", "Chart.js"],
    link: "https://analytics-demo.com",
    github: "https://github.com",
    featured: true,
    year: 2024,
  },
  {
    id: 3,
    title: "Project Management Tool",
    description: "Collaborative project management application with real-time updates",
    longDescription: "Created a comprehensive project management solution with kanban boards, team collaboration features, file sharing, and real-time notifications. Implemented using modern web technologies with WebSocket support for live updates.",
    image: "/projects/project-mgmt.jpg",
    tags: ["React", "WebSocket", "MongoDB", "Express"],
    link: "https://pm-tool-demo.com",
    github: "https://github.com",
    featured: true,
    year: 2023,
  },
  {
    id: 4,
    title: "Weather Application",
    description: "Weather app with location-based forecasts and interactive maps",
    longDescription: "Built a weather application featuring real-time forecasts, interactive weather maps, severe weather alerts, and historical data analysis. Integrated with multiple weather APIs and optimized for performance.",
    image: "/projects/weather.jpg",
    tags: ["React", "OpenWeather API", "Mapbox", "Redux"],
    link: "https://weather-app-demo.com",
    github: "https://github.com",
    featured: false,
    year: 2023,
  },
  {
    id: 5,
    title: "Content Management System",
    description: "Headless CMS with powerful content editing capabilities",
    longDescription: "Developed a flexible headless CMS allowing users to create, manage, and publish content across multiple channels. Features include WYSIWYG editor, version control, scheduling, and multi-language support.",
    image: "/projects/cms.jpg",
    tags: ["Angular", "Express", "MongoDB", "AWS"],
    link: "https://cms-demo.com",
    github: "https://github.com",
    featured: false,
    year: 2023,
  },
  {
    id: 6,
    title: "Task Automation Platform",
    description: "No-code automation platform for task scheduling and workflows",
    longDescription: "Created a visual workflow builder allowing users to automate repetitive tasks without coding. Supports integrations with 50+ third-party services and includes advanced scheduling, error handling, and monitoring.",
    image: "/projects/automation.jpg",
    tags: ["React", "TypeScript", "Node.js", "AWS Lambda"],
    link: "https://automation-platform-demo.com",
    github: "https://github.com",
    featured: false,
    year: 2022,
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