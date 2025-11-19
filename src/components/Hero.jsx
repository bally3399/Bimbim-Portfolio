const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="text-center max-w-4xl">
        <div className="mb-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 border-4 border-white overflow-hidden hover:scale-110 hover:rotate-6 transition-all duration-500">
            <img src="/profile.jpg" alt="Baliqis Sulaiman" className="w-full h-full object-cover" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-slide-up hover:scale-105 transition-transform duration-300">
          Baliqis Mosunmola Sulaiman
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6 animate-slide-up tracking-wider" style={{animationDelay: '0.2s'}}>
          SOFTWARE ENGINEER
        </p>
        <div className="flex gap-4 justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <a href="#contact" className="px-6 py-2.5 text-sm md:text-base bg-white text-black font-semibold hover:bg-gray-200 transition-all transform hover:scale-110 hover:-translate-y-1 duration-300">
            Get In Touch
          </a>
          <a href="#about" className="px-6 py-2.5 text-sm md:text-base border-2 border-white hover:bg-white hover:text-black transition-all transform hover:scale-110 hover:-translate-y-1 duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
