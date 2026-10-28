
const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gray-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Get To Know Me
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400"></div>
        </div>

        {/* About Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Profile Card */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-gray-950 p-8 shadow-2xl shadow-cyan-500/5">

              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-cyan-400/10 blur-xl"></div>

              <div className="relative mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl font-bold text-cyan-400">
                  SV
                </div>

                <div>
                  <h3 className="text-xl font-bold">SY VISAL</h3>
                  <p className="mt-1 text-sm text-gray-400">
                    Web Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Name</span>
                  <span className="font-medium">SY VISAL</span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Education</span>
                  <span className="text-right font-medium">
                    Computer Science
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <span className="text-gray-400">Specialization</span>
                  <span className="font-medium text-cyan-400">
                    Web Development
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-gray-400">Experience</span>
                  <span className="font-medium">Learning & Building</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div>
            <h3 className="text-2xl font-bold leading-relaxed md:text-3xl">
              I'm SY VISAL, an aspiring{" "}
              <span className="text-cyan-400">Web Developer.</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I am passionate about web development and enjoy creating
              modern, responsive, and user-friendly websites. I am
              continuously improving my programming skills and learning
              new technologies to build better web applications.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              My goal is to become a professional developer, work on
              real-world projects, solve problems, and create useful
              digital experiences for users.
            </p>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-bold">Technologies I Learn</h4>

              <div className="flex flex-wrap gap-3">
                {["HTML", "CSS", "JavaScript", "React", "PHP", "Laravel", "MySQL","Tailwind CSS"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

        
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
