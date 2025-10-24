"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormRegistrasi() {
    const router = useRouter();
    const [formData, setFormData] = useState({ nama: "", email: "", password: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.nama) newErrors.nama = "Nama wajib diisi.";
        else if (/\d/.test(formData.nama))
            newErrors.nama = "Nama tidak boleh mengandung angka.";
        if (!formData.email) newErrors.email = "Email wajib diisi.";
        else if (!formData.email.includes("@"))
            newErrors.email = "Alamat email harus mengandung '@'.";
        if (!formData.password)
            newErrors.password = "Password wajib diisi.";
        else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(formData.password))
            newErrors.password = "Password harus kombinasi huruf besar, kecil, angka, dan simbol.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        localStorage.setItem("formData", JSON.stringify(formData));
        router.push("/hasil");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">Form Registrasi</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-semibold text-gray-700">Nama Lengkap</label>
                        <input
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            className={`w-full p-2 border rounded-lg focus:outline-none ${errors.nama ? "border-red-500" : "border-gray-300"
                                }`}
                            value={formData.nama}
                            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                        />
                        {errors.nama && <p className="text-red-500 text-sm">{errors.nama}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Masukkan email aktif"
                            className={`w-full p-2 border rounded-lg focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Masukkan password"
                            className={`w-full p-2 border rounded-lg focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                                }`}
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
                    >
                        Daftar Sekarang
                    </button>
                </form>
            </div>
        </div>
    );
}
