"use client";
import { motion } from "motion/react";
import HeadingSection from "@/app/_components/HeadingSection";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.05 10.96H8.93C8.51579 10.96 8.18 10.6242 8.18 10.21C8.18 9.79579 8.51579 9.46 8.93 9.46H12.05C12.4642 9.46 12.8 9.79579 12.8 10.21C12.8 10.6242 12.4642 10.96 12.05 10.96Z"
          fill="#196FEB"
        />
        <path
          d="M8.93 12.57H15.07C15.4842 12.57 15.82 12.9058 15.82 13.32C15.82 13.7342 15.4842 14.07 15.07 14.07H8.93C8.51579 14.07 8.18 13.7342 8.18 13.32C8.18 12.9058 8.51579 12.57 8.93 12.57Z"
          fill="#196FEB"
        />
        <path
          d="M14.23 15.5H8.93C8.51579 15.5 8.18 15.8358 8.18 16.25C8.18 16.6642 8.51579 17 8.93 17H14.23C14.6442 17 14.98 16.6642 14.98 16.25C14.98 15.8358 14.6442 15.5 14.23 15.5Z"
          fill="#196FEB"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.27 2C15.0792 1.99888 15.7474 2.63193 15.79 3.44C18.1649 3.70703 19.9696 5.70032 20 8.09V18.18C19.9945 20.8011 17.8711 22.9245 15.25 22.93H8.75C6.12893 22.9245 4.0055 20.8011 4 18.18V8.09C4.03041 5.70032 5.83508 3.70703 8.21 3.44C8.25747 2.63419 8.9228 2.00388 9.73 2H14.27ZM14.29 3.44H9.73V4.63H14.29V3.44ZM18.5 18.18C18.5 19.9766 17.0465 21.4345 15.25 21.44H8.75C6.95345 21.4345 5.49999 19.9766 5.5 18.18V8.09C5.50398 6.49887 6.65936 5.14458 8.23 4.89C8.35276 5.62136 8.98843 6.15532 9.73 6.15H14.27C15.0116 6.15532 15.6472 5.62136 15.77 4.89C17.3406 5.14458 18.496 6.49887 18.5 8.09V18.18Z"
          fill="#196FEB"
        />
      </svg>
    ),
    title: "Armada Lengkap & Terawat",
    desc: "Pilihan mobil dan motor berkualitas, rutin diservis, dan siap jalan kapan saja.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6383 2.00024H8.36167C7.07941 1.98212 6.02373 3.00391 6 4.28607V20.2977C6.02373 21.5799 7.07941 22.6017 8.36167 22.5836H16.6383C17.9206 22.6017 18.9763 21.5799 19 20.2977V4.28607C18.9763 3.00391 17.9206 1.98212 16.6383 2.00024ZM11.1458 3.62524H13.8542V4.1669C13.8542 4.31648 13.7329 4.43774 13.5833 4.43774H11.4167C11.2671 4.43774 11.1458 4.31648 11.1458 4.1669V3.62524ZM16.6383 20.9586C17.0234 20.9771 17.3517 20.6825 17.375 20.2977V4.28607C17.3517 3.90129 17.0234 3.60674 16.6383 3.62524H15.4792V4.1669C15.4792 4.66971 15.2794 5.15192 14.9239 5.50746C14.5684 5.863 14.0861 6.06274 13.5833 6.06274H11.4167C10.3696 6.06274 9.52083 5.21394 9.52083 4.1669V3.62524H8.36167C7.97662 3.60674 7.64828 3.90129 7.625 4.28607V20.2977C7.64828 20.6825 7.97662 20.9771 8.36167 20.9586H16.6383Z"
          fill="#196FEB"
        />
      </svg>
    ),
    title: "Booking Mudah via WhatsApp",
    desc: "Tanpa ribet! Cukup pilih kendaraan dan sewa langsung lewat WhatsApp.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5794 9.0802C8.40783 9.0802 9.0794 8.40863 9.0794 7.5802C9.0794 6.75178 8.40783 6.0802 7.5794 6.0802C6.75098 6.0802 6.0794 6.75178 6.0794 7.5802C6.0794 8.40863 6.75098 9.0802 7.5794 9.0802Z"
          fill="#196FEB"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.1594 2.0202H11.0794L5.0794 2.4502C3.68196 2.57525 2.57445 3.68276 2.4494 5.0802L2.0094 11.0802C1.95416 11.6323 2.14429 12.1808 2.5294 12.5802L10.9694 21.0202C11.3259 21.3636 11.8045 21.5507 12.2994 21.5402C13.0565 21.5336 13.7784 21.2196 14.2994 20.6702L20.6694 14.3102C21.6589 13.4899 21.8142 12.0303 21.0194 11.0202L12.5294 2.5202C12.1711 2.17961 11.6937 1.99294 11.1994 2.0002L11.1594 2.0202ZM11.1994 3.6302C11.258 3.61178 11.3208 3.61178 11.3794 3.6302L19.8294 12.0802C19.9111 12.455 19.7713 12.8435 19.4694 13.0802L13.0794 19.4702C12.8689 19.6986 12.5792 19.8381 12.2694 19.8602H12.0994L3.6794 11.3702C3.65251 11.2993 3.65251 11.2211 3.6794 11.1502L4.1194 5.1502C4.1979 4.60602 4.61767 4.17415 5.1594 4.0802L11.1594 3.6502L11.1994 3.6302Z"
          fill="#196FEB"
        />
      </svg>
    ),
    title: "Harga Transparan & Terjangkau",
    desc: "Tidak ada biaya tersembunyi. Harga sesuai yang tertera.",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.95 9.11C21.6908 9.10827 22.3718 9.51614 22.72 10.17C23.0816 10.8105 23.0624 11.5978 22.67 12.22L18.1 19.07C17.6249 19.8375 16.6947 20.1916 15.8295 19.9344C14.9643 19.6772 14.3786 18.8724 14.4 17.97V15.12H12.26C11.5441 15.1228 10.8812 14.7428 10.522 14.1235C10.1628 13.5041 10.162 12.74 10.52 12.12L15.16 4C15.5169 3.38183 16.1762 3.00073 16.89 3C17.9946 3 18.89 3.89543 18.89 5V9.11H20.95ZM16.8 18.24L21.37 11.39C21.486 11.2356 21.5028 11.0282 21.413 10.8572C21.3232 10.6862 21.143 10.5822 20.95 10.59H18.39C17.8377 10.59 17.39 10.1423 17.39 9.59V4.98C17.39 4.84564 17.336 4.71692 17.24 4.62286C17.1441 4.5288 17.0143 4.47731 16.88 4.48C16.6969 4.48062 16.5301 4.58535 16.45 4.75L11.81 12.87C11.7251 13.0251 11.7285 13.2135 11.8189 13.3655C11.9092 13.5175 12.0732 13.6105 12.25 13.61H14.89C15.4423 13.61 15.89 14.0577 15.89 14.61V17.96C15.8927 18.1772 16.0353 18.3679 16.2429 18.4318C16.4506 18.4956 16.6757 18.4182 16.8 18.24Z"
          fill="#196FEB"
        />
        <path
          d="M8.75 5.85H3.95C3.53579 5.85 3.2 6.18579 3.2 6.6C3.2 7.01421 3.53579 7.35 3.95 7.35H8.75C9.16421 7.35 9.5 7.01421 9.5 6.6C9.5 6.18579 9.16421 5.85 8.75 5.85Z"
          fill="#196FEB"
        />
        <path
          d="M8.3 11.33C8.29461 10.918 7.96196 10.5854 7.55 10.58H2.75C2.33579 10.58 2 10.9158 2 11.33C2 11.7442 2.33579 12.08 2.75 12.08H7.55C7.74891 12.08 7.93968 12.001 8.08033 11.8603C8.22098 11.7197 8.3 11.5289 8.3 11.33Z"
          fill="#196FEB"
        />
        <path
          d="M8.75 16.35H3.95C3.53579 16.35 3.2 16.6858 3.2 17.1C3.2 17.5142 3.53579 17.85 3.95 17.85H8.75C9.16421 17.85 9.5 17.5142 9.5 17.1C9.5 16.6858 9.16421 16.35 8.75 16.35Z"
          fill="#196FEB"
        />
      </svg>
    ),
    title: "Respon Cepat & Ramah",
    desc: "Admin kami siap membantu Anda dengan pelayanan cepat dan sopan.",
  },
];

export default function MengapaPilihKami() {
  return (
    <motion.section
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="px-6 md:px-32 py-24"
    >
      <HeadingSection
        subHeading="Mengapa Pilih Kami"
        heading="Kepercayaan dan Kenyamanan Adalah Kunci Utama"
        headingClass="max-w-3xl mx-auto text-center"
      />

      <div className="flex flex-col md:flex-row gap-16 items-stretch">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-netral-400 rounded-2xl p-6 flex flex-col justify-center gap-10 hover:shadow-md transition "
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 rounded-2xl relative w-full flex items-center justify-center aspect-[16/12] overflow-hidden">
          <Image
            src="/tentang_kami.jpeg"
            alt="unggulan"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}
