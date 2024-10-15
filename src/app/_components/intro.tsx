import React from "react";
import { CMS_NAME } from "@/lib/constants";
import { Mail, Linkedin, Github, Gitlab } from "lucide-react";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Tait van Strien
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          {`A blog about web development, software engineering and my journey as a developer.`}
        </h4>
      </div>
      <div className="flex space-x-4 mt-6 md:mt-0">
        <a href="mailto:taitvanstrien@gmail.com" aria-label="Email">
          <Mail className="w-6 h-6 hover:text-blue-600" />
        </a>
        <a
          href="https://www.linkedin.com/in/tait-van-strien"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6 hover:text-blue-600" />
        </a>
        <a
          href="https://github.com/7A1T"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6 hover:text-blue-600" />
        </a>
        <a
          href="https://gitlab.com/7A1T"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitLab"
        >
          <Gitlab className="w-6 h-6 hover:text-blue-600" />
        </a>
      </div>
    </section>
  );
}
