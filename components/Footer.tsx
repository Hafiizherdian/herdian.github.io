'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/Hafiizherdian',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/hafiizh-herdian-89291b2a7',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      href: 'https://twitter.com/hafiizhherdian',
      ariaLabel: 'Follow me on Twitter'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      href: 'mailto:hafiizh.herdian@gmail.com',
      ariaLabel: 'Send me an email'
    }
  ];

  const footerLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Pendidikan', href: '#education' },
    { name: 'Kemampuan', href: '#skills' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-black py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-cyan-600 dark:text-cyan-400">
                Hafiizh Herdian
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Seorang pengembang perangkat lunak yang bersemangat dalam menciptakan solusi digital yang inovatif dan bermanfaat.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-gray-700 transition-colors duration-300 text-gray-700 dark:text-gray-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Navigasi</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">H.H</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-cyan-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+6281931339853" className="hover:text-cyan-600 transition-colors duration-300">
                  +62 819-3133-9853
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-cyan-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hafiizh.herdian@gmail.com" className="hover:text-cyan-600 transition-colors duration-300">
                  hafiizh.herdian@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-cyan-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jember, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p> {currentYear} Hafiizh Herdian</p>
          <p className="mt-2">Dibuat dengan :)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;