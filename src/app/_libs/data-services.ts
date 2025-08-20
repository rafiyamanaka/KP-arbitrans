import { format } from "date-fns";
import { Booking } from "../_types/booking";
import { Kendaraan } from "../_types/kendaraan";
import { supabase } from "./supabase";

export const getKendaraan = async function (
  jenisKendaraan?: string,
  startDate?: string,
  endDate?: string
): Promise<Kendaraan[]> {
  const today = format(new Date(), "yyyy-MM-dd");

  const filterStart = startDate || today;
  const filterEnd = endDate || today;

  console.log(filterStart, filterEnd, jenisKendaraan);

  // Query booking
  const { data: bookingHariIni, error: errorBooking } = await supabase
    .from("booking")
    .select("id_kendaraan, tanggal_mulai, tanggal_akhir, status")
    .or(
      `and(tanggal_mulai.lte.${filterEnd},tanggal_akhir.gte.${filterStart},status.neq.Selesai),` +
        `and(tanggal_akhir.lt.${filterStart},status.eq.Telat)`
    );

  if (errorBooking) {
    console.error("Error ambil booking: ", errorBooking);
    throw new Error("Gagal cek data booking.");
  }

  const mapBooking = new Map<number, Booking>();
  bookingHariIni?.forEach((b) => {
    mapBooking.set(b.id_kendaraan, b);
  });

  // Query kendaraan
  let kendaraanQuery = supabase
    .from("kendaraan")
    .select(
      "nama_kendaraan, id, harga_sewa, kapasitas_penumpang, luas_bagasi, transmisi, bahan_bakar, jenis_kendaraan, imageKendaraan(url_gambar)"
    )
    .order("nama_kendaraan");

  // Filter jenis
  if (jenisKendaraan) {
    kendaraanQuery = kendaraanQuery.eq("jenis_kendaraan", jenisKendaraan);
  }

  const { data: semuaKendaraan, error: errorKendaraan } = await kendaraanQuery;

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

  // Urutkan: Tersedia dulu, Disewa terakhir
  const hasilUrut = hasil?.sort((a, b) => {
    if (a.statusHariIni === "Disewa" && b.statusHariIni !== "Disewa") return 1;
    if (a.statusHariIni !== "Disewa" && b.statusHariIni === "Disewa") return -1;
    return 0;
  });

  return hasilUrut;
};

export const getDataKendaraan = async function (id: number) {
  const { data: kendaraan, error: errorKendaraan } = await supabase
    .from("kendaraan")
    .select("*, imageKendaraan(url_gambar)")
    .eq("id", id)
    .single<Kendaraan>();

  if (errorKendaraan) {
    console.error("Error ambil kendaraan: ", errorKendaraan);
    throw new Error("Data kendaraan tidak bisa diambil.");
  }

  return kendaraan;
};

export const createRental = async function () {};
