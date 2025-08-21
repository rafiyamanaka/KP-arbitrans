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
      <KendaraanCard
        jenisKendaraan={jenisKendaraan}
        initialLimit={4}
        isLoadMore={false}
      />
    </div>
  );
}

export default RekomendasiKendaraan;
