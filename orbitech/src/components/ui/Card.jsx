export default function Card({ children, className = "", highlight = false, ...props }) {
  return (
    <div
      className={`neubrutal-border bg-white neubrutal-shadow p-lg ${highlight ? "bg-primary-fixed" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
