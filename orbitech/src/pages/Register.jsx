import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { packages, coverageAreas } from "../data/mockData";
import { useApp } from "../context/AppContext";

function Field({ label, icon, children }) {
  return (
    <div className="space-y-1.5">
      <label className="font-label-bold text-[13px] uppercase tracking-wider text-on-surface-variant">{label}</label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-outline/60 pointer-events-none">{icon}</span>
        )}
        {children}
      </div>
    </div>
  );
}

function InputField({ icon, className = "", ...props }) {
  return (
    <input
      className={`w-full h-[48px] pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] text-on-surface placeholder:text-outline/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all duration-200 ${className}`}
      {...props}
    />
  );
}

function SelectField({ icon, options = [], className = "", ...props }) {
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-outline/60 pointer-events-none">{icon}</span>
      )}
      <select
        className={`w-full h-[48px] pl-10 pr-10 bg-gray-50 border border-gray-200 rounded-lg text-[15px] text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all duration-200 appearance-none ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-outline/60 pointer-events-none">expand_more</span>
    </div>
  );
}

export default function Register() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useApp();
  const preselectedPackage = searchParams.get("package");

  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    email: user?.email || "",
    address: "",
    city: "",
    district: "",
    package: preselectedPackage || "",
    installDate: "",
    installTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitted) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="flex-grow flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-[520px]">
          <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-gray-100 p-8 md:p-10 text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="material-symbols-outlined text-[32px] text-emerald-600">check_circle</span>
            </div>
            <h2 className="font-display text-[24px] md:text-[26px] leading-tight tracking-tight text-on-surface mb-3">
              Pendaftaran Berhasil!
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-on-surface-variant max-w-[400px] mx-auto break-words mb-6">
              Terima kasih! Pengajuan pemasangan WiFi Anda telah kami terima. Tim kami akan menghubungi Anda dalam 1x24 jam untuk konfirmasi jadwal instalasi.
            </p>
            <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-5 py-3 mb-6">
              <span className="material-symbols-outlined text-[18px] text-outline/60">description</span>
              <p className="font-label-mono text-[13px] text-on-surface-variant">ORB-{Date.now().toString(36).toUpperCase()}</p>
            </div>
            <button
              onClick={() => navigate("/track")}
              className="w-full h-[48px] bg-primary text-white font-label-bold text-[14px] uppercase tracking-wider rounded-lg shadow-lg shadow-primary/25 hover:bg-primary-container hover:shadow-xl active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Lacak Status Pengajuan
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow">
      <section className="px-5 md:px-8 py-12 md:py-16 max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-[13px] font-label-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-amber-200 mb-4">
            <span className="material-symbols-outlined text-[16px]">redeem</span>
            Gratis Biaya Instalasi
          </div>
          <h1 className="font-display text-[28px] md:text-[34px] leading-tight tracking-tight text-on-surface mb-3">
            Daftar Pemasangan WiFi
          </h1>
          <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-on-surface-variant max-w-[480px] mx-auto break-words">
            Isi data diri Anda dan pilih jadwal instalasi. Proses cepat dan mudah tanpa perlu datang ke kantor.
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 space-y-8">
          {/* Data Diri */}
          <div>
            <h3 className="font-display text-[18px] md:text-[20px] leading-tight tracking-tight text-on-surface mb-5 pb-4 border-b border-gray-100">
              Data Diri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Nama Lengkap" icon="person">
                <InputField name="name" value={form.name} onChange={handleChange} required placeholder="Masukkan nama lengkap" />
              </Field>
              <Field label="No. Telepon" icon="phone">
                <InputField name="phone" value={form.phone} onChange={handleChange} required placeholder="08xxxxxxxxxx" />
              </Field>
              <Field label="Email" icon="mail">
                <InputField name="email" type="email" value={form.email} onChange={handleChange} required placeholder="email@example.com" />
              </Field>
            </div>
          </div>

          {/* Alamat */}
          <div>
            <h3 className="font-display text-[18px] md:text-[20px] leading-tight tracking-tight text-on-surface mb-5 pb-4 border-b border-gray-100">
              Alamat Pemasangan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <Field label="Alamat Lengkap" icon="home">
                  <InputField name="address" value={form.address} onChange={handleChange} required placeholder="Jl. ..." />
                </Field>
              </div>
              <Field label="Kota" icon="location_city">
                <SelectField
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Pilih Kota" },
                    ...coverageAreas.filter(a => a.available).map(a => ({ value: a.city, label: a.city })),
                  ]}
                />
              </Field>
              <Field label="Kecamatan" icon="map">
                <SelectField
                  name="district"
                  value={form.district}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Pilih Kecamatan" },
                    ...(coverageAreas.find(a => a.city === form.city)?.districts.map(d => ({ value: d, label: d })) || []),
                  ]}
                />
              </Field>
            </div>
          </div>

          {/* Paket & Jadwal */}
          <div>
            <h3 className="font-display text-[18px] md:text-[20px] leading-tight tracking-tight text-on-surface mb-5 pb-4 border-b border-gray-100">
              Pilih Paket &amp; Jadwal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Paket Internet" icon="wifi">
                <SelectField
                  name="package"
                  value={form.package}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Pilih Paket" },
                    ...packages.map(p => ({ value: p.id.toString(), label: `${p.name} - ${p.speed} (Rp${p.price.toLocaleString("id-ID")})` })),
                  ]}
                />
              </Field>
              <Field label="Tanggal Instalasi" icon="calendar_month">
                <InputField name="installDate" type="date" value={form.installDate} onChange={handleChange} required />
              </Field>
              <Field label="Waktu Instalasi" icon="schedule">
                <SelectField
                  name="installTime"
                  value={form.installTime}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Pilih Waktu" },
                    { value: "08:00-10:00", label: "08:00 - 10:00" },
                    { value: "10:00-12:00", label: "10:00 - 12:00" },
                    { value: "13:00-15:00", label: "13:00 - 15:00" },
                    { value: "15:00-17:00", label: "15:00 - 17:00" },
                  ]}
                />
              </Field>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-[14px] leading-relaxed text-on-surface-variant text-center sm:text-left break-words">
              Dengan mendaftar, Anda menyetujui <a href="#" className="text-primary font-medium hover:underline">Syarat &amp; Ketentuan</a> yang berlaku.
            </p>
            <button
              type="submit"
              className="h-[48px] px-8 bg-primary text-white font-label-bold text-[14px] uppercase tracking-wider rounded-lg shadow-lg shadow-primary/25 hover:bg-primary-container hover:shadow-xl active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">send</span>
              Kirim Pendaftaran
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
