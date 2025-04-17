import Link from "next/link";

export default function Home() {
  return (
    <div className="fake-shader">
      {/* Navigation Bar */}
      <nav className="px-4 py-3 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Tait van Strien
          </a>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:opacity-80">
              About
            </a>
            <a href="#projects" className="hover:opacity-80">
              Projects
            </a>
            <a href="#skills" className="hover:opacity-80">
              Skills
            </a>
            <a href="#contact" className="hover:opacity-80">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold mb-4 z-10 opacity-80">
          Site under construction!
        </h1>
        <Link href="https://components.taitvanstrien.nl" className="text-2xl mb-4 z-10 opacity-80 underline">
          <h2>
            preview components here
          </h2>
        </Link>
      </section>
    </div>
  );
}
