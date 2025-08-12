import { FaUserFriends, FaCogs } from "react-icons/fa";
import { GiSuitcase, GiGasPump } from "react-icons/gi";

export default function CarCard() {
  return (
    <div className="w-[293px] h-[482px] border border-gray-200 rounded-[16px] flex flex-col overflow-hidden bg-white">
      {/* Gambar placeholder */}
      <div className="flex justify-center pt-4">
        <div className="w-[261px] h-[240px] bg-gray-100 rounded-[16px]" />
      </div>

      {/* Konten */}
      <div className="flex flex-col flex-1 p-4 text-[12px]">
        <h3 className="text-[16px] font-semibold mb-4">Toyota Avanza</h3>

        {/* Informasi */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-[14px]" />
            <span>7 Penumpang</span>
          </div>
          <div className="flex items-center gap-2">
            <GiSuitcase className="text-[14px]" />
            <span>2 Koper</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCogs className="text-[14px]" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-2">
            <GiGasPump className="text-[14px]" />
            <span>Pertamax</span>
          </div>
        </div>

        <hr className="my-2" />

        {/* Harga */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500">Harga</span>
          <span className="text-[14px] font-bold">Rp350.000</span>
        </div>

        {/* Tombol */}
        <button
          className="w-full py-3 rounded-[8px] text-white font-medium flex items-center justify-center gap-2"
          style={{ backgroundColor: "#196FEB" }}
        >
          Lihat Detail
          <span>↗</span>
        </button>
      </div>
    </div>
  );
}
