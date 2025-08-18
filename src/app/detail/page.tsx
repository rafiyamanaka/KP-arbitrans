import Header from "../_components/header";
import Breadcrumbs from "../_components/breadcrumbs";
import Gallery from "../_components/galeri";
import BookingForm from "../_components/bookingform";
import CarCard from "../_components/card";
import Footer from "../_components/footer";

export default function DetailPage() {
  return (
    <>
      <Header />
      <div className="pt-[80px]">
        <Breadcrumbs />
        <Gallery />
      </div>
      <div className="px-[100px]">
        <div className="container flex items-center justify-between border-b border-gray-300 pb-4">
          <h3 className="text-[28px] font-semibold">Toyota Avanza</h3>
          <div className="flex flex-col items-end gap-1 leading-tight">
            <p className="text-[16px] text-gray-600">Harga Mulai</p>
            <p className="text-[22px] font-bold text-[#196FEB]">Rp 350.000</p>
          </div>
        </div>
      </div>

      {/* 2 Kolom: Info (kiri) dan Form (kanan) */}
      <div className="container px-[100px] py-4 flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Kolom Kiri: Info */}
        <div>
          {/* Deskripsi */}
          <h5 className="text-lg font-semibold py-3 text-[#212529]">
            Deskripsi Kendaraan
          </h5>
          <p className="text-md font-medium text-justify text-[#495057] leading-[28px]">
            Toyota Avanza adalah mobil MPV (Multi Purpose Vehicle) yang ideal
            untuk kebutuhan keluarga maupun perjalanan bersama rekan kerja.
            Memiliki kapasitas hingga 7 penumpang dengan ruang kabin yang lega
            dan desain interior yang nyaman. Ditenagai oleh mesin efisien dan
            tersedia dalam pilihan transmisi manual maupun otomatis, Avanza
            cocok digunakan untuk perjalanan dalam kota maupun luar kota.
          </p>

          {/* Spesifikasi */}
          <h5 className="mt-6 text-lg font-semibold text-[#212529] py-3">
            Spesifikasi Kendaraan
          </h5>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 text-md text-[#495057]">
            <div className="flex items-center gap-4">
              <img src="/board.svg" alt="" />
              <span>Tipe : Minibus 4 Pintu</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/settings.svg" alt="" />
              <span>Transmisi : Manual</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/passenger.svg" alt="" />
              <span>Kapasitas Penumpang : 7 Orang</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/fuel.svg" alt="" />
              <span>Bahan Bakar : Pertamax</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/box.svg" alt="" />
              <span>Bagasi : 1 Koper</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/write.svg" alt="" />
              <span>Tahun Produksi : 2021</span>
            </div>
          </div>

          <h5 className="mt-6 text-lg font-semibold text-[#212529] py-3">
            Informasi Penting untuk Dibaca Sebelum Menyewa
          </h5>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span>Penggunaan lepas kunci selama 12-18 jam dari mulai sewa</span>
          </div>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span>
              Sebelum pembayaran selesai, dokumen akan dilakukan verifikasi
              terlebih dahulu
            </span>
          </div>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span>
              Penyewa wajib memiliki SIM yang aktif dan sesuai dengan jenis
              kendaraan yang disewa
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Saat pengambilan unit, penyewa wajib menunjukkan kartu identitas
              asli dan bersedia memberikan dokumen tambahan jika diminta.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Setiap kendaraan disewa dengan kondisi layak jalan, bersih, dan
              bensin penuh. Harap dikembalikan dalam kondisi serupa.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Keterlambatan pengembalian akan dikenakan denda 10% per jam
              keterlambatan. Jika setengah hari keterlambatan pengembalian, maka
              dihitung denda dengan biaya penuh.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Pembatalan maksimal 24 jam sebelum waktu sewa untuk pengembalian
              dana penuh. Di bawah itu akan dikenakan potongan.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Semua kerusakan yang terjadi akibat kelalaian penyewa menjadi
              tanggung jawab penyewa sepenuhnya.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Penggunaan keluar kota dikenai charge biaya sebesar Rp30.000,-.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/information-circle.svg" alt="" />
            <span className="leading-normal">
              Gunakan kendaraan dengan penuh tanggung jawab, dan segera hubungi
              CS jika terjadi kerusakan atau insiden saat masa sewa.
            </span>
          </div>

          <h5 className="mt-6 text-lg font-semibold text-[#212529] py-3">
            Persyaratan Rental Kendaraan
          </h5>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/pinned.svg" alt="" />
            <span>KTP milik penyewa.</span>
          </div>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/pinned.svg" alt="" />
            <span>KTP penjamin (saudara / teman / orang satu rumah).</span>
          </div>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/pinned.svg" alt="" />
            <span>ID Karyawan / NPWP / KTA / KTM.</span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/pinned.svg" alt="" />
            <span className="leading-normal">
              SIM C aktif jika menyewa motor dan SIM A aktif jika menyewa mobil.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/pinned.svg" alt="" />
            <span className="leading-normal">
              Tiket Kereta PP (Bagi wisatawan)
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/pinned.svg" alt="" />
            <span className="leading-normal">
              Menjaminkan sepeda motor atas nama sendiri minimal tahun 2020,
              jika menyewa mobil.
            </span>
          </div>

          <h5 className="mt-6 text-lg font-semibold text-[#212529] py-3">
            Fasilitas yang Ditawarkan
          </h5>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/check.svg" alt="" />
            <span>
              Antar-jemput area Purwokerto dengan biaya terjangkau, yaitu
              Rp30.000,-
            </span>
          </div>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/check.svg" alt="" />
            <span>
              Peminjaman helm dan mantel dengan harga Rp5.000,- per pcs dan per
              hari (Terpisah).
            </span>
          </div>
          <div className=" flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/check.svg" alt="" />
            <span>
              Mobil bersih dan sudah melalui pemeriksaan standar siap untuk
              digunakan.
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/check.svg" alt="" />
            <span className="leading-normal">
              Pengecekan kendaraan bersama saat penyerahan (cek bodi, interior,
              dan odometer)
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/check.svg" alt="" />
            <span className="leading-normal">
              Kunci cadangan tersedia (jika dibutuhkan)
            </span>
          </div>
          <div className="flex items-center gap-2 gap-x-4 gap-y-3 mt-4">
            <img src="/check.svg" alt="" />
            <span className="leading-normal">
              Layanan customer support 24/7 selama masa sewa.
            </span>
          </div>
        </div>
        {/* Kolom Kanan: Form */}
        <div className="py-4">
          <BookingForm />
        </div>

      </div>
        <div>
          <h5 className="mt-6 text-lg font-semibold text-[#212529] py-3 px-[100px]">
            Lihat Kendaraan Lainnya
          </h5>
          <div className="px-[100px] py-10">
            {/* Grid 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[32px] justify-items-center mb-[32px]">
              <CarCard
                name="Toyota Avanza"
                passengers={7}
                luggage={2}
                transmission="Manual"
                fuel="Pertamax"
                price="Rp350.000"
              />
              <CarCard
                name="Honda Beat"
                passengers={2}
                luggage={0}
                transmission="Matic"
                fuel="Pertalite"
                price="Rp80.000"
              />
              <CarCard
                name="Honda Brio"
                passengers={5}
                luggage={1}
                transmission="Matic"
                fuel="Pertamax"
                price="Rp300.000"
              />
              <CarCard
                name="Honda Brio"
                passengers={5}
                luggage={1}
                transmission="Matic"
                fuel="Pertamax"
                price="Rp300.000"
              />
            </div>
          </div>
        </div>
        <Footer />
    </>
  );
}
