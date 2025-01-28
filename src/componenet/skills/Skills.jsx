import { motion } from "framer-motion";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

// Particle Component
const Particle = ({ x, y, size, color }) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      backgroundColor: color,
      width: size,
      height: size,
      top: y,
      left: x,
    }}
    animate={{
      opacity: [1, 0.4, 1],
      scale: [1, 1.5, 1],
    }}
    transition={{
      repeat: Infinity,
      duration: Math.random() * 5 + 2,
    }}
  />
);

// Mapping icons to skills
const skillIcons = {
  React: <FaReact className="text-blue-400 text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-xl" />,
  HTML5: <SiHtml5 className="text-orange-500 text-xl" />,
  CSS3: <SiCss3 className="text-blue-500 text-xl" />,
  "Node.js": <FaNodeJs className="text-green-400 text-xl" />,
  "Express.js": <SiExpress className="text-gray-300 text-xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-xl" />,
  SQL: <FaAws className="text-gray-400 text-xl" />,
  Git: <FaGitAlt className="text-orange-600 text-xl" />,
  GitHub: <FaGitAlt className="text-white text-xl" />,
  AWS: <FaAws className="text-orange-400 text-xl" />,
  Docker: <FaDocker className="text-blue-400 text-xl" />,
  Vercel: <SiVercel className="text-white text-xl" />,
};

export default function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "AWS", "Docker", "Vercel"],
    },
  ];

  // Randomly generate particles
  const particles = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${Math.random() * 10 + 5}px`,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
  }));

  return (
    <section className="relative min-h-screen text-white px-6 py-12">
      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            x={particle.x}
            y={particle.y}
            size={particle.size}
            color={particle.color}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold mb-12 text-orange-600 font-mono"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h1>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800/200 bg-opacity-80 rounded-xl shadow-lg hover:shadow-glow transition-all"
              animate={{
                y: [0, -10, 0], // Floating animation
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + Math.random() * 2, // Randomized duration for smoother visuals
              }}
            >
              <h2 className="text-xl font-mono font-bold mb-4 text-orange-400">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex text-lg items-center gap-3 text-gray-300  px-4 py-2 rounded-lg"
                  >
                    {skillIcons[skill] || null}
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Animation */}
      <style jsx>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 10px rgba(80, 120, 255, 0.5),
              0 0 20px rgba(80, 120, 255, 0.3),
              0 0 30px rgba(80, 120, 255, 0.2);
          }
          50% {
            box-shadow: 0 0 20px rgba(80, 120, 255, 0.7),
              0 0 30px rgba(80, 120, 255, 0.5),
              0 0 40px rgba(80, 120, 255, 0.3);
          }
          100% {
            box-shadow: 0 0 10px rgba(80, 120, 255, 0.5),
              0 0 20px rgba(80, 120, 255, 0.3),
              0 0 30px rgba(80, 120, 255, 0.2);
          }
        }

        .hover\\:shadow-glow:hover {
          animation: glow 2s infinite alternate;
        }
      `}</style>
    </section>
  );
}
