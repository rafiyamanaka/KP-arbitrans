"use client";

import Button from "@/app/_components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Thankyou() {
  const router = useRouter();
  return (
    <>
      <div className="text-center mt-36 mb-16 ">
        <div className="relative w-[360px] h-[240px] mx-auto mb-10">
          <Image
            src="/thankyou.png"
            alt="Halaman tidak ditemukan"
            fill
            quality={100}
            className="object-contain"
          />
        </div>

        <h5 className="font-semibold text-lg text-netral-900 mb-4">
          Terimakasih, atas Pemesanan Anda!
        </h5>

        <p className="text-netral-600 text-md mb-10 max-w-2xl mx-auto">
          Terima kasih telah melakukan pemesanan. Silakan cek aplikasi WhatsApp
          Anda untuk melihat detail pemesanan. Tim kami telah menghubungi Anda.
          Jika ada pertanyaan, jangan ragu untuk menghubungi layanan pelanggan
          kami.
        </p>

        <Button
          text="Kembali Ke beranda"
          className="mx-auto"
          onClick={() => router.push("/")}
        />
      </div>
    </>
  );
}

export default Thankyou;
