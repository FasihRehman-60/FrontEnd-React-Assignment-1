import React from "react";
import { Github, Linkedin} from "lucide-react";
import profilePic from "../assets/fasih.jpg";

function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-gray-800 space-y-24">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img src={profilePic}  alt="Fasih Ur Rehman" className="w-56 h-56 rounded-2xl object-cover shadow-lg border-4 border-amber-400 hover:scale-105 transition-transform duration-300"/>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            Fasih Ur Rehman
          </h1>
          <h2 className="text-xl text-amber-500 font-semibold mb-4">
            Frontend Developer & WordPress Developer
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Hi! I’m a passionate web developer focused on creating elegant and
            user-friendly digital experiences. I work with modern web
            technologies like{" "}
            <span className="font-semibold text-gray-800">
              C++, JavaScript, React, HTML, CSS, and Tailwind CSS
            </span>
            , blending creativity with clean code.
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="https://github.com/Fasih60" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition" >
              <Github className="w-5 h-5 text-gray-700" />
            </a>

            <a  href="https://www.linkedin.com/in/fasih-rehman60/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tech Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["C++", "JavaScript", "React", "HTML", "CSS", "Tailwind CSS"].map(
            (skill, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-amber-100 text-amber-700 font-medium rounded-full shadow-sm hover:bg-amber-200 transition"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Lumiere Resturant Website",
              desc: "A modern, responsive website for a restaurant using React and Tailwind CSS.",
              link: "https://lumiereresturant-sample.netlify.app/",
            },
            {
              title: "Robo Sports Theme",
              desc: "A sleek, futuristic theme for a sports website built with React and Tailwind CSS.",
              link: "https://robosports-theme-3.netlify.app/",
            },
            {
              title: "Ecostruct Company Website",
              desc: "A clean, eco-friendly website for a construction company using React and Tailwind CSS.",
              link: "https://ecostruct-sample.netlify.app/",
            },
          ].map((project, index) => (
            <div  key={index} className="p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition"  >
             
              <h3 className="text-xl font-semibold text-amber-500 mb-2"> {project.title}  </h3>
                
              <p className="text-gray-600 mb-4">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 font-medium hover:underline" >  View Project →   </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Have a project or want to collaborate? Let’s connect!
        </p>
        <div className="space-x-4">
          <a href="mailto:mirza.fasih99@example.com"  className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-400 transition" > Email Me </a>
          <a  href="https://wa.me/923066899891" target="_blank" rel="noopener noreferrer"  className="px-6 py-2 border border-amber-500 text-amber-500 rounded-md hover:bg-amber-50 transition">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
