import React from 'react';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple, safe Markdown parser for headers, paragraphs, lists, bold, tables
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];

  const flushTable = (key: string) => {
    if (tableHeaders.length > 0) {
      elements.push(
        <div key={key} className="my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-xs">
            <thead className="bg-slate-100 font-bold text-slate-800">
              <tr>
                {tableHeaders.map((th, i) => (
                  <th key={i} className="px-4 py-3 text-left">
                    {th.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {tableRows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-3 text-slate-700">
                      {cell.trim().replace(/\*\*(.*?)\*\*/g, '$1')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    inTable = false;
    tableHeaders = [];
    tableRows = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Table detection
    if (line.startsWith('|') && line.endsWith('|')) {
      const cells = line.split('|').slice(1, -1);
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else if (line.includes('---')) {
        // separator row, skip
        continue;
      } else {
        tableRows.push(cells);
      }
      continue;
    } else if (inTable) {
      flushTable(`table-${i}`);
    }

    if (!line) continue;

    // H1
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-2xl sm:text-3xl font-extrabold text-heading mt-8 mb-4 tracking-tight">
          {line.replace('# ', '')}
        </h1>
      );
    }
    // H2
    else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl sm:text-2xl font-bold text-heading mt-8 mb-3 tracking-tight border-b border-slate-100 pb-2">
          {line.replace('## ', '')}
        </h2>
      );
    }
    // H3
    else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-base sm:text-lg font-bold text-primary mt-6 mb-2">
          {line.replace('### ', '')}
        </h3>
      );
    }
    // Divider
    else if (line === '---') {
      elements.push(<hr key={i} className="my-8 border-slate-200" />);
    }
    // Unordered List
    else if (line.startsWith('- ') || line.startsWith('* ')) {
      elements.push(
        <li key={i} className="ml-5 list-disc text-sm text-slate-700 my-1 leading-relaxed">
          {line.replace(/^[-*]\s+/, '')}
        </li>
      );
    }
    // Numbered List
    else if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li key={i} className="ml-5 list-decimal text-sm text-slate-700 my-1 leading-relaxed">
          {line.replace(/^\d+\.\s+/, '')}
        </li>
      );
    }
    // Regular Paragraph
    else {
      elements.push(
        <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed my-3">
          {line}
        </p>
      );
    }
  }

  if (inTable) {
    flushTable('table-end');
  }

  return <div className="article-body prose prose-slate max-w-none">{elements}</div>;
}
