const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "{ }",
      skills: "React, Next.js, TypeScript, CSS, Tailwind CSS"
    },
    {
      title: "Backend",
      icon: "⚙",
      skills: "Node.js, Java, Spring Boot, Django"
    },
    {
      title: "Cloud",
      icon: "☁",
      skills: "Vercel, Render"
    },
    {
      title: "Architecture",
      icon: "⚡",
      skills: "Microservices, APIs"
    },
    {
      title: "Languages",
      icon: "🔢",
      skills: "JavaScript, TypeScript, Java, Python, GoLang"
    },
    {
      title: "Frameworks",
      icon: "🔧",
      skills: "React.js, Next.js, React-Native"
    },
    {
      title: "Database",
      icon: "💾",
      skills: "MySQL, PostgreSQL, MongoDB"
    },
    {
      title: "Technologies",
      icon: "🛠",
      skills: "REST APIs, Postman, Maven, TDD, GitHub, HTML, CSS, Tailwind CSS, GitHub Actions"
    },
    {
      title: "Web3",
      icon: "🔗",
      skills: "Sui Move, Blockchain, Smart Contracts"
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in hover:scale-105 transition-transform duration-300">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800 hover:border-white transition-all hover:scale-110 hover:-translate-y-2 animate-slide-up hover:shadow-2xl hover:shadow-white/10 duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl mb-3 hover:scale-125 transition-transform duration-300">{category.icon}</div>
              <h3 className="text-base font-bold mb-2 text-white">{category.title}</h3>
              <p className="text-gray-400 text-xs">{category.skills}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 hover:border-white transition-all hover:scale-105 hover:-translate-y-1 animate-fade-in hover:shadow-2xl hover:shadow-white/10 duration-300">
          <h3 className="text-lg font-bold mb-3 text-white">Soft Skills</h3>
          <p className="text-gray-300 text-sm">
            Design Thinking, Critical Thinking, Problem-Solving, Team Leadership
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
