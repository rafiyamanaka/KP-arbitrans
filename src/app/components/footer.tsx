export default function Footer() {
    return (
        <footer
            className="rounded-none shadow-sm px-[100px]"
            style={{
                backgroundColor: 'rgba(25, 111, 235, 0.1)',
                margin: 0,
                width: '100%',
                height: '258px',
            }}
        >
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h2 className="mb-8 block text-[32px] font-black text-[#196FEB]">
                            ARBITRANS
                        </h2>
                        <p className="block text-[16px] font-medium text-[#495057]">
                            Rental Mudah. Kendaraan Siap. Langsung Berangkat!
                        </p>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Beranda</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Rental Kendaraan</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-[#495057] sm:text-center">
                    © 2025 <a href="https://arbitrans.com/" className="hover:underline">ARBITRANS</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}