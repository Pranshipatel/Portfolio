import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col justify-center gap-20">
      {/* Header */}
      {/* <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-xl">PRANSHI</h1>
        <div className="text-lg font-semibold">Contact</div>
      </header> */}

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
        {/* Left Section - Text */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Let's Connect!
          </h2>
          <p className="text-gray-300 text-lg mt-4">
            Whether you have a question, a project, or just want to say hi — feel free to drop a message!
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <form className="bg-white bg-opacity-5 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4 border border-white/10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-white/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-white/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg border border-white/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-4 mt-10 text-gray-400 text-xl">
  <div className="flex gap-6 flex-wrap justify-center">
    <a
      href="https://github.com/Pranshipatel"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <FaGithub />
    </a>
    <a
      href="https://www.linkedin.com/in/pranshi-patel-b3928a257/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://www.instagram.com/pranshii.patel/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <FaInstagram />
    </a>
    <a
      href="https://leetcode.com/u/Pranshii1/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition"
    >
      <SiLeetcode />
    </a>
  </div>
  <p className="text-sm text-gray-500">© {new Date().getFullYear()} Pranshi Patel. All rights reserved.</p>
</footer>

    </div>
  );
}
