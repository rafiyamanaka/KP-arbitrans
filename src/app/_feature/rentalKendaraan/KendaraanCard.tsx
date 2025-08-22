import { getKendaraan, getKendaraanCount } from "@/app/_libs/data-services";
import { unstable_noStore as noStore } from "next/cache";
import LoadMoreKendaraan from "./LoadMoreKendaraan";

interface KendaraanContainerProps {
  jenisKendaraan?: string;
  startDate?: string;
  endDate?: string;
  itemsPerPage?: number;
  isLoadMore?: boolean;
}

export default async function KendaraanCard({
  jenisKendaraan,
  startDate,
  endDate,
  itemsPerPage = 8,
  isLoadMore = true,
}: KendaraanContainerProps) {
  noStore();

  try {
    // Load data awal di server
    const [initialData, totalCount] = await Promise.all([
      getKendaraan(itemsPerPage, 0, jenisKendaraan, startDate, endDate),
      getKendaraanCount(jenisKendaraan),
    ]);

    if (!initialData.length) {
      return (
        <section className="px-24 pb-24">
          <div className="text-center text-gray-500">
            Tidak ada kendaraan yang tersedia untuk kriteria yang dipilih.
          </div>
        </section>
      );
    }

    // Pass data ke client component untuk interactivity
    return (
      <LoadMoreKendaraan
        initialData={initialData}
        totalCount={totalCount}
        jenisKendaraan={jenisKendaraan}
        startDate={startDate}
        endDate={endDate}
        itemsPerPage={itemsPerPage}
        isLoadMore={isLoadMore}
      />
    );
  } catch (error) {
    console.error("Error in KendaraanContainer:", error);
    return (
      <section className="px-24 pb-24">
        <div className="text-center text-red-500">
          Terjadi kesalahan saat memuat data kendaraan. Silakan coba lagi.
        </div>
      </section>
    );
  }
}
