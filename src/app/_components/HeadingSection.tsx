interface HeadingSectionProps {
  subHeading: string;
  heading: string;
  headingClass?: string;
  subHeadingClass?: string;
}

function HeadingSection({
  subHeading,
  heading,
  headingClass,
  subHeadingClass,
}: HeadingSectionProps) {
  return (
    <>
      <p
        className={`text-blue-600 font-medium mb-4 text-center ${subHeadingClass}`}
      >
        {subHeading}
      </p>
      <h2
        className={`text-5xl font-bold  text-netral-900 tracking-[1.5px] mb-12 ${headingClass}`}
      >
        {heading}
      </h2>
    </>
  );
}

export default HeadingSection;
