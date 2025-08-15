import { FaCalendarAlt, FaRoute, FaComments, FaKey } from "react-icons/fa";
import HeadingSection from "../../_components/HeadingSection";

export default function LayananKami() {
  return (
    <section className="py-16">
      <HeadingSection
        subHeading="Pelayanan Kami"
        heading="Layanan Kami Sesuai dengan Kebutuhan Anda"
        headingClass="max-w-3xl mx-auto text-center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-4">
        <LayananCard
          heading="Sewa Harian"
          deskripsi="Pilihan fleksibel untuk keperluan pribadi, bisnis, atau wisata."
          icon={
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
                d="M16.9 3.57H17C19.7614 3.57 22 5.80858 22 8.57V17.57C22 20.3314 19.7614 22.57 17 22.57H7C5.67392 22.57 4.40215 22.0432 3.46447 21.1055C2.52678 20.1679 2 18.8961 2 17.57V8.57C2 5.80858 4.23858 3.57 7 3.57H7.1V1.75C7.1 1.33579 7.43579 1 7.85 1C8.26421 1 8.6 1.33579 8.6 1.75V3.57H15.4V1.75C15.4 1.33579 15.7358 1 16.15 1C16.5642 1 16.9 1.33579 16.9 1.75V3.57ZM7.5 9.66H16.5C16.9142 9.66 17.25 9.32421 17.25 8.91C17.25 8.49579 16.9142 8.16 16.5 8.16H7.5C7.08579 8.16 6.75 8.49579 6.75 8.91C6.75 9.32421 7.08579 9.66 7.5 9.66Z"
                fill="#F8F9FA"
              />
            </svg>
          }
        />

        <LayananCard
          heading="Dalam Kota dan Luar Kota"
          deskripsi="Cocok untuk mobilitas harian, acara keluarga, atau tugas kantor."
          icon={
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
                d="M12 2.00016C8.66601 1.97662 5.89667 4.56639 5.69698 7.89448C5.4973 11.2226 7.93711 14.1249 11.25 14.5002V18.8002C11.25 19.2144 11.5858 19.5502 12 19.5502C12.4142 19.5502 12.75 19.2144 12.75 18.8002V14.5002C16.0629 14.1249 18.5027 11.2226 18.303 7.89448C18.1033 4.56639 15.334 1.97662 12 2.00016ZM11.35 5.47016C10.1996 5.47015 9.2655 6.39979 9.26 7.55016C9.26 7.96437 8.92421 8.30016 8.51 8.30016C8.09579 8.30016 7.76 7.96437 7.76 7.55016C7.76551 5.57136 9.3712 3.97015 11.35 3.97016C11.7642 3.97016 12.1 4.30595 12.1 4.72016C12.1 5.13437 11.7642 5.47016 11.35 5.47016Z"
                fill="#F8F9FA"
              />
              <path
                d="M15.82 15.7902C16.0108 15.4296 16.4521 15.284 16.82 15.4602C18.0479 15.9331 18.8956 17.0685 19 18.3802C19 20.5902 16 22.2602 12 22.2602C8 22.2602 5 20.5902 5 18.3802C5.12274 17.0872 5.96731 15.9753 7.18 15.5102C7.55003 15.3224 8.00222 15.4701 8.19 15.8402C8.37778 16.2102 8.23003 16.6624 7.86 16.8502C6.98 17.3002 6.48 17.8602 6.48 18.3802C6.48 19.4602 8.85 20.7002 12.01 20.7002C15.17 20.7002 17.53 19.4502 17.53 18.3202C17.53 17.7902 17.03 17.2402 16.15 16.7902C15.7851 16.6031 15.6382 16.1577 15.82 15.7902Z"
                fill="#F8F9FA"
              />
            </svg>
          }
        />

        <LayananCard
          heading="Antar–Jemput Kendaraan"
          deskripsi="Kendaraan bisa diantar ke lokasi Anda dan dijemput setelah masa sewa berakhir."
          icon={
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
                d="M7.1 2.00107H17.15C19.8694 1.97809 22.1085 4.13279 22.19 6.85107V14.1311C22.1084 16.8533 19.8633 19.0095 17.14 18.9811H15.58C15.1914 18.9823 14.824 19.1586 14.58 19.4611L13.1 21.3411C12.853 21.6384 12.4865 21.8104 12.1 21.8104C11.7135 21.8104 11.347 21.6384 11.1 21.3411L9.61 19.4611C9.36598 19.1586 8.99862 18.9823 8.61 18.9811H7.1C4.35739 19.0371 2.08172 16.873 2 14.1311V6.85107C2.08172 4.1091 4.35739 1.94498 7.1 2.00107ZM8.35 12.4811C8.76421 12.4811 9.1 12.1453 9.1 11.7311V9.33107C9.1 8.91685 8.76421 8.58107 8.35 8.58107C7.93579 8.58107 7.6 8.91685 7.6 9.33107V11.7311C7.6 12.1453 7.93579 12.4811 8.35 12.4811ZM12.85 11.7311C12.85 12.1453 12.5142 12.4811 12.1 12.4811C11.6858 12.4811 11.35 12.1453 11.35 11.7311V9.33107C11.35 8.91685 11.6858 8.58107 12.1 8.58107C12.5142 8.58107 12.85 8.91685 12.85 9.33107V11.7311ZM15.85 12.4811C16.2642 12.4811 16.6 12.1453 16.6 11.7311V9.33107C16.6 8.91685 16.2642 8.58107 15.85 8.58107C15.4358 8.58107 15.1 8.91685 15.1 9.33107V11.7311C15.1 12.1453 15.4358 12.4811 15.85 12.4811Z"
                fill="#F8F9FA"
              />
            </svg>
          }
        />

        <LayananCard
          heading="Dengan atau Tanpa Supir"
          deskripsi="Tersedia pilihan self-drive atau supir berpengalaman sesuai
            permintaan."
          icon={
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
                d="M17.2933 12.6577L20.9933 16.3677C21.2527 16.651 21.3439 17.0499 21.2333 17.4177L20.5533 19.7977C20.4454 20.1545 20.1686 20.4351 19.8133 20.5477L17.3833 21.2677C16.9961 21.3814 16.5778 21.2739 16.2933 20.9877L12.5833 17.2777C11.8214 16.5192 10.681 16.2872 9.68331 16.6877C8.68254 17.09 7.5384 16.858 6.77331 16.0977L3.77331 13.0977C3.09342 12.4094 2.83734 11.408 3.10331 10.4777L4.24331 6.09774C4.48993 5.1857 5.19534 4.46892 6.10331 4.20774L10.5033 3.09774C11.4275 2.84167 12.418 3.09693 13.1033 3.76774L16.1033 6.76774C16.8923 7.54163 17.13 8.71824 16.7033 9.73774C16.2939 10.7411 16.5264 11.8921 17.2933 12.6577ZM8.82332 11.8977L11.9233 8.79774C12.2188 8.50503 12.221 8.02821 11.9283 7.73274C11.6356 7.43726 11.1588 7.43503 10.8633 7.72774L7.76332 10.8377C7.47086 11.1306 7.47086 11.6049 7.76332 11.8977C8.05613 12.1902 8.5305 12.1902 8.82332 11.8977Z"
                fill="#F8F9FA"
              />
            </svg>
          }
        />
      </div>
    </section>
  );
}

interface layananCard {
  heading: string;
  deskripsi: string;
  icon: React.ReactNode;
}

function LayananCard({ heading, deskripsi, icon }: layananCard) {
  return (
    <div className="bg-primary/10 rounded-2xl p-8 text-center h-[232px] min-w-full flex flex-col items-center  justify-center max-w-56">
      <div className="bg-blue-500 text-white p-4 rounded-full mb-6">{icon}</div>
      <h3 className="font-semibold mb-3 text-netral-900">{heading}</h3>
      <p className="text-netral-600 text-sm max-w-2xs">{deskripsi}</p>
    </div>
  );
}
