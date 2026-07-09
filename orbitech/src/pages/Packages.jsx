import { Link } from "react-router-dom";
import { packages } from "../data/mockData";
import SectionTitle from "../components/layout/SectionTitle";
import Badge from "../components/ui/Badge";

const illustrations = {
  "Orbit 20": (
    <svg viewBox="0 0 120 80" className="w-full h-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 52V32l25-18 25 18v20z" />
      <rect x="20" y="40" width="12" height="12" />
      <path d="M58 26q10-7 20 0" />
      <path d="M54 32q14-9 28 0" />
      <path d="M50 38q18-11 36 0" />
    </svg>
  ),
  "Orbit 50": (
    <svg viewBox="0 0 120 80" className="w-full h-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 52V32l25-18 25 18v20z" />
      <rect x="20" y="40" width="12" height="12" />
      <rect x="48" y="42" width="16" height="10" rx="1" />
      <line x1="48" y1="52" x2="64" y2="52" />
      <rect x="68" y="44" width="8" height="8" rx="1" />
      <rect x="80" y="44" width="10" height="8" rx="1" />
    </svg>
  ),
  "Orbit 100": (
    <svg viewBox="0 0 120 80" className="w-full h-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="52,15 58,62 46,62" />
      <rect x="50" y="58" width="8" height="12" />
      <line x1="42" y1="28" x2="66" y2="28" />
      <line x1="39" y1="38" x2="69" y2="38" />
      <line x1="42" y1="48" x2="66" y2="48" />
      <path d="M64 20q8-4 16 2" />
      <path d="M67 14q10-6 22 2" />
      <path d="M70 8q12-8 26 2" />
    </svg>
  ),
  "Orbit 200": (
    <svg viewBox="0 0 120 80" className="w-full h-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 18l8 42-16 0z" />
      <circle cx="50" cy="30" r="5" />
      <path d="M44 60l-6 10" />
      <path d="M56 60l6 10" />
      <path d="M48 56q2 6-2 8" />
      <path d="M52 56q-2 6 2 8" />
    </svg>
  ),
  "Orbit Bisnis 100": (
    <svg viewBox="0 0 120 80" className="w-full h-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="30" y="18" width="40" height="52" />
      <rect x="38" y="24" width="8" height="8" />
      <rect x="52" y="24" width="8" height="8" />
      <rect x="38" y="36" width="8" height="8" />
      <rect x="52" y="36" width="8" height="8" />
      <rect x="38" y="48" width="8" height="8" />
      <rect x="52" y="48" width="8" height="8" />
      <rect x="44" y="56" width="12" height="14" />
    </svg>
  ),
  "Orbit Bisnis 300": (
    <svg viewBox="0 0 120 80" className="w-full h-20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="22" y="22" width="32" height="48" />
      <rect x="28" y="28" width="6" height="6" />
      <rect x="40" y="28" width="6" height="6" />
      <rect x="28" y="38" width="6" height="6" />
      <rect x="40" y="38" width="6" height="6" />
      <rect x="34" y="54" width="10" height="16" />
      <rect x="64" y="16" width="32" height="54" />
      <rect x="70" y="22" width="6" height="6" />
      <rect x="82" y="22" width="6" height="6" />
      <rect x="70" y="32" width="6" height="6" />
      <rect x="82" y="32" width="6" height="6" />
      <rect x="76" y="50" width="10" height="20" />
    </svg>
  ),
};

export default function Packages() {
  return (
    <main className="flex-grow">
      <section className="px-margin-mobile md:px-margin-desktop py-xl max-w-[1440px] mx-auto">
        <SectionTitle>Bandingkan Paket Internet</SectionTitle>
        <p className="font-body-lg text-body-lg text-center text-on-surface-variant max-w-2xl mx-auto mb-xl">
          Pilih paket yang paling sesuai dengan kebutuhan Anda. Semua paket sudah termasuk biaya instalasi dan router WiFi.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`neubrutal-border bg-white neubrutal-shadow p-lg flex flex-col items-center text-center relative ${
                pkg.popular ? "border-primary ring-4 ring-primary/20" : ""
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 -right-3 z-10">
                  <Badge variant={pkg.badge === "Terpopuler" ? "primary" : "warning"}>
                    {pkg.badge}
                  </Badge>
                </div>
              )}

              <div className="text-black mb-4 flex items-center justify-center w-full">
                {illustrations[pkg.name] || null}
              </div>

              <div className="mb-3">
                <h3 className="font-headline-lg text-headline-lg">{pkg.name}</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">{pkg.speed}</p>
              </div>

              <div className="mb-4 flex items-baseline justify-center gap-1.5">
                <span className="font-body text-headline-lg font-bold text-primary tracking-tight">
                  Rp{pkg.price.toLocaleString("id-ID")}
                </span>
                <span className="font-body text-body-md text-on-surface-variant">/</span>
                <span className="font-body text-body-md text-on-surface-variant">{pkg.duration}</span>
              </div>

              <div className="border-t-2 border-black pt-4 mb-4 flex-grow w-full text-left">
                <p className="font-label-bold text-label-bold uppercase mb-3 text-on-surface-variant">Fitur termasuk:</p>
                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="font-body-md text-body-md flex items-center gap-xs">
                      <span className="material-symbols-outlined text-primary text-lg">check</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={`/register?package=${pkg.id}`}
                className={`neubrutal-border neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase text-center py-4 w-full transition-all ${
                  pkg.popular
                    ? "bg-primary text-on-primary hover:bg-primary-container"
                    : "bg-white text-on-surface hover:bg-surface-container"
                }`}
              >
                Pilih Paket Ini
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-xl">
          <h3 className="font-headline-md text-headline-md mb-md text-center">Perbandingan Kecepatan</h3>
          <div className="overflow-x-auto neubrutal-border bg-white neubrutal-shadow">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-surface-container">
                  <th className="font-label-bold text-label-bold uppercase text-left px-4 py-3 border-b-2 border-black">Aktivitas</th>
                  <th className="font-label-bold text-label-bold uppercase text-left px-4 py-3 border-b-2 border-black">20 Mbps</th>
                  <th className="font-label-bold text-label-bold uppercase text-left px-4 py-3 border-b-2 border-black">50 Mbps</th>
                  <th className="font-label-bold text-label-bold uppercase text-left px-4 py-3 border-b-2 border-black">100 Mbps</th>
                  <th className="font-label-bold text-label-bold uppercase text-left px-4 py-3 border-b-2 border-black">200 Mbps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Streaming Video HD", "Baik", "Lancar", "Sangat Lancar", "Super Cepat"],
                  ["Streaming 4K", "Kurang", "Cukup", "Lancar", "Sangat Lancar"],
                  ["Video Call 4K", "Cukup", "Baik", "Lancar", "Sangat Lancar"],
                  ["Gaming Online", "Ringan", "Kompetitif", "Pro", "Ultra"],
                  ["Download 1GB", "~7 menit", "~3 menit", "~1.5 menit", "~40 detik"],
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/20">
                    {row.map((cell, j) => (
                      <td key={j} className={`px-4 py-3 font-body-md text-body-md ${j === 0 ? "font-label-bold" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
