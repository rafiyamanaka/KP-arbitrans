interface HeadingSectionProps {
  subHeading: string;
  heading: string;
}

function HeadingSection({ subHeading, heading }: HeadingSectionProps) {
  return (
    <>
      <p className="text-blue-600 font-medium mb-4">{subHeading}</p>
      <h2 className="text-5xl font-bold  text-netral-900 tracking-[1.5px] mb-8">
        {heading}
      </h2>
    </>
  );
}

export default HeadingSection;
