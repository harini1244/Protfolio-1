function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-white">Harini</span>
          <span className="text-cyan-400">.</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="/resume.pdf"
          download
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-xl font-semibold transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;