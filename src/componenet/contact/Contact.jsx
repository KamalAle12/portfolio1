import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative min-h-screen text-white py-16 px-8">
      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.h1
          className="text-4xl font-extrabold mb-6 text-orange-500 font-mono"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mb-8 text-lg text-orange-300 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Have a question or want to work together? Send me a message, and I’ll
          get back to you as soon as possible.
        </motion.p>

        {/* Form */}
        <motion.div
          className=" bg-opacity-90 rounded-lg shadow-lg p-4 sm:p-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-base font-medium mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 rounded-md text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-base font-medium mb-1"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label
                className="block text-base font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full p-3 rounded-md text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full p-3 rounded-md bg-indigo-500 text-white text-base font-semibold hover:bg-indigo-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
