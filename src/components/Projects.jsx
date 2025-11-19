const Projects = () => {
  const projects = [
    {
      title: "Quagga - Construction Services Platform",
      description: "A cutting-edge full-stack application designed to bridge the gap between construction services and client satisfaction. Built with modern technologies to streamline interactions and enhance efficiency.",
      tags: ["React", "Spring Boot", "MongoDB", "JWT"],
      github: "https://github.com/bally3399",
      live: "https://quagga-inky.vercel.app/",
      featured: true,
      category: "Full-Stack"
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive hotel management system with room browsing, booking management, and guest tracking. Features RESTful APIs with Spring Boot backend and responsive React frontend.",
      tags: ["React", "Spring Boot", "MySQL", "Spring Data JPA"],
      github: "https://github.com/bally3399",
      live: "https://hotel-booking-two-sage.vercel.app/",
      featured: true,
      category: "Full-Stack"
    },
    {
      title: "Admin Dashboard SaaS",
      description: "A modern admin dashboard for SaaS platforms with JWT authentication, role-based access control, and responsive design using Material UI and Tailwind CSS.",
      tags: ["React", "Spring Boot", "MongoDB", "Material UI", "Tailwind CSS"],
      github: "https://github.com/bally3399",
      live: "https://admin-dashboard-beige-xi-12.vercel.app/",
      featured: true,
      category: "Full-Stack"
    },
    {
      title: "Verisafe - Blockchain Biometric Platform",
      description: "Collaborated on a blockchain-based platform for secure biometric data management. Developed smart contracts using Aiken and integrated wallet connectivity with MeshJS.",
      tags: ["Aiken", "Cardano", "MeshJS", "Next.js", "Tailwind CSS"],
      github: "https://github.com/bally3399/Verisafe",
      live: "#",
      featured: true,
      category: "Blockchain"
    },
    {
      title: "Event Booking System",
      description: "A robust backend system for event booking and management built with Spring Boot, featuring comprehensive event management capabilities.",
      tags: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/bally3399/EventBookingApp.git",
      live: "#",
      featured: false,
      category: "Backend"
    },
    {
      title: "Election Management System",
      description: "A secure election management system built with Spring Boot, designed to handle voting processes and election administration efficiently.",
      tags: ["Java", "Spring Boot", "MySQL", "Security"],
      github: "https://github.com/bally3399/ElectionManagementSystem.git",
      live: "#",
      featured: false,
      category: "Backend"
    },
    {
      title: "Movie App",
      description: "A modern movie browsing application built with React, featuring movie search, details, and user-friendly interface for movie enthusiasts.",
      tags: ["React", "JavaScript", "CSS", "API Integration"],
      github: "https://github.com/bally3399/movieApp.git",
      live: "#",
      featured: false,
      category: "Frontend"
    },
    {
      title: "Xpertview - Consultation Platform",
      description: "Consultation and Life Coaching App - Rental platform with advanced search and filtering capabilities, enabling seamless apartment bookings.",
      tags: ["Java", "Spring Boot", "React", "MongoDB"],
      github: "https://github.com/bally3399",
      live: "#",
      featured: false,
      category: "Full-Stack"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in hover:scale-105 transition-transform duration-300">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg border-2 transition-all hover:scale-110 hover:-translate-y-3 animate-slide-up hover:shadow-2xl hover:shadow-white/20 duration-500 ${
                project.featured 
                  ? 'bg-gradient-to-br from-white/10 to-white/5 border-white hover:from-white/20 hover:to-white/10' 
                  : 'bg-[#1a1a1a] border-gray-800 hover:border-white'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl hover:scale-125 hover:rotate-12 transition-all duration-300">
                  {project.category === "Blockchain" ? "🔗" : project.category === "Backend" ? "⚙️" : project.category === "Frontend" ? "🎨" : "📁"}
                </div>
                <div className="flex gap-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl hover:scale-125 hover:rotate-12 transition-all duration-300"
                    title="View on GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {project.live !== "#" && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xl hover:scale-125 hover:rotate-12 transition-all duration-300"
                      title="View Live"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className={`text-base md:text-lg font-bold mb-2 hover:scale-105 transition-transform duration-300 ${project.featured ? 'text-white' : ''}`}>
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mb-3 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 bg-gray-800 text-xs rounded hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
