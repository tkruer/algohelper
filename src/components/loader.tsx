import { Skeleton } from "~/components/ui/skeleton"

export function LoadingSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="flex flex-col items-center text-center w-full">
          <Skeleton className="w-full h-4 mt-2" />
        </Skeleton>
      ))}
    </div>
  );
}
