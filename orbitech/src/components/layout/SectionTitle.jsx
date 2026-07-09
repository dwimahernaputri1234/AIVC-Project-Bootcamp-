export default function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`font-display text-headline-lg-mobile md:text-headline-lg text-center mb-xl ${className}`}>
      {children}
    </h2>
  );
}
