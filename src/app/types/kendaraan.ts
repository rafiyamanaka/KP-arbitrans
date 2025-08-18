export interface ImageKendaraan {
  url_gambar: string;
}

export interface Kendaraan {
  id: number;
  nama_kendaraan: string;
  jenis_kendaraan: string;
  harga_sewa: number;
  tipe_kendaraan: string;
  transmisi: string;
  kapasitas_penumpang: string;
  bahan_bakar: string;
  luas_bagasi: string;
  tahun_produksi: string;
  deskripsi_kendaraan: string;
  imageKendaraan: ImageKendaraan[];
  statusHariIni: "Tersedia" | "Disewa";
  tanggal_mulai?: string;
  tanggal_akhir?: string;
}
