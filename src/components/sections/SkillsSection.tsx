import React from 'react';
import { skillGroups } from '../../data/skills';

export const SkillsSection: React.FC = () => (
  <section id="skills" className="py-20" style={{ backgroundColor: '#ffffff' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#142B4A' }}>
          Skills and Tools
        </h2>
        <p className="text-base" style={{ color: '#465466' }}>
          Core analytical skills demonstrated through projects.
        </p>
      </div>

      {/* Skill group cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-2xl border p-6 flex flex-col gap-4"
            style={{
              borderColor: '#E4E9EC',
              borderLeftWidth: '4px',
              borderLeftColor: group.color,
            }}
          >
            <h3 className="text-base font-semibold" style={{ color: '#142B4A' }}>
              {group.title}
            </h3>

            <ul className="flex flex-col gap-3">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-sm font-medium"
                    style={{ backgroundColor: '#F7F8F5', color: '#142B4A' }}
                  >
                    {skill.name}
                  </span>
                  {skill.note && (
                    <p
                      className="mt-1 text-xs italic leading-relaxed"
                      style={{ color: '#465466' }}
                    >
                      {skill.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
