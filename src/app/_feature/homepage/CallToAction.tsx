import Button from "@/app/_components/Button";
import Image from "next/image";

function CallToAction() {
  return (
    <div className="flex  items-center justify-center sm:py-10 md:py-16 lg:py-24 xl:py-32 px-8 sm:px-16 lg:px-24 xl:px-32">
      <div className="w-full relative rounded-3xl flex justify-center overflow-hidden">
        <Image
          src="/cta-image.png"
          alt="Sewa Kendaraan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-10" />

        <div className="relative z-10 text-center px-12 sm:px-0 py-12 sm:py-16 md:py-24 w-full flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 max-w-2xl text-netral-100">
            Sewa Kendaraan Sekarang dan Mudahkan Perjalananmu!
          </h1>
          <p className="mb-8 text-netral-100 sm:text-base text-sm">
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
