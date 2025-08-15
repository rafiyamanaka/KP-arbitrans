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
import CallToAction from "./_feature/homepage/CallToAction";

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
        <CallToAction />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
