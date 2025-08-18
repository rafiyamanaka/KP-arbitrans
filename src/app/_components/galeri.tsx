import Image from "next/image";

export default function Gallery() {
  return (
    <div className="container px-[100px] mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Large item */}
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl min-h-[220px]">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Nature"
            className="w-full h-[220px] md:h-[320px] object-cover brightness-75"
          />
        </div>

        {/* Two small items */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Food"
            className="w-full h-[120px] md:h-[150px] object-cover brightness-75"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Technology"
            className="w-full h-[120px] md:h-[150px] object-cover brightness-75"
          />
        </div>

        {/* Medium item */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Travel"
            className="w-full h-[120px] md:h-[150px] object-cover brightness-75"
          />
        </div>

        {/* Last item with "Lihat semua" */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Art"
            className="w-full h-[120px] md:h-[150px] object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-semibold text-md">
              Lihat semua
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
