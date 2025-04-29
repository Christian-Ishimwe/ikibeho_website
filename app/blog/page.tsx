import { Suspense } from "react";

import { BlogList } from "@/components/blog-list";
import { BlogListSkeleton } from "@/components/blog-list-skeleton";

export const metadata = {
  title: "Blog | Ikibeho Digital Foundation",
  description: "Read our latest stories, impact reports, and initiatives.",
};

export default function BlogPage() {
  return (
    <main className="flex-1">


     

      {/* Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <Suspense fallback={<BlogListSkeleton />}>
            <BlogList />
          </Suspense>
        </div>
      </section>

      {/* Newsletter */}
      
    </main>
  );
}
