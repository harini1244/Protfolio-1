import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111827]">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[4px] text-cyan-400 font-semibold">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Let's Connect
        </h2>

        <p className="text-gray-400 mt-6 text-lg leading-8">
          I'm always open to discussing AI, Machine Learning, internships,
          entry-level opportunities, or collaborating on exciting projects.
        </p>

        <div className="mt-12 space-y-6">

          <a
            href="mailto:harini3612@gmail.com"
            className="flex items-center justify-center gap-3 bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 transition"
          >
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <span className="text-gray-300 text-lg">
              harini3612@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/harini1244"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 transition"
          >
            <FaGithub className="text-cyan-400 text-2xl" />
            <span className="text-gray-300 text-lg">
              github.com/harini1244
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/harini-nelakurti-215b3b383"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 hover:border-cyan-400 transition"
          >
            <FaLinkedin className="text-cyan-400 text-2xl" />
            <span className="text-gray-300 text-lg">
              LinkedIn Profile
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;