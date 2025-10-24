"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HasilRegistrasi() {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("formData");
        if (saved) setData(JSON.parse(saved));
    }, []);

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const handleSave = () => {
        localStorage.setItem("formData", JSON.stringify(data));
        setIsEdit(false);
    };

    if (!data) return <p className="text-center mt-10">Belum ada data.</p>;

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center text-purple-700 mb-6">Hasil Registrasi</h1>

                {isEdit ? (
                    <div className="space-y-4">
                        <div>
                            <label className="block font-semibold text-gray-700">Nama Lengkap</label>
                            <input
                                name="nama"
                                className="w-full p-2 border rounded-lg"
                                value={data.nama}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Email</label>
                            <input
                                name="email"
                                className="w-full p-2 border rounded-lg"
                                value={data.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div>
                            <label className="block font-semibold text-gray-700">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="w-full p-2 border rounded-lg"
                                value={data.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            onClick={handleSave}
                            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg font-semibold"
                        >
                            Simpan Perubahan
                        </button>

                        <button
                            onClick={() => setIsEdit(false)}
                            className="w-full bg-gray-100 py-2 rounded-lg font-semibold"
                        >
                            Batal
                        </button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <p><b>Nama Lengkap:</b> {data.nama}</p>
                        <p><b>Email:</b> {data.email}</p>
                        <p><b>Password:</b> {data.password}</p>

                        <button
                            onClick={() => setIsEdit(true)}
                            className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 rounded-lg font-semibold"
                        >
                            Edit Data
                        </button>

                        <button
                            onClick={() => router.push("/")}
                            className="w-full bg-gray-100 py-2 rounded-lg font-semibold"
                        >
                            Kembali ke Form Awal
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
