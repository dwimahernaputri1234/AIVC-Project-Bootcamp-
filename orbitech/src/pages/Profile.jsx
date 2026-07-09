import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { customers, installations } from "../data/mockData";
import SectionTitle from "../components/layout/SectionTitle";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";

export default function Profile() {
  const { user } = useApp();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const userData = customers.find((c) => c.email === user.email) || user;
  const userInstallations = installations.filter((i) => i.customerName === userData.name);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: userData.name,
    phone: userData.phone,
    email: userData.email,
    address: userData.address,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
  };

  const statusColor = {
    active: "success",
    pending: "warning",
    suspended: "danger",
    in_progress: "info",
    scheduled: "primary",
    completed: "success",
  };

  return (
    <main className="flex-grow">
      <section className="px-margin-mobile md:px-margin-desktop py-xl max-w-[900px] mx-auto">
        <SectionTitle>Profil Saya</SectionTitle>

        <div className="neubrutal-border bg-white neubrutal-shadow p-lg mb-xl">
          <div className="flex items-center justify-between mb-md pb-md border-b-2 border-black">
            <div className="flex items-center gap-md">
              <div className="w-16 h-16 neubrutal-border bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl text-primary">person</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md">{userData.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{userData.email}</p>
              </div>
            </div>
            <Badge variant={statusColor[userData.status] || "default"}>{userData.status}</Badge>
          </div>

          {editing ? (
            <div className="space-y-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <Input label="Nama" name="name" value={form.name} onChange={handleChange} />
                <Input label="Telepon" name="phone" value={form.phone} onChange={handleChange} />
                <Input label="Email" name="email" value={form.email} onChange={handleChange} />
                <Input label="Alamat" name="address" value={form.address} onChange={handleChange} />
              </div>
              <div className="flex gap-sm">
                <button onClick={handleSave} className="neubrutal-border bg-primary text-on-primary px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase cursor-pointer">
                  Simpan
                </button>
                <button onClick={() => setEditing(false)} className="neubrutal-border bg-white text-on-surface px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase cursor-pointer">
                  Batal
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <div>
                <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Telepon</p>
                <p className="font-body-md text-body-md">{userData.phone}</p>
              </div>
              <div>
                <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Alamat</p>
                <p className="font-body-md text-body-md">{userData.address}</p>
              </div>
              {userData.package && (
                <>
                  <div>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Paket Aktif</p>
                    <p className="font-body-md text-body-md">{userData.package}</p>
                  </div>
                  <div>
                    <p className="font-label-mono text-label-mono text-on-surface-variant uppercase">Bergabung Sejak</p>
                    <p className="font-body-md text-body-md">{userData.registerDate}</p>
                  </div>
                </>
              )}
              <div className="md:col-span-2 pt-md">
                <button onClick={() => setEditing(true)} className="neubrutal-border bg-primary text-on-primary px-6 py-3 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase flex items-center gap-xs cursor-pointer">
                  <span className="material-symbols-outlined">edit</span>
                  Edit Profil
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Installation History */}
        <h3 className="font-headline-md text-headline-md mb-md">Riwayat Instalasi</h3>
        {userInstallations.length > 0 ? (
          <div className="space-y-md">
            {userInstallations.map((inst) => (
              <div key={inst.id} className="neubrutal-border bg-white neubrutal-shadow p-md flex flex-col md:flex-row items-start justify-between gap-md">
                <div>
                  <h4 className="font-headline-md text-headline-md">{inst.package}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{inst.date} | {inst.time}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">{inst.address}</p>
                </div>
                <div className="text-right">
                  <Badge variant={statusColor[inst.status] || "default"}>{inst.status}</Badge>
                  {inst.technician && (
                    <p className="font-label-mono text-label-mono text-on-surface-variant mt-1">{inst.technician}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="neubrutal-border bg-surface-container p-lg text-center">
            <p className="font-body-md text-body-md text-on-surface-variant">Belum ada riwayat instalasi.</p>
          </div>
        )}
      </section>
    </main>
  );
}
