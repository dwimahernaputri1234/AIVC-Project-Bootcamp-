import { NavLink } from "react-router-dom";

const menuItems = [
  { path: "/admin", label: "Dashboard", icon: "dashboard" },
  { path: "/admin/customers", label: "Pelanggan", icon: "group" },
  { path: "/admin/packages", label: "Paket", icon: "wifi" },
  { path: "/admin/areas", label: "Area Jangkauan", icon: "map" },
  { path: "/admin/schedules", label: "Jadwal", icon: "calendar_month" },
  { path: "/admin/promos", label: "Promo", icon: "local_offer" },
  { path: "/admin/testimonials", label: "Testimoni", icon: "rate_review" },
  { path: "/admin/statistics", label: "Statistik", icon: "bar_chart" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 shrink-0 bg-surface border-r-2 border-black hidden lg:block">
      <div className="p-md">
        <div className="neubrutal-border bg-primary text-on-primary p-md text-center mb-md">
          <p className="font-label-bold text-label-bold uppercase">Admin Panel</p>
        </div>
        <nav className="space-y-xs">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-sm px-4 py-3 font-body-md text-body-md neubrutal-border transition-all ${
                  isActive
                    ? "bg-primary text-on-primary neubrutal-shadow"
                    : "bg-white text-on-surface hover:bg-surface-container"
                }`
              }
            >
              <span className="material-symbols-outlined text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
}
