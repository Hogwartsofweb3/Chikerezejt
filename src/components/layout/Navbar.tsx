import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Data Lab', href: '#lab' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      style={{ borderBottomColor: scrolled ? '#E4E9EC' : 'transparent' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
            aria-label="Scroll to top"
          >
            <div
              style={{ backgroundColor: '#142B4A', color: '#F7F8F5' }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-mono"
            >
              TCJ
            </div>
            <span style={{ color: '#142B4A' }} className="font-semibold text-sm hidden sm:block">
              Timothy Chikereze John
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{ color: '#465466' }}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[#F7F8F5] hover:text-[#142B4A]"
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Timothy_John_Chikereze_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#142B4A', color: '#F7F8F5' }}
              className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-[#1e3f6b]"
            >
              <FileText size={14} aria-hidden="true" />
              <span>CV</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: '#142B4A' }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{ backgroundColor: '#ffffff', borderColor: '#E4E9EC' }}
        >
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-[#F7F8F5]"
                style={{ color: '#465466' }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="/Timothy_John_Chikereze_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold mt-2"
              style={{ backgroundColor: '#142B4A', color: '#F7F8F5' }}
            >
              <FileText size={14} aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
