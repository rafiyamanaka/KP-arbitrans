import Image from "next/image";
import Button from "./_components/Button";

export default function NotFoundPage() {
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
          Ups, Jalan Ini Buntu
        </h5>

        <p className="text-netral-600 text-md mb-10">
          Sepertinya halaman yang Anda cari sudah belok ke arah lain. <br />
          Kembali ke beranda dan lanjutkan perjalanan Anda!
        </p>

        <Button text="Ke beranda" className="mx-auto" />
      </div>
    </>
  );
}
