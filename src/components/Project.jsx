import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const projects = [
  {
    name: "PrepBot",
    image: "./MockAi.png",
  },
  {
    name: "Cyber AI Dashboard",
    image: "/project2.jpg",
  },
  {
    name: "Dreamscape UI Kit",
    image: "/project3.jpg",
  },
  {
    name: "Gemini Bot",
    image: "./Gemini.png",
  },
];

const ProjectSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-black text-white py-28 px-6 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-bold mb-24">Projects</h2>

        <div className="relative">
          <ul className="flex flex-col items-center gap-10">
            {projects.map((project, index) => (
              <li
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="text-5xl font-semibold cursor-pointer relative z-10 transition duration-300 hover:text-yellow-400"
              >
                {project.name}
              </li>
            ))}
          </ul>

          {/* Hover Image */}
          {hoveredIndex !== null && (
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Tilt
                glareEnable
                glareMaxOpacity={0.3}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={900}
                scale={1.05}
              >
                <img
                  src={projects[hoveredIndex].image}
                  alt={projects[hoveredIndex].name}
                  className="w-[500px] h-[300px] object-cover rounded-2xl shadow-xl border border-yellow-400"
                />
              </Tilt>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
