export default function Select({ label, icon, options = [], className = "", ...props }) {
  return (
    <div className="flex flex-col gap-sm">
      {label && <label className="font-label-bold text-label-bold uppercase text-on-surface-variant">{label}</label>}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">{icon}</span>
        )}
        <select
          className={`neubrutal-border px-4 py-3 w-full bg-white focus:ring-4 focus:ring-primary focus:outline-none transition-all appearance-none ${icon ? "pl-11" : ""} ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">expand_more</span>
      </div>
    </div>
  );
}
