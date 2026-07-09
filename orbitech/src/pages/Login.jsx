import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { customers } from "../data/mockData";

const ADMIN_CREDENTIALS = { email: "admin@orbit.id", password: "admin123" };

export default function Login() {
  const { login } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.email === ADMIN_CREDENTIALS.email && form.password === ADMIN_CREDENTIALS.password) {
      login({ name: "Admin Orbit", email: form.email, role: "admin" }, true);
      navigate("/admin");
      return;
    }

    const customer = customers.find((c) => c.email === form.email);
    if (customer) {
      login({ name: customer.name, email: customer.email, phone: customer.phone, role: "customer" }, false);
      navigate("/profile");
      return;
    }

    if (form.email && form.password) {
      login({ name: form.email.split("@")[0], email: form.email, role: "customer" }, false);
      navigate("/profile");
      return;
    }

    setError("Email atau password salah");
  };

  return (
    <main className="flex-grow flex items-center justify-center px-5 py-16 md:py-24">
      <div className="w-full max-w-[440px]">
        <div className="bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl text-white">wifi</span>
            </div>
            <h2 className="font-display text-[24px] md:text-[26px] leading-tight tracking-tight text-on-surface mb-2">
              Masuk ke Akun
            </h2>
            <p className="font-body text-[15px] leading-relaxed text-on-surface-variant max-w-[320px] mx-auto break-words">
              Masuk untuk mengelola langganan dan melihat status pemasangan.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="font-label-bold text-[13px] uppercase tracking-wider text-on-surface-variant">Email</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-outline pointer-events-none">mail</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="admin@orbit.id"
                  className="w-full h-[48px] pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] text-on-surface placeholder:text-outline/60 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-label-bold text-[13px] uppercase tracking-wider text-on-surface-variant">Password</label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-outline pointer-events-none">lock</span>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="admin123"
                  className="w-full h-[48px] pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-lg text-[15px] text-on-surface placeholder:text-outline/60 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:bg-white focus:outline-none transition-all duration-200"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                <span className="material-symbols-outlined text-[18px] text-error shrink-0">error</span>
                <p className="font-body text-[14px] leading-snug text-error break-words">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-[48px] bg-primary text-white font-label-bold text-[14px] uppercase tracking-wider rounded-lg shadow-lg shadow-primary/25 hover:bg-primary-container hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Masuk
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="font-label-mono text-[12px] text-center text-outline/70 leading-relaxed break-words">
              Demo: <span className="font-medium text-on-surface-variant">admin@orbit.id</span> / <span className="font-medium text-on-surface-variant">admin123</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
