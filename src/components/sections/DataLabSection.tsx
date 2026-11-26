import React from 'react';
import { AlertCircle } from 'lucide-react';
import { SqlPlayground } from '../lab/SqlPlayground';

export const DataLabSection: React.FC = () => (
  <section id="lab" className="py-20" style={{ backgroundColor: '#ffffff' }}>
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-6 max-w-2xl">
        <h2 className="text-3xl font-bold mb-3" style={{ color: '#142B4A' }}>
          SQL Data Lab
        </h2>
        <p className="text-base" style={{ color: '#465466' }}>
          An interactive demonstration of SQL queries from real analytical projects.
        </p>
      </div>

      {/* Disclaimer */}
      <div
        className="flex items-start gap-3 rounded-xl p-4 mb-8 border"
        style={{ backgroundColor: 'rgba(214,168,75,0.08)', borderColor: 'rgba(214,168,75,0.3)' }}
        role="note"
        aria-label="Data Lab disclaimer"
      >
        <AlertCircle
          size={16}
          className="mt-0.5 shrink-0"
          style={{ color: '#D6A84B' }}
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed" style={{ color: '#465466' }}>
          This is a read-only demonstration using sample data adapted from the TechBridge Capstone
          project. Results are illustrative and do not represent real organisational data.
        </p>
      </div>

      {/* Playground */}
      <SqlPlayground />
    </div>
  </section>
);
