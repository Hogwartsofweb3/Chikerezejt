import React, { useState } from 'react';
import { Terminal, Play, Table } from 'lucide-react';

interface PrebuiltQuery {
  id: string;
  name: string;
  sql: string;
  columns: string[];
  rows: (string | number)[][];
}

const PREBUILT_QUERIES: PrebuiltQuery[] = [
  {
    id: 'dept-attrition',
    name: 'Department Churn Ranking',
    sql: `SELECT
    department,
    COUNT(*) AS total_exits,
    ROUND(COUNT(*) * 100.0 / 1991, 1) AS share_of_turnover_pct
FROM employees
WHERE employee_status = 'Left'
GROUP BY department
ORDER BY total_exits DESC;`,
    columns: ['department', 'total_exits', 'share_of_turnover_pct'],
    rows: [
      ['Sales', 550, '27.6%'],
      ['Technical', 421, '21.1%'],
      ['Support', 312, '15.7%'],
      ['IT', 158, '7.9%'],
      ['Product Design', 115, '5.8%'],
      ['Marketing', 98, '4.9%'],
      ['Management', 52, '2.6%'],
    ],
  },
  {
    id: 'category-revenue',
    name: 'Retail Revenue by Category',
    sql: `SELECT
    p.Category,
    COUNT(t.TransactionID) AS total_orders,
    SUM(t.Quantity)        AS units_sold,
    CONCAT('₦', FORMAT(
        SUM(t.Quantity * p.UnitPrice * (1 - t.Discount)), 2
    )) AS net_revenue
FROM Transactions t
JOIN Products p ON t.ProductID = p.ProductID
WHERE t.CustomerID <> 'C999'
GROUP BY p.Category
ORDER BY SUM(t.Quantity * p.UnitPrice * (1 - t.Discount)) DESC;`,
    columns: ['Category', 'total_orders', 'units_sold', 'net_revenue'],
    rows: [
      ['Laptops & Computing',    48, 112, '₦18,450,000.00'],
      ['Smartphones & Tablets',  52, 185, '₦14,210,000.00'],
      ['Audio & Peripherals',    32,  94, '₦5,840,000.00'],
      ['Accessories & Cables',   15,  56, '₦3,513,200.00'],
    ],
  },
  {
    id: 'satisfaction-churn',
    name: 'Turnover vs Satisfaction Tier',
    sql: `SELECT
    satisfaction_category,
    COUNT(*) AS employee_exits,
    ROUND(COUNT(*) * 100.0 / 1991, 1) AS pct_of_total_turnover
FROM employees
WHERE employee_status = 'Left'
GROUP BY satisfaction_category
ORDER BY employee_exits DESC;`,
    columns: ['satisfaction_category', 'employee_exits', 'pct_of_total_turnover'],
    rows: [
      ['Low (< 0.40)',         871, '43.7%'],
      ['Medium (0.40 – 0.70)', 685, '34.4%'],
      ['High (> 0.70)',         435, '21.8%'],
    ],
  },
];

export const SqlPlayground: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<PrebuiltQuery>(PREBUILT_QUERIES[0]);
  const [queryText, setQueryText]         = useState(PREBUILT_QUERIES[0].sql);
  const [activeResults, setActiveResults] = useState<PrebuiltQuery>(PREBUILT_QUERIES[0]);
  const [isRunning, setIsRunning]         = useState(false);

  const handleSelectPrebuilt = (q: PrebuiltQuery) => {
    setSelectedQuery(q);
    setQueryText(q.sql);
    setActiveResults(q);
  };

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      const match = PREBUILT_QUERIES.find((q) => q.id === selectedQuery.id) ?? PREBUILT_QUERIES[0];
      setActiveResults(match);
      setIsRunning(false);
    }, 280);
  };

  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: '#1e293b' }}>

      {/* Header — stays dark (terminal aesthetic) */}
      <div
        className="px-5 py-3 flex flex-wrap items-center justify-between gap-3"
        style={{ backgroundColor: '#1e293b' }}
      >
        <div className="flex items-center gap-2">
          <Terminal size={16} style={{ color: '#22d3ee' }} aria-hidden="true" />
          <span className="text-sm font-bold font-mono" style={{ color: '#f1f5f9' }}>
            SQL Query Console
          </span>
        </div>

        {/* Query selector tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {PREBUILT_QUERIES.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSelectPrebuilt(q)}
              className="px-3 py-1 rounded-lg text-xs font-mono transition-colors whitespace-nowrap"
              style={
                selectedQuery.id === q.id
                  ? { backgroundColor: 'rgba(34,211,238,0.15)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)' }
                  : { color: '#94a3b8' }
              }
            >
              {q.name}
            </button>
          ))}
        </div>
      </div>

      {/* Editor — dark */}
      <div className="p-4 sm:p-5" style={{ backgroundColor: '#0f172a' }}>
        <div className="flex items-center justify-between mb-2 text-[11px]" style={{ color: '#64748b' }}>
          <span className="font-mono">QUERY CONSOLE (READ-ONLY DEMO)</span>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(to right, #22d3ee, #0d9488)', color: '#0f172a' }}
          >
            <Play size={11} className="fill-current" aria-hidden="true" />
            {isRunning ? 'Executing…' : 'Run Query'}
          </button>
        </div>

        <textarea
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
          rows={7}
          className="w-full p-3 rounded-xl border font-mono text-xs focus:outline-none resize-none leading-relaxed"
          style={{
            backgroundColor: '#1e293b',
            borderColor: '#334155',
            color: '#7dd3fc',
          }}
          aria-label="SQL query input"
        />
      </div>

      {/* Results — light */}
      <div className="p-4 sm:p-5 border-t bg-white" style={{ borderColor: '#E4E9EC' }}>
        <div
          className="flex items-center justify-between mb-3 text-xs font-mono"
          style={{ color: '#465466' }}
        >
          <div className="flex items-center gap-2">
            <Table size={14} style={{ color: '#147D86' }} aria-hidden="true" />
            <span>Query Results ({activeResults.rows.length} rows returned)</span>
          </div>
          <span className="text-[10px]" style={{ color: '#22c55e' }}>Execution time: 0.008s</span>
        </div>

        <div className="overflow-x-auto rounded-xl border" style={{ borderColor: '#E4E9EC' }}>
          <table className="w-full text-left text-xs font-mono">
            <thead style={{ backgroundColor: '#F7F8F5', color: '#142B4A', borderBottom: '1px solid #E4E9EC' }}>
              <tr>
                {activeResults.columns.map((col, idx) => (
                  <th key={idx} className="px-4 py-2.5 font-bold uppercase tracking-wider text-[11px]">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activeResults.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="transition-colors hover:bg-[#F7F8F5]"
                  style={{ borderBottom: '1px solid #F7F8F5' }}
                >
                  {row.map((val, cIdx) => (
                    <td key={cIdx} className="px-4 py-2" style={{ color: '#465466' }}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
