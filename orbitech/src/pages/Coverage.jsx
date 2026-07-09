import { useState } from "react";
import { coverageAreas } from "../data/mockData";
import SectionTitle from "../components/layout/SectionTitle";

export default function Coverage() {
  const [selectedCity, setSelectedCity] = useState("");
  const [result, setResult] = useState(null);

  const checkCoverage = () => {
    const q = selectedCity.trim().toLowerCase();
    if (!q) return;
    const area = coverageAreas.find((a) => a.city.toLowerCase().includes(q));
    setResult(area || null);
  };

  return (
    <main className="flex-grow">
      <section className="px-margin-mobile md:px-margin-desktop py-[60px] md:py-[80px] max-w-[1440px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block neubrutal-border bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1 font-label-mono text-label-mono uppercase tracking-widest mb-4">
            Jangkauan Layanan
          </div>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1.15] tracking-tighter text-on-surface mb-4">
            Cek Jangkauan Layanan
          </h2>
          <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-on-surface-variant max-w-[520px] mx-auto break-words">
            Masukkan kota Anda untuk mengetahui apakah Orbit Connection sudah tersedia di wilayah Anda.
          </p>
        </div>

        <div className="max-w-[700px] mx-auto mb-12 md:mb-16">
          <div className="neubrutal-shadow rounded-full">
            <div className="flex rounded-full overflow-hidden border-2 border-black bg-white">
              <div className="relative flex-1">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline/40 pointer-events-none">search</span>
                <input
                  type="text"
                  value={selectedCity}
                  onChange={(e) => { setSelectedCity(e.target.value); setResult(null); }}
                  onKeyDown={(e) => e.key === 'Enter' && checkCoverage()}
                  placeholder="Masukkan nama kota atau kode pos Anda..."
                  className="w-full h-[56px] pl-12 pr-6 bg-transparent text-[15px] text-on-surface placeholder:text-outline/40 font-body focus:outline-none"
                />
              </div>
              <button
                onClick={checkCoverage}
                className="h-[56px] px-9 bg-primary text-on-primary font-label-bold text-[14px] uppercase tracking-wider border-l-2 border-black cursor-pointer hover:bg-primary-container transition-colors duration-200 flex items-center gap-2 shrink-0"
              >
                CEK
              </button>
            </div>
          </div>
        </div>

        {result && (
          <div className={`neubrutal-border p-6 md:p-8 neubrutal-shadow max-w-lg mx-auto mb-12 md:mb-16 ${
            result.available ? "bg-tertiary-container text-on-tertiary-container" : "bg-error-container text-on-error-container"
          }`}>
            <div className="flex items-start gap-4 mb-4">
              <span className="material-symbols-outlined text-[36px] shrink-0 mt-0.5">
                {result.available ? "check_circle" : "cancel"}
              </span>
              <div>
                <h3 className="font-headline-md text-headline-md">
                  {result.available ? "Tersedia!" : "Belum Tersedia"}
                </h3>
                <p className="font-body text-[15px] leading-relaxed mt-1">
                  {result.available
                    ? `Orbit Connection sudah tersedia di ${result.city}`
                    : `Maaf, Orbit Connection belum tersedia di ${result.city}`
                  }
                </p>
              </div>
            </div>
            {result.available && result.districts.length > 0 && (
              <div className="border-t-2 border-black/20 pt-4">
                <p className="font-label-bold text-label-bold uppercase mb-3 tracking-wider">Kecamatan yang terjangkau:</p>
                <div className="flex flex-wrap gap-2">
                  {result.districts.map((d, i) => (
                    <span key={i} className="neubrutal-border bg-white px-3 py-[5px] font-label-mono text-label-mono">{d}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Coverage Map */}
        <div>
          <div className="text-center mb-8">
            <h3 className="font-display text-[22px] md:text-[26px] leading-tight tracking-tight text-on-surface">
              Peta Jangkauan
            </h3>
            <p className="font-body text-[15px] leading-relaxed text-on-surface-variant mt-1">
              {coverageAreas.filter(a => a.available).length} kota telah terjangkau Orbit Connection
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-gutter">
            {coverageAreas.map((area) => (
              <div
                key={area.id}
                className={`neubrutal-border p-4 md:p-5 neubrutal-shadow transition-all duration-200 ${
                  area.available
                    ? "bg-white hover:translate-x-[2px] hover:translate-y-[2px]"
                    : "bg-surface-container opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-headline-md text-[18px] md:text-headline-md leading-tight">{area.city}</h4>
                  <span className={`w-3 h-3 neubrutal-border shrink-0 ${area.available ? "bg-tertiary-container" : "bg-error-container"}`} />
                </div>
                <p className="font-body text-[14px] md:text-[15px] leading-relaxed text-on-surface-variant mb-3 break-words">
                  {area.districts.slice(0, 3).join(", ")}
                  {area.districts.length > 3 && ", ..."}
                </p>
                <span className={`font-label-bold text-[11px] uppercase tracking-wider ${
                  area.available ? "text-tertiary" : "text-error"
                }`}>
                  {area.available ? "Tersedia" : "Segera Hadir"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
