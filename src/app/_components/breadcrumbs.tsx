export default function Breadcrumbs() {
  return (
    <ol className="flex items-center whitespace-nowrap mt-[48px] mb-[14px] px-[100px]">
      <li className="inline-flex items-center">
        <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600" href="#">
          Rental Kendaraan
        </a>
        <span className="mx-2 text-gray-400">/</span>
      </li>
      <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
        Toyota Avanza
      </li>
    </ol>
  );
}
