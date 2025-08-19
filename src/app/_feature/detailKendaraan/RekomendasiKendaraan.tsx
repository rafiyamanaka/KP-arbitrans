import KendaraanCard from "../rentalKendaraan/KendaraanCard";

function RekomendasiKendaraan() {
  return (
    <div>
      <h5 className="text-lg font-semibold mb-6 px-24 text-netral-900 ">
        Lihat Kendaraan Lainnya
      </h5>
      <KendaraanCard count={4} jenisKendaraan="motor" />
    </div>
  );
}

export default RekomendasiKendaraan;
