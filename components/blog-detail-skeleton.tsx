import { Skeleton } from "@/components/ui/skeleton";

export function BlogDetailSkeleton() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <Skeleton className="h-4 w-32 mb-8" />

      <div className="max-w-3xl mx-auto">
        <Skeleton className="h-12 w-full mb-2" />
        <Skeleton className="h-12 w-3/4 mb-6" />

        <div className="flex items-center gap-6 mb-8">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-32" />
        </div>

        <Skeleton className="aspect-video w-full rounded-lg mb-8" />

        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-4/5" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
        </div>

        <div className="mt-12 pt-8 border-t">
          <Skeleton className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
}
