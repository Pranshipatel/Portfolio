import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Next.js", "GSAP", "Tailwind CSS",
  "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose", "Axios",
  "Gemini API", "Git", "GitHub", "Postman", "Figma", "Vite", "Render",
  "MySQL", "Redis"
];

const SkillSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 100,
      rotateX: 90,
      stagger: 0.15,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id="skills" className="py-20 bg-black text-white h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 tracking-tight ">
          🚀 My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 font-sans">
          {skills.map((skill, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={600}
              scale={1.05}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="bg-zinc-900 rounded-xl p-5 font-semibold text-center shadow-xl"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              {skill}
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
