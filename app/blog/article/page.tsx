import { Suspense } from "react";
import { BlogArticleClient } from "@/components/blog-article-client";
import { BlogDetailSkeleton } from "@/components/blog-detail-skeleton";

export default function BlogArticlePage() {
  return (
    <main className="flex-1">
      <Suspense fallback={<BlogDetailSkeleton />}>
        <BlogArticleClient />
      </Suspense>
    </main>
  );
}
