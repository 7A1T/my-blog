import React from "react";

function FeaturedProjects() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2
        style={{ color: "var(--color-primary-dark)" }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            borderRadius: "var(--radius-lg)",
            boxShadow: `0 4px 6px var(--shadow-color)`,
            overflow: "hidden",
          }}
          className="flex flex-col h-full"
        >
          <div
            style={{
              backgroundColor: "var(--color-secondary-light)",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-secondary-dark)",
            }}
            className="font-bold text-xl"
          >
            Project Image
          </div>
          <div className="p-6 flex-grow">
            <h3
              style={{ color: "var(--color-text)" }}
              className="text-xl font-semibold mb-2"
            >
              Lorem ipsum dolor sit amet
            </h3>
            <p style={{ color: "var(--color-text-muted)" }} className="mb-4">
              Lorem ipsum dolor sit amet
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                React
              </span>
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                Next.js
              </span>
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                Stripe
              </span>
            </div>
          </div>
          <div
            style={{ borderTop: "1px solid var(--color-neutral)" }}
            className="p-4 flex justify-between"
          >
            <a
              href="#"
              style={{ color: "var(--color-primary)" }}
              className="font-medium hover:underline"
            >
              Live Demo
            </a>
            <a
              href="#"
              style={{ color: "var(--color-primary)" }}
              className="font-medium hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            borderRadius: "var(--radius-lg)",
            boxShadow: `0 4px 6px var(--shadow-color)`,
            overflow: "hidden",
          }}
          className="flex flex-col h-full"
        >
          <div
            style={{
              backgroundColor: "var(--color-primary-light)",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-primary-dark)",
            }}
            className="font-bold text-xl"
          >
            Project Image
          </div>
          <div className="p-6 flex-grow">
            <h3
              style={{ color: "var(--color-text)" }}
              className="text-xl font-semibold mb-2"
            >
              Lorem ipsum dolor sit amet
            </h3>
            <p style={{ color: "var(--color-text-muted)" }} className="mb-4">
              Lorem ipsum dolor sit amet
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                TypeScript
              </span>
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                Firebase
              </span>
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                React
              </span>
            </div>
          </div>
          <div
            style={{ borderTop: "1px solid var(--color-neutral)" }}
            className="p-4 flex justify-between"
          >
            <a
              href="#"
              style={{ color: "var(--color-primary)" }}
              className="font-medium hover:underline"
            >
              Live Demo
            </a>
            <a
              href="#"
              style={{ color: "var(--color-primary)" }}
              className="font-medium hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div
          style={{
            backgroundColor: "var(--color-surface)",
            borderRadius: "var(--radius-lg)",
            boxShadow: `0 4px 6px var(--shadow-color)`,
            overflow: "hidden",
          }}
          className="flex flex-col h-full"
        >
          <div
            style={{
              backgroundColor: "var(--color-accent)",
              height: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
            }}
            className="font-bold text-xl"
          >
            Project Image
          </div>
          <div className="p-6 flex-grow">
            <h3
              style={{ color: "var(--color-text)" }}
              className="text-xl font-semibold mb-2"
            >
              Lorem ipsum dolor sit amet
            </h3>
            <p style={{ color: "var(--color-text-muted)" }} className="mb-4">
              Lorem ipsum dolor sit amet
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                JavaScript
              </span>
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                Weather API
              </span>
              <span
                style={{
                  backgroundColor: "var(--color-primary-light)",
                  color: "var(--color-primary-dark)",
                  borderRadius: "var(--radius-sm)",
                }}
                className="px-3 py-1 text-sm"
              >
                Chart.js
              </span>
            </div>
          </div>
          <div
            style={{ borderTop: "1px solid var(--color-neutral)" }}
            className="p-4 flex justify-between"
          >
            <a
              href="#"
              style={{ color: "var(--color-primary)" }}
              className="font-medium hover:underline"
            >
              Live Demo
            </a>
            <a
              href="#"
              style={{ color: "var(--color-primary)" }}
              className="font-medium hover:underline"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <a
          href="#"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "white",
            borderRadius: "var(--radius-md)",
          }}
          className="inline-block px-6 py-3 font-medium hover:opacity-90"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
}

export default FeaturedProjects;
