export default function StatCard({ icon, value, label, className = "" }) {
  return (
    <div className={`neubrutal-border bg-white neubrutal-shadow p-md flex items-center gap-md ${className}`}>
      <div className="w-12 h-12 neubrutal-border bg-primary-fixed flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-primary">{icon}</span>
      </div>
      <div>
        <div className="font-display text-headline-md">{value}</div>
        <div className="font-label-mono text-label-mono text-on-surface-variant uppercase">{label}</div>
      </div>
    </div>
  );
}
