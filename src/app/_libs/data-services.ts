import { Booking } from "../types/booking";
import { Kendaraan } from "../types/kendaraan";
import { supabase } from "./supabase";
import { format } from "date-fns";

export const getKendaraan = async function (): Promise<Kendaraan[]> {
  const today = format(new Date(), "yyyy-MM-dd");

  const { data: bookingHariIni, error: errorBooking } = await supabase
    .from("booking")
    .select("id_kendaraan, tanggal_mulai, tanggal_akhir, status")
    .or(
      `and(tanggal_mulai.lte.${today},tanggal_akhir.gte.${today},status.neq.Selesai),and(tanggal_akhir.lt.${today},status.eq.Telat)`
    );

  if (errorBooking) {
    console.error("Error ambil booking: ", errorBooking);
    throw new Error("Gagal cek data booking.");
  }

  const mapBooking = new Map<number, Booking>();
  bookingHariIni?.forEach((b) => {
    mapBooking.set(b.id_kendaraan, b);
  });

  const { data: semuaKendaraan, error: errorKendaraan } = await supabase
    .from("kendaraan")
    .select("*, imageKendaraan(url_gambar)")
    .order("nama_kendaraan");

  if (errorKendaraan) {
    console.error("Error ambil kendaraan: ", errorKendaraan);
    throw new Error("Data kendaraan tidak bisa diambil.");
  }

  // Gabungkan info status
  const hasil = semuaKendaraan?.map((k) => {
    const booking = mapBooking.get(k.id);
    if (booking) {
      return {
        ...k,
        statusHariIni: "Disewa",
        tanggal_mulai: booking.tanggal_mulai,
        tanggal_akhir: booking.tanggal_akhir,
      };
    } else {
      return {
        ...k,
        statusHariIni: "Tersedia",
      };
    }
  });

  return hasil;
};
