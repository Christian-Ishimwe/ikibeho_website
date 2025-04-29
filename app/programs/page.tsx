import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Video,
  MonitorSmartphone,
  Home,
  GraduationCap,
  Heart,
  Briefcase,
  Users,
  MessageSquare,
} from "lucide-react";

export default function ProgramsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                Our Programs
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                At Ikibeho Digital Foundation, we offer a range of programs
                designed to empower teen mothers and vulnerable women through
                education, skills training, and support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                Core Training Programs
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Our hands-on, experiential approach to learning prepares
                participants for real-world opportunities.
              </p>
            </div>
          </div>

          {/* Videography Program */}
          <div
            id="videography"
            className="grid gap-6 items-center py-8 md:py-12 lg:grid-cols-2 lg:gap-12"
          >
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] p-2 text-[#1a5fb4]">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#333333]">
                Videography and Film Making
              </h3>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our comprehensive videography training covers the entire
                production process, equipping participants with professional
                skills in the growing digital media industry.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Scriptwriting and storyboarding</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Camera operation and lighting techniques</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Video editing and post-production</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Digital storytelling and content creation</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-[#1a5fb4] hover:bg-[#164c91]">
                    Apply for Program
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Videography Training"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full aspect-video"
              />
            </div>
          </div>

          {/* Digital Public Services */}
          <div
            id="digital-services"
            className="grid gap-6 items-center py-8 md:py-12 lg:grid-cols-2 lg:gap-12"
          >
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Digital Services Training"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full aspect-video"
              />
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <div className="inline-block rounded-lg bg-[#e6f0ff] p-2 text-[#1a5fb4]">
                <MonitorSmartphone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#333333]">
                Digital Public Services
              </h3>
              <p className="text-gray-500 md:text-lg/relaxed">
                We empower participants with digital skills essential for
                accessing and providing public services, bridging the digital
                divide and creating pathways to employment.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Computer literacy and digital navigation</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>E-government services and online applications</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Digital communication and information management</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Digital entrepreneurship and online business</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-[#1a5fb4] hover:bg-[#164c91]">
                    Apply for Program
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Tourism & Tea Value Chain */}
          <div
            id="tourism"
            className="grid gap-6 items-center py-8 md:py-12 lg:grid-cols-2 lg:gap-12"
          >
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] p-2 text-[#1a5fb4]">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-[#333333]">
                Tourism & Tea Value Chain
              </h3>
              <p className="text-gray-500 md:text-lg/relaxed">
                Our tourism and tea industry training prepares participants for
                careers in Rwanda&apos;s growing hospitality and agricultural
                sectors, focusing on sustainable practices and cultural
                heritage.
              </p>
              <ul className="space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tour guiding and cultural interpretation</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Hospitality management and customer service</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tea production, processing, and quality control</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Sustainable tourism and agricultural practices</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-[#1a5fb4] hover:bg-[#164c91]">
                    Apply for Program
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tourism Training"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                Support Services
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
                Beyond our core training programs, we provide comprehensive
                support services to ensure the holistic development and
                well-being of our participants.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Education Support */}
            <div
              id="education-support"
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#333333]">
                Education Support
              </h3>
              <p className="mt-2 text-gray-500">
                We provide scholarships, tutoring, and educational resources to
                help teen mothers continue their education and achieve academic
                success.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>School re-entry support</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Tutoring and academic assistance</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Educational materials and resources</span>
                </li>
              </ul>
            </div>

            {/* Healthcare Access */}
            <div
              id="healthcare-access"
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#333333]">
                Healthcare Access
              </h3>
              <p className="mt-2 text-gray-500">
                We facilitate access to maternal and child healthcare services,
                reproductive health education, and mental health support for
                teen mothers.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Maternal and child health services</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Reproductive health education</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Mental health counseling and support</span>
                </li>
              </ul>
            </div>

            {/* Skills Training */}
            <div
              id="skills-training"
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#333333]">
                Skills Training
              </h3>
              <p className="mt-2 text-gray-500">
                Beyond our core programs, we offer additional vocational and
                life skills training to enhance employability and
                self-sufficiency.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Financial literacy and entrepreneurship</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Communication and leadership skills</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Job readiness and career planning</span>
                </li>
              </ul>
            </div>

            {/* Community Outreach */}
            <div
              id="community-outreach"
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#333333]">
                Community Outreach
              </h3>
              <p className="mt-2 text-gray-500">
                We engage with communities to raise awareness about teen
                pregnancy prevention, reduce stigma, and promote supportive
                environments for teen mothers.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Community education workshops</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Parent and family engagement</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>School-based prevention programs</span>
                </li>
              </ul>
            </div>

            {/* Advocacy */}
            <div
              id="advocacy"
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e6f0ff] text-[#1a5fb4]">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#333333]">
                Advocacy
              </h3>
              <p className="mt-2 text-gray-500">
                We advocate for policies and practices that support the rights
                and needs of teen mothers, working with government and other
                stakeholders to create positive change.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Policy development and reform</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Stakeholder engagement and collaboration</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#1a5fb4] shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Public awareness campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1a5fb4] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Programs
              </h2>
              <p className="mx-auto max-w-[700px] text-[#e6f0ff] md:text-xl/relaxed">
                Whether you&apos;re interested in our training programs or support
                services, we&apos;re here to help you build a brighter future.
                Contact us today to learn more about enrollment and eligibility.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-white text-[#1a5fb4] hover:bg-[#e6f0ff]">
                  Contact Us
                </Button>
              </Link>
              <Link href="/donate">
                <Button className="bg-[#d4af37] hover:bg-[#c4a030] text-white">
                  Support Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
