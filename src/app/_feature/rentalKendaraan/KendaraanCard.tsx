import CarCard from "@/app/_components/Card";
import { getKendaraan, getKendaraanCount } from "@/app/_libs/data-services";
import { unstable_noStore as noStore } from "next/cache";
import LoadMoreButton from "./LoadMoreButton";

interface KendaraanCardProps {
  jenisKendaraan?: string;
  startDate?: string;
  endDate?: string;
  initialLimit?: number;
  isLoadMore?: boolean;
}

async function KendaraanCard({
  jenisKendaraan,
  startDate,
  endDate,
  initialLimit = 8,
  isLoadMore = true,
}: KendaraanCardProps) {
  noStore();

  try {
    const [initialData, totalCount] = await Promise.all([
      getKendaraan(initialLimit, 0, jenisKendaraan, startDate, endDate),
      getKendaraanCount(jenisKendaraan),
    ]);

    if (!initialData.length) {
      return (
        <section className="px-24 pb-24" id="about-us">
          <div className="text-center text-gray-500">
            Tidak ada kendaraan yang tersedia untuk kriteria yang dipilih.
          </div>
        </section>
      );
    }

    const hasMoreData = isLoadMore ? totalCount > initialLimit : false;

    return (
      <section className="px-24 pb-24">
        <div className="grid grid-cols-4 gap-6 mx-auto mb-6">
          {initialData.map((data) => (
            <CarCard data={data} key={data.id} />
          ))}
        </div>

        {hasMoreData && (
          <LoadMoreButton
            initialCount={initialData.length}
            totalCount={totalCount}
            jenisKendaraan={jenisKendaraan}
            startDate={startDate}
            endDate={endDate}
          />
        )}
      </section>
    );
  } catch (error) {
    console.error("Error in KendaraanCard:", error);

    return (
      <section className="px-24 pb-24" id="about-us">
        <div className="text-center text-red-500">
          Terjadi kesalahan saat memuat data kendaraan. Silakan coba lagi.
        </div>
      </section>
    );
  }
}

export default KendaraanCard;
