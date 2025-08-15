"use client";

import Footer from "./_components/footer";
import Header from "./_components/Header";
import ContactUs from "./_components/kontak";
import LangkahRental from "./_feature/homepage/LangkahRental";
import LayananKami from "./_feature/homepage/LayananKami";
import SearchbBar from "./_components/Searchbar";
import MengapaPilihKami from "./_feature/homepage/MengapaPilihKami";
import AboutUs from "./_feature/homepage/AboutUs";
import CarouselBrand from "./_feature/homepage/CarouselBrand";
import HeroSection from "./_feature/homepage/HeroSection";

export default function Home() {
  return (
    <>
      <Header className="mb-10" />
      <main>
        <HeroSection />
        <SearchbBar />
        <AboutUs />
        <CarouselBrand />
        <MengapaPilihKami />
        <LayananKami />
        <LangkahRental />
        <div className="flex h-[334px] items-center justify-center px-[100px]">
          <div className="w-full relative rounded-lg flex justify-center overflow-hidden">
            <img
              src="/cta-image.png"
              alt="Sewa Kendaraan"
              className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
            />
            <div className="absolute inset-0 bg-black opacity-10 rounded-[24px]" />
            <div className="relative z-10 text-center py-16 w-full flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold mb-4 text-white">
                Sewa Kendaraan Sekarang dan Mudahkan Perjalananmu!
              </h1>
              <p className="mb-6 text-white">
                Pilih kendaraan dan hubungi kami! Proses cepat, tanpa ribet!
              </p>
              <button className="text-[16px] bg-[#F8F9FA] text-[#196FEB] px-[18px] py-[14px] rounded shadow-lg hover:bg-[#E9ECEF]">
                Cari Kendaraan
              </button>
            </div>
          </div>
        </div>
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
