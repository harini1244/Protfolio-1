import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B1120] border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>
          <h3 className="text-xl font-bold text-cyan-400">
            Harini Nelakurti
          </h3>

          <p className="text-gray-400 mt-2">
            AI & Machine Learning Enthusiast
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/harini1244"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harini-nelakurti-215b3b383"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-8 text-sm">
        © 2026 Harini Nelakurti. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;