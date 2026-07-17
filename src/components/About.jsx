function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-[#0F172A] py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-16">

          <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Passionate About Building Intelligent Solutions
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <p className="text-gray-300 text-lg leading-9">

              I'm <span className="text-cyan-400 font-semibold">
              Harini Nelakurti</span>, an aspiring AI & Machine Learning
              enthusiast passionate about developing intelligent applications
              using Artificial Intelligence, Python, React, and Large Language
              Models.

            </p>

            <p className="text-gray-400 mt-8 leading-9 text-lg">

              My journey into AI started with curiosity and quickly became
              a passion. I enjoy solving real-world problems through
              innovative technology while continuously learning modern
              AI frameworks and software development practices.

            </p>

            <p className="text-gray-400 mt-8 leading-9 text-lg">

              My goal is to contribute to impactful AI products while growing
              into a skilled AI Engineer capable of building scalable,
              user-focused intelligent applications.

            </p>

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-7">

              <h3 className="text-xl font-semibold mb-4">
                🎓 Education
              </h3>

              <p className="text-gray-300">
                B.Tech – Computer Science Engineering
              </p>

              <p className="text-gray-400 mt-2">
                MKR Institute of Technology
              </p>

              <p className="text-gray-500 mt-1">
                Hyderabad
              </p>

            </div>

            <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-7">

              <h3 className="text-xl font-semibold mb-4">
                🎯 Career Goal
              </h3>

              <p className="text-gray-300 leading-8">

                To build AI-powered products that solve meaningful
                real-world problems while continuously exploring
                Generative AI, Machine Learning and Large Language Models.

              </p>

            </div>

            <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-7">

              <h3 className="text-xl font-semibold mb-4">
                ❤️ Interests
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "Artificial Intelligence",
                  "Large Language Models",
                  "Machine Learning",
                  "Python",
                  "React",
                  "Prompt Engineering",
                ].map((item) => (

                  <span
                    key={item}
                    className="bg-cyan-500/10 border border-cyan-500/20 px-3 py-2 rounded-full text-cyan-300 text-sm"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;