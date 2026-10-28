
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-gray-950/90 text-white backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide">
          My<span className="text-cyan-400">Portfolio</span>
          <span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Download CV */}
        <a
          href="/cv.pdf"
          download
          className="hidden rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-cyan-300 md:inline-block"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-gray-950 px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 transition hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/cv.pdf"
                download
                className="inline-block rounded-lg bg-cyan-400 px-5 py-2.5 font-semibold text-gray-950"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
