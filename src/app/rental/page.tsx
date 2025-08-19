import { Suspense } from "react";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Searchbar from "../_components/Searchbar";
import HeadingRental from "../_feature/rentalKendaraan/HeadingRental";
import KendaraanCard from "../_feature/rentalKendaraan/KendaraanCard";
import LoadingSkeleton from "../_components/LoadingSkeleton";

export const metadata = {
  title: "Daftar Kendaraan",
};

export default function Rental() {
  return (
    <>
      <Header />
      <HeadingRental />
      <Searchbar className="!mt-0 mb-16" />

      <Suspense fallback={<LoadingSkeleton count={4} />}>
        <KendaraanCard />
      </Suspense>
      
      <Footer />
    </>
  );
}
