import Image from "next/image";
export default function LangkahRental() {
  const steps = [
    {
      title: "Pilih Jenis Kendaraan",
      desc: "Pilih antara mobil atau motor sesuai kebutuhanmu.",
    },
    {
      title: "Pilih Tanggal Sewa",
      desc: "Gunakan kalender untuk memilih tanggal mulai dan kembali.",
    },
    {
      title: "Pilih dan Lihat Detail Kendaraan",
      desc: "Jelajahi daftar kendaraan yang tersedia.",
    },
    {
      title: "Pilih Paket Rental dan Pesan via WhatsApp",
      desc: "Otomatis diarahkan ke WhatsApp dengan template pesan siap kirim.",
    },
    {
      title: "Konfirmasi Pemesanan dengan Pihak Rental",
      desc: "Pemilik akan menjawab dan memproses sewa kamu secara langsung.",
    },
  ];

  return (
    <section className="py-16 px-[100px]">
      <div className="text-center mb-10">
        <h4 className="text-blue-500 font-medium mb-2">Langkah Rental</h4>
        <h2 className="text-4xl font-bold">
          Langkah Mudah Rental <br /> Kendaraan di ARBITRANS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Kolom Kiri */}
        <div className="bg-gray-100 rounded-2xl flex items-center justify-center h-full min-h-[300px]">
          <img
            src="/tentang_kami.jpeg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col gap-4 h-full justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-start gap-4 "
            >
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
