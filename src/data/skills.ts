import { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'data-tools',
    title: 'Data Analysis and Visualisation',
    color: '#147D86',
    skills: [
      { name: 'Excel', note: 'XLOOKUP, Pivot Tables, Data Validation, Scenario Analysis' },
      { name: 'SQL', note: 'PostgreSQL, MySQL — joins, aggregations, window functions' },
      { name: 'Power BI', note: 'DAX measures, interactive dashboards, Power Query' },
    ],
  },
  {
    id: 'analytical',
    title: 'Business and Analytical Skills',
    color: '#142B4A',
    skills: [
      { name: 'Data Cleaning' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Data Visualisation' },
      { name: 'Reporting' },
      { name: 'Business Analysis', note: 'Currently being developed' },
      { name: 'Insight Communication' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Skills',
    color: '#465466',
    skills: [
      { name: 'Project Coordination' },
      { name: 'Stakeholder Communication' },
      { name: 'Documentation' },
      { name: 'Administrative Operations' },
      { name: 'Problem-Solving' },
    ],
  },
];
