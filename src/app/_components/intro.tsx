import React from "react";
import { Mail, Linkedin, Github, Gitlab } from "lucide-react";
import ProfileModal from "./profile-modal";
import TextAnimation from "./text-animation";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>
        <TextAnimation text="Tait van Strien" />
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          {`A blog about software development and my learning journey by a soon to be graduate of Computing Science at Rijksuniversiteit Groningen.`}
        </h4>
        <div className="flex justify-center md:justify-start mt-2 md:pl-4">
          <ProfileModal />
        </div>
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
