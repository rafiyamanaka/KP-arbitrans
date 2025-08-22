import PoinInformasi from "./PoinInformasi";

interface InformasiPentingProps {
  icon: React.ReactNode;
  heading: string;
  points: string[];
}

function SectionDetailKendaraan({
  icon,
  heading,
  points,
}: InformasiPentingProps) {
  return (
    <section className="mb-16">
      <h5 className="text-lg font-semibold text-netral-900 mb-6">{heading}</h5>
      <div className="flex flex-col gap-4">
        {points.map((text, index) => (
          <PoinInformasi icon={icon} text={text} key={index} />
        ))}
      </div>
    </section>
  );
}

export default SectionDetailKendaraan;
