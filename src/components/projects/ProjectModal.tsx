import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle } from 'lucide-react';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  const snippet = project.sqlSnippet ?? project.daxSnippet ?? null;
  const snippetLabel = project.daxSnippet ? 'DAX Measure' : 'SQL Query';

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 py-8 overflow-y-auto"
      style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal container */}
      <div
        className="relative w-full max-w-3xl rounded-2xl border shadow-2xl bg-white my-auto"
        style={{ borderColor: '#142B4A' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors hover:bg-[#F7F8F5] z-10"
          style={{ color: '#465466' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8 flex flex-col gap-7">

          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{ backgroundColor: 'rgba(20,125,134,0.1)', color: '#147D86' }}
              >
                {project.role}
              </span>
              <span className="text-xs" style={{ color: '#465466' }}>{project.year}</span>
            </div>
            <h2 id="modal-title" className="text-2xl font-bold mb-2" style={{ color: '#142B4A' }}>
              {project.title}
            </h2>
            <p className="text-sm italic" style={{ color: '#147D86' }}>
              {project.keyFinding}
            </p>
          </div>

          {/* Business Question callout */}
          <div
            className="rounded-xl p-4 border-l-4"
            style={{ backgroundColor: 'rgba(20,43,74,0.05)', borderLeftColor: '#142B4A' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#142B4A' }}>
              Business Question
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#465466' }}>
              {project.businessQuestion}
            </p>
          </div>

          {/* Summary / description */}
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: '#142B4A' }}>
              Summary
            </h3>
            <div className="flex flex-col gap-2">
              {project.description.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed" style={{ color: '#465466' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: '#142B4A' }}>
              Key Findings
            </h3>
            <ul className="flex flex-col gap-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: '#147D86' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed" style={{ color: '#465466' }}>
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics grid */}
          {project.metrics.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#142B4A' }}>
                Key Metrics
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl border text-center"
                    style={{ backgroundColor: '#F7F8F5', borderColor: '#E4E9EC' }}
                  >
                    <div className="text-base font-bold" style={{ color: '#142B4A' }}>{m.value}</div>
                    <div className="text-[11px] mt-0.5 leading-tight" style={{ color: '#465466' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SQL / DAX snippet */}
          {snippet && (
            <div>
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#142B4A' }}>
                {snippetLabel}
              </h3>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: '#1e293b' }}>
                <div
                  className="px-4 py-2 flex items-center justify-between"
                  style={{ backgroundColor: '#1e293b' }}
                >
                  <span className="text-[11px] font-mono" style={{ color: '#94a3b8' }}>
                    {snippetLabel.toUpperCase()} · READ-ONLY
                  </span>
                  <div className="flex gap-1.5" aria-hidden="true">
                    {['#ef4444','#f59e0b','#22c55e'].map((c) => (
                      <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                    ))}
                  </div>
                </div>
                <pre
                  className="p-4 text-xs leading-relaxed overflow-x-auto font-mono"
                  style={{ backgroundColor: '#0f172a', color: '#7dd3fc' }}
                >
                  <code>{snippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Stack */}
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ color: '#142B4A' }}>
              Tools &amp; Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-sm border font-medium"
                  style={{ backgroundColor: '#E4E9EC', color: '#465466', borderColor: '#d4d9de' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Business impact */}
          <div
            className="rounded-xl p-4 border-l-4"
            style={{ backgroundColor: 'rgba(20,125,134,0.06)', borderLeftColor: '#147D86' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#147D86' }}>
              Business Impact
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#465466' }}>
              {project.businessImpact}
            </p>
          </div>

          {/* Links */}
          <div
            className="flex flex-wrap items-center gap-3 pt-2 border-t"
            style={{ borderColor: '#E4E9EC' }}
          >
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-colors hover:bg-[#F7F8F5]"
                style={{ borderColor: '#E4E9EC', color: '#465466' }}
              >
                <Github size={15} aria-hidden="true" />
                GitHub
              </a>
            )}
            {project.links.drive && (
              <a
                href={project.links.drive}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-colors hover:bg-[#F7F8F5]"
                style={{ borderColor: '#E4E9EC', color: '#465466' }}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Project Files
              </a>
            )}
            {project.links.kaggle && (
              <a
                href={project.links.kaggle}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-colors hover:bg-[#F7F8F5]"
                style={{ borderColor: '#E4E9EC', color: '#465466' }}
              >
                <ExternalLink size={15} aria-hidden="true" />
                Kaggle Dataset
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
