"use client";
import { useState, useTransition } from "react";
import { Kendaraan } from "@/app/_types/kendaraan";
import { loadMoreKendaraan } from "@/app/_libs/action";
import Button from "@/app/_components/Button";
import CarCard from "@/app/_components/Card";

interface LoadMoreButtonProps {
  initialCount: number;
  totalCount: number;
  jenisKendaraan?: string;
  startDate?: string;
  endDate?: string;
}

export default function LoadMoreButton({
  initialCount,
  totalCount,
  jenisKendaraan,
  startDate,
  endDate,
}: LoadMoreButtonProps) {
  const [additionalData, setAdditionalData] = useState<Kendaraan[]>([]);
  const [currentDisplayed, setCurrentDisplayed] = useState(initialCount);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isPending, startTransition] = useTransition();

  const handleLoadMore = () => {
    startTransition(async () => {
      try {
        setError(null);

        const result = await loadMoreKendaraan(
          currentDisplayed,
          jenisKendaraan,
          startDate,
          endDate
        );

        if (result.success) {
          setAdditionalData((prev) => [...prev, ...result.data]);
          setCurrentDisplayed((prev) => prev + result.data.length);

          if (
            !result.hasMore ||
            currentDisplayed + result.data.length >= totalCount
          ) {
            setHasMore(false);
          }
        } else {
          setError(result.error || "Gagal memuat data");
        }
      } catch (err) {
        console.error("Error loading more:", err);
        setError("Terjadi kesalahan saat memuat data");
      }
    });
  };

  return (
    <>
      {additionalData.length > 0 && (
        <div className="grid grid-cols-4 gap-6 mx-auto mb-16">
          {additionalData.map((data) => (
            <CarCard data={data} key={data.id} />
          ))}
        </div>
      )}

      {error && <div className="text-center mb-4 text-red-500">{error}</div>}

      {hasMore && (
        <div className="text-center">
          <Button
            variant="secondary"
            text={isPending ? "Memuat..." : "Muat lebih banyak"}
            className="!border-none !bg-primary/10 !px-6 !py-3 mx-auto hover:!bg-primary/20 disabled:opacity-50"
            onClick={handleLoadMore}
            disabled={isPending}
          />
        </div>
      )}
    </>
  );
}
