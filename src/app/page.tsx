import { Button } from "@/components/Button";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="fake-shader h-screen">
      {/* Navigation Bar */}
      <div className="glass-container h-full">
        <nav className="px-4 py-3 sticky top-0">
          <Typewriter text="Tait van Strien" className="text-xl font-bold" speed={75} />
        </nav>

        <section className="flex flex-col items-center justify-center text-center h-full">
          <h1 className="text-5xl font-bold mb-4">
            <Typewriter 
              text="Hello, I'm Tait!" 
              speed={75}
            />
          </h1>
          <div className="flex flex-row gap-4">
          <Link href="https://github.com/7a1t">
          <Button variant="outline" size="md" className="mt-4">
            <FaGithub />
            Github
          </Button>
          </Link>
          <Link href="https://linkedin.com/in/tait-van-strien/">
          <Button variant="outline" size="md" className="mt-4">
            <FaLinkedin />
            LinkedIn
          </Button>
          </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
