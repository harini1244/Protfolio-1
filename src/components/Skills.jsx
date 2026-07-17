import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning" },
        { name: "Large Language Models" },
        { name: "RAG" },
        { name: "Prompt Engineering" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A collection of technologies and tools that I use to build
            responsive web applications and AI-powered solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3"
                  >
                    {skill.icon && (
                      <span className="text-2xl text-cyan-400">
                        {skill.icon}
                      </span>
                    )}

                    <span className="text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;