"use client";
import { useRouter } from "next/navigation";

interface BreadcrumbsProps {
  kendaraanName?: string;
}

export default function Breadcrumbs({ kendaraanName }: BreadcrumbsProps) {
  const router = useRouter();
  return (
    <ol className="flex items-center mt-32 mb-8 px-24">
      <li className="inline-flex items-center">
        <button
          onClick={() => {
            if (window.history.length > 1) {
              router.back();
            } else {
              router.push("/rental");
            }
          }}
          className="flex items-center text-netral-900 cursor-pointer hover:text-primary hover:underline"
        >
          Rental Kendaraan
        </button>
        {kendaraanName && <span className="mx-2 text-netral-600 ">/</span>}
      </li>

      {kendaraanName && (
        <li className="inline-flex items-center">
          <span className=" text-netral-600" aria-current="page">
            {kendaraanName}
          </span>
        </li>
      )}
    </ol>
  );
}
