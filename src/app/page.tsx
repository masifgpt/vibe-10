"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">

      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-xl font-bold tracking-wide">M Asif</h1>
        <div className="text-sm text-gray-400">
          Available for learning & projects
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center px-8">
        {/* Visual Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[900px] h-[900px] rounded-full border border-white/10 opacity-40" />
          <div className="absolute w-[650px] h-[650px] rounded-full border border-white/10 opacity-40" />
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10 opacity-40" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">

          {/* TEXT */}
          <div>
            <p className="text-sm text-lime-400 mb-4">
              AI • AUTOMATION • CHATBOTS
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Creative <br /> AI Thinker
            </h2>

            <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
              I’m <b>Muhammad Asif</b>, a student at <b>PAIB Bhawana</b>,
              learning how AI automation, chatbots, and intelligent
              interfaces can shape future digital products.
            </p>

            <p className="mt-4 text-gray-400 max-w-lg">
              My focus is on clean visuals, experimental UI, and
              AI-inspired web experiences.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-lime-400 text-black font-semibold rounded-full hover:opacity-90"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/5"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-[380px] h-[380px] bg-lime-400/20 rounded-full blur-[120px]" />
            <Image
              src="/pic4.jpeg"
              alt="Muhammad Asif"
              width={420}
              height={520}
              className="relative z-10 object-contain"
              priority
            />
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-32 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Selected Experiments</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            ["Modern Glow", "https://vibe-1-iota.vercel.app/"],
            ["Premium Glass", "https://vibe-2-chi.vercel.app/"],
            ["Tech Grid", "https://vibe-3-two.vercel.app/"],
            ["Future UI", "https://vibe-4-puce.vercel.app/"],
            ["Bento Style", "https://vibe-5-swart.vercel.app/"],
          ].map(([name, link]) => (
            <a
              key={name}
              href={link}
              target="_blank"
              className="group border border-white/10 rounded-2xl p-8 hover:border-lime-400 transition"
            >
              <h4 className="text-lg font-semibold group-hover:text-lime-400">
                {name}
              </h4>
              <p className="text-sm text-gray-400 mt-2">
                Experimental modern UI concept
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-lime-400 text-black px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">
            Let’s Build Something Together
          </h3>

          <p className="mb-10 max-w-xl">
            I’m open to learning opportunities, collaborations,
            and creative AI-based projects.  
            Feel free to reach out.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/923707615224"
              className="px-6 py-3 bg-black text-lime-400 rounded-full font-semibold hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href="mailto:masifgpt@gmail.com"
              className="px-6 py-3 bg-black text-lime-400 rounded-full font-semibold hover:opacity-90"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-asif-30163737a/"
              target="_blank"
              className="px-6 py-3 bg-black text-lime-400 rounded-full font-semibold hover:opacity-90"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-gray-500 text-sm py-10">
        © {new Date().getFullYear()} Muhammad Asif — Creative AI Journey
      </footer>
    </main>
  );
}
