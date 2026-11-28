import React from 'react';
import { FileText, CheckCircle } from 'lucide-react';
import headshotUrl from '../../assets/headshot.jpg';

const STATS = [
  { label: 'Records Analysed', value: '11,991' },
  { label: 'Revenue Verified', value: '₦42.01M' },
  { label: 'Votes Verified & Computed', value: '50,000+' },
  { label: 'Years Operations & Analytics', value: '3+' },
];

const CERTIFICATIONS = [
  'Google / Coursera — Data Analytics Professional Certificate',
  'TSAcademy — Data Analytics Programme',
  'ALX Africa — Virtual Assistance Programme',
  'McKinsey Academy — Leadership Development',
];

export const AboutSection: React.FC = () => (
  <section id="about" className="py-20" style={{ backgroundColor: '#F7F8F5' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#142B4A' }}>
          About Timothy Chikereze John
        </h2>
        <p className="text-base" style={{ color: '#465466' }}>
          Computer Science graduate. Data analyst. Operational problem-solver.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-start">

        {/* Left — Headshot */}
        <div className="flex flex-col items-center gap-6">
          <div
            className="w-48 h-48 rounded-full border-4 overflow-hidden shadow-lg flex-shrink-0"
            style={{ borderColor: '#142B4A' }}
          >
            <img
              src={headshotUrl}
              alt="Timothy Chikereze John"
              className="w-full h-full object-cover"
            />
          </div>

          <a
            href="/Timothy_John_Chikereze_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: '#142B4A', color: '#F7F8F5' }}
          >
            <FileText size={14} aria-hidden="true" />
            View Full CV
          </a>
        </div>

        {/* Right — Content */}
        <div className="flex flex-col gap-8">

          {/* Intro */}
          <p className="text-base leading-relaxed" style={{ color: '#465466' }}>
            I graduated with a B.Tech in Computer Science from the Federal University of
            Technology, Owerri (FUTO) in 2021. Over the past three years, I have worked across
            data analysis, administrative operations, project coordination, and digital
            initiatives — building practical experience that spans both technical and
            organisational domains.
          </p>

          {/* Experience */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ color: '#142B4A' }}>
              Experience
            </h3>
            <div className="flex flex-col gap-4">
              {[
                {
                  org: 'TechBridge Data Analytics Fellowship',
                  role: 'Data Analytics Intern',
                  duration: '1 month · 2026',
                  detail:
                    'Completed structured capstone projects in SQL, Power BI, and Excel. Analysed 11,991 employee records and audited ₦42.01M in retail transactions.',
                },
                {
                  org: 'Yiaga Africa — ERAD Programme',
                  role: 'Data Processing Officer',
                  duration: 'Electoral cycle · Nigeria',
                  detail:
                    'Verified and computed over 50,000 votes through data entry and validation for the Election Result Analysis Dashboard (ERAD).',
                },
                {
                  org: 'NECA & NNPC',
                  role: 'Administrative & Operations Support',
                  duration: 'Various roles · Nigeria',
                  detail:
                    'Provided administrative and project coordination support across corporate and government-linked environments, building communication and documentation skills.',
                },
              ].map((exp) => (
                <div
                  key={exp.org}
                  className="p-4 rounded-xl border bg-white"
                  style={{ borderColor: '#E4E9EC' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <span className="font-semibold text-sm" style={{ color: '#142B4A' }}>
                      {exp.org}
                    </span>
                    <span className="text-xs" style={{ color: '#465466' }}>
                      {exp.duration}
                    </span>
                  </div>
                  <div className="text-xs font-medium mb-2" style={{ color: '#147D86' }}>
                    {exp.role}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#465466' }}>
                    {exp.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-base font-semibold mb-3" style={{ color: '#142B4A' }}>
              Education
            </h3>
            <div
              className="p-4 rounded-xl border bg-white"
              style={{ borderColor: '#E4E9EC' }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <span className="font-semibold text-sm" style={{ color: '#142B4A' }}>
                  Federal University of Technology, Owerri (FUTO)
                </span>
                <span className="text-xs" style={{ color: '#465466' }}>
                  2016 – 2021
                </span>
              </div>
              <div className="text-xs font-medium mb-2" style={{ color: '#147D86' }}>
                B.Tech Computer Science
              </div>
              <p className="text-xs" style={{ color: '#465466' }}>
                Relevant coursework: Databases, Systems Analysis, Statistics, Information Systems
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-base font-semibold mb-3" style={{ color: '#142B4A' }}>
              Certifications
            </h3>
            <ul className="flex flex-col gap-2">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-start gap-2">
                  <CheckCircle
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: '#147D86' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: '#465466' }}>
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats chips */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center p-3 rounded-xl border bg-white"
                style={{ borderColor: '#E4E9EC' }}
              >
                <span className="text-xl font-bold" style={{ color: '#142B4A' }}>
                  {s.value}
                </span>
                <span className="text-[11px] mt-1 leading-tight" style={{ color: '#465466' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
