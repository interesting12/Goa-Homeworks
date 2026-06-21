function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        About Me
      </h2>

      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
        <p className="text-lg">
          My name is Giorgi. I am learning programming and web development.
          I enjoy creating websites with React, JavaScript and Tailwind CSS.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-blue-400 font-bold">Age</h3>
            <p>17 Years Old</p>
          </div>

          <div>
            <h3 className="text-blue-400 font-bold">Country</h3>
            <p>Georgia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;