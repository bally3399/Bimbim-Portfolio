const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">BMS</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-white/70 transition">Home</a>
            <a href="#about" className="hover:text-white/70 transition">About</a>
            <a href="#skills" className="hover:text-white/70 transition">Skills</a>
            <a href="#experience" className="hover:text-white/70 transition">Experience</a>
            <a href="#projects" className="hover:text-white/70 transition">Projects</a>
            <a href="#contact" className="hover:text-white/70 transition">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
