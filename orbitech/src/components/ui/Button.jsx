export default function Button({ children, variant = "primary", className = "", icon, ...props }) {
  const base = "font-label-bold text-label-bold uppercase flex items-center gap-base neubrutal-border neubrutal-shadow neubrutal-active transition-all cursor-pointer";
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-container",
    secondary: "bg-white text-on-surface hover:bg-surface-container",
    danger: "bg-error text-on-error hover:bg-error-container",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      {children}
    </button>
  );
}
