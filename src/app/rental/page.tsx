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

interface RentalPageProps {
  searchParams: {
    startDate?: string;
    endDate?: string;
    jenis?: string;
  };
}

export default function Rental({ searchParams }: RentalPageProps) {
  const { jenis, startDate, endDate } = searchParams;
  return (
    <>
      <Header />
      <HeadingRental />
      <Searchbar className="!mt-0 mb-16" />
      <Suspense fallback={<LoadingSkeleton count={4} />}>
        <KendaraanCard
          startDate={startDate}
          endDate={endDate}
          jenisKendaraan={jenis}
        />
      </Suspense>

      <Footer />
    </>
  );
}
