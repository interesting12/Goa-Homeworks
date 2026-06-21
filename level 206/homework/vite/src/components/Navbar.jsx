function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 sticky top-0">
      <h1 className="text-2xl font-bold text-blue-400">Giorgi.dev</h1>

      <div className="flex gap-6">
        <a href="#about" className="hover:text-blue-400 duration-300">About</a>
        <a href="#skills" className="hover:text-blue-400 duration-300">Skills</a>
        <a href="#projects" className="hover:text-blue-400 duration-300">Projects</a>
        <a href="#contact" className="hover:text-blue-400 duration-300">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;