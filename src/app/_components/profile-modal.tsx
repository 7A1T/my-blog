"use client";

import React, { useState } from "react";
import Image from "next/image";

const ProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="hover:underline text-white font-bold py-2 px-4 rounded"
      >
        About Me &rarr;
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center pb-3">
              <button onClick={closeModal} className="text-black close-modal">
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
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    About Me
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I am a soon-to-graduate Computer Science BSc student at the
                    University of Groningen. Passionate about software
                    development, I'm always seeking new challenges. My
                    experience spans various programming languages and
                    technologies, including JS, TS, C/C++, and Rust. I'm
                    constantly eager to expand my knowledge and skills in the
                    field.
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
