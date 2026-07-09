export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto neubrutal-border bg-white neubrutal-shadow">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-container">
            {headers.map((h, i) => (
              <th key={i} className="font-label-bold text-label-bold uppercase text-left px-4 py-3 border-b-2 border-black">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children}
        </tbody>
      </table>
    </div>
  );
}

export function TableRow({ children, className = "" }) {
  return <tr className={`border-b border-black/20 hover:bg-surface-container-low transition-colors ${className}`}>{children}</tr>;
}

export function TableData({ children, className = "" }) {
  return <td className={`px-4 py-3 font-body-md text-body-md ${className}`}>{children}</td>;
}
