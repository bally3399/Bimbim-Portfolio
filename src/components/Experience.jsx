const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Parousia",
      period: "08/2025 - Present",
      // location: "Lagos",
      responsibilities: [
        "Currently working on multiple enterprise-level projects under active development"
      ]
      // Projects under development:
      // - Afrika Plaza: E-commerce platform similar to Jumia, built with TypeScript, React, and Tailwind CSS
      // - PagPay Mobile & Website: Payment platform with mobile app (React Native + TypeScript) and backend (Node.js)
    },

    {
      title: "Facilitator",
      company: "Semicolon Africa",
      period: "06/2025 - 08/2025",
      location: "Lagos",
      responsibilities: [
        "Mentor software engineering cohorts in Java, Spring Boot, React, and Git, fostering technical growth",
        "Conduct hands-on coding sessions and guide project development, emphasizing best practices and collaboration"
      ]
    },
    
    {
      title: "Software Engineer",
      company: "FortunaeIt Solution",
      period: "10/2024 - 04/2025",
      location: "Lagos",
      responsibilities: [
        "Lead a high-performing development team to deliver innovative software solutions, improving operational efficiency and user satisfaction by 25%",
        "Spearheaded full-stack development of critical projects, ensuring high-quality code, timely delivery, and alignment with business objectives",
        "Utilized React, Node.js, and modern engineering practices to architect scalable systems"
      ],
      projects: [
        "Library Management Platform: Built a robust platform using React (frontend) and Node.js (backend) to streamline library operations",
        "Hotel Booking Management System: Developed a seamless booking system with integrated payment processing and user-friendly interfaces"
      ]
    },
    {
      title: "Full Stack Engineer",
      company: "Semicolon Africa",
      period: "10/2023 - 10/2024",
      location: "Lagos",
      responsibilities: [
        "Architected a scalable microservices system using Spring Cloud, enhancing system modularity and performance",
        "Implemented secure authentication with Keycloak, Spring Security, and JWT, reducing security vulnerabilities by 30%",
        "Optimized database performance with JDBC, achieving a 17% improvement in application efficiency",
        "Practiced Test-Driven Development (TDD) with JUnit, ensuring robust unit and integration tests",
        "Designed and documented RESTful APIs using Postman, improving API usability for cross-functional teams",
        "Contributed to flagship products, boosting user satisfaction by 20%"
      ]
    }
  ]

  return (
    <section id="experience" className="min-h-screen py-16 px-6 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in hover:scale-105 transition-transform duration-300">
          Work Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="border-l-4 border-white pl-6 pb-6 animate-slide-in hover:scale-105 hover:border-l-8 hover:pl-5 transition-all duration-500 hover:shadow-2xl hover:shadow-white/10" 
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-lg md:text-xl font-bold hover:text-gray-300 transition-colors duration-300">{exp.title}</h3>
                  <p className="text-base md:text-lg text-white hover:scale-105 transition-transform duration-300 inline-block">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">{exp.location}</p>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start hover:text-white hover:translate-x-2 transition-all duration-300">
                    <span className="mr-2">▸</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              {exp.projects && (
                <div className="mt-3">
                  <p className="font-semibold text-white text-sm mb-1.5">Key Projects Delivered:</p>
                  <ul className="space-y-1.5 text-gray-300 text-sm">
                    {exp.projects.map((project, i) => (
                      <li key={i} className="flex items-start hover:text-white hover:translate-x-2 transition-all duration-300">
                        <span className="mr-2">•</span>
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
