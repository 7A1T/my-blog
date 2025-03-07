import ThemeSwitcher from "@/components/ThemeSwitcher";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Home() {
  return (
    <div
      style={{ backgroundColor: "var(--color-neutral-light)" }}
      className="min-h-screen"
    >
      {/* Navigation Bar */}
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

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "var(--color-primary-dark)",
          color: "white",
        }}
        className="py-20"
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hello, I&apos;m{" "}
              <span style={{ color: "var(--color-accent)" }}>
                Tait van Strien
              </span>
            </h1>
            <p className="text-xl mb-6">
              Junior developer with experience using React, Next.js, Coq and
              more!
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
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
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
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{ backgroundColor: "var(--color-neutral)" }}
        className="py-16 px-4"
      >
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
                <p
                  style={{ color: "var(--color-text-muted)" }}
                  className="mb-4"
                >
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
                <p
                  style={{ color: "var(--color-text-muted)" }}
                  className="mb-4"
                >
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
                <p
                  style={{ color: "var(--color-text-muted)" }}
                  className="mb-4"
                >
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{ color: "var(--color-primary-dark)" }}
            className="text-3xl font-bold mb-10 text-center"
          >
            Skills & Technologies
          </h2>

          <div
            style={{
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              boxShadow: `0 4px 6px var(--shadow-color)`,
            }}
            className="p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Frontend Skills */}
              <div>
                <h3
                  style={{ color: "var(--color-secondary)" }}
                  className="text-xl font-semibold mb-4"
                >
                  Frontend Development
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        React / Next.js
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        95%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "95%",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        TypeScript
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        90%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "90%",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        Tailwind CSS
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        85%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "85%",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        UI/UX Design
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        80%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "80%",
                          backgroundColor: "var(--color-primary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div>
                <h3
                  style={{ color: "var(--color-secondary)" }}
                  className="text-xl font-semibold mb-4"
                >
                  Backend Development
                </h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        Node.js / Express
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        85%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "85%",
                          backgroundColor: "var(--color-secondary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        MongoDB / PostgreSQL
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        80%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "80%",
                          backgroundColor: "var(--color-secondary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        GraphQL
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        75%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "75%",
                          backgroundColor: "var(--color-secondary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span style={{ color: "var(--color-text)" }}>
                        AWS / Serverless
                      </span>
                      <span style={{ color: "var(--color-text-muted)" }}>
                        70%
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "var(--color-neutral)",
                        borderRadius: "var(--radius-sm)",
                      }}
                      className="h-2 w-full"
                    >
                      <div
                        style={{
                          width: "70%",
                          backgroundColor: "var(--color-secondary)",
                          borderRadius: "var(--radius-sm)",
                        }}
                        className="h-full"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3
                style={{ color: "var(--color-secondary)" }}
                className="text-xl font-semibold mb-4"
              >
                Tools & Other Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <span
                  style={{
                    backgroundColor: "var(--color-neutral)",
                    color: "var(--color-text)",
                    borderRadius: "var(--radius-md)",
                  }}
                  className="px-4 py-2"
                >
                  Git
                </span>
                <span
                  style={{
                    backgroundColor: "var(--color-neutral)",
                    color: "var(--color-text)",
                    borderRadius: "var(--radius-md)",
                  }}
                  className="px-4 py-2"
                >
                  Docker
                </span>
                <span
                  style={{
                    backgroundColor: "var(--color-neutral)",
                    color: "var(--color-text)",
                    borderRadius: "var(--radius-md)",
                  }}
                  className="px-4 py-2"
                >
                  CI/CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        style={{ backgroundColor: 'var(--color-primary-dark)' }}
        className="py-16 px-4 text-white"
      >
      <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
         
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I&apos;m currently available for freelance work and exciting full-time opportunities. If you have a project that needs coding skills, don&apos;t hesitate to contact me.
              </p>
             
              <div className="space-y-4">
                <div className="flex items-center">
                  <HiMail className="text-xl mr-3" />
                  <a href="mailto:taitvanstrien@gmail.com" className="hover:underline">
                    taitvanstrien@gmail.com
                  </a>
                </div>
               
                <div className="flex space-x-4 mt-6">
                  <a
                    href="https://github.com/7a1t"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="p-3 hover:opacity-90 transition-opacity"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/tait-van-strien"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: 'var(--radius-md)',
                    }}
                    className="p-3 hover:opacity-90 transition-opacity"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 rounded bg-white/10 border border-white/20 focus:border-white focus:outline-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-primary-dark font-medium rounded hover:bg-white/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}
