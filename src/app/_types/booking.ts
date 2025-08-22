export interface Booking {
  id_kendaraan: number;
  tanggal_mulai: Date | null;
  tanggal_akhir: Date | null;
  status: string;
  nama_pelanggan?: string;
  nik?: string;
  no_telephone?: string;
  alamat?: string;
}
