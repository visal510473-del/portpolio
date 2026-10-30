
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 px-6 pb-16 pt-28 text-white"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="text-center md:text-left" data-scroll-reveal>
          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            SY VISAL
            <span className="mt-2 block text-cyan-400">
              Web Developer
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg md:mx-0">
            I build modern, responsive, and user-friendly websites.
            I love turning ideas into beautiful digital experiences
            using modern web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-7 py-3 font-semibold text-gray-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-gray-600 px-7 py-3 font-semibold transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          
        </div>

        {/* Right Profile Image */}
        <div className="flex justify-center" data-scroll-reveal data-reveal-delay="1">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-3 rounded-full bg-cyan-400/20 blur-2xl"></div>

            {/* Profile Image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-400/70 shadow-2xl shadow-cyan-500/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
              <img
                src="/image/profile.jpg"
                  alt="SY VISAL Profile"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-8 rounded-xl border border-white/10 bg-gray-900 px-5 py-3 shadow-xl">
              <p className="text-sm text-gray-400">Specialized in</p>
              <p className="font-bold text-cyan-400">
                Web Development
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
