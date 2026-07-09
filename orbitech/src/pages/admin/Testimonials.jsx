import { useState } from "react";
import { testimonials } from "../../data/mockData";
import Modal from "../../components/ui/Modal";

const StarRating = ({ rating }) => (
  <div className="flex gap-xs">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={`material-symbols-outlined text-lg ${star <= rating ? "text-tertiary" : "text-outline"}`}>
        {star <= rating ? "star" : "star_border"}
      </span>
    ))}
  </div>
);

export default function Testimonials() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-headline-lg text-headline-lg">Testimoni Pelanggan</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Atur testimoni yang ditampilkan di halaman utama</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="neubrutal-border bg-primary text-on-primary px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase flex items-center gap-xs cursor-pointer"
        >
          <span className="material-symbols-outlined">add</span>
          Tambah Testimoni
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {testimonials.map((t) => (
          <div key={t.id} className="neubrutal-border bg-white neubrutal-shadow p-lg">
            <div className="flex items-center gap-md mb-md">
              <div className="w-12 h-12 neubrutal-border bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
              <div>
                <h4 className="font-headline-md text-headline-md">{t.name}</h4>
                <p className="font-label-mono text-label-mono text-on-surface-variant">{t.package}</p>
              </div>
            </div>
            <StarRating rating={t.rating} />
            <p className="font-body-md text-body-md text-on-surface-variant mt-md italic">&ldquo;{t.text}&rdquo;</p>
            <p className="font-label-mono text-label-mono text-outline mt-md">{t.date}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Tambah Testimoni Baru">
        <div className="space-y-md">
          <p className="font-body-md text-body-md text-on-surface-variant">Isi detail testimoni pelanggan</p>
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
