import { customers, packages, coverageAreas, installations, registrationRequests } from "../../data/mockData";
import StatCard from "../../components/ui/StatCard";
import Table, { TableRow, TableData } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";

export default function Dashboard() {
  const activeCustomers = customers.filter(c => c.status === "active").length;
  const pendingRegistrations = registrationRequests.filter(r => r.status === "pending").length;
  const totalPackages = packages.length;
  const totalCoverage = coverageAreas.filter(a => a.available).length;
  const upcomingInstallations = installations.filter(i => i.status === "scheduled").length;

  const statusBadge = (status) => {
    const variants = { active: "success", pending: "warning", suspended: "danger", in_progress: "info", scheduled: "primary", completed: "success" };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="space-y-xl">
      <div>
        <h2 className="font-headline-lg text-headline-lg mb-2">Dashboard Admin</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Selamat datang di panel manajemen Orbit Connection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter">
        <StatCard icon="group" value={activeCustomers} label="Pelanggan Aktif" />
        <StatCard icon="pending_actions" value={pendingRegistrations} label="Pengajuan Baru" />
        <StatCard icon="wifi" value={totalPackages} label="Paket Tersedia" />
        <StatCard icon="map" value={totalCoverage} label="Kota Terjangkau" />
        <StatCard icon="construction" value={upcomingInstallations} label="Instalasi Mendatang" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div>
          <h3 className="font-headline-md text-headline-md mb-md">Pengajuan Terbaru</h3>
          <Table headers={["Nama", "Paket", "Area", "Status"]}>
            {registrationRequests.slice(0, 4).map((r) => (
              <TableRow key={r.id}>
                <TableData>{r.name}</TableData>
                <TableData>{r.package}</TableData>
                <TableData>{r.area}</TableData>
                <TableData>{statusBadge(r.status)}</TableData>
              </TableRow>
            ))}
          </Table>
        </div>

        <div>
          <h3 className="font-headline-md text-headline-md mb-md">Jadwal Instalasi</h3>
          <Table headers={["Pelanggan", "Tanggal", "Teknisi", "Status"]}>
            {installations.slice(0, 4).map((i) => (
              <TableRow key={i.id}>
                <TableData>{i.customerName}</TableData>
                <TableData>{i.date}</TableData>
                <TableData>{i.technician}</TableData>
                <TableData>{statusBadge(i.status)}</TableData>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
