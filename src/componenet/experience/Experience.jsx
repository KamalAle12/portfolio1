import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Particle = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSize = Math.random() * 6 + 4;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        backgroundColor: randomColor,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
      }}
      initial={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      animate={{
        opacity: 0,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "Tech Corp",
      duration: "Jan 2023 - Aug 2023",
      description:
        "Worked on developing scalable web applications using React and Node.js, enhancing performance by 25%.",
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Creative Studio",
      duration: "Sep 2022 - Dec 2022",
      description:
        "Designed and implemented user-friendly interfaces, improving user satisfaction scores by 30%.",
    },
    {
      id: 3,
      role: "Open Source Contributor",
      company: "GitHub Projects",
      duration: "Mar 2022 - Aug 2022",
      description:
        "Contributed to multiple open-source projects, enhancing codebases and providing valuable features.",
    },
  ];

  const [visible, setVisible] = useState(null);

  const toggleVisibility = (id) => {
    setVisible(visible === id ? null : id);
  };

  return (
    <section className="min-h-screen text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full mx-auto">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-center mb-12 text-orange-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Experience
        </motion.h1>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`mb-10 flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Line Connector */}
              <div className="w-16 h-16 flex justify-center items-center relative">
                <div
                  className="absolute w-full h-0.5 bg-indigo-600"
                  style={{
                    left: index % 2 === 0 ? "auto" : "-100%",
                    right: index % 2 === 0 ? "-100%" : "auto",
                  }}
                />
                <div className="relative flex justify-center items-center">
                  <button
                    onClick={() => toggleVisibility(exp.id)}
                    className="w-12 h-12 bg-indigo-600 rounded-full border-4 border-indigo-800 flex items-center justify-center text-white focus:outline-none transform transition-transform hover:scale-110"
                  >
                    {visible === exp.id ? (
                      <AiOutlineMinus size={24} />
                    ) : (
                      <AiOutlinePlus size={24} />
                    )}
                  </button>
                  {/* Particle Effects */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Particle key={i} />
                  ))}
                </div>
              </div>

              {/* Timeline Content */}
              <div
                className={`bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg ${
                  index % 2 === 0 ? "ml-8" : "mr-8"
                } ${visible === exp.id ? "block" : "hidden"}`}
              >
                <h3 className="text-2xl font-bold text-orange-400">{exp.role}</h3>
                <p className="text-sm text-indigo-400">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
