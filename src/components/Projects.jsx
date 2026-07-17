import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI Legal Assistant",
      description:
        "Developed an AI-powered legal assistant that answers legal queries, explains legal concepts, summarizes legal documents, and generates legal documents using Mistral 7B, Retrieval-Augmented Generation (RAG), ChromaDB, and the Hugging Face Inference API.",

      tech: [
        "Python",
        "React",
        "Mistral 7B",
        "RAG",
        "ChromaDB",
        "Hugging Face API",
      ],

      features: [
        "AI Legal Q&A",
        "Document Summarization",
        "Legal Document Generation",
        "Context-Aware Responses",
      ],

      github: "https://github.com/harini1244/AI_Legal_Assistant",
      demo: "#",
    },

    {
      title: "Stock Market Prediction",

      description:
        "Built an LSTM-based stock market prediction system that analyzes the previous 30 days of historical stock data from Yahoo Finance to forecast future price trends and support investment analysis.",

      tech: [
        "Python",
        "TensorFlow",
        "LSTM",
        "Pandas",
        "NumPy",
        "Yahoo Finance",
      ],

      features: [
        "Trend Prediction",
        "Historical Analysis",
        "Data Visualization",
        "Investment Insights",
      ],

      github: "#",
      demo: "#",
    },

    {
      title: "Next AI Project",

      description:
        "Currently working on a new AI-powered application. Stay tuned for exciting updates.",

      tech: [
        "Artificial Intelligence",
        "Python",
        "React",
      ],

      features: [
        "Coming Soon",
      ],

      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-[#0B1120]"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Some of the projects I've built while exploring Artificial Intelligence,
            Machine Learning and Full Stack Development.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-8 flex flex-col hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                {project.description}
              </p>

              <div className="mb-6">

                <h4 className="font-semibold mb-3 text-cyan-400">
                  Technologies
                </h4>

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              <div className="mb-8">

                <h4 className="font-semibold mb-3 text-cyan-400">
                  Features
                </h4>

                <ul className="space-y-2 text-gray-300">

                  {project.features.map((feature) => (

                    <li key={feature}>
                      • {feature}
                    </li>

                  ))}

                </ul>

              </div>

              <div className="mt-auto flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;