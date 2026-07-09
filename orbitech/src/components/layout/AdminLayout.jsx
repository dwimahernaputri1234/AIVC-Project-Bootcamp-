import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

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

export default function AdminLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-[calc(100vh-80px)]">
      <AdminSidebar />

      {/* Mobile Nav */}
      <div className="lg:hidden w-full">
        <div className="px-margin-mobile py-md border-b-2 border-black bg-surface">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neubrutal-border bg-primary text-on-primary px-4 py-2 neubrutal-shadow neubrutal-active font-label-bold text-label-bold uppercase flex items-center gap-xs cursor-pointer"
          >
            <span className="material-symbols-outlined">menu</span>
            Menu Admin
          </button>
          {mobileMenuOpen && (
            <div className="mt-md space-y-xs">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/admin"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-sm px-4 py-3 font-body-md text-body-md neubrutal-border ${
                      isActive ? "bg-primary text-on-primary" : "bg-white text-on-surface"
                    }`
                  }
                >
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-gutter md:p-lg max-w-[1200px]">
        <Outlet />
      </div>
    </div>
  );
}
