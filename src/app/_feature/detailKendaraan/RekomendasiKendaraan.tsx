import KendaraanCard from "../rentalKendaraan/KendaraanCard";

interface RekomendasiKendaraanProps {
  jenisKendaraan?: string;
}

function RekomendasiKendaraan({ jenisKendaraan }: RekomendasiKendaraanProps) {
  return (
    <div>
      <h5 className="text-lg font-semibold mb-6 px-24 text-netral-900 ">
        Lihat Kendaraan Lainnya
      </h5>
      <KendaraanCard count={4} jenisKendaraan={jenisKendaraan} />
    </div>
  );
}

export default RekomendasiKendaraan;
