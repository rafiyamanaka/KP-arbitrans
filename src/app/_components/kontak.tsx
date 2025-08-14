import React from "react";
import { FaPhoneAlt,FaClock,FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-[100px] py-16">
      {/* Kolom Kiri - Info Kontak */}
      <div className="flex-1 flex flex-col justify-center">
        <p className="text-[#196FEB] font-medium mb-2 text-[16px]">Kontak Kami</p>
        <h2 className="text-[32px] font-bold mb-4">Punya Pertanyaan? <br/> Tim Kami Siap Bantu!</h2>
        <p className="mb-4 text-[16px] text-[#495057]">
          Kami siap melayani kebutuhan transportasi Anda dengan cepat dan
          terpercaya.
        </p>

        <div className="mb-2 flex items-center gap-4">
          <FaPhoneAlt className="text-blue-600" />
          <span className="text-[16px] text-[#495057]">0815 - 4295 - 2220</span>
        </div>

        <div className="mb-2 flex items-center gap-4">
            <FaClock className="text-[#196FEB]" />
            <span className="text-[16px] text-[#495057]">Setiap hari, 07.00 - 22.00 WIB</span>
        </div>

        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-[#196FEB] mt-1" />
          <span className="text-[16px] text-[#495057]">
            Jl. Kober Gg. Radiul No.51, Kober, Kec. Purwokerto Barat, Kabupaten
            Banyumas, Jawa Tengah
          </span>
        </div>
      </div>

      {/* Kolom Kanan - Google Maps */}
      <div className="flex-1">
        <iframe
          title="Lokasi ARBITRANS"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126607.60836846034!2d109.07796104335935!3d-7.411142599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e681826e855%3A0xd36f1a514b8a1525!2sArbi%20Rental%20Mobil%20Purwokerto%20-%20Sewa%20Mobil%20Purwokerto!5e0!3m2!1sid!2sid!4v1754939594888!5m2!1sid!2sid"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
