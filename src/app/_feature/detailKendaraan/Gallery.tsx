import Image from "next/image";

export default function Gallery() {
  return (
    <div className="px-24 mx-auto py-4">
      <div className="grid grid-cols-4 grid-rows-[250px_250px] gap-6">
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden  rounded-3xl">
          <Image
            src={"/emptyImage.jpg"}
            alt="Empty Image"
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={"/emptyImage.jpg"}
            alt="Empty Image"
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={"/emptyImage.jpg"}
            alt="Empty Image"
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={"/emptyImage.jpg"}
            alt="Empty Image"
            quality={100}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={"/emptyImage.jpg"}
            alt="Empty Image"
            quality={100}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
