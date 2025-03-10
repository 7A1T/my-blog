import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import NavBar from "@/components/NavBar";
import ShortProfile from "@/components/ShortProfile";
import SkillsSection from "@/components/SkillsSection";
import { SkillCategory, ToolsArray } from "@/types/SkillSection";

export default function Home() {
  const skills: SkillCategory[] = [
    {
      category: "Frontend Development",
      items: [
        { name: "React / Next.js", level: "95%" },
        { name: "TypeScript", level: "90%" },
        { name: "Tailwind CSS", level: "85%" },
        { name: "UI/UX Design", level: "80%" },
      ],
      color: "var(--color-primary)",
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js / Express", level: "85%" },
        { name: "MongoDB / PostgreSQL", level: "80%" },
        { name: "GraphQL", level: "75%" },
        { name: "AWS / Serverless", level: "70%" },
      ],
      color: "var(--color-secondary)",
    },
  ];

  const tools: ToolsArray = ["Git", "Docker", "CI/CD"];

  return (
    <div
      style={{ backgroundColor: "var(--color-neutral-light)" }}
      className="min-h-screen"
    >
      <NavBar />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "var(--color-primary-dark)",
          color: "white",
        }}
        className="py-20"
      >
        <ShortProfile />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <AboutMe />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        style={{ backgroundColor: "var(--color-neutral)" }}
        className="py-16 px-4"
      >
        <FeaturedProjects />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <SkillsSection Skills={skills} Tools={tools} />
      </section>
      <section
        id="contact"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
        className="py-16 px-4 text-white"
      >
        <ContactSection />
      </section>
    </div>
  );
}
