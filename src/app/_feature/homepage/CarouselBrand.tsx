import { Fragment } from "react";

const brands = [
  { src: "/Daihatsu-logo.png", name: "Daihatsu" },
  { src: "/Honda-logo.png", name: "Honda" },
  { src: "/Toyota-logo.png", name: "Toyota" },
  { src: "/Hyundai-logo.png", name: "Hyundai" },
  { src: "/Kawasaki-logo.png", name: "Kawasaki" },
];

function CarouselBrand() {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip -ml-1">
      <div className="flex">
        <div className="flex flex-none gap-8 animate-move-left">
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-stretch justify-center px-4"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="object-contain"
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselBrand;
