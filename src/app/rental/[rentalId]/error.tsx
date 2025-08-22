"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import Button from "@/app/_components/Button";

export default function ErrorPage() {
  const router = useRouter();
  return (
    <>
      <div className="text-center mt-36 mb-16">
        <div className="relative w-[480px] h-[320px] mx-auto mb-10">
          <Image
            src="/not-found.png"
            alt="Halaman tidak ditemukan"
            fill
            className="object-contain"
          />
        </div>

        <h5 className="font-semibold text-lg text-netral-900 mb-4">
          Ups, Data Tidak Ditemukan
        </h5>

        <p className="text-netral-600 text-md mb-10">
          Mohon maaf, halaman yang Anda cari tidak ditemukan.
          <br />
          Kembali ke beranda dan lanjutkan perjalanan Anda!
        </p>

        <Button
          text="Ke beranda"
          className="mx-auto"
          onClick={() => router.push("/rental")}
        />
      </div>
    </>
  );
}
