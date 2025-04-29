"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogDetailSkeleton } from "./blog-detail-skeleton";
import { notFound } from "next/navigation";

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


export function BlogDetail({ id }: { id: string }) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            notFound();
          }
          throw new Error(`Failed to fetch blog: ${response.status}`);
        }

        const data = await response.json();

        // Check if the response is the blog object directly or nested in a 'blog' property
        const blogData = data.blog || data;

        if (blogData) {
          setBlog(blogData);
        } else {
          notFound();
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

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
    return <BlogDetailSkeleton />;
  }

  if (error || !blog) {
    return (
      <div className="container px-4 md:px-6 py-12 text-center">
        <p className="text-red-500">{error || "Blog post not found"}</p>
        <Button
          onClick={() => window.location.reload()}
          className="mt-4 bg-[#1a5fb4] hover:bg-[#164c91]"
        >
          Try Again
        </Button>
        <Link href="/blog">
          <Button variant="outline" className="mt-4 ml-2">
            Back to Blog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <article className="container px-4 md:px-6 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-[#1a5fb4] mb-8 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back to all stories
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
          {blog.title}
        </h1>

        <div className="flex items-center gap-6 text-gray-500 mb-8">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{blog.author?.name || "Ikibeho Team"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(blog.createdAt)}</span>
          </div>
        </div>

        {blog.imageUrls && blog.imageUrls.length > 0 && (
          <div className="mb-8">
            <Image
              src={blog.imageUrls[0] || "/placeholder.svg"}
              alt={blog.title}
              width={900}
              height={500}
              className="rounded-lg object-cover w-full aspect-video"
            />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none prose-headings:text-[#333333] prose-a:text-[#1a5fb4]"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Additional Images */}
        {blog.imageUrls && blog.imageUrls.length > 1 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {blog.imageUrls.slice(1).map((imageUrl, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`${blog.title} - Image ${index + 2}`}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 pt-8 border-t">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-[#1a5fb4] text-[#1a5fb4] hover:bg-[#e6f0ff]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to all stories
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
