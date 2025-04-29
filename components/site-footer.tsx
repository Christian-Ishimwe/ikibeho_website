import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-[#f8f9fa] py-12">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#1a5fb4]">Ikibeho</span>
            <span className="text-xl font-light text-[#d4af37]">
              Foundation
            </span>
          </Link>
          <p className="text-sm text-gray-500">
            Empowering young mothers and preventing teen pregnancies through
            education, support, and community outreach in Rwanda.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-[#1a5fb4]">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#1a5fb4]">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#1a5fb4]">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#333333]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#333333]">Programs</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/programs"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Education Support
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Healthcare Access
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Skills Training
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Community Outreach
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="text-sm text-gray-500 hover:text-[#1a5fb4]"
              >
                Advocacy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#333333]">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-[#1a5fb4] shrink-0 mt-0.5" />
              <span className="text-sm text-gray-500">
                Rwamagana District, Eastern Province
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-[#1a5fb4]" />
              <span className="text-sm text-gray-500">+250 788 483 378</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#1a5fb4]" />
              <span className="text-sm text-gray-500">info@ikibeho.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Ikibeho Digital Foundation. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
