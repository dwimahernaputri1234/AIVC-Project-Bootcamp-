import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useApp } from "../../context/AppContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/packages", label: "Paket Internet" },
  { path: "/coverage", label: "Cek Jangkauan" },
  { path: "/register", label: "Daftar" },
  { path: "/track", label: "Lacak Status" },
];

export default function Navbar() {
  const { user, isAdmin, logout } = useApp();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full top-0 sticky z-50 bg-surface border-b-2 border-on-surface shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-[1440px]">
        <Link to="/" className="flex items-center gap-base">
          <span className="font-display text-headline-md md:text-headline-md uppercase tracking-tighter text-primary">Orbit Connection</span>
        </Link>

        <div className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-headline-md text-headline-md transition-all hover:translate-x-[2px] hover:translate-y-[2px] ${
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {isAdmin && (
            <Link
              to="/admin"
              className={`font-headline-md text-headline-md transition-all hover:translate-x-[2px] hover:translate-y-[2px] ${
                location.pathname.startsWith("/admin")
                  ? "text-primary border-b-2 border-primary"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Admin
            </Link>
          )}
        </div>

        <div className="flex items-center gap-sm">
          {user ? (
            <div className="flex items-center gap-sm">
              <Link
                to="/profile"
                className="hidden md:flex neubrutal-border bg-primary text-on-primary px-4 py-2 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase items-center gap-xs"
              >
                <span className="material-symbols-outlined text-lg">account_circle</span>
                {user.name}
              </Link>
              <button
                onClick={logout}
                className="neubrutal-border bg-white text-on-surface px-4 py-2 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="neubrutal-border bg-primary text-on-primary px-6 py-2 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase"
            >
              Masuk
            </Link>
          )}
          <button
            className="md:hidden neubrutal-border w-10 h-10 flex items-center justify-center bg-white neubrutal-active cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="material-symbols-outlined">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-black bg-surface">
          <div className="flex flex-col px-margin-mobile py-md gap-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`font-headline-md text-headline-md ${
                  location.pathname === link.path ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                onClick={() => setMobileOpen(false)}
                className={`font-headline-md text-headline-md ${
                  location.pathname.startsWith("/admin") ? "text-primary" : "text-on-surface-variant"
                }`}
              >
                Admin Dashboard
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
