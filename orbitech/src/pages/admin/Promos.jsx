import { useState } from "react";
import { promos } from "../../data/mockData";
import Table, { TableRow, TableData } from "../../components/ui/Table";
import Badge from "../../components/ui/Badge";
import Modal from "../../components/ui/Modal";

export default function Promos() {
  const [showModal, setShowModal] = useState(false);
  const [editingPromo, setEditingPromo] = useState(null);

  const openEdit = (promo) => {
    setEditingPromo(promo);
    setShowModal(true);
  };

  const openAdd = () => {
    setEditingPromo(null);
    setShowModal(true);
  };

  return (
    <div className="space-y-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg">Promo & Diskon</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Atur kode promo dan penawaran spesial</p>
        </div>
        <button
          onClick={openAdd}
          className="neubrutal-border bg-primary text-on-primary px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase flex items-center gap-xs cursor-pointer"
        >
          <span className="material-symbols-outlined">add</span>
          Tambah Promo
        </button>
      </div>

      <Table headers={["Kode", "Diskon", "Deskripsi", "Berlaku Hingga", "Status"]}>
        {promos.map((p) => (
          <TableRow key={p.id} className="cursor-pointer" onClick={() => openEdit(p)}>
            <TableData className="font-label-bold text-primary">{p.code}</TableData>
            <TableData><Badge variant="warning">{p.discount}</Badge></TableData>
            <TableData>{p.description}</TableData>
            <TableData>{p.validUntil}</TableData>
            <TableData>
              <Badge variant={p.active ? "success" : "danger"}>{p.active ? "Aktif" : "Nonaktif"}</Badge>
            </TableData>
          </TableRow>
        ))}
      </Table>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title={editingPromo ? "Edit Promo" : "Tambah Promo Baru"}>
        <div className="space-y-md">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {editingPromo ? `Mengedit: ${editingPromo.code}` : "Isi detail promo baru"}
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
