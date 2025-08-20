"use client";
import Button from "@/app/_components/Button";
import InputDate from "@/app/_components/InputDate";
import { useSearch } from "@/app/_context/SearchContext";
import { createRental } from "@/app/_libs/action";
import { Booking } from "@/app/_types/booking";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function BookingForm({ idKendaraan }: { idKendaraan: number }) {
  const { dates, isDateEmpty } = useSearch();
  const router = useRouter();

  useEffect(() => {
    if (isDateEmpty) {
      router.push("/rental");
    }
  }, [isDateEmpty]);

  return (
    <div className=" bg-netral-100 w-full rounded-2xl p-4 border border-netral-400 sticky top-24">
      <h3 className="text-lg font-semibold mb-6 flex items-center justify-center ">
        Form Penyewaan
      </h3>

      <form
        action={async (formData) => {
          const rentalData: Booking = {
            id_kendaraan: idKendaraan,
            tanggal_mulai: dates.startDate ?? null,
            tanggal_akhir: dates.endDate ?? null,
            status: "Pending",
            nama_pelanggan: formData.get("nama_pelanggan") as string,
            nik: formData.get("nik") as string,
            no_telephone: formData.get("no_telephone") as string,
            alamat: formData.get("alamat") as string,
          };

          await createRental(rentalData);
        }}
        className="space-y-4"
      >
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
          name="nama_pelanggan"
          type="text"
          placeholder="Nama Lengkap"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
        />

        <input
          name="nik"
          type="text"
          placeholder="NIK"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
        />

        <input
          name="no_telephone"
          type="text"
          placeholder="No Telephone"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
        />

        <textarea
          name="alamat"
          placeholder="Alamat"
          className="w-full border border-netral-400 text-netral-600 rounded-lg px-4 py-3 text-sm"
          rows={3}
        ></textarea>

        <Button
          text="Buat Pesanan"
          className="w-full px-6 py-3.5"
          type="submit"
        />

        <p className="text-xs text-netral-600 mt-2 text-center leading-relaxed">
          Data yang diberikan hanya untuk keperluan penyewaan kendaraan tidak
          untuk lainnya.
        </p>
      </form>
    </div>
  );
}
