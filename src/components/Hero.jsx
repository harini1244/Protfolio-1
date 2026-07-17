import profile from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-[#0B1120] to-[#111827] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <p className="text-cyan-400 text-lg font-medium tracking-wide">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-6xl md:text-7xl font-black leading-tight">
            Harini
            <br />
            <span className="text-cyan-400">Nelakurti</span>
          </h1>

          <h2 className="text-3xl mt-8 font-semibold h-12">
            <Typewriter
              words={[
                "AI & Machine Learning Enthusiast",
                "Python Developer",
                "React Developer",
                "LLM Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-9 max-w-xl">
            Building AI-powered applications using
            <span className="text-cyan-400 font-medium"> Python</span>,
            <span className="text-cyan-400 font-medium"> React</span> and
            <span className="text-cyan-400 font-medium">
              {" "}Large Language Models
            </span>.
            Passionate about solving real-world problems through Artificial
            Intelligence and continuously learning emerging technologies.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Python",
              "React",
              "AI",
              "LLMs",
              "RAG",
              "ChromaDB",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 transition px-7 py-4 rounded-xl font-semibold"
            >
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition px-7 py-4 rounded-xl font-semibold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[90px] opacity-30"></div>

            <img
              src={profile}
              alt="Harini Nelakurti"
              className="relative w-[380px] h-[380px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.4)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;