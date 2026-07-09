import { customers, packages, coverageAreas, installations, registrationRequests, promos, testimonials } from "../../data/mockData";
import StatCard from "../../components/ui/StatCard";

export default function Statistics() {
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === "active").length;
  const pendingCustomers = customers.filter(c => c.status === "pending").length;
  const suspendedCustomers = customers.filter(c => c.status === "suspended").length;
  const totalInstallations = installations.length;
  const completedInstallations = installations.filter(i => i.status === "completed").length;
  const totalPromos = promos.length;
  const activePromos = promos.filter(p => p.active).length;
  const totalTestimonials = testimonials.length;
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  const approvedRequests = registrationRequests.filter(r => r.status === "approved").length;
  const rejectedRequests = registrationRequests.filter(r => r.status === "rejected").length;

  return (
    <div className="space-y-xl">
      <div>
        <h2 className="font-headline-lg text-headline-lg">Statistik & Laporan</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Ringkasan data dan metrik bisnis Orbit Connection</p>
      </div>

      <div>
        <h3 className="font-headline-md text-headline-md mb-md">Pelanggan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StatCard icon="group" value={totalCustomers} label="Total Pelanggan" />
          <StatCard icon="check_circle" value={activeCustomers} label="Aktif" />
          <StatCard icon="schedule" value={pendingCustomers} label="Pending" />
          <StatCard icon="block" value={suspendedCustomers} label="Suspen" />
        </div>
      </div>

      <div>
        <h3 className="font-headline-md text-headline-md mb-md">Instalasi</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StatCard icon="construction" value={totalInstallations} label="Total Instalasi" />
          <StatCard icon="verified" value={completedInstallations} label="Selesai" />
          <StatCard icon="check_circle" value={approvedRequests} label="Disetujui" />
          <StatCard icon="cancel" value={rejectedRequests} label="Ditolak" />
        </div>
      </div>

      <div>
        <h3 className="font-headline-md text-headline-md mb-md">Konten & Pemasaran</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StatCard icon="local_offer" value={totalPromos} label="Total Promo" />
          <StatCard icon="campaign" value={activePromos} label="Promo Aktif" />
          <StatCard icon="rate_review" value={totalTestimonials} label="Testimoni" />
          <StatCard icon="star" value={averageRating.toFixed(1)} label="Rating Rata-rata" />
        </div>
      </div>

      <div>
        <h3 className="font-headline-md text-headline-md mb-md">Paket & Jangkauan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <StatCard icon="wifi" value={packages.length} label="Total Paket" />
          <StatCard icon="speed" value={packages.filter(p => p.popular).length} label="Paket Populer" />
          <StatCard icon="map" value={coverageAreas.length} label="Total Kota" />
          <StatCard icon="location_on" value={coverageAreas.filter(a => a.available).length} label="Kota Tersedia" />
        </div>
      </div>
    </div>
  );
}
