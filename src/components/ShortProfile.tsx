import React from "react";

function ShortProfile() {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hello, I&apos;m{" "}
          <span style={{ color: "var(--color-accent)" }}>Tait van Strien</span>
        </h1>
        <p className="text-xl mb-6">
          Junior developer with experience using React, Next.js, Coq and more!
        </p>
        <div className="flex space-x-4">
          <a
            href="#contact"
            style={{
              backgroundColor: "var(--color-accent)",
              borderRadius: "var(--radius-md)",
            }}
            className="px-6 py-3 font-medium hover:opacity-90"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            style={{
              borderColor: "white",
              borderWidth: "2px",
              borderStyle: "solid",
              borderRadius: "var(--radius-md)",
              color: "white",
            }}
            className="px-6 py-3 font-medium hover:opacity-90"
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            borderRadius: "50%",
            boxShadow: `0 8px 16px var(--shadow-color)`,
            width: "300px",
            height: "300px",
            overflow: "hidden",
          }}
          className="relative"
        >
          {/* Placeholder for profile image */}
          <div
            style={{
              backgroundColor: "var(--color-primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              color: "var(--color-primary-dark)",
            }}
            className="text-7xl font-bold"
          >
            TvS
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShortProfile;
