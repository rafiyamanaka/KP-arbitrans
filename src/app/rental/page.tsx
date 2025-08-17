import Header from "../_components/header";
import SearchbBar from "../_components/searchbar";
import CarCard from "../_components/card";
import Footer from "../_components/footer";
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
      <div className="px-[100px] py-10">
        {/* Grid 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[32px] justify-items-center mb-[32px]">
          <CarCard
            name="Toyota Avanza"
            passengers={7}
            luggage={2}
            transmission="Manual"
            fuel="Pertamax"
            price="Rp350.000"
          />
          <CarCard
            name="Honda Beat"
            passengers={2}
            luggage={0}
            transmission="Matic"
            fuel="Pertalite"
            price="Rp80.000"
          />
          <CarCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
          <CarCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
        </div>

        {/* Grid 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[32px] justify-items-center">
          <CarCard
            name="Toyota Avanza"
            passengers={7}
            luggage={2}
            transmission="Manual"
            fuel="Pertamax"
            price="Rp350.000"
          />
          <CarCard
            name="Honda Beat"
            passengers={2}
            luggage={0}
            transmission="Matic"
            fuel="Pertalite"
            price="Rp80.000"
          />
          <CarCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
          <CarCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
        </div>
      </div>

      {/* Button Muat Lebih Banyak */}
      <div className="flex justify-center mt-[48px] mb-[48px]">
        <button className="text-[#196FEB] bg-[#196FEB]/10 px-6 py-[15px] rounded font-semibold">
          Muat Lebih Banyak
        </button>
      </div>
      <Footer />
    </>
  );
};

export default rentalPage;
