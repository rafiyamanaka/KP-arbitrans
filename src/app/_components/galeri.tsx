"use client";
import { useState } from "react";
import Image from "next/image";

const photos = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
    label: "Nature",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
    label: "Food",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
    label: "Technology",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
    label: "Travel",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080",
    label: "Art",
  },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const nextPhoto = () =>
    setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () =>
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="container px-[100px] mx-auto py-4">
      {/* Grid Preview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Large item */}
        <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl min-h-[220px]">
          <Image
            src={photos[0].src}
            alt={photos[0].label}
            width={600}
            height={400}
            className="w-full h-[220px] md:h-[320px] object-cover brightness-75"
          />
        </div>

        {/* Two small items */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={photos[1].src}
            alt={photos[1].label}
            width={300}
            height={200}
            className="w-full h-[120px] md:h-[150px] object-cover brightness-75"
          />
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={photos[2].src}
            alt={photos[2].label}
            width={300}
            height={200}
            className="w-full h-[120px] md:h-[150px] object-cover brightness-75"
          />
        </div>

        {/* Medium item */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={photos[3].src}
            alt={photos[3].label}
            width={300}
            height={200}
            className="w-full h-[120px] md:h-[150px] object-cover brightness-75"
          />
        </div>

        {/* Last item with "Lihat semua" */}
        <div
          className="relative overflow-hidden rounded-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image
            src={photos[4].src}
            alt={photos[4].label}
            width={300}
            height={200}
            className="w-full h-[120px] md:h-[150px] object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-semibold text-md">
              Lihat semua
            </span>
          </div>
        </div>
      </div>

      {/* Modal Galeri */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] h-[90%] flex overflow-hidden relative">
            {/* Sidebar kiri */}
            <div className="w-[280px] border-r p-4 flex flex-col">
              <h3 className="text-sm font-semibold mb-2">Galeri</h3>
              <div className="overflow-y-auto">
                <div className="grid grid-cols-2 gap-2">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                        current === index
                          ? "border-blue-500"
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrent(index)}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.label}
                        width={140}
                        height={100}
                        className="object-cover w-full h-[90px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Konten kanan */}
            <div className="flex-1 relative flex items-center justify-center bg-black">
              <Image
                src={photos[current].src}
                alt={photos[current].label}
                width={800}
                height={500}
                className="object-contain max-h-full max-w-full"
              />

              {/* Info bawah */}
              <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
                {photos[current].label}
              </div>
              <div className="absolute bottom-4 right-4 text-white text-sm">
                {current + 1}/{photos.length}
              </div>

              {/* Tombol navigasi */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 bg-white/70 hover:bg-white text-black p-2 rounded-full"
              >
                ◀
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 bg-white/70 hover:bg-white text-black p-2 rounded-full"
              >
                ▶
              </button>
            </div>

            {/* Tombol close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
