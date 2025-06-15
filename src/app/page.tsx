import BouncingChevron from "@/components/BouncingChevron";
import Button from "@/components/Button";
import LowPolyBackground from "@/components/LowPolyBackground";
import Typewriter from "@/components/Typewriter";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ShipOnWaves from "@/components/ShipOnWaves";

// TODO: add theming to wave and background, take colours from selected theme
// TODO theme selector
export default function Home() {
  return (
    <div>
      <div className="fake-shader h-screen">
        <LowPolyBackground />
        {/* Navigation Bar */}
        <div className="glass-container h-full">
          <nav className="px-4 py-3 sticky top-0">
            <Typewriter
              text="Tait van Strien"
              className="text-xl font-bold"
              speed={75}
            />
          </nav>

          <section className="flex flex-col text-center h-screen">
            <div className="flex flex-col items-center justify-center flex-1">
              <h1 className="text-5xl font-bold mb-4">
                <Typewriter text="Hello, I'm Tait!" speed={75} />
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
            </div>
            <div className="mb-24">
              <BouncingChevron />
            </div>
            {/* separator (SVG) */}
            <div className="absolute bottom-[-2] left-0 w-full z-[-1]">
              <ShipOnWaves/>
            </div>
          </section>
        </div>
      </div>

      {/* Projects Section */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Projects</h2>
          {/* Your project content here */}
          <p className="text-gray-700">
            Here’s where you can showcase your best work...
          </p>
        </div>
      </section>
    </div>
  );
}
