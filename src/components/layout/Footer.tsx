import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer style={{ backgroundColor: '#142B4A', color: '#F7F8F5' }} className="py-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-semibold text-sm">Timothy Chikereze John</div>
          <div style={{ color: 'rgba(247,248,245,0.6)' }} className="text-xs mt-0.5">
            Data Analyst · Business Analyst · Owerri, Nigeria
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: 'https://www.linkedin.com/in/chikerezejt', icon: Linkedin, label: 'LinkedIn profile' },
            { href: 'https://github.com/Chikerezejt', icon: Github, label: 'GitHub profile' },
            { href: 'https://x.com/chikerezejt', icon: Twitter, label: 'X profile' },
            { href: 'mailto:chikerezejt@gmail.com', icon: Mail, label: 'Send email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{ color: 'rgba(247,248,245,0.7)' }}
              className="p-2 rounded-lg transition-colors hover:text-[#F7F8F5] hover:bg-white/10"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div
        style={{ borderColor: 'rgba(247,248,245,0.15)', color: 'rgba(247,248,245,0.5)' }}
        className="mt-6 pt-6 border-t text-xs text-center"
      >
        © {new Date().getFullYear()} Timothy Chikereze John. All rights reserved.
      </div>
    </div>
  </footer>
);
