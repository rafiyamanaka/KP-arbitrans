import Link from "next/link";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] px-[100px] py-[15px] flex items-center justify-between text-[#196FEB] shadow-sm">
      <div className="font-black text-2xl">ARBITRANS</div>
      <nav>
        <ul className="flex space-x-8 items-center justify-center font-medium text-md">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/rental">Rental Kendaraan</Link></li>

        </ul>
      </nav>
      <button className="bg-[#196FEB] text-white px-6 py-[15px] rounded-xl font-medium text-md">
        Hubungi Kami
      </button>
    </header>
  );
};

export default Header;
