const SearchBar = () => {
    return (
        <div className="relative z-20 -mt-22 px-[100px]">
            <div className="flex items-center justify-center mt-10">
                <div
                    className="bg-white rounded-lg p-4 flex w-full gap-4"
                    style={{
                        boxShadow: '0px 2px 24px rgba(0,0,0,0.08)',
                    }}
                >
                    <div className="flex flex-col flex-1">
                        <label
                            htmlFor="vehicleType"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Jenis Kendaraan
                        </label>
                        <select
                            id="vehicleType"
                            className="border rounded-lg px-3 py-2 w-full"
                        >
                            <option value="">Pilih kendaraan</option>
                            <option value="mobil">Mobil</option>
                            <option value="motor">Motor</option>
                        </select>
                    </div>

                    <div className="flex flex-col flex-1">
                        <label
                            htmlFor="startDate"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Tanggal Awal Sewa
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            className="border rounded-lg px-3 py-2 w-full"
                        />
                    </div>

                    <div className="flex flex-col flex-1">
                        <label
                            htmlFor="endDate"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Tanggal Akhir Sewa
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            className="border rounded-lg px-3 py-2 w-full"
                        />
                    </div>

                    <div className="flex items-end flex-1">
                        <button className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600">
                            Cari
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;