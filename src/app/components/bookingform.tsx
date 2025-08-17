export default function BookingForm() {
    return (
        <div className="w-[350px] bg-white shadow-md rounded-2xl p-5 border sticky top-4">
            <h3 className="text-lg font-semibold mb-3">Form Penyewaan</h3>
            <form className="space-y-4 overflow-y-auto max-h-[780px] pr-2">
                <div>
                    <label className="block text-sm text-gray-600 mb-1" htmlFor="start-date">
                        Tanggal Awal Sewa
                    </label>
                    <input
                        id="start-date"
                        type="date"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600 mb-1" htmlFor="end-date">
                        Tanggal Akhir Sewa
                    </label>
                    <input
                        id="end-date"
                        type="date"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600 mb-1" htmlFor="full-name">
                        Nama Lengkap
                    </label>
                    <input
                        id="full-name"
                        type="text"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600 mb-1" htmlFor="nik">
                        NIK
                    </label>
                    <input
                        id="nik"
                        type="text"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600 mb-1" htmlFor="phone">
                        No Telepon
                    </label>
                    <input
                        id="phone"
                        type="text"
                        className="w-full border rounded-lg px-3 py-2"
                    />
                </div>
                <div>
                    <label className="block text-sm text-gray-600 mb-1" htmlFor="address">
                        Alamat
                    </label>
                    <textarea
                        id="address"
                        className="w-full border rounded-lg px-3 py-2"
                        rows={2}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Buat Pemesanan
                </button>
                <p className="text-xs text-gray-400 mt-2 justify-center text-center">
                    Data yang diberikan hanya untuk keperluan penyewaan kendaraan tidak untuk lainnya.
                </p>
            </form>
        </div>
    );
}
