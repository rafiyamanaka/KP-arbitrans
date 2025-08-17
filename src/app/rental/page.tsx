import Header from "../components/header";
import SearchbBar from "../components/searchbar";
import VehicleCard from "../components/card";
import Footer from "../components/footer";

const rentalPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="container text-center mt-[100px] pb-[48px]">
        <h2 className="text-[48px] font-bold mb-2 text-[#212529]">
          Cari Kendaraan Untuk Anda
        </h2>
        <p className="text-[16px] text-[#495057] pb-[48px]">
          Temukan kendaraan yang sesuai dengan kebutuhan perjalanan Anda.
        </p>
      </div>

      {/* Search Bar */}
      <div className="container my-[48px]">
        <SearchbBar />
      </div>

      {/* Cards Section */}
      <div className="container px-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[32px] justify-items-center mb-[32px]">
          <VehicleCard
            name="Toyota Avanza"
            passengers={7}
            luggage={2}
            transmission="Manual"
            fuel="Pertamax"
            price="Rp350.000"
          />
          <VehicleCard
            name="Honda Beat"
            passengers={2}
            luggage={0}
            transmission="Matic"
            fuel="Pertalite"
            price="Rp80.000"
          />
          <VehicleCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
          <VehicleCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[32px] justify-items-center">
          <VehicleCard
            name="Toyota Avanza"
            passengers={7}
            luggage={2}
            transmission="Manual"
            fuel="Pertamax"
            price="Rp350.000"
          />
          <VehicleCard
            name="Honda Beat"
            passengers={2}
            luggage={0}
            transmission="Matic"
            fuel="Pertalite"
            price="Rp80.000"
          />
          <VehicleCard
            name="Honda Brio"
            passengers={5}
            luggage={1}
            transmission="Matic"
            fuel="Pertamax"
            price="Rp300.000"
          />
          <VehicleCard
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

      {/* Footer */}
      <Footer />
    </>
  );
};

export default rentalPage;
