"use server";

import { differenceInDays } from "date-fns";
import { redirect } from "next/navigation";
import { Booking } from "../_types/booking";
import { getKendaraan } from "./data-services";
import { supabase } from "./supabase";

export const createRental = async function (rentalData: Booking) {
  console.log(rentalData);

  // Insert booking ke database
  const { error } = await supabase
    .from("booking")
    .insert([rentalData])
    .select();

  if (error) {
    console.error("Error dalam membuat rental: ", error);
    throw new Error("Gagal membuat rental.");
  }

  // Ambil data kendaraan
  const { data: kendaraanData, error: kendaraanError } = await supabase
    .from("kendaraan")
    .select("nama_kendaraan, harga_sewa")
    .eq("id", rentalData.id_kendaraan)
    .single();

  if (kendaraanError || !kendaraanData) {
    console.error("Error ambil kendaraan: ", kendaraanError);
    throw new Error("Data kendaraan tidak ditemukan.");
  }

  // Format tanggal Indonesia
  const tglMulai = new Date(rentalData.tanggal_mulai!).toLocaleDateString(
    "id-ID",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  const tglAkhir = new Date(rentalData.tanggal_akhir!).toLocaleDateString(
    "id-ID",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  // Hitung total hari sewa
  const totalHari = differenceInDays(
    new Date(rentalData.tanggal_akhir!),
    new Date(rentalData.tanggal_mulai!)
  );

  // Hitung total harga
  const totalHarga = kendaraanData.harga_sewa * totalHari;

  // Pesan WA
  const pesan = `Halo, saya ${rentalData.nama_pelanggan} dengan alamat ${
    rentalData.alamat
  } akan menyewa kendaraan ${
    kendaraanData.nama_kendaraan
  } dari ${tglMulai} sampai ${tglAkhir} selama ${totalHari} hari dengan total Rp ${totalHarga.toLocaleString(
    "id-ID"
  )}.`;

  const encodedPesan = encodeURIComponent(pesan);

  // Redirect ke WhatsApp
  redirect(`https://wa.me/6281328864042?text=${encodedPesan}`);
};

export async function loadMoreKendaraan(
  currentCount: number,
  jenisKendaraan?: string,
  startDate?: string,
  endDate?: string
) {
  try {
    const additionalData = await getKendaraan(
      8,
      currentCount,
      jenisKendaraan,
      startDate,
      endDate
    );

    return {
      success: true,
      data: additionalData,
      hasMore: additionalData.length === 8,
    };
  } catch (error) {
    console.error("Error in loadMoreKendaraan:", error);
    return {
      success: false,
      error: "Gagal memuat data tambahan",
      data: [],
      hasMore: false,
    };
  }
}
