import { FaRegCalendarAlt } from "react-icons/fa";

export default function BookingForm() {
  return (
    <div className="w-[350px] bg-white rounded-2xl p-5 border border-[#CED4DA] sticky top-4">
      <h3 className="text-lg font-semibold mb-5 flex items-center justify-center">
        Form Penyewaan
      </h3>

      <form className="space-y-4">
        {/* Tanggal Awal Sewa */}
        <div className="border border-[#CED4DA] rounded-lg p-4 space-y-4">
          {/* Tanggal Awal Sewa */}
          <div>
            <label
              className="block text-sm text-[#212529] mb-1"
              htmlFor="start-date"
            >
              Tanggal Awal Sewa
            </label>
            <div className="relative">
              <img
                src="/date.svg"
                alt="calendar"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6C757D]"
              />
              <input
                id="start-date"
                type="text"
                value="28-07-2025"
                className="w-full border border-[#CED4DA] bg-[#E9ECEF] rounded-lg pl-10 pr-3 py-3 text-[#495057] text-sm"
              />
            </div>
          </div>

          {/* Tanggal Akhir Sewa */}
          <div>
            <label
              className="block text-sm text-[#212529] mb-1"
              htmlFor="end-date"
            >
              Tanggal Akhir Sewa
            </label>
            <div className="relative">
              <img
                src="/date.svg"
                alt="calendar"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6C757D]"
              />
              <input
                id="end-date"
                type="text"
                value="02-08-2025"
                className="w-full border border-[#CED4DA] bg-[#E9ECEF] rounded-lg pl-10 pr-3 py-3 text-[#495057] text-sm"
              />
            </div>
          </div>
        </div>

        {/* Data Perental */}
        <h4 className="text-sm font-medium text-[#212529] mt-6">
          Data Perental
        </h4>

        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full border border-[#CED4DA] rounded-lg px-3 py-3 text-sm"
        />

        <input
          type="text"
          placeholder="NIK"
          className="w-full border border-[#CED4DA] rounded-lg px-3 py-3 text-sm"
        />

        <input
          type="text"
          placeholder="No Telephone"
          className="w-full border border-[#CED4DA] rounded-lg px-3 py-3 text-sm"
        />

        <textarea
          placeholder="Alamat"
          className="w-full border border-[#CED4DA] rounded-lg px-3 py-3 text-sm"
          rows={3}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#196FEB] text-white py-[15px] rounded-xl hover:bg-blue-700 transition font-medium"
        >
          Buat Pemesanan
        </button>

        <p className="text-xs text-[#6C757D] mt-2 text-center leading-relaxed">
          Data yang diberikan hanya untuk keperluan penyewaan kendaraan tidak
          untuk lainnya.
        </p>
      </form>
    </div>
  );
}
