import Breadcrumbs from "@/app/_components/Breadcump";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import DetailRental from "@/app/_feature/detailKendaraan/DetailRental";
import Gallery from "@/app/_feature/detailKendaraan/Gallery";

export default function DetailPage() {
  return (
    <>
      <Header />
      <Breadcrumbs />
      <Gallery />
      <DetailRental />
      <Footer />
    </>
  );
}
