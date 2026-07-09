import { useState } from "react";
import { coverageAreas } from "../../data/mockData";
import Table, { TableRow, TableData } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Input from "../../components/ui/Input";

export default function Areas() {
  const [search, setSearch] = useState("");

  const filtered = coverageAreas.filter((a) =>
    a.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
        <div>
          <h2 className="font-headline-lg text-headline-lg">Area Jangkauan</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Kelola kota dan kecamatan yang terjangkau</p>
        </div>
        <Input
          placeholder="Cari kota..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon="search"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {filtered.map((area) => (
          <div
            key={area.id}
            className={`neubrutal-border p-md neubrutal-shadow ${
              area.available ? "bg-white" : "bg-surface-container opacity-70"
            }`}
          >
            <div className="flex items-center justify-between mb-sm">
              <h4 className="font-headline-md text-headline-md">{area.city}</h4>
              <Badge variant={area.available ? "success" : "warning"}>
                {area.available ? "Tersedia" : "Segera"}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-xs">
              {area.districts.map((d, i) => (
                <span key={i} className="neubrutal-border px-2 py-1 font-label-mono text-label-mono bg-surface-container-low">{d}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
