"use client";

import React from "react";

const Hero = () => {
  return (
    <div id="hero" className="relative pt-24 pb-14 bg-gray-100 dark:bg-black text-gray-900 dark:text-white sm:pb-20 lg:pt-32 lg:pb-46">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] dark:invert bg-center [mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))] dark:[mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-cyan-600 dark:text-cyan-400 py-12">
            Hafiizh Herdian
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            Lulusan S1 Sistem Informasi Telkom University dengan fokus pada analisis data, pengembangan web, dan implementasi teknologi AI (Generative AI & Big Data).
          </p>
          <div className="flex flex-wrap items-center justify-center mt-10 gap-4">
            {/* <a
              href="#contact"
              className="px-6 py-3 text-sm font-semibold text-black transition-all bg-cyan-500 rounded-md hover:bg-cyan-400 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-white dark:focus:ring-offset-black focus:outline-none"
            >
              Hubungi Saya
            </a> */}
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-semibold transition-all border rounded-md text-cyan-600 dark:text-cyan-400 border-cyan-600 dark:border-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-white dark:focus:ring-offset-black focus:outline-none"
            >
              Lihat Proyek <span aria-hidden="true" className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-16 text-sm sm:grid-cols-2 lg:grid-cols-4 lg:max-w-5xl">
          <a 
            href="tel:+6281931339853" 
            className="flex items-center p-4 transition-all rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-900/50"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-200/60 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 group-hover:bg-cyan-200/50 dark:group-hover:bg-cyan-400/10 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-900 dark:text-white">+62 819-3133-9853</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Phone</p>
            </div>
          </a>

          <a 
            href="mailto:hafiizh.herdian@gmail.com" 
            className="flex items-center p-4 transition-all rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-900/50"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-200/60 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 group-hover:bg-cyan-200/50 dark:group-hover:bg-cyan-400/10 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-900 dark:text-white">hafiizh.herdian@gmail.com</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Email</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/hafiizh-herdian-89291b2a7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 transition-all rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-900/50"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-200/60 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 group-hover:bg-cyan-200/50 dark:group-hover:bg-cyan-400/10 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-900 dark:text-white">LinkedIn</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">hafiizh-herdian-89291b2a7</p>
            </div>
          </a>

          <a 
            href="https://github.com/Hafiizherdian" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center p-4 transition-all rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-900/50"
          >
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-200/60 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 group-hover:bg-cyan-200/50 dark:group-hover:bg-cyan-400/10 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Hafiizherdian</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
