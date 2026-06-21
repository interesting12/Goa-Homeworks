function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 duration-300">
          <h3 className="text-xl font-bold">Library App</h3>
          <p className="mt-2">Book management project.</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 duration-300">
          <h3 className="text-xl font-bold">Online Store</h3>
          <p className="mt-2">E-commerce website.</p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl hover:scale-105 duration-300">
          <h3 className="text-xl font-bold">GOA Website</h3>
          <p className="mt-2">Academy landing page.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;