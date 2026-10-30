import React from "react";

const contacts = [
  {
    name: "Email",
    description: "Send me an email",
    value: "visal510473@gmail.com",
    link: "mailto:visal510473@gmail.com",
    icon: "✉",
    color: "group-hover:text-red-400",
  },
  {
    name: "Telegram",
    description: "Let's talk on Telegram",
    value: "@syvisal9",
    link: "https://t.me/syvisal9",
    icon: "➤",
    color: "group-hover:text-sky-400",
  },
  {
    name: "Phone",
    description: "Call me directly",
    value: "+855 10 364 635",
    link: "tel:+85510364635",
    icon: "☎",
    color: "group-hover:text-green-400",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 text-white py-20 px-6 justify-center items-center align-center"
    >
      {/* Background Decoration */}
      <div className="absolute top-10 left-0 w-72 h-72
        bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72
        bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-14" data-scroll-reveal>
          <p className="text-cyan-400 text-sm font-bold
            tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6 rounded-full" />

          <p className="text-gray-400 text-base md:text-lg
            max-w-2xl mx-auto leading-8">
            Have a project, job opportunity, or just want to say hello?
            Feel free to contact me through any of the platforms below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2
          lg:grid-cols-3 gap-6">

          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.link}
              target={contact.name === "Phone" ? undefined : "_blank"}
              rel={
                contact.name === "Phone"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex flex-col items-center text-center
                bg-gray-900/80 border border-gray-800 rounded-2xl
                p-8 transition-all duration-300
                hover:-translate-y-2 hover:border-cyan-400
                hover:shadow-lg hover:shadow-cyan-500/10"
              data-scroll-reveal
              data-reveal-delay={index + 1}
            >
              {/* Icon */}
              <div className={`flex items-center justify-center
                w-16 h-16 rounded-2xl bg-gray-800 text-3xl
                text-cyan-400 mb-6 transition duration-300
                group-hover:bg-gray-700 ${contact.color}`}>
                {contact.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">
                {contact.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {contact.description}
              </p>

              {/* Contact Value */}
              <p className="text-cyan-400 text-sm break-all">
                {contact.value}
              </p>

              {/* Button Text */}
              <span className="mt-7 text-sm font-semibold
                text-gray-300 group-hover:text-cyan-400
                transition-colors">
                Contact Now →
              </span>
            </a>
          ))}

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-scroll-reveal>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Work <span className="text-cyan-400">Together</span>
          </h3>

          <p className="text-gray-400 mb-8">
            I'm open to internships, junior developer roles, and projects.
          </p>

          <a
            href="mailto:visal510473@gmail.com"
            className="inline-flex items-center gap-3
              bg-cyan-400 text-gray-950 font-bold
              px-8 py-3 rounded-full
              hover:bg-cyan-300 hover:scale-105
              transition duration-300"
          >
            <span>✉</span>
            Send Me an Email
          </a>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 mt-20 pt-8
          flex flex-col md:flex-row items-center
          justify-between gap-4 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} My Portfolio.
            All rights reserved.
          </p>

          <a
            href="#home"
            className="text-gray-400 text-sm
              hover:text-cyan-400 transition"
          >
            Back to Top ↑
          </a>
        </footer>

      </div>
    </section>
  );
}
