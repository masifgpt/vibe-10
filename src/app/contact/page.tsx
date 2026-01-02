"use client";

import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-24 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6 text-lime-400 tracking-wide uppercase">
        Contact Me
      </h1>

      {/* Intro Text */}
      <p className="max-w-3xl text-center text-gray-400 mb-16 leading-relaxed text-lg">
        I’m open to learning opportunities, collaborations, and creative AI-based projects.  
        Feel free to reach out to me through any of the platforms below.  
        I look forward to connecting with you!
      </p>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full">

        {/* WhatsApp */}
        <div className="bg-lime-400 text-black rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-4">WhatsApp</h2>
          <a
            href="https://wa.me/923707615224"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline"
          >
            +92 370 7615224
          </a>
        </div>

        {/* Email */}
        <div className="bg-lime-400 text-black rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-4">Email</h2>
          <a
            href="mailto:masifgpt@gmail.com"
            className="text-lg underline"
          >
            masifgpt@gmail.com
          </a>
        </div>

        {/* Facebook */}
        <div className="bg-lime-400 text-black rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-4">Facebook</h2>
          <a
            href="https://www.facebook.com/m.asif.423683"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline"
          >
            facebook.com/m.asif.423683
          </a>
        </div>

        {/* LinkedIn */}
        <div className="bg-lime-400 text-black rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition">
          <h2 className="text-xl font-bold mb-4">LinkedIn</h2>
          <a
            href="https://www.linkedin.com/in/muhammad-asif-30163737a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg underline"
          >
            linkedin.com/in/muhammad-asif-30163737a
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <footer className="mt-20 text-center text-gray-500 text-sm font-semibold tracking-wide">
        © {new Date().getFullYear()} Muhammad Asif • PAIB Bhawana Software House
      </footer>
    </main>
  );
}
