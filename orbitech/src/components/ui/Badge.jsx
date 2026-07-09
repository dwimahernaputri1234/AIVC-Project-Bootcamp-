export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-tertiary-fixed text-on-tertiary-fixed",
    primary: "bg-primary text-on-primary",
    success: "bg-tertiary-container text-on-tertiary-container",
    warning: "bg-tertiary-fixed text-on-tertiary-fixed",
    danger: "bg-error-container text-on-error-container",
    info: "bg-primary-fixed text-on-primary-fixed",
  };

  return (
    <span className={`neubrutal-border inline-block px-3 py-1 font-label-mono text-label-mono uppercase tracking-widest ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
