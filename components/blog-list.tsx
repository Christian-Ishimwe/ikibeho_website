"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogListSkeleton } from "./blog-list-skeleton";

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

export function BlogList() {
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
          // Sort blogs by date (newest first)
          const sortedBlogs = data.blogs.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );

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
  const truncateContent = (content: string, maxLength = 150) => {
    // Remove HTML tags
    const plainText = content.replace(/<[^>]*>/g, "");
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength) + "...";
  };

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
    return <BlogListSkeleton />;
  }

  if (error) {
    return (
      <div className="mx-auto max-w-5xl py-12 text-center">
        <p className="text-red-500">{error}</p>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4 bg-[#1a5fb4] hover:bg-[#164c91]"
        >
          Try Again
        </Button>
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
    <div className="mx-auto max-w-5xl">
      {/* Featured Post */}
      {blogs.length > 0 && (
        <div className="mb-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                Featured Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                {blogs[0].title}
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                {truncateContent(blogs[0].content, 200)}
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm font-medium text-[#333333]">
                    {blogs[0].author?.name || "Ikibeho Team"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(blogs[0].createdAt)}
                  </p>
                </div>
              </div>
              <Link
                href={`/blog/article?id=${blogs[0]._id}`}
                className="inline-flex items-center gap-1 text-[#1a5fb4] font-medium hover:underline"
              >
                Read full story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src={blogs[0].imageUrls[0] || "/images/homeimg.jpeg"}
                alt={blogs[0].title}
                width={550}
                height={400}
                className="rounded-xl object-cover w-full aspect-video"
              />
            </div>
          </div>
        </div>
      )}

      {/* All Posts */}
      <h2 className="text-2xl font-bold mb-8 text-[#333333]">All Stories</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(1).map((blog) => (
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
              <p className="text-gray-500 line-clamp-2 mt-2">
                {truncateContent(blog.content)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-gray-400">
                  {formatDate(blog.createdAt)}
                </span>
                <Link
                  href={`/blog/${blog._id}`}
                  className="inline-flex items-center gap-1 text-[#1a5fb4] text-sm font-medium hover:underline"
                >
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
