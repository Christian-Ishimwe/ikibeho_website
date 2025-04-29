"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Blog {
  _id: string;
  title: string;
  content: string;
  author: {
    _id: string;
    name?: string;
  };
  imageUrls: string[];
  createdAt: string;
}

interface BlogResponse {
  message: string;
  blogs: Blog[];
}

export function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs: ${response.status}`);
        }

        const data: BlogResponse = await response.json();

        if (data.blogs && data.blogs.length > 0) {
          // Get the top 3 most recent blogs
          const sortedBlogs = data.blogs
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
            )
            .slice(0, 3);

          setBlogs(sortedBlogs);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Function to truncate content for preview
//   const truncateContent = (content: string, maxLength = 100) => {
//     if (content.length <= maxLength) return content;
//     return content.substring(0, maxLength) + "...";
//   };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-lg border"
          >
            <Skeleton className="aspect-video w-full" />
            <div className="p-4 space-y-3">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/3 mt-2" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-5xl py-12 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="mx-auto max-w-5xl py-12 text-center">
        <p className="text-gray-500">
          No blog posts available at the moment. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="group relative overflow-hidden rounded-lg border"
        >
          <div className="aspect-video overflow-hidden">
            <Image
              src={blog.imageUrls[0] || "/images/homeimg.jpeg"}
              alt={blog.title}
              width={500}
              height={300}
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#1a5fb4] transition-colors">
              {blog.title}
            </h3>
            {/* <p className="text-gray-500 line-clamp-2 mt-2">
              {truncateContent(blog.content)}
            </p> */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs text-gray-400">
                {formatDate(blog.createdAt)}
              </span>
              <Link
                href={`/blog/article?id=${blog._id}`}
                className="inline-flex items-center gap-1 text-[#1a5fb4] text-sm font-medium hover:underline"
              >
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
