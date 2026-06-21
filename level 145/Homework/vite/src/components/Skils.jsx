function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 p-6 rounded-xl text-center hover:bg-blue-600 hover:scale-105 duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;