"use client";
import Button from "@/app/_components/Button";
import InputDate from "@/app/_components/InputDate";
import { useSearch } from "@/app/_context/SearchContext";

export default function BookingForm() {
  const { dates } = useSearch();
  return (
    <div className=" bg-netral-100 w-full rounded-2xl p-4 border border-netral-400 sticky top-24">
      <h3 className="text-lg font-semibold mb-6 flex items-center justify-center ">
        Form Penyewaan
      </h3>

      <form className="space-y-4">
        <div className="border border-netral-400 rounded-xl p-4 space-y-4 shadow-sm">
          <div>
            <label
              className="block font-medium text-sm text-netral-900 mb-2"
              htmlFor="start-date"
            >
              Tanggal Awal Sewa
            </label>
            <InputDate
              selected={dates.startDate}
              disabled={true}
              placeholderText="Pilih tanggal awal"
            />
          </div>

          <div>
            <label
              className="block font-medium text-sm text-netral-900 mb-2"
              htmlFor="end-date"
            >
              Tanggal Akhir Sewa
            </label>
            <InputDate
              selected={dates.endDate}
              disabled={true}
              placeholderText="Pilih tanggal akhir"
            />
          </div>
        </div>

        <h4 className="text-sm font-medium text-netral-900 mt-6">
          Data Perental
        </h4>

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="text"
          placeholder="NIK"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="text"
          placeholder="No Telephone"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
        />

        <textarea
          placeholder="Alamat"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
          rows={3}
        ></textarea>

        <Button text="Buat Pesanan" className="w-full px-6 py-3.5" />

        <p className="text-xs text-netral-600 mt-2 text-center leading-relaxed">
          Data yang diberikan hanya untuk keperluan penyewaan kendaraan tidak
          untuk lainnya.
        </p>
      </form>
    </div>
  );
}
