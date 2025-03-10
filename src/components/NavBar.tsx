import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher"

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "var(--color-surface)",
        boxShadow: `0 2px 4px var(--shadow-color)`,
      }}
      className="px-4 py-3 sticky top-0 z-10"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a
          href="#"
          style={{ color: "var(--color-primary)" }}
          className="text-xl font-bold"
        >
          Tait van Strien
        </a>

        <div className="flex items-center space-x-6">
          <a
            href="#about"
            style={{ color: "var(--color-text)" }}
            className="hover:opacity-80"
          >
            About
          </a>
          <a
            href="#projects"
            style={{ color: "var(--color-text)" }}
            className="hover:opacity-80"
          >
            Projects
          </a>
          <a
            href="#skills"
            style={{ color: "var(--color-text)" }}
            className="hover:opacity-80"
          >
            Skills
          </a>
          <a
            href="#contact"
            style={{ color: "var(--color-text)" }}
            className="hover:opacity-80"
          >
            Contact
          </a>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
