import React from 'react';
import { ArrowDown, FileText, MapPin, Briefcase } from 'lucide-react';
import headshotUrl from '../../assets/headshot.jpg';

interface HeroSectionProps {
  onViewProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewProjects }) => {
  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center"
      style={{ backgroundColor: '#F7F8F5' }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#142B4A 1px, transparent 1px), linear-gradient(90deg, #142B4A 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Text */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#22c55e' }}
                aria-hidden="true"
              />
              <span
                className="text-xs font-medium px-3 py-1 rounded-full border"
                style={{
                  color: '#147D86',
                  borderColor: '#147D86',
                  backgroundColor: 'rgba(20,125,134,0.07)',
                }}
              >
                Open to opportunities
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight"
              style={{ color: '#142B4A' }}
            >
              Turning Data into Insights for Better Business Decisions.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#465466' }}>
              I'm a Computer Science graduate with over three years of experience across data
              analysis, administrative operations, project coordination, and digital initiatives.
              I use analysis and visualisation tools to uncover insights, communicate findings,
              and support better business decisions.
            </p>

            {/* Location */}
            <div className="flex items-center gap-1.5" style={{ color: '#465466' }}>
              <MapPin size={15} style={{ color: '#147D86' }} aria-hidden="true" />
              <span className="text-sm">
                Based in Nigeria&nbsp;·&nbsp;Open to remote and hybrid opportunities
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onViewProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: '#147D86', color: '#fff' }}
              >
                <Briefcase size={15} aria-hidden="true" />
                View My Projects
              </button>

              <a
                href="/Timothy_John_Chikereze_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border-2 transition-all hover:bg-[#142B4A] hover:text-white"
                style={{ borderColor: '#142B4A', color: '#142B4A' }}
              >
                <FileText size={15} aria-hidden="true" />
                View CV
              </a>

              <button
                onClick={scrollToContact}
                className="px-5 py-3 text-sm font-medium transition-colors hover:underline"
                style={{ color: '#147D86' }}
              >
                Contact Me <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Right — Headshot */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Teal decorative ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #147D86 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Navy border circle */}
              <div
                className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-4 overflow-hidden shadow-xl"
                style={{ borderColor: '#142B4A' }}
              >
                <img
                  src={headshotUrl}
                  alt="Timothy Chikereze John — Data Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-[11px] font-mono" style={{ color: '#465466' }}>
            scroll
          </span>
          <ArrowDown size={14} style={{ color: '#465466' }} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
