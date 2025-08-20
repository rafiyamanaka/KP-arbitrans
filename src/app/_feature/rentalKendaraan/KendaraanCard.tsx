import Button from "@/app/_components/Button";
import CarCard from "@/app/_components/Card";
import { getKendaraan } from "@/app/_libs/data-services";
import { unstable_noStore as noStore } from "next/cache";

interface KendaraanCardProps {
  count?: number;
  jenisKendaraan?: string;
  startDate?: string;
  endDate?: string;
}

async function KendaraanCard({
  count,
  jenisKendaraan,
  startDate,
  endDate,
}: KendaraanCardProps) {
  noStore();

  const kendaraan = await getKendaraan(jenisKendaraan, startDate, endDate);
  if (!kendaraan.length) return null;

  const displayedKendaraan = count ? kendaraan.slice(0, count) : kendaraan;

  return (
    <section className="px-24 pb-24" id="about-us">
      <div className="grid grid-cols-4 gap-6 mx-auto mb-16">
        {displayedKendaraan.map((data) => (
          <CarCard data={data} key={data.id} />
        ))}
      </div>
      {kendaraan.length > 10 && (
        <Button
          variant="secondary"
          text="Muat lebih banyak"
          className="!border-none !bg-primary/10 !px-6 !py-3 mx-auto hover:!bg-primary/20"
        />
      )}
    </section>
  );
}

export default KendaraanCard;
