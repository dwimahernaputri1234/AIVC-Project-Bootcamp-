import { useState } from "react";
import { registrationRequests, orderStatusSteps } from "../data/mockData";

const statusMap = {
  pending: 0,
  verified: 1,
  scheduled: 2,
  installation: 3,
  completed: 4,
};

const statusLabel = {
  pending: "Diproses",
  approved: "Disetujui",
  rejected: "Ditolak",
};

const statusColor = {
  pending: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", dot: "bg-amber-400" },
  approved: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400" },
  rejected: { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", dot: "bg-red-400" },
  completed: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-400" },
};

export default function TrackStatus() {
  const [orderId, setOrderId] = useState("");
  const [tracked, setTracked] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    setError("");
    setTracked(null);
    if (!orderId.trim()) {
      setError("Masukkan ID pendaftaran");
      return;
    }
    const found = registrationRequests.find(
      (r) => r.id.toString() === orderId.trim() || r.name.toLowerCase().includes(orderId.trim().toLowerCase())
    );
    if (found) {
      setTracked(found);
    } else {
      setError("Pengajuan tidak ditemukan. Periksa kembali ID pendaftaran Anda.");
    }
  };

  const currentStep = tracked ? statusMap[tracked.status] || 0 : 0;
  const sc = tracked ? statusColor[tracked.status] || statusColor.pending : null;

  return (
    <main className="flex-grow">
      <section className="px-5 md:px-8 py-12 md:py-16 max-w-[800px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-[13px] font-label-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <span className="material-symbols-outlined text-[16px]">pending_actions</span>
            Lacak Pengajuan
          </div>
          <h1 className="font-display text-[28px] md:text-[34px] leading-tight tracking-tight text-on-surface mb-3">
            Lacak Status Pemasangan
          </h1>
          <p className="font-body text-[15px] md:text-[16px] leading-relaxed text-on-surface-variant max-w-[480px] mx-auto break-words">
            Masukkan nomor ID pendaftaran atau nama Anda untuk melihat status pemasangan WiFi.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleTrack} className="mb-10">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-[20px] text-outline/60 pointer-events-none">search</span>
              <input
                placeholder="Masukkan ID atau Nama Anda"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="w-full h-[52px] pl-11 pr-4 bg-white border border-gray-200 rounded-xl text-[15px] text-on-surface placeholder:text-outline/50 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="h-[52px] px-8 bg-primary text-white font-label-bold text-[14px] uppercase tracking-wider rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-container hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              Lacak Status
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mt-3">
              <span className="material-symbols-outlined text-[18px] text-error shrink-0">error</span>
              <p className="font-body text-[14px] leading-snug text-error break-words">{error}</p>
            </div>
          )}
        </form>

        {/* Result Card */}
        {tracked && (
          <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
            {/* Status Header */}
            <div className="p-6 md:p-8 border-b border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-[20px] md:text-[22px] leading-tight tracking-tight text-on-surface">{tracked.name}</h3>
                  <p className="font-body text-[15px] leading-relaxed text-on-surface-variant mt-1 break-words">
                    {tracked.package} &middot; {tracked.area}
                  </p>
                </div>
                {sc && (
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-label-bold uppercase tracking-wider ${sc.bg} ${sc.text} ${sc.border} border`}>
                    <span className={`w-2 h-2 rounded-full ${sc.dot}`} />
                    {statusLabel[tracked.status] || tracked.status}
                  </span>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div className="px-6 md:px-8 py-6 md:py-8">
              <div className="relative">
                {orderStatusSteps.map((step, index) => {
                  const isActive = index <= currentStep;
                  const isLast = index === orderStatusSteps.length - 1;

                  return (
                    <div key={step.key} className="flex gap-4 relative">
                      {!isLast && (
                        <div className={`absolute left-[19px] top-10 w-0.5 h-[calc(100%+4px)] ${index < currentStep ? "bg-primary" : "bg-gray-200"}`} />
                      )}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300 ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-gray-100 text-outline/50"
                      }`}>
                        <span className="material-symbols-outlined text-[18px]">{step.icon}</span>
                      </div>
                      <div className={`pb-6 ${isLast ? "pb-0" : ""}`}>
                        <p className={`font-label-bold text-[13px] uppercase tracking-wider ${isActive ? "text-primary" : "text-outline/60"}`}>
                          {step.label}
                        </p>
                        {isActive && index === currentStep && (
                          <p className="font-body text-[14px] leading-relaxed text-on-surface-variant mt-0.5 break-words">
                            {tracked.status === "pending" && index === 0 ? "Pengajuan sedang diperiksa oleh tim kami" :
                             tracked.status === "approved" && index === 1 ? "Data telah diverifikasi" :
                             tracked.status === "rejected" ? "Pengajuan ditolak" : ""}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail Info */}
            <div className="px-6 md:px-8 py-5 bg-gray-50 border-t border-gray-100">
              <p className="font-label-bold text-[12px] uppercase tracking-wider text-outline/60 mb-3">Detail Pendaftaran</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="font-label-mono text-[11px] uppercase tracking-wider text-outline/50">Email</p>
                  <p className="font-body text-[14px] text-on-surface mt-0.5 break-words">{tracked.email}</p>
                </div>
                <div>
                  <p className="font-label-mono text-[11px] uppercase tracking-wider text-outline/50">Telepon</p>
                  <p className="font-body text-[14px] text-on-surface mt-0.5">{tracked.phone}</p>
                </div>
                <div>
                  <p className="font-label-mono text-[11px] uppercase tracking-wider text-outline/50">Alamat</p>
                  <p className="font-body text-[14px] text-on-surface mt-0.5 break-words">{tracked.address}</p>
                </div>
                <div>
                  <p className="font-label-mono text-[11px] uppercase tracking-wider text-outline/50">Tanggal Daftar</p>
                  <p className="font-body text-[14px] text-on-surface mt-0.5">{tracked.date}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
