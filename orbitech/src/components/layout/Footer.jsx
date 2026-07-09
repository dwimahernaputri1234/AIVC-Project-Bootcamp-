import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-highest border-t-2 border-on-surface mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full px-margin-mobile md:px-margin-desktop py-10 md:py-12 mx-auto max-w-[1440px]">
        {/* Col 1: Logo & Description */}
        <div className="flex flex-col gap-3 md:gap-3">
          <span className="font-display text-headline-md text-on-surface tracking-tight">Orbit Connection</span>
          <p className="font-body text-[15px] leading-relaxed text-on-surface-variant max-w-[280px] break-words">
            &copy; 2025 Orbit Connection. High-Speed Infrastructure. Membangun masa depan digital Indonesia.
          </p>
        </div>

        {/* Col 2: Navigation (horizontal row) */}
        <div className="flex flex-col gap-3 md:items-center md:text-center">
          <span className="font-label-bold text-label-bold uppercase text-on-surface tracking-widest">Navigasi</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-center">
            <Link to="/" className="font-body text-[15px] text-on-surface-variant hover:text-primary transition-colors duration-200">Home</Link>
            <Link to="/packages" className="font-body text-[15px] text-on-surface-variant hover:text-primary transition-colors duration-200">Paket</Link>
            <Link to="/coverage" className="font-body text-[15px] text-on-surface-variant hover:text-primary transition-colors duration-200">Jangkauan</Link>
            <Link to="/register" className="font-body text-[15px] text-on-surface-variant hover:text-primary transition-colors duration-200">Daftar</Link>
            <Link to="/track" className="font-body text-[15px] text-on-surface-variant hover:text-primary transition-colors duration-200">Lacak</Link>
          </div>
        </div>

        {/* Col 3: Contact Icons (horizontal row) */}
        <div className="flex flex-col gap-3 md:items-end md:text-right">
          <span className="font-label-bold text-label-bold uppercase text-on-surface tracking-widest">Kontak</span>
          <div className="flex gap-3">
            <div className="neubrutal-border w-11 h-11 flex items-center justify-center bg-white neubrutal-active cursor-pointer hover:bg-primary-fixed transition-colors duration-200 group">
              <span className="material-symbols-outlined text-lg text-on-surface-variant group-hover:text-primary transition-colors duration-200">share</span>
            </div>
            <div className="neubrutal-border w-11 h-11 flex items-center justify-center bg-white neubrutal-active cursor-pointer hover:bg-primary-fixed transition-colors duration-200 group">
              <span className="material-symbols-outlined text-lg text-on-surface-variant group-hover:text-primary transition-colors duration-200">mail</span>
            </div>
            <div className="neubrutal-border w-11 h-11 flex items-center justify-center bg-white neubrutal-active cursor-pointer hover:bg-primary-fixed transition-colors duration-200 group">
              <span className="material-symbols-outlined text-lg text-on-surface-variant group-hover:text-primary transition-colors duration-200">call</span>
            </div>
          </div>
          <p className="font-body text-[13px] leading-relaxed text-on-surface-variant">Sen&ndash;Sab, 08:00&ndash;20:00</p>
        </div>
      </div>
    </footer>
  );
}
