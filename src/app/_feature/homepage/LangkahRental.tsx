"use client";
import { motion } from "motion/react";
import HeadingSection from "@/app/_components/HeadingSection";
import Image from "next/image";

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

export default function LangkahRental() {
  return (
    <motion.section
      className="py-10 md:py-16 lg:py-24 xl:py-32 px-8 sm:px-16 lg:px-24 xl:px-32"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <HeadingSection
        subHeading="Langkah Rental"
        heading="Langkah Mudah Rental Kendaraan di ARBITRANS"
        headingClass="max-w-3xl mx-auto text-center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] gap-16 items-start w-full">
        <div className="rounded-2xl relative w-full lg:flex hidden  items-center justify-center aspect-[16/12] overflow-hidden">
          <Image
            src="/image-3.png"
            quality={100}
            alt="Tentang Kami"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-6 h-full justify-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-netral-400 hover:shadow-sm rounded-2xl p-5 flex items-center gap-5 "
            >
              <div className="w-16 h-16 text-primary bg-primary/10 rounded-full flex items-center justify-center font-bold text-2xl">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold text-netral-900">{step.title}</h3>
                <p className="text-netral-700 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
