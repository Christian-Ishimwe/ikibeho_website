import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 md:px-6 py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-[#333333]">
        404
      </h1>
      <h2 className="text-2xl font-semibold mt-2 text-[#333333]">
        Page Not Found
      </h2>
      <p className="max-w-[600px] mt-4 text-gray-500">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
        moved, deleted, or never existed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link href="/">
          <Button className="bg-[#1a5fb4] hover:bg-[#164c91]">Go Home</Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outline"
            className="border-[#1a5fb4] text-[#1a5fb4] hover:bg-[#e6f0ff]"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
