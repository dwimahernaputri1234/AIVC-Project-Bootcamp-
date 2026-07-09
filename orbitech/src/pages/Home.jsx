import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import SectionTitle from "../components/layout/SectionTitle";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden bg-[#080c1a]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=80"
            alt="Fiber optic technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080c1a]/95 via-[#080c1a]/75 to-[#080c1a]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c1a]/40 to-transparent" />
        </div>

        {/* Subtle tech pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[580px] space-y-6 md:space-y-7">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-[13px] font-label-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full border border-white/15">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Konektivitas Masa Depan
              </div>

              <h1 className="font-display text-[38px] leading-[1.12] tracking-tight md:text-[56px] md:leading-[1.08] text-white">
                Orbit Connection:<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                  Masa Depan Konektivitas.
                </span>
              </h1>

              <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-white/70 max-w-[480px] break-words">
                Orbit Connection adalah penyedia layanan internet modern yang menghadirkan kecepatan tanpa batas untuk rumah dan bisnis Anda.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 h-[50px] md:h-[56px] px-7 md:px-8 bg-primary text-white font-label-bold text-[14px] uppercase tracking-wider rounded-xl shadow-xl shadow-blue-600/30 hover:bg-primary-container hover:shadow-2xl hover:shadow-blue-600/40 active:scale-[0.97] transition-all duration-200"
                >
                  Pilih Paket
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <Link
                  to="/coverage"
                  className="inline-flex items-center gap-2 h-[50px] md:h-[56px] px-7 md:px-8 bg-white/10 backdrop-blur-sm text-white font-label-bold text-[14px] uppercase tracking-wider rounded-xl border border-white/20 hover:bg-white/20 active:scale-[0.97] transition-all duration-200"
                >
                  Cek Jangkauan
                  <span className="material-symbols-outlined text-[20px]">map</span>
                </Link>
              </div>
            </div>

            {/* Right side visual */}
            <div className="hidden lg:flex flex-col items-end justify-center">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-7 max-w-[280px]">
                <div className="text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">1 Gbps+</div>
                <div className="text-[13px] font-label-bold uppercase tracking-widest text-blue-300/80 mt-1">Ultra High Speed</div>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#080c1a] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-[10px] text-white font-bold">{i}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="text-white/80 text-[15px] font-semibold">50+ Kota</p>
                      <p className="text-white/40 text-[12px] font-label-mono uppercase tracking-wider">Telah Terjangkau</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent" />
      </section>

      {/* Features Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-container">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 neubrutal-border bg-white neubrutal-shadow overflow-hidden flex flex-col md:flex-row">
              <div className="p-lg flex flex-col justify-center flex-1">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">bolt</span>
                <h3 className="font-headline-lg text-headline-lg mb-4">Internet Fiber Ultra-Cepat</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Teknologi fiber terkini untuk streaming dan gaming tanpa lag. Latensi rendah, performa maksimal.</p>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto border-t-2 md:border-t-0 md:border-l-2 border-black bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[100px] text-on-primary">lan</span>
              </div>
            </div>

            <div className="md:col-span-4 neubrutal-border bg-white neubrutal-shadow flex flex-col">
              <div className="h-48 border-b-2 border-black bg-tertiary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[80px] text-on-tertiary-container">groups</span>
              </div>
              <div className="p-md flex-1">
                <h3 className="font-headline-md text-headline-md mb-2">Koneksi Keluarga Stabil</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Streaming di banyak perangkat sekaligus dengan lancar tanpa gangguan bandwidth.</p>
              </div>
            </div>

            <div className="md:col-span-4 neubrutal-border bg-inverse-surface text-inverse-on-surface neubrutal-shadow p-lg flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-primary-fixed text-4xl mb-4 group-hover:rotate-12 transition-transform">support_agent</span>
                <h3 className="font-headline-md text-headline-md mb-2">Dukungan 24/7</h3>
                <p className="font-body-md text-body-md text-surface-variant">Tim ahli kami siap membantu Anda kapan saja, siang maupun malam.</p>
              </div>
              <div className="mt-8">
                <a href="tel:02112345678" className="font-label-bold text-label-bold uppercase flex items-center gap-xs hover:gap-sm transition-all text-primary-fixed">
                  Hubungi Kami <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-8 neubrutal-border bg-tertiary-container text-on-tertiary-container neubrutal-shadow p-lg flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-lg text-center">
                <div>
                  <div className="font-display text-display">99.9%</div>
                  <div className="font-label-bold text-label-bold uppercase">Uptime Reliability</div>
                </div>
                <div>
                  <div className="font-display text-display">10M+</div>
                  <div className="font-label-bold text-label-bold uppercase">Happy Connected</div>
                </div>
                <div>
                  <div className="font-display text-display">50+</div>
                  <div className="font-label-bold text-label-bold uppercase">Cities Reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl max-w-[1440px] mx-auto">
        <SectionTitle>Mulai Terhubung dalam 3 Langkah</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="neubrutal-border bg-white neubrutal-shadow p-lg relative group">
            <div className="absolute -top-6 -left-4 w-12 h-12 neubrutal-border bg-primary text-on-primary flex items-center justify-center font-display text-headline-md neubrutal-shadow">1</div>
            <div className="pt-4">
              <h4 className="font-headline-md text-headline-md mb-4">Pilih Paket</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Pilih paket internet yang paling sesuai dengan kebutuhan rumah atau bisnis Anda.</p>
              <div className="h-1 bg-black w-12 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
          <div className="neubrutal-border bg-white neubrutal-shadow p-lg relative group">
            <div className="absolute -top-6 -left-4 w-12 h-12 neubrutal-border bg-primary text-on-primary flex items-center justify-center font-display text-headline-md neubrutal-shadow">2</div>
            <div className="pt-4">
              <h4 className="font-headline-md text-headline-md mb-4">Instalasi Cepat</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Teknisi profesional kami akan menjadwalkan pemasangan secepatnya di lokasi Anda.</p>
              <div className="h-1 bg-black w-12 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
          <div className="neubrutal-border bg-white neubrutal-shadow p-lg relative group">
            <div className="absolute -top-6 -left-4 w-12 h-12 neubrutal-border bg-primary text-on-primary flex items-center justify-center font-display text-headline-md neubrutal-shadow">3</div>
            <div className="pt-4">
              <h4 className="font-headline-md text-headline-md mb-4">Mulai Menjelajah</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Nikmati pengalaman internet tanpa batas dengan kecepatan ultra tinggi dari Orbit Connection.</p>
              <div className="h-1 bg-black w-12 group-hover:w-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-lg md:py-[60px] max-w-[1440px] mx-auto">
        <div className="neubrutal-border bg-primary-fixed text-on-primary-fixed p-6 md:p-10 neubrutal-shadow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight mb-3">
              Siap untuk koneksi yang lebih baik?
            </h2>
            <p className="font-body text-[16px] md:text-[17px] leading-relaxed text-on-primary-fixed-variant max-w-[480px] break-words">
              Daftar sekarang dan dapatkan penawaran eksklusif pemasangan WiFi dari Orbit Connection.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link
              to="/register"
              className="neubrutal-border bg-primary text-on-primary px-8 py-4 md:px-10 md:py-[18px] neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase inline-flex items-center gap-2 hover:bg-primary-container transition-colors duration-200"
            >
              Daftar Sekarang
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
