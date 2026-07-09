import { useState } from "react";
import { customers } from "../../data/mockData";
import Table, { TableRow, TableData } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";

export default function Customers() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  const statusBadge = (status) => {
    const variants = { active: "success", pending: "warning", suspended: "danger" };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="space-y-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg">Manajemen Pelanggan</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Kelola data pelanggan Orbit Connection</p>
        </div>
        <Input
          placeholder="Cari pelanggan..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon="search"
        />
      </div>

      <Table headers={["Nama", "Email", "Telepon", "Paket", "Alamat", "Status"]}>
        {filtered.map((c) => (
          <TableRow key={c.id}>
            <TableData className="font-label-bold">{c.name}</TableData>
            <TableData>{c.email}</TableData>
            <TableData>{c.phone}</TableData>
            <TableData>{c.package}</TableData>
            <TableData className="max-w-[200px] truncate">{c.address}</TableData>
            <TableData>{statusBadge(c.status)}</TableData>
          </TableRow>
        ))}
      </Table>
    </div>
  );
}
