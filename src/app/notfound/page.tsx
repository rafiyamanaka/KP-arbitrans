import Header from "../_components/header";
import Footer from "../_components/footer";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="container text-center mt-[159px] mb-[70px]">
        <img
          src="/404-Error.png"
          alt="Halaman tidak ditemukan"
          className="w-[480px] h-[320px] mx-auto"
        />

        <h5 className="font-semibold text-lg mt-10">Ups, Jalan Ini Buntu</h5>

        <p className="text-[#666666] text-md mt-2">
          Sepertinya halaman yang Anda cari sudah belok ke arah lain. <br />
          Kembali ke beranda dan lanjutkan perjalanan Anda!
        </p>

        <button className="text-white bg-[#196FEB] py-[15px] px-8 rounded-xl mt-8">
          Ke Beranda
        </button>
      </div>

      <Footer />
    </>
  );
}
