import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import { ProjectCard } from '../projects/ProjectCard';
import { GitHubRepos } from '../projects/GitHubRepos';

type FilterTab = 'all' | 'bi' | 'sql' | 'financial' | 'quality';

const TABS: { key: FilterTab; label: string }[] = [
  { key: 'all',       label: 'All'          },
  { key: 'bi',        label: 'Power BI'     },
  { key: 'sql',       label: 'SQL'          },
  { key: 'financial', label: 'Financial'    },
  { key: 'quality',   label: 'Data Quality' },
];

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filtered = (
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab)
  ).sort((a, b) => {
    // featured first
    if (a.featured === b.featured) return 0;
    return a.featured ? -1 : 1;
  });

  return (
    <section id="projects" className="py-20" style={{ backgroundColor: '#F7F8F5' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#142B4A' }}>
            Selected Projects
          </h2>
          <p className="text-base" style={{ color: '#465466' }}>
            Real analytical work — from data cleaning to business insight.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={
                  isActive
                    ? { backgroundColor: '#142B4A', color: '#F7F8F5' }
                    : { backgroundColor: '#E4E9EC', color: '#465466' }
                }
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* GitHub live repos */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1" style={{ color: '#142B4A' }}>
              More on GitHub
            </h3>
            <p className="text-sm" style={{ color: '#465466' }}>
              Additional public repositories — updated automatically from GitHub.
            </p>
          </div>
          <GitHubRepos />
        </div>
      </div>
    </section>
  );
};
