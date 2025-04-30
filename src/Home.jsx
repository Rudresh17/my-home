import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Rudresh</h1>
        <p className="text-xl text-gray-600">Full Stack Engineer</p>
      </section>

      {/* About Section */}
      <section className="py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a passionate developer who loves building full-stack web applications.
          I enjoy working with modern JavaScript frameworks and cloud infrastructure to deliver scalable solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map((project) => (
            <div key={project} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-medium mb-2">Project Title {project}</h3>
              <p className="text-gray-600 text-sm">
                Description of project {project}. A brief summary of what technologies were used and its purpose.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded" />
          <textarea placeholder="Your Message" className="p-3 border rounded" rows={4}></textarea>
          <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
