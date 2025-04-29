/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPreview } from "@/components/blog-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                  Supporting Teen Mothers in Rwanda
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  Empowering Teen Mothers
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Ikibeho Digital Foundation, we are dedicated to
                  transforming the lives of teen mothers in Rwanda. We
                  understand the unique challenges that young mothers face, from
                  managing their education and personal development to securing
                  a stable future for themselves and their children.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to provide comprehensive support that empowers
                  these young women through videography and film making
                  production, digital public services, and tourism to overcome
                  obstacles and thrive.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="bg-[#1a5fb4] hover:bg-[#164c91] text-white">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/donate">
                    <Button
                      variant="outline"
                      className="border-[#d4af37] text-[#d4af37] hover:bg-[#faf6e9]"
                    >
                      Donate <Heart className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/images/homeimg.jpeg"
                  alt="Ikibeho Foundation"
                  width={550}
                  height={550}
                  className="rounded-xl object-cover w-full aspect-square"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/images/homeimg.jpeg"
                  alt="Our Impact"
                  width={550}
                  height={550}
                  className="rounded-xl object-cover w-full aspect-square"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                  Making a Difference
                </h2>
                <p className="text-gray-500">
                  Since our inception, Ikibeho has positively impacted the lives
                  of numerous teen mothers in Rwamagana, Rwanda, providing them
                  with the support they need to overcome adversity and build a
                  brighter future. Our success stories are a testament to the
                  resilience and determination of these young women and the
                  effectiveness of our programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  Our Approach
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  At Ikibeho, we believe in a hands-on, experiential approach to
                  learning. Our programs are designed to be practical, engaging,
                  and directly applicable to real-world situations. Here's how
                  we do it:
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333333]">
                  Videography and Film Making
                </h3>
                <p className="text-gray-500">
                  Our videography training covers the entire production process,
                  from scriptwriting and filming to editing and post-production.
                  We equip young mothers with the skills needed to create
                  compelling visual stories.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333333]">
                  Digital Public Services
                </h3>
                <p className="text-gray-500">
                  Ikibeho empowers teen mothers by teaching them digital public
                  service skills, fostering self-sufficiency and brighter
                  futures. Through targeted education and support, they bridge
                  the digital divide for young mothers.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333333]">
                  Tourism & Tea Value Chain
                </h3>
                <p className="text-gray-500">
                  We provide in-depth training on Rwanda's cultural and natural
                  heritage. Our courses prepare young mothers for careers in
                  tourism, including roles as tour guides, travel consultants,
                  hospitality managers, and in the tea industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  Testimonies
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  At Ikibeho Digital Foundation, the impact of our work is best
                  told through the voices of the young mothers we support. Here
                  are some of their stories:
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl py-12">
              <div className="rounded-xl border bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <blockquote className="mx-auto max-w-2xl text-gray-500 md:text-xl italic">
                    "Joining Ikibeho was the best decision I ever made. The
                    photography training not only gave me a skill but also a
                    sense of purpose. I never imagined that I could turn my
                    passion into a career. The internship they provided helped
                    me gain real-world experience, and now I have started my own
                    small photography business. I am forever grateful for the
                    support and guidance I received."
                  </blockquote>
                  <div className="mt-8">
                    <Image
                      src="/images/homeimg.jpeg"
                      alt="Janine Dushimana"
                      width={100}
                      height={100}
                      className="mx-auto rounded-full"
                    />
                    <div className="mt-4">
                      <p className="font-semibold text-[#333333]">
                        Janine Dushimana
                      </p>
                      <p className="text-sm text-gray-500">
                        Age: 18 | Program: Photography
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  Our Impact
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Through our programs and initiatives, we've made a significant
                  difference in the lives of young women across Rwanda.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-xl p-4 bg-white">
                <div className="text-3xl font-bold text-[#d4af37]">500+</div>
                <p className="text-gray-500 text-center">
                  Teen mothers supported
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-xl p-4 bg-white">
                <div className="text-3xl font-bold text-[#d4af37]">20+</div>
                <p className="text-gray-500 text-center">Communities reached</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-xl p-4 bg-white">
                <div className="text-3xl font-bold text-[#d4af37]">5,000+</div>
                <p className="text-gray-500 text-center">Students educated</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border rounded-xl p-4 bg-white">
                <div className="text-3xl font-bold text-[#d4af37]">30%</div>
                <p className="text-gray-500 text-center">
                  Reduction in teen pregnancies
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                  Latest Stories
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Read about our work, impact stories, and latest initiatives.
                </p>
              </div>
            </div>
            <BlogPreview />
            <div className="flex justify-center mt-8">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="border-[#d4af37] text-[#d4af37] hover:bg-[#faf6e9]"
                >
                  View All Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Donation CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a5fb4] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Support Our Cause
                </h2>
                <p className="mx-auto max-w-[700px] text-[#e6f0ff] md:text-xl/relaxed">
                  Your donation helps us continue our work supporting teen
                  mothers and preventing teen pregnancies in Rwanda.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="/donate">
                  <Button className="w-full bg-[#d4af37] hover:bg-[#c4a030] text-white">
                    Donate Now <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-sm text-[#e6f0ff]">
                  Every contribution makes a difference, no matter how small.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
