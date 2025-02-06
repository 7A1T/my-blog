"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FileUser, GraduationCap } from "lucide-react";

const ProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="hover:underline font-bold py-2 px-4 rounded"
      >
        About Me &rarr;
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 bg-white dark:bg-slate-900 shadow-lg rounded-md">
            <div className="flex justify-between items-center pb-3">
              <button onClick={closeModal} className="close-modal">
                &times;
              </button>
            </div>

            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
                <div className="flex-shrink-0">
                  <Image
                    className="rounded-full border-4 border-gray-800 shadow-lg w-48 h-48 object-cover"
                    src="/assets/blog/authors/tait.jpg"
                    alt="Picture of me"
                    width={200}
                    height={200}
                    unoptimized
                  />
                  <div className="py-4 flex flex-col items-start gap-4"> {/* Removed lg:flex-row */}
                    <Link
                      href="/assets/blog/pdfs/resume-tait-van-strien.pdf"
                      className="hover:underline"
                    >
                      <div className="flex items-center space-x-2">
                        <FileUser className="w-6 h-6" />
                        <h3 className="text-lg lg:text-xl font-bold tracking-tighter leading-tight">
                          My Resume
                        </h3>
                      </div>
                    </Link>
                    <Link
                      href="/assets/blog/pdfs/Tait-BSc-Thesis.pdf"
                      className="hover:underline"
                    >
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-6 h-6" />
                        <h3 className="text-lg lg:text-xl font-bold tracking-tighter leading-tight">
                          My BSc Thesis
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold mb-4">About Me</h2>
                  <p className="text-lg leading-relaxed">
                    I am an upcoming Bachelor’s graduate in Computer Science
                    from the University of Groningen. Originally from South
                    Africa, I've lived across Europe and hold citizenship in
                    South Africa, the Netherlands, and the United Kingdom.
                    Driven by a passion for software development, I’m always
                    excited to take on new challenges. My experience covers a
                    range of programming languages and technologies, including
                    JavaScript, TypeScript, C/C++, and Rust, and I’m continually
                    eager to deepen my skills and knowledge in the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;