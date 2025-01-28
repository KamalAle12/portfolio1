import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-4">
      {/* Profile Image */}
      <motion.img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw8fVeLxdKHG5Jkm3kceXxvIKRSuW2bc8pxg&s" // Replace with your profile photo URL
        alt="Profile"
        className="w-50 h-50 object-cover rounded-full mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* About Content */}
      <motion.div
        className="text-center max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-[40px] font-bold text-orange-500 font-mono">Hello! </span> I'm a passionate software developer with a love for crafting modern web
          applications and delivering exceptional digital experiences. My goal is to create
          intuitive and visually stunning interfaces that leave a lasting impression.
        </p>
        <p className="text-lg leading-relaxed">
          I specialize in full-stack development with expertise in technologies like React, Node.js,
          and Python. Beyond coding, I enjoy exploring new tools, solving complex problems, and
          collaborating with amazing people. Let's build something extraordinary together!
        </p>
      </motion.div>
    </section>
  );
}
