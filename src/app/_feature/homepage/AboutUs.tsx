import HeadingSection from "@/app/_components/HeadingSection";
import Image from "next/image";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="flex gap-16 py-32 px-6 md:px-32 items-stretch"
    >
      <div className="flex-1 rounded-2xl relative w-full flex items-center justify-center aspect-[16/9] overflow-hidden">
        <Image
          src="/tentang_kami.jpeg"
          alt="Tentang Kami"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <HeadingSection
          subHeading="Tentang Kami"
          heading="Rental Kendaraan Lokal, Nyaman & Terpercaya di Purwokerto"
        />
        <p className="text-netral-700 tracking-[0.5px] leading-7 text-justify">
          Kami adalah penyedia layanan rental mobil dan motor sejak tahun 2003
          di Purwokerto yang berkomitmen memberikan pengalaman sewa kendaraan
          yang mudah, cepat, dan transparan. Dengan kendaraan yang selalu
          dirawat secara berkala, kami hadir untuk membantu kebutuhan
          transportasi Anda, mulai dari perjalanan harian, urusan bisnis, hingga
          liburan keluarga. Kami percaya bahwa kenyamanan dan kepercayaan adalah
          kunci utama. Terima kasih telah mempercayakan perjalanan Anda bersama
          kami!
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
