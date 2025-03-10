import React from 'react'

function AboutMe() {
  return (
	<div>
	  <div className="max-w-4xl mx-auto">
          <h2
            style={{ color: "var(--color-primary-dark)" }}
            className="text-3xl font-bold mb-10 text-center"
          >
            About Me
          </h2>
          <div
            style={{
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              boxShadow: `0 4px 6px var(--shadow-color)`,
            }}
            className="p-6 md:p-8"
          >
            <p style={{ color: "var(--color-text)" }} className="text-lg mb-4">
              I&apos;m an aspiring developer fresh out of university with a
              passion for software development. Originally from South Africa,
              I&apos;ve lived across Europe and hold citizenship in South
              Africa, the Netherlands, and the United Kingdom. My experience
              covers a range of programming languages and technologies,
              including JavaScript, TypeScript, C/C++, and Rust, and I&apos;m
              continually eager to deepen my skills and knowledge in the field.
            </p>
            <p style={{ color: "var(--color-text)" }} className="text-lg mb-4">
              When I&apos;m not coding, you can find me playing D&D, oraganising
              small scale events and running. I believe in continuous learning
              and pushing the boundaries of what&apos;s possible with web
              technologies.
            </p>
            <div className="mt-8">
              <h3
                style={{ color: "var(--color-secondary)" }}
                className="text-xl font-semibold mb-4"
              >
                What I&apos;ve been working on
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div
                  style={{
                    backgroundColor: "var(--color-neutral-light)",
                    borderRadius: "var(--radius-md)",
                  }}
                  className="p-4"
                >
                  <h4
                    style={{ color: "var(--color-primary)" }}
                    className="font-medium mb-2"
                  >
                    Lorem ipsum dolor sit amet
                  </h4>
                  <p style={{ color: "var(--color-text)" }}>
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "var(--color-neutral-light)",
                    borderRadius: "var(--radius-md)",
                  }}
                  className="p-4"
                >
                  <h4
                    style={{ color: "var(--color-primary)" }}
                    className="font-medium mb-2"
                  >
                    Lorem ipsum dolor sit amet
                  </h4>
                  <p style={{ color: "var(--color-text)" }}>
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div
                  style={{
                    backgroundColor: "var(--color-neutral-light)",
                    borderRadius: "var(--radius-md)",
                  }}
                  className="p-4"
                >
                  <h4
                    style={{ color: "var(--color-primary)" }}
                    className="font-medium mb-2"
                  >
                    Lorem ipsum dolor sit amet
                  </h4>
                  <p style={{ color: "var(--color-text)" }}>
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
	</div>
  )
}

export default AboutMe
