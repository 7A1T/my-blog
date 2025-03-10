"use client";

import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

function ContactSection() {
  return (
    <div className="max-w-4xl mx-auto py-12">
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
                className="p-3 bg-white/10 border border-white/20 rounded-md hover:opacity-90 transition-opacity"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/tait-van-strien"
                className="p-3 bg-white/10 border border-white/20 rounded-md hover:opacity-90 transition-opacity"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
