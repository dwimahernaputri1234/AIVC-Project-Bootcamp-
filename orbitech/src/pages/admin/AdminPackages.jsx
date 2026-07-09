import { useState } from "react";
import { packages } from "../../data/mockData";
import Table, { TableRow, TableData } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Card from "../../components/ui/Card";
import Modal from "../../components/ui/Modal";

export default function AdminPackages() {
  const [showModal, setShowModal] = useState(false);
  const [editingPkg, setEditingPkg] = useState(null);

  const openEdit = (pkg) => {
    setEditingPkg(pkg);
    setShowModal(true);
  };

  const openAdd = () => {
    setEditingPkg(null);
    setShowModal(true);
  };

  return (
    <div className="space-y-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg">Manajemen Paket</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Atur paket internet yang ditawarkan</p>
        </div>
        <button
          onClick={openAdd}
          className="neubrutal-border bg-primary text-on-primary px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase flex items-center gap-xs cursor-pointer"
        >
          <span className="material-symbols-outlined">add</span>
          Tambah Paket
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {packages.map((pkg) => (
          <Card key={pkg.id} className="relative cursor-pointer hover:translate-x-[2px] hover:translate-y-[2px] transition-all" onClick={() => openEdit(pkg)}>
            {pkg.badge && (
              <div className="absolute -top-3 -right-3">
                <Badge variant={pkg.badge === "Terpopuler" ? "primary" : "warning"}>{pkg.badge}</Badge>
              </div>
            )}
            <h3 className="font-headline-md text-headline-md">{pkg.name}</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-2">{pkg.speed}</p>
            <p className="font-display text-headline-lg text-primary">Rp{pkg.price.toLocaleString("id-ID")}</p>
            <p className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-3">/{pkg.duration}</p>
            <div className="border-t-2 border-black pt-3">
              {pkg.features.map((f, i) => (
                <p key={i} className="font-body-md text-body-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-primary text-lg">check</span>
                  {f}
                </p>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editingPkg ? "Edit Paket" : "Tambah Paket Baru"}>
        <div className="space-y-md">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {editingPkg ? `Mengedit: ${editingPkg.name}` : "Isi detail paket internet baru"}
          </p>
          <div className="flex gap-sm pt-md">
            <button className="neubrutal-border bg-primary text-on-primary px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase cursor-pointer">
              Simpan
            </button>
            <button onClick={() => setShowModal(false)} className="neubrutal-border bg-white text-on-surface px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase cursor-pointer">
              Batal
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
