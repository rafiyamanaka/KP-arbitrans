import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface LoadingSkeleton {
  count: number;
}
function LoadingSkeleton({ count }: LoadingSkeleton) {
  return (
    <div
      className="grid gap-4 px-24 pb-16"
      style={{ gridTemplateColumns: `repeat(${count}, 1fr)` }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-netral-100 border-netral-400 rounded-2xl border p-4 shadow-2xs"
        >
          <Skeleton height={200} className="mb-4" />
          <Skeleton width="75%" height={20} className="mb-2" />
          <Skeleton width="50%" height={20} />
        </div>
      ))}
    </div>
  );
}

export default LoadingSkeleton;
