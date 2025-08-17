"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchbBar from "./components/searchbar";
import MengapaPilihKami from "./components/unggulan";
import LayananKami from "./components/layanan";
import LangkahRental from "./components/langkah"; 
import ContactUs from "./components/kontak";
import Footer from "./components/footer";
import Link from "next/link";


export default function Home() {
  
  const brandSettings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  const brands = [
    { src: "/Daihatsu-logo.png", name: "Daihatsu" },
    { src: "/honda-logo.png", name: "Honda" },
    { src: "/toyota-logo.png", name: "Toyota" },
    { src: "/hyundai-logo.png", name: "Hyundai" },
    { src: "/kawasaki-logo.png", name: "Kawasaki" }
  ];

  return (
    <>
      {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#196FEB] px-[100px] py-[15px] flex items-center justify-between text-white">
        <div className="font-black text-2xl">ARBITRANS</div>
        <nav>
          <ul className="flex space-x-8 items-center justify-center font-medium text-md">
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/rental">Rental Kendaraan</Link></li>

          </ul>
        </nav>
        <button className="bg-white text-blue-600 px-6 py-[15px] rounded-xl font-medium text-md">
          Hubungi Kami
        </button>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-[#196FEB] pt-[140px] rounded-b-[56px] pb-[100px]">
          <div className="container mx-auto text-white flex flex-col items-center justify-center text-center">
            <p className="font-medium text-[16px]">
              Selamat Datang di ARBITRANS Rental Kendaraan Purwokerto!
            </p>
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
              Rental Kendaraan Tanpa Repot. <br />
              Kapan Saja, Dimana Saja!
            </h1>
          </div>
          <div className="w-full flex justify-center mt-8">
            <div className="w-[90%] md:w-[80%] h-[413px] rounded-t-[104px] bg-gradient-to-b from-[#6FB8FF] to-[#3F8CFF]/0" />
          </div>
          <div className="flex justify-center -mt-[250px]">
            <Image
              src="/Hero-image.png"
              alt="Kendaraan ARBITRANS"
              width={1200}
              height={300}
              className="object-contain"
              priority
            />
          </div>
        </section>
        
        {/* Search Bar */}
        <SearchbBar />

        {/* Tentang Kami */}
        <section className="flex gap-8 mt-[100px] px-[100px] items-stretch">
          <div className="flex-1 bg-gray-200 rounded-xl flex items-center justify-center h-full">
            <img
              src="/tentang_kami.jpeg"
              alt="Tentang Kami"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-blue-600 font-medium mb-2 text-[16px]">Tentang Kami</p>
            <h2 className="text-[32px] font-bold mb-4">
              Rental Kendaraan Lokal, Nyaman & Terpercaya di Purwokerto
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Kami adalah penyedia layanan rental mobil dan motor sejak tahun 2003 di Purwokerto yang
              berkomitmen memberikan pengalaman sewa kendaraan yang mudah, cepat, dan transparan. Dengan
              kendaraan yang selalu dirawat secara berkala, kami hadir untuk membantu kebutuhan transportasi
              Anda, mulai dari perjalanan harian, urusan bisnis, hingga liburan keluarga. Kami percaya bahwa
              kenyamanan dan kepercayaan adalah kunci utama. Terima kasih telah mempercayakan perjalanan
              Anda bersama kami!
            </p>
          </div>
        </section>

        {/* Carousel Brand */}
        <section className="mt-[100px] mb-[100px] items-center">
          <Slider {...brandSettings} className="!flex items-center">
            {brands.map((brand, index) => (
              <div key={index} className="flex items-center justify-center px-[36px]">
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={150}
                  height={68}
                  className="object-contain h-[68px] w-auto"
                />
              </div>
            ))}
          </Slider>
        </section>
        {/* Mengapa Pilih Kami */}
        <MengapaPilihKami />
        {/* Layanan Kami */}
        <LayananKami />
        {/* Langkah Rental */}
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
