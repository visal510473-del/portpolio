
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and attractive user interfaces.",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS / Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "React.js", level: 70 },
      ],
    },
    {
      title: "Backend Development",
      description: "Creating server-side applications and APIs.",
      skills: [
        { name: "PHP", level:60 },
        { name: "Laravel", level: 65 },
        { name: "MySQL", level: 70 },
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Tools I use to develop and manage projects.",
      skills: [
        { name: "Git & GitHub", level: 70 },
        { name: "VS Code", level: 85 },
        { name: "Responsive Design", level: 80 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-950 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            What I Can Do
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Here are the technologies and tools I am learning and using
            to build modern web applications.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-white/10 bg-gray-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5"
            >

              <h3 className="text-xl font-bold transition group-hover:text-cyan-400">
                {category.title}
              </h3>

              <p className="mt-3 min-h-12 text-sm leading-6 text-gray-400">
                {category.description}
              </p>

              {/* Progress Bars */}
              <div className="mt-7 space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </span>

                      <span className="text-sm font-semibold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-gray-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-14 text-center">
          <p className="text-gray-400">
            Always learning, always improving.
            <span className="ml-2 font-semibold text-cyan-400">
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
