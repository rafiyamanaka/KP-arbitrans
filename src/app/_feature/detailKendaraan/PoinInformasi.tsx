interface PoinInformasiProps {
  icon: React.ReactNode;
  text: string;
}

function PoinInformasi({ icon, text }: PoinInformasiProps) {
  return (
    <p className="flex items-center gap-4 justify-start text-netral-700 leading-[28px] tracking-[0.5px] ">
      <span className="flex items-center justify-center w-6 h-6 flex-shrink-0">
        {icon}
      </span>
      <span>{text}</span>
    </p>
  );
}

export default PoinInformasi;
