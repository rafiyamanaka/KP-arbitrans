"use client";

import { FaUserFriends, FaSuitcase, FaCogs, FaGasPump } from "react-icons/fa";

type VehicleCardProps = {
  name: string;
  passengers: number | string;
  luggage: number | string;
  transmission: string;
  fuel: string;
  price: string;
  image?: string;
};

export default function VehicleCard({
  name,
  passengers,
  luggage,
  transmission,
  fuel,
  price,
  image,
}: VehicleCardProps) {
  return (
    <div className="w-full max-w-[293px] h-auto rounded-2xl border border-[#CED4DA] bg-white p-4 flex flex-col">
      {/* Gambar */}
      <div className="w-full h-[180px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-400 text-4xl"></span>
        )}
      </div>

      {/* Info Kendaraan */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-semibold text-[16px] text-gray-900">{name}</h3>

        <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-[12px] text-gray-700 mt-2">
          <div className="flex items-center gap-1">
            <FaUserFriends className="text-blue-600 text-[14px]" />
            <span>{passengers} Penumpang</span>
          </div>
          <div className="flex items-center gap-1">
            <FaSuitcase className="text-blue-600 text-[14px]" />
            <span>{luggage} Koper</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCogs className="text-blue-600 text-[14px]" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaGasPump className="text-blue-600 text-[14px]" />
            <span>{fuel}</span>
          </div>
        </div>
      </div>

      {/* Harga + Tombol */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-600">Harga</p>
          <p className="font-bold text-[14px]">{price}</p>
        </div>
        <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-[18px] rounded-xl transition">
          Lihat Detail →
        </button>
      </div>
    </div>
  );
}
