import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Searchbar from "../_components/Searchbar";
import HeadingRental from "../_feature/rentalKendaraan/HeadingRental";
import KendaraanCard from "../_feature/rentalKendaraan/KendaraanCard";

export default function Rental() {
  return (
    <>
      <Header />
      <HeadingRental />
      <Searchbar className="!mt-0 mb-16" />
      <KendaraanCard />
      <Footer />
    </>
  );
}
