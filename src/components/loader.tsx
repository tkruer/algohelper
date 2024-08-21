import { Skeleton } from "~/components/ui/skeleton"

export function LoadingSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/3">
          <Skeleton className="w-1/2 h-4 mb-2" />
          <Skeleton className="w-1/3 h-3" />
          <Skeleton className="w-full h-4 mt-2" />
        </Skeleton>
      ))}
    </div>
  );
}
