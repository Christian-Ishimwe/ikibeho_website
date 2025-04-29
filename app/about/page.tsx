import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                About Ikibeho Digital Foundation
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Ikibeho Digital Foundation is an independent, non-governmental
                organisation based in Muyumbu, Rwamagana registered with the
                Rwandan Government. Ikibeho strives to improve both the quality
                and education of teen mothers.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/images/homeimg.jpeg"
                alt="About Ikibeho Foundation"
                width={550}
                height={550}
                className="rounded-xl object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/homeimg.jpeg"
                alt="Our Story"
                width={550}
                height={550}
                className="rounded-xl object-cover w-full aspect-square"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                Our History
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                How We Started
              </h2>
              <p className="text-gray-500">
                IKIBEHO DIGITAL FOUNDATION, a common-benefit foundation, was
                established on July 3rd, 2023, by NEZEHOSE MEDARD. The founder,
                Eng. NEZEHOSE Medard, resides in Kibagabaga Cell, Kimironko
                Sector, Gasabo District, and can be contacted via mobile at
                +250788483378 or by email at nezehose@gmail.com.
              </p>
              <p className="text-gray-500">
                As a professional technologist and engineer, NEZEHOSE Medard
                envisioned creating a foundation that would transform the
                well-being of teen mothers, vulnerable women from poor families,
                and young girls who had dropped out of school due to family
                disputes. This vision led to the establishment of IKIBEHO
                DIGITAL FOUNDATION, a training center aimed at improving the
                financial and mental well-being of the Rwandan society through
                digital training skills.
              </p>
              <p className="text-gray-500">
                The foundation operates under the deed of incorporation and
                complies with the provisions of Law No 059/2021 of 14/10/2021
                governing foundations in Rwanda. The head office is located in
                Kabagabo Cell, Muyumbu Sector, Rwamagana District, Eastern
                Province, but it can be relocated to other parts of the country
                as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                Our Vision
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                Breaking the Cycle
              </h2>
              <p className="text-gray-500">
                Our work aims to break the vicious cycle of poverty and social
                isolation and to restore hope among the youth for a better
                future. We believe that every person be men or female have equal
                rights.
              </p>
            </div>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                No Girl Uneducated
              </h2>
              <p className="text-gray-500">
                We believe that every young girl and even those who drop from
                school due to unwanted pregnancies in Rwanda needs and deserves
                quality education in order to develop and get engaged in
                employment opportunities.
              </p>
              <p className="text-gray-500">
                The foundation offers three main training courses: provision of
                public service activities, filmmaking and video production, and
                tourism activities.
              </p>
              <p className="text-gray-500">
                The beneficiaries of the foundation&apos;s programs include
                children, especially girls, who left school due to limited
                abilities, poor families from the first and second social
                classes, teen mothers who dropped out of school due to unwanted
                pregnancies, and vulnerable women from poor families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a5fb4] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Mission
              </h2>
              <p className="mx-auto max-w-[700px] text-[#e6f0ff] md:text-xl/relaxed">
                Together, we can make a difference in the lives of teen mothers
                and prevent teen pregnancies in Rwanda.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-white text-[#1a5fb4] hover:bg-[#e6f0ff]">
                  Get Involved
                </Button>
              </Link>
              <Link href="/donate">
                <Button className="bg-[#d4af37] hover:bg-[#c4a030] text-white">
                  Donate Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
