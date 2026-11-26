import React, { useEffect, useState } from 'react';
import { Github, Star, GitFork, ExternalLink, Clock } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
}

const GITHUB_USERNAME = 'Chikerezejt';

// Repos already featured as full case studies — exclude from the auto-list
const FEATURED_REPO_NAMES = new Set([
  'Airbnb-Data-Analysis',
]);

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  SQL: '#e38c00',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'Jupyter Notebook': '#DA5B0B',
  R: '#198CE7',
  Excel: '#217346',
  HTML: '#e34c26',
  CSS: '#563d7c',
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return 'today';
  if (days === 1) return '1 day ago';
  if (days < 30) return `${days} days ago`;
  const months = Math.floor(days / 30);
  if (months === 1) return '1 month ago';
  if (months < 12) return `${months} months ago`;
  return `${Math.floor(months / 12)}y ago`;
}

export const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20&type=public`,
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`);
        return res.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        const filtered = data.filter(
          (r) => !r.fork && !FEATURED_REPO_NAMES.has(r.name) && r.name !== GITHUB_USERNAME
        );
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError('Could not load repositories from GitHub.');
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-10 gap-3" style={{ color: '#465466' }}>
        <div
          className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
          style={{ borderColor: '#147D86', borderTopColor: 'transparent' }}
        />
        <span className="text-sm font-mono">Fetching repositories…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-sm" style={{ color: '#465466' }}>{error}</div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-8 text-sm" style={{ color: '#465466' }}>
        No additional public repositories found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {repos.map((repo) => {
        const langColor = repo.language ? (LANGUAGE_COLORS[repo.language] ?? '#8b92a5') : '#8b92a5';
        return (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col gap-3 p-4 rounded-2xl bg-white border transition-all duration-200 hover:shadow-md"
            style={{ borderColor: '#E4E9EC' }}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <Github size={15} style={{ color: '#465466' }} className="shrink-0" aria-hidden="true" />
                <span
                  className="text-sm font-semibold truncate transition-colors group-hover:text-[#147D86]"
                  style={{ color: '#142B4A' }}
                >
                  {repo.name.replace(/-/g, ' ')}
                </span>
              </div>
              <ExternalLink
                size={13}
                className="shrink-0 mt-0.5 transition-colors group-hover:text-[#147D86]"
                style={{ color: '#E4E9EC' }}
                aria-hidden="true"
              />
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed line-clamp-2 flex-1" style={{ color: '#465466' }}>
              {repo.description || 'No description provided.'}
            </p>

            {/* Topics */}
            {repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {repo.topics.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded-full text-[10px] font-mono border"
                    style={{
                      backgroundColor: 'rgba(20,125,134,0.08)',
                      color: '#147D86',
                      borderColor: 'rgba(20,125,134,0.2)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Footer meta */}
            <div
              className="flex items-center gap-4 text-[11px] mt-auto pt-2 border-t"
              style={{ borderColor: '#F7F8F5', color: '#465466' }}
            >
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: langColor }}
                    aria-hidden="true"
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1">
                  <Star size={11} aria-hidden="true" />
                  {repo.stargazers_count}
                </span>
              )}
              {repo.forks_count > 0 && (
                <span className="flex items-center gap-1">
                  <GitFork size={11} aria-hidden="true" />
                  {repo.forks_count}
                </span>
              )}
              <span className="flex items-center gap-1 ml-auto">
                <Clock size={11} aria-hidden="true" />
                {timeAgo(repo.updated_at)}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
};
