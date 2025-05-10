import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Research and Development Intern",
    company: "Sheryians Coding School",
    duration: "Oct 2024 - Feb 2025",
    location: "Bhopal, India",
    description: [
      "Worked as a Full Stack Developer using React.js, Node.js, MongoDB, and more.",
      "Developed scalable, high-performance apps appreciated for UX.",
      "Mentored students on web app development for hands-on experience."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Freelance Projects",
    duration: "Jan 2025",
    location: "Bhopal, India",
    description: [
      "Created and deployed responsive apps using React, Tailwind CSS, and Framer Motion.",
      "Ensured smooth animations, design precision, and device responsiveness."
    ]
  }
];

const Experience = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(cardRefs.current, {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#experience-section",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      id="experience-section"
      className="bg-black text-white w-full min-h-screen py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold text-center mb-16 tracking-wide">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 font-sans">
          {experiences.map((exp, i) => (
            <Tilt
              key={i}
              glareEnable
              glareMaxOpacity={0.2}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              transitionSpeed={600}
              perspective={1000}
              scale={1.03}
              className="bg-neutral-900 p-8 rounded-3xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-gray-400 text-sm">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                </div>
                <FaArrowRight className="text-yellow-400 text-xl mt-1" />
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
