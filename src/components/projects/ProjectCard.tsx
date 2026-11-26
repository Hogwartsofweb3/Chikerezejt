import React from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '../../types';

const CATEGORY_STYLES: Record<Project['category'], { bg: string; text: string; label: string }> = {
  bi:        { bg: 'rgba(20,43,74,0.1)',   text: '#142B4A', label: 'Power BI'      },
  sql:       { bg: 'rgba(20,125,134,0.1)', text: '#147D86', label: 'SQL'           },
  financial: { bg: 'rgba(214,168,75,0.12)',text: '#a07a2a', label: 'Financial'     },
  quality:   { bg: 'rgba(70,84,102,0.1)',  text: '#465466', label: 'Data Quality'  },
};

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const catStyle = CATEGORY_STYLES[project.category];

  return (
    <article
      className="flex flex-col bg-white rounded-2xl border transition-all duration-200 hover:shadow-lg group cursor-pointer"
      style={{ borderColor: '#E4E9EC' }}
      onClick={() => onSelect(project)}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect(project)}
      role="button"
      aria-label={`View case study: ${project.title}`}
    >
      {/* Card body */}
      <div className="flex flex-col gap-4 p-6 flex-1">

        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <span
            className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wide"
            style={{ backgroundColor: catStyle.bg, color: catStyle.text }}
          >
            {catStyle.label}
          </span>
          <span className="text-xs" style={{ color: '#465466' }}>{project.year}</span>
        </div>

        {/* Title */}
        <h3
          className="font-semibold text-base leading-snug group-hover:text-[#147D86] transition-colors"
          style={{ color: '#142B4A' }}
        >
          {project.title}
        </h3>

        {/* Key Finding */}
        <p
          className="text-sm italic leading-relaxed"
          style={{ color: '#147D86' }}
        >
          {project.keyFinding}
        </p>

        {/* Tagline */}
        <p className="text-sm leading-relaxed" style={{ color: '#465466' }}>
          {project.tagline}
        </p>

        {/* Metrics grid */}
        {project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-auto">
            {project.metrics.slice(0, 4).map((m) => (
              <div
                key={m.label}
                className="rounded-xl p-3 border"
                style={{ backgroundColor: '#F7F8F5', borderColor: '#E4E9EC' }}
              >
                <div className="text-[11px] font-medium mb-0.5" style={{ color: '#465466' }}>
                  {m.label}
                </div>
                <div className="text-sm font-bold" style={{ color: '#142B4A' }}>
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium border"
              style={{ backgroundColor: '#E4E9EC', color: '#465466', borderColor: '#d4d9de' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Card footer */}
      <div
        className="flex items-center justify-between gap-3 px-6 py-4 border-t"
        style={{ borderColor: '#E4E9EC' }}
      >
        {/* Links */}
        <div className="flex items-center gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="GitHub repository"
              className="p-1.5 rounded-lg transition-colors hover:bg-[#F7F8F5]"
              style={{ color: '#465466' }}
            >
              <Github size={16} aria-hidden="true" />
            </a>
          )}
          {(project.links.drive || project.links.kaggle) && (
            <a
              href={project.links.drive ?? project.links.kaggle}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label="View project files"
              className="p-1.5 rounded-lg transition-colors hover:bg-[#F7F8F5]"
              style={{ color: '#465466' }}
            >
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          )}
        </div>

        <button
          onClick={(e) => { e.stopPropagation(); onSelect(project); }}
          className="flex items-center gap-1 text-sm font-medium transition-colors hover:gap-2"
          style={{ color: '#147D86' }}
        >
          View Case Study
          <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};
