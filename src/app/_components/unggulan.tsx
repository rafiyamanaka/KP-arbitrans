import Image from "next/image";
import { FaCar, FaWhatsapp, FaMoneyBillWave, FaHeadset } from "react-icons/fa";

export default function MengapaPilihKami() {
    const features = [
        {
            icon: <FaCar className="text-blue-600 text-lg" />,
            title: "Armada Lengkap & Terawat",
            desc: "Pilihan mobil dan motor berkualitas, rutin diservis, dan siap jalan kapan saja."
        },
        {
            icon: <FaWhatsapp className="text-blue-600 text-lg" />,
            title: "Booking Mudah via WhatsApp",
            desc: "Tanpa ribet! Cukup pilih kendaraan dan sewa langsung lewat WhatsApp."
        },
        {
            icon: <FaMoneyBillWave className="text-blue-600 text-lg" />,
            title: "Harga Transparan & Terjangkau",
            desc: "Tidak ada biaya tersembunyi. Harga sesuai yang tertera."
        },
        {
            icon: <FaHeadset className="text-blue-600 text-lg" />,
            title: "Respon Cepat & Ramah",
            desc: "Admin kami siap membantu Anda dengan pelayanan cepat dan sopan."
        }
    ];

    return (
        <section className="px-6 md:px-16 bg-white">
            {/* Judul */}
            <div className="text-center mb-12">
                <p className="text-blue-600 font-medium mb-2">Mengapa Pilih Kami</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                    Kepercayaan dan Kenyamanan <br /> Adalah Kunci Utama
                </h2>
            </div>

            {/* Konten */}
            <div className="flex flex-col md:flex-row gap-12 items-stretch">
                {/* Fitur */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-[#CED4DA] rounded-xl p-5 flex flex-col gap-3 hover:shadow-md transition h-full"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="font-semibold">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
                {/* Gambar */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-full">
                        <Image
                            src="/tentang_kami.jpeg"
                            alt="unggulan"
                            width={400}
                            height={300}
                            className="object-cover w-full h-full rounded-xl"
                            style={{ height: "100%" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
