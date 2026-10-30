
const Project = () => {
  const projects = [
    {
      title: "E-Mobix Phone Store",
      description:
        "A phone store website built with Django and Python, featuring products, customer accounts, shopping cart, orders, and dashboard management.",
      image:
        "image/17poster.jpg",
      technologies: ["Python", "Django", "JavaScript", "CSS"],
      demo: "https://e-mobix-shop.onrender.com",
      number: "01",
    },
    {
      title: "TEN11 Fashion Website",
      description:
        "A modern fashion website featuring a stylish navigation bar, fashion collections, and a responsive shopping-inspired interface.",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80",
      technologies: ["HTML", "CSS", "JavaScript"],
      demo: "https://ten11project.vercel.app/",
      number: "02",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-16 text-center" data-scroll-reveal>
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Recent Work
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-cyan-400"></div>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            Here are some of my web development projects.
            Each project represents my learning, creativity,
            and passion for building websites.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-950 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              data-scroll-reveal
              data-reveal-delay={Number(project.number)}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>

                <span className="absolute bottom-4 left-5 text-3xl font-extrabold text-white">
                  {project.number}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Demo */}
                <div className="mt-8">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-bold text-gray-950 transition hover:bg-cyan-300"
                  >
                    Live Demo
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Project;
