"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BlogDetail } from "@/components/blog-detail";
import { BlogDetailSkeleton } from "@/components/blog-detail-skeleton";

export default function BlogArticlePage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return <div>Invalid blog ID</div>;
  }

  return (
    <main className="flex-1">
      <Suspense fallback={<BlogDetailSkeleton />}>
        <BlogDetail id={id} />
      </Suspense>
    </main>
  );
}
