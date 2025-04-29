"use client";

import { useSearchParams } from "next/navigation";
import { BlogDetail } from "@/components/blog-detail";

export function BlogArticleClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  if (!id) {
    return <div>Invalid blog ID</div>;
  }

  return <BlogDetail id={id} />;
}
