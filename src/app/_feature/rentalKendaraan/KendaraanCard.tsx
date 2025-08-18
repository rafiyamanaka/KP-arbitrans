import Button from "@/app/_components/Button";
import CarCard from "@/app/_components/Card";
import { getKendaraan } from "@/app/_libs/data-services";

async function KendaraanCard() {
  const kendaraan = await getKendaraan();
  if (!kendaraan.length) return null;

  return (
    <section className="px-24 pb-24">
      <div className="grid grid-cols-4 gap-6 mx-auto mb-16">
        {kendaraan.map((data) => (
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
