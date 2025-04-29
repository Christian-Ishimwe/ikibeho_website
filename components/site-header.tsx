"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export function SiteHeader() {
  const isMobile = useMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#1a5fb4]">Ikibeho</span>
            <span className="text-xl font-light text-[#d4af37]">
              Foundation
            </span>
          </Link>
        </div>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-[#d4af37]"
              >
                <Menu className="h-5 w-5 text-[#333333]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-[#1a5fb4] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-[#1a5fb4] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="text-lg font-medium hover:text-[#1a5fb4] transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-[#1a5fb4] transition-colors"
                >
                  Contact
                </Link>
                <Link href="/donate">
                  <Button className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-white">
                    Donate
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[#1a5fb4] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-[#1a5fb4] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-[#1a5fb4] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[#1a5fb4] transition-colors"
            >
              Contact
            </Link>
            <Link href="/donate">
              <Button className="bg-[#d4af37] hover:bg-[#c4a030] text-white">
                Donate
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
