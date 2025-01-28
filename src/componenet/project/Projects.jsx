import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully-featured e-commerce website with cart and payment integrations.",
      image: "https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg", // Replace with your project image
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio to showcase personal and professional projects.",
      image: "https://market-resized.envatousercontent.com/previews/files/470944296/Preview/01_Preview.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=c6691a11576a9307a60ebe93becdaa29ded0340893f67b0ea4e1ca3607d5ac16", // Replace with your project image
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks and projects efficiently.",
      image: "https://img.freepik.com/premium-vector/eps-task-management-dashboard-website-templtae-full-editable-vector-dark-mode_908119-31.jpg", // Replace with your project image
    },
    {
      id: 4,
      title: "Weather App",
      description: "A dynamic weather app showing real-time data and forecasts.",
      image: "https://redliodesigns.com/_next/image?url=https%3A%2F%2Ffiles.redliodesigns.com%2Ffiles%2FInspirations%2Fweather-forecast-dashboard.png&w=3840&q=75", // Replace with your project image
    },
    {
      id: 5,
      title: "Augmented Web",
      description: "Showcasing how the real world can be interact with virtual world",
      image: "https://market-resized.envatousercontent.com/previews/files/394806182/cover.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=b92d2e66c3db3b93a852edbdbc189cdf4212e5a2ba167ef3d3f06ab659aad8e3",
    },
    {
      id: 6,
      title: "Artificial Intelligent",
      description: "Building AI to enhanced the world.",
      image: "https://www.figma.com/community/resource/9badc4b8-08ed-485e-91a1-bad6c793c3dd/thumbnail",
    },
  ];

  return (
    <section className="min-h-screen text-orange-500 font-mono font-bold flex flex-col items-center justify-center px-4 py-10">
      {/* Section Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      {/* Projects Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
