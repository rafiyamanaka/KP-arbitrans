import Button from "@/app/_components/Button";
import Image from "next/image";

function CallToAction() {
  return (
    <div className="flex  items-center justify-center px-32 my-24">
      <div className="w-full relative rounded-3xl flex justify-center overflow-hidden">
        <Image
          src="/cta-image.png"
          alt="Sewa Kendaraan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-10" />

        <div className="relative z-10 text-center py-24 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold mb-4 max-w-2xl text-netral-100">
            Sewa Kendaraan Sekarang dan Mudahkan Perjalananmu!
          </h1>
          <p className="mb-8 text-netral-100">
            Pilih kendaraan dan hubungi kami! Proses cepat, tanpa ribet!
          </p>
          <Button
            text="Cari kendaraan"
            variant="secondary"
            className="border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
