import { FaCalendarAlt, FaRoute, FaComments, FaKey } from "react-icons/fa";

export default function LayananKami() {
  return (
    <section className="py-[100px] bg-white">
      <div className="text-center mb-12">
        <p className="text-blue-500 font-medium">Pelayanan Kami</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Layanan Kami Sesuai dengan <br /> Kebutuhan Anda
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-[#196FEB]/10 rounded-lg p-6 text-center h-[232px]">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            <FaCalendarAlt />
          </div>
          <h3 className="font-semibold mb-2">Sewa Harian</h3>
          <p className="text-gray-600 text-sm">
            Pilihan fleksibel untuk keperluan pribadi, bisnis, atau wisata.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#196FEB]/10 rounded-lg p-6 text-center h-[232px]">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            <FaRoute />
          </div>
          <h3 className="font-semibold mb-2">Dalam Kota dan Luar Kota</h3>
          <p className="text-gray-600 text-sm">
            Cocok untuk mobilitas harian, acara keluarga, atau tugas kantor.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#196FEB]/10 rounded-lg p-6 text-center h-[232px]">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            <FaComments />
          </div>
          <h3 className="font-semibold mb-2">Antar–Jemput Kendaraan</h3>
          <p className="text-gray-600 text-sm">
            Kendaraan bisa diantar ke lokasi Anda dan dijemput setelah masa sewa berakhir.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#196FEB]/10 rounded-lg p-6 text-center h-[232px]">
          <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
            <FaKey />
          </div>
          <h3 className="font-semibold mb-2">Dengan atau Tanpa Supir</h3>
          <p className="text-gray-600 text-sm">
            Tersedia pilihan self-drive atau supir berpengalaman sesuai permintaan.
          </p>
        </div>
      </div>
    </section>
  );
}
