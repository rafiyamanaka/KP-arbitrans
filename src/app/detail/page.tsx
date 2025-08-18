import Header from "../_components/header";
import Breadcrumbs from "../_components/breadcrumbs";
import Gallery from "../_components/galeri";
import BookingForm from "../_components/bookingform";

export default function DetailPage() {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <Gallery />
            <div className="px-[100px]">
                <div className="container flex items-center justify-between border-b border-gray-300 pb-4">
                    <h3 className="text-[28px] font-semibold">Toyota Avanza</h3>
                    <div className="flex flex-col items-end gap-1 leading-tight">
                        <p className="text-[16px] text-gray-600">Harga Mulai</p>
                        <p className="text-[22px] font-bold text-[#196FEB]">Rp 350.000</p>
                    </div>
                </div>
            </div>
            <div className="container px-[100px] py-4 flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Left: Info */}
                <div className="flex-1">
                    <h5 className="text-lg font-semibold py-3 text-[#212529]">
                        Deskripsi Kendaraan
                    </h5>
                    <p className="text-md font-medium py-3 text-justify text-[#495057] leading-[28px]">
                        Toyota Avanza adalah mobil MPV (Multi Purpose Vehicle) yang ideal untuk kebutuhan keluarga maupun perjalanan bersama rekan kerja. Memiliki kapasitas hingga 7 penumpang dengan ruang kabin yang lega dan desain interior yang nyaman. Ditenagai oleh mesin efisien dan tersedia dalam pilihan transmisi manual maupun otomatis, Avanza cocok digunakan untuk perjalanan dalam kota maupun luar kota.
                    </p>
                </div>
                {/* Right: Booking Form */}
                <div className="py-4">
                    <BookingForm />
                </div>
                {/* spesifikasi kendaraan */}
                <div>
                    <h5>Spesifikasi Kendaraan</h5>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 text-md text-[#495057]">
                        <div className="flex items-center gap-2">
                            {/* <FaUserFriends className="text-[#196FEB]" /> */}
                            <span>7 Penumpang</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <FaSuitcase className="text-[#196FEB]" /> */}
                            <span>4 Koper</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <FaCogs className="text-[#196FEB]" /> */}
                            <span>Otomatis</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <FaGasPump className="text-[#196FEB]" /> */}
                            <span>Bensin</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <FaCalendarAlt className="text-[#196FEB]" /> */}
                            <span>2023</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* <FaCar className="text-[#196FEB]" /> */}
                            <span>MPV</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}