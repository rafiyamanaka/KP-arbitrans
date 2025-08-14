import Header from "../_components/header";
import SearchbBar from "../_components/searchbar";
import CarCard from "../_components/card";
const rentalPage = () => {
  return (
    <>
      <Header />
      <div className="container items-center justify-center text-center mt-[100px] py-[48px] mb-[76px]">
        <h2 className="text-[48px] font-bold mb-2 text-[#212529]">
          Cari Kendaraan Untuk Anda
        </h2>
        <p className="text-[16px] text-[#495057]">
          Temukan kendaraan yang sesuai dengan kebutuhan perjalanan Anda.
        </p>
      </div>
      <SearchbBar />
      <div className="container grid grid-cols-4 gap-6 mx-auto px-[100px]">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </>
  );
};

export default rentalPage;
