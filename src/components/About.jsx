const About = () => {
  return (
    <section id="about" className="min-h-screen py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 animate-fade-in hover:scale-105 transition-transform duration-300">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in w-full max-w-sm mx-auto">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden border-4 border-gray-700 hover:border-white transition-all duration-500 hover:shadow-2xl hover:shadow-white/20" style={{backgroundColor: '#1a1a1a'}}>
              <img 
                src="/profile.jpg" 
                alt="Baliqis Sulaiman" 
                className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
          <div className="animate-slide-up space-y-4 md:space-y-6">
            <div className="p-4 md:p-6 rounded-lg font-mono text-sm md:text-base border border-gray-800 transition-all duration-500 shadow-2xl overflow-x-auto" style={{backgroundColor: '#0a0a0a'}}>
              <pre className="text-white whitespace-pre-wrap break-words">
{`const engineer = {
  name: "Baliqis Sulaiman",
  role: "Software Engineer",
  passion: ["Clean Code", "Innovation"],
  mindset: "Problem Solver",
  approach: "User-Centric Design"
};`}
              </pre>
            </div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed hover:text-white transition-colors duration-300">
              Dynamic Software Engineer with over 2 years of experience designing, developing, and architecting scalable, 
              high-performance software solutions. Proficient in Java, React, Next.js, and modern frameworks, with a strong 
              foundation in system design, design patterns, and secure coding practices. Passionate about solving complex 
              problems, mentoring teams, and driving innovation through emerging technologies to deliver impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
