import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaProjectDiagram, FaBriefcase, FaTools, FaEnvelope } from "react-icons/fa";
import About from "../about/About";
import Projects from "../project/Projects";
import Experience from "../experience/Experience";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";

const menuItems = [
  { id: "about", label: "About me", icon: <FaUserAlt />, content: <About /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram />, content: <Projects /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase />, content: <Experience /> },
  { id: "skills", label: "Skills", icon: <FaTools />, content: <Skills /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope />, content: <Contact /> },
];

export default function PortfolioHome() {
  const [activeItem, setActiveItem] = useState(menuItems[0]);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black">
      {/* Sidebar with Half-Circle on larger screens, menu items on top for mobile */}
      <div className="relative w-full md:w-1/4 h-full md:relative md:h-full">
        {/* For mobile, the menu is placed at the top */}
        <div className="md:hidden flex justify-center items-center space-x-6 p-4 bg-gradient-to-r from-purple-500 to-indigo-500">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex flex-col items-center justify-center w-16 h-16 ${
                activeItem && activeItem.id === item.id ? "bg-indigo-600" : "bg-purple-500"
              } text-white rounded-full shadow-md cursor-pointer`}
              onClick={() => setActiveItem(item)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <span className="text-2xl">{item.icon}</span>
              {hoveredItem === item.id && (
                <motion.div
                  className="absolute bottom-20 bg-black text-white text-sm py-1 px-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {item.label}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Sidebar with Half-Circle on larger screens */}
        <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-r-full shadow-xl">
          <div className="relative flex items-center justify-center h-full">
            {menuItems.map((item, index) => {
              const angle = (180 / (menuItems.length - 1)) * index - 90;
              const radians = (angle * Math.PI) / 180;
              const x = Math.cos(radians) * 120;
              const y = Math.sin(radians) * 120;

              const isActive = activeItem && activeItem.id === item.id;

              return (
                <motion.div
                  key={item.id}
                  className={`absolute flex flex-col items-center justify-center w-16 h-16 ${
                    isActive ? "bg-indigo-600" : "bg-purple-500"
                  } text-white rounded-full shadow-md cursor-pointer`}
                  style={{
                    transform: isActive ? `translate(0px, 0px)` : `translate(${x}px, ${y}px)`,
                    zIndex: isActive ? 10 : 1,
                  }}
                  onClick={() => setActiveItem(isActive ? null : item)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {hoveredItem === item.id && (
                    <motion.div
                      className="absolute bottom-20 bg-black text-white text-sm py-1 px-3 rounded-lg shadow-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {item.label}
                    </motion.div>
                  )}
                  <span className="text-2xl">{item.icon}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {activeItem && (
          <motion.div
            className="text-center p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <p className="mt-2 text-gray-600">{activeItem.content}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
