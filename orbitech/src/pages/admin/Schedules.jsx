import { installations, technicians } from "../../data/mockData";
import Table, { TableRow, TableData } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";

export default function Schedules() {
  const statusBadge = (status) => {
    const variants = { scheduled: "primary", completed: "success", in_progress: "info" };
    return <Badge variant={variants[status] || "default"}>{status.replace("_", " ")}</Badge>;
  };

  return (
    <div className="space-y-xl">
      <div>
        <h2 className="font-headline-lg text-headline-lg">Jadwal Pemasangan</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Atur jadwal instalasi dan teknisi</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
        <div className="neubrutal-border bg-white neubrutal-shadow p-md flex items-center gap-md">
          <div className="w-12 h-12 neubrutal-border bg-primary-fixed flex items-center justify-center">
            <span className="material-symbols-outlined text-primary">event</span>
          </div>
          <div>
            <p className="font-display text-headline-md">{installations.filter(i => i.status === "scheduled").length}</p>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Terjadwal</p>
          </div>
        </div>
        <div className="neubrutal-border bg-white neubrutal-shadow p-md flex items-center gap-md">
          <div className="w-12 h-12 neubrutal-border bg-tertiary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-tertiary-container">construction</span>
          </div>
          <div>
            <p className="font-display text-headline-md">{installations.filter(i => i.status === "in_progress").length}</p>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Sedang Berjalan</p>
          </div>
        </div>
        <div className="neubrutal-border bg-white neubrutal-shadow p-md flex items-center gap-md">
          <div className="w-12 h-12 neubrutal-border bg-tertiary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-tertiary-container">group</span>
          </div>
          <div>
            <p className="font-display text-headline-md">{technicians.filter(t => t.available).length}/{technicians.length}</p>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Teknisi Tersedia</p>
          </div>
        </div>
      </div>

      <Table headers={["Pelanggan", "Paket", "Tanggal", "Waktu", "Teknisi", "Status"]}>
        {installations.map((i) => (
          <TableRow key={i.id}>
            <TableData className="font-label-bold">{i.customerName}</TableData>
            <TableData>{i.package}</TableData>
            <TableData>{i.date}</TableData>
            <TableData>{i.time}</TableData>
            <TableData>{i.technician}</TableData>
            <TableData>{statusBadge(i.status)}</TableData>
          </TableRow>
        ))}
      </Table>
    </div>
  );
}
