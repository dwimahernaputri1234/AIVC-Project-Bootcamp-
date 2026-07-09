export const packages = [
  {
    id: 1,
    name: "Orbit 20",
    speed: "20 Mbps",
    price: 150000,
    duration: "30 hari",
    features: ["Streaming SD", "Video Call", "Browsing", "Media Sosial", "5 Perangkat"],
    popular: false,
    badge: null,
  },
  {
    id: 2,
    name: "Orbit 50",
    speed: "50 Mbps",
    price: 250000,
    duration: "30 hari",
    features: ["Streaming HD", "Video Call 4K", "Gaming Ringan", "10 Perangkat", "WiFi 5 GHz"],
    popular: true,
    badge: "Terpopuler",
  },
  {
    id: 3,
    name: "Orbit 100",
    speed: "100 Mbps",
    price: 400000,
    duration: "30 hari",
    features: ["Streaming 4K", "Gaming Pro", "Smart Home", "15 Perangkat", "Prioritas Support"],
    popular: false,
    badge: "Best Value",
  },
  {
    id: 4,
    name: "Orbit 200",
    speed: "200 Mbps",
    price: 650000,
    duration: "30 hari",
    features: ["Streaming 8K", "Content Creator", "VPN Support", "25 Perangkat", "Dedicated Support"],
    popular: false,
    badge: null,
  },
  {
    id: 5,
    name: "Orbit Bisnis 100",
    speed: "100 Mbps",
    price: 750000,
    duration: "30 hari",
    features: ["IP Statis", "SLA 99.9%", "Prioritas 24/7", "30 Perangkat", "Backup 4G"],
    popular: false,
    badge: "Bisnis",
  },
  {
    id: 6,
    name: "Orbit Bisnis 300",
    speed: "300 Mbps",
    price: 1500000,
    duration: "30 hari",
    features: ["IP Statis Ganda", "SLA 99.99%", "Dedicated Account", "50 Perangkat", "Backup Fiber"],
    popular: false,
    badge: "Bisnis",
  },
];

export const coverageAreas = [
  { id: 1, city: "Jakarta Pusat", districts: ["Menteng", "Tanah Abang", "Senayan", "Gambir", "Cempaka Putih"], available: true },
  { id: 2, city: "Jakarta Selatan", districts: ["Kebayoran Baru", "Setiabudi", "Tebet", "Pancoran", "Mampang"], available: true },
  { id: 3, city: "Jakarta Barat", districts: ["Kembangan", "Kebon Jeruk", "Tomang", "Grogol", "Taman Sari"], available: true },
  { id: 4, city: "Jakarta Timur", districts: ["Cakung", "Duren Sawit", "Pulo Gadung", "Matraman", "Jatinegara"], available: true },
  { id: 5, city: "Jakarta Utara", districts: ["Kelapa Gading", "Pluit", "Penjaringan", "Koja", "Tanjung Priok"], available: true },
  { id: 6, city: "Bandung", districts: ["Cihampelas", "Dago", "Buah Batu", "Cimahi", "Sukajadi"], available: true },
  { id: 7, city: "Surabaya", districts: ["Tunjungan", "Gubeng", "Wonokromo", "Rungkut", "Mulyorejo"], available: true },
  { id: 8, city: "Yogyakarta", districts: ["Malioboro", "Demangan", "Timoho", "Gejayan", "Seturan"], available: false },
  { id: 9, city: "Semarang", districts: ["Simpang Lima", "Pandanaran", "Tembalang", "Ngaliyan", "Manyaran"], available: false },
  { id: 10, city: "Banda Aceh", districts: ["Baiturrahman", "Kuta Alam", "Syiah Kuala", "Ulee Kareng", "Lueng Bata", "Meuraxa", "Jaya Baru", "Banda Raya", "Kuta Raja"], available: true },
  { id: 11, city: "Aceh Besar", districts: ["Jantho", "Darussalam", "Kota Jantho", "Indrapuri", "Montasik", "Sukamakmur", "Ingin Jaya", "Krueng Barona Jaya", "Lembah Seulawah"], available: true },
  { id: 12, city: "Lhokseumawe", districts: ["Muara Satu", "Muara Dua", "Banda Sakti", "Blang Mangat"], available: true },
  { id: 13, city: "Langsa", districts: ["Langsa Barat", "Langsa Kota", "Langsa Lama", "Langsa Timur", "Langsa Baro"], available: true },
  { id: 14, city: "Aceh Utara", districts: ["Lhoksukon", "Dewantara", "Matangkuli", "Cot Girek", "Tanah Luas"], available: false },
  { id: 15, city: "Pidie", districts: ["Sigli", "Mila", "Delima", "Tangse", "Tiro"], available: false },
  { id: 16, city: "Aceh Tengah", districts: ["Takengon", "Bebesen", "Kebayakan", "Pegasing", "Silih Nara"], available: false },
];

export const customers = [
  { id: 1, name: "Budi Santoso", phone: "081234567890", email: "budi@email.com", address: "Jl. Menteng Raya No. 10", package: "Orbit 100", status: "active", registerDate: "2024-01-15" },
  { id: 2, name: "Siti Rahma", phone: "081234567891", email: "siti@email.com", address: "Jl. Sudirman No. 25", package: "Orbit 50", status: "active", registerDate: "2024-02-20" },
  { id: 3, name: "Ahmad Hidayat", phone: "081234567892", email: "ahmad@email.com", address: "Jl. Kebon Jeruk No. 5", package: "Orbit 200", status: "pending", registerDate: "2025-06-01" },
  { id: 4, name: "Dewi Lestari", phone: "081234567893", email: "dewi@email.com", address: "Jl. Kelapa Gading No. 15", package: "Orbit Bisnis 100", status: "active", registerDate: "2024-03-10" },
  { id: 5, name: "Rudi Hermawan", phone: "081234567894", email: "rudi@email.com", address: "Jl. Dago No. 8", package: "Orbit 20", status: "suspended", registerDate: "2024-05-25" },
];

export const installations = [
  { id: 1, customerName: "Budi Santoso", package: "Orbit 100", date: "2025-07-15", time: "09:00 - 12:00", technician: "Teknisi A", status: "scheduled", address: "Jl. Menteng Raya No. 10" },
  { id: 2, customerName: "Siti Rahma", package: "Orbit 50", date: "2025-07-16", time: "13:00 - 16:00", technician: "Teknisi B", status: "scheduled", address: "Jl. Sudirman No. 25" },
  { id: 3, customerName: "Ahmad Hidayat", package: "Orbit 200", date: "2025-06-30", time: "10:00 - 12:00", technician: "Teknisi C", status: "completed", address: "Jl. Kebon Jeruk No. 5" },
  { id: 4, customerName: "Dewi Lestari", package: "Orbit Bisnis 100", date: "2025-07-18", time: "08:00 - 11:00", technician: "Teknisi A", status: "in_progress", address: "Jl. Kelapa Gading No. 15" },
];

export const registrationRequests = [
  { id: 1, name: "Ahmad Hidayat", phone: "081234567892", email: "ahmad@email.com", package: "Orbit 200", address: "Jl. Kebon Jeruk No. 5", area: "Jakarta Barat", date: "2025-06-01", status: "pending", notes: "Preferensi instalasi pagi hari" },
  { id: 2, name: "Fitriani", phone: "081234567895", email: "fitri@email.com", package: "Orbit 50", address: "Jl. Senayan No. 12", area: "Jakarta Pusat", date: "2025-06-05", status: "approved", notes: "" },
  { id: 3, name: "Hendra Gunawan", phone: "081234567896", email: "hendra@email.com", package: "Orbit 100", address: "Jl. Gubeng No. 7", area: "Surabaya", date: "2025-06-10", status: "rejected", notes: "Area belum terjangkau" },
];

export const promos = [
  { id: 1, code: "ORBIT50", discount: "50%", description: "Diskon 50% bulan pertama untuk semua paket", validUntil: "2025-08-31", active: true },
  { id: 2, code: "GRATIS100", discount: "Gratis", description: "Biaya instalasi gratis untuk paket Orbit 100+", validUntil: "2025-09-30", active: true },
  { id: 3, code: "REFERRAL20", discount: "20%", description: "Diskon 20% untuk referral 5 teman", validUntil: "2025-12-31", active: true },
  { id: 4, code: "BISNIS30", discount: "30%", description: "Diskon 30% paket Bisnis untuk pendaftaran baru", validUntil: "2025-08-15", active: false },
];

export const testimonials = [
  { id: 1, name: "Budi Santoso", package: "Orbit 100", rating: 5, text: "Internetnya sangat cepat! Streaming 4K tanpa buffering. Teknisi datang tepat waktu.", avatar: null, date: "2025-05-20" },
  { id: 2, name: "Siti Rahma", package: "Orbit 50", rating: 4, text: "Puas dengan layanannya. Harga terjangkau untuk kecepatan yang didapatkan.", avatar: null, date: "2025-04-15" },
  { id: 3, name: "Dewi Lestari", package: "Orbit Bisnis 100", rating: 5, text: "Sangat recommended untuk bisnis! Supportnya cepat dan profesional.", avatar: null, date: "2025-03-10" },
];

export const technicians = [
  { id: 1, name: "Teknisi A", skill: "Senior", available: true },
  { id: 2, name: "Teknisi B", skill: "Junior", available: true },
  { id: 3, name: "Teknisi C", skill: "Senior", available: false },
  { id: 4, name: "Teknisi D", skill: "Junior", available: true },
];

export const orderStatusSteps = [
  { key: "pending", label: "Pengajuan Diterima", icon: "description" },
  { key: "verified", label: "Verifikasi Data", icon: "fact_check" },
  { key: "scheduled", label: "Jadwal Ditentukan", icon: "calendar_month" },
  { key: "installation", label: "Proses Instalasi", icon: "construction" },
  { key: "completed", label: "Aktif & Siap Pakai", icon: "verified" },
];
