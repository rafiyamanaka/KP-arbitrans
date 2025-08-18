import Button from "@/app/_components/Button";
import CarCard from "@/app/_components/Card";

function KendaraanCard() {
  return (
    <section className="px-24 pb-24">
      <div className="grid grid-cols-4 gap-6 mx-auto mb-16">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
      <Button
        variant="secondary"
        text="Muat lebih banyak"
        className="!border-none !bg-primary/10 !px-6 !py-3 mx-auto hover:!bg-primary/20"
      />
    </section>
  );
}

export default KendaraanCard;
