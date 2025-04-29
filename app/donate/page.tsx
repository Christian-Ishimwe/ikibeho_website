/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Check, Users, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

export default function DonatePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">
                Make a Difference
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#333333]">
                Support Our Cause
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Your donation helps us continue our work supporting teen mothers and preventing teen pregnancies in
                Rwanda.
              </p>
              <a href="#donateopt" className="inline-block">
                <Button className="bg-[#1a5fb4] hover:bg-[#164c91]">Donate Now</Button>
              </a>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Donate"
                width={550}
                height={550}
                className="rounded-xl object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="w-full py-12 md:py-24 lg:py-32" id="donateopt">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">Donation Options</h2>
              <p className="mx-auto max-w-[700px] text-gray-500">
                Every contribution makes a difference, no matter how small.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center justify-between rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f0ff] p-3">
                <Heart className="h-6 w-6 text-[#1a5fb4]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333]">One-Time Donation</h3>
              <p className="mb-4 mt-2 text-center text-gray-500">Make a contribution to support our young Girls</p>
              <DonationDialog />
            </div>
            <div className="flex flex-col items-center justify-between rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f0ff] p-3">
                <Users className="h-6 w-6 text-[#1a5fb4]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333]">Volunteer Opportunities</h3>
              <p className="mb-4 mt-2 text-center text-gray-500">
                Join our diverse Volunteers, working together to create Positive change
              </p>
              <VolunteerDialog />
            </div>
            <div className="flex flex-col items-center justify-between rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 rounded-full bg-[#e6f0ff] p-3">
                <MapPin className="h-6 w-6 text-[#1a5fb4]" />
              </div>
              <h3 className="text-xl font-bold text-[#333333]">Visit us</h3>
              <p className="mb-4 mt-2 text-center text-gray-500">
                Visit us at our office, and mentor our young Girls and Make an impactful Change
              </p>
              <VisitDialog />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">Your Impact</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                How Your Donation Helps
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#d4af37] mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#333333]">Education Support</h3>
                    <p className="text-gray-500">
                      $50 can provide school supplies for a teen mother to continue her education.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#d4af37] mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#333333]">Healthcare Access</h3>
                    <p className="text-gray-500">
                      $100 can provide prenatal care and medical support for a teen mother.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#d4af37] mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#333333]">Skills Training</h3>
                    <p className="text-gray-500">
                      $200 can provide vocational training to help a teen mother become financially independent.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-[#d4af37] mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#333333]">Prevention Programs</h3>
                    <p className="text-gray-500">
                      $500 can fund a sexual education workshop for 50 students to prevent teen pregnancies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=550&width=550"
                alt="Impact"
                width={550}
                height={550}
                className="rounded-xl object-cover w-full aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#e6f0ff] px-3 py-1 text-sm text-[#1a5fb4]">Get in Touch</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-[#333333]">
                Questions About Donating?
              </h2>
              <p className="text-gray-500">
                If you have any questions about making a donation or would like to discuss other ways to support our
                cause, please fill out the form and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#333333]">Contact Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#1a5fb4]"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-gray-500">+250 123 456 789</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                      className="h-5 w-5 text-[#1a5fb4]"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="text-gray-500">donations@ikibeho.org</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function DonationDialog() {
  const [amount, setAmount] = useState(100);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isPending, setPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  // @ts-ignore

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError("");

    const type = "donation";
    const details = { name, email, phone, amount };
    const new_donation = { type, details };

    try {
      const response = await fetch(
        "https://api.ikibehofoundation.org.rw/api/donations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_donation),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      const data = await response.json();
      console.log(data);
      setIsSuccess(true);

      // Reset form
      setAmount(100);
      setEmail("");
      setName("");
      setPhone("");
    } catch (err) {
      console.error(err);
      setError(
        "An error occurred while processing your donation. Please try again."
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#d4af37] hover:bg-[#c4a030] text-white">
          Donate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Donation</DialogTitle>
        </DialogHeader>
        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Thank You!</h3>
            <p className="text-gray-500">
              Your donation has been received. We appreciate your support!
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              className="bg-[#1a5fb4] hover:bg-[#164c91]"
            >
              Make Another Donation
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="donationAmount">Donation Amount (USD)</Label>
              <Input
                id="donationAmount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                // @ts-ignore
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="donorName">Your Name</Label>
              <Input
                id="donorName"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="donorEmail">Email Address</Label>
              <Input
                id="donorEmail"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="donorPhone">Phone Number</Label>
              <Input
                id="donorPhone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full bg-[#1a5fb4] hover:bg-[#164c91]"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Donating...
                </>
              ) : (
                "Donate Now"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function VolunteerDialog() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [skills, setSkills] = useState("")
  const [isPending, setPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setPending(true)
    setError("")

    const type = "volunteer"
    const details = { name, email, phone, skills }
    const new_volunteer = { type, details }

    try {
      const response = await fetch("https://api.ikibehofoundation.org.rw/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_volunteer),
      })

      if (!response.ok) {
        throw new Error("Failed to submit volunteer application")
      }

      const data = await response.json()
      console.log(data)
      setIsSuccess(true)

      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setSkills("")
    } catch (err) {
      console.error(err)
      setError("An error occurred while processing your application. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#d4af37] hover:bg-[#c4a030] text-white">Volunteer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Volunteer Application</DialogTitle>
        </DialogHeader>
        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Thank You!</h3>
            <p className="text-gray-500">Your volunteer application has been received. We&apos;ll be in touch soon!</p>
            <Button onClick={() => setIsSuccess(false)} className="bg-[#1a5fb4] hover:bg-[#164c91]">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="volunteerName">Your Name</Label>
              <Input
                id="volunteerName"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteerEmail">Email Address</Label>
              <Input
                id="volunteerEmail"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteerPhone">Phone Number</Label>
              <Input
                id="volunteerPhone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="volunteerSkills">Skills & Availability</Label>
              <Textarea
                id="volunteerSkills"
                placeholder="Tell us about your skills and availability"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-[#1a5fb4] hover:bg-[#164c91]" disabled={isPending}>
              {isPending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function VisitDialog() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [purpose, setPurpose] = useState("")
  const [isPending, setPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
// @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    setPending(true)
    setError("")

    const type = "visit"
    const details = { name, email, phone, date, purpose }
    const new_visit = { type, details }

    try {
      const response = await fetch("https://api.ikibehofoundation.org.rw/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_visit),
      })

      if (!response.ok) {
        throw new Error("Failed to book visit")
      }

      const data = await response.json()
      console.log(data)
      setIsSuccess(true)

      // Reset form
      setName("")
      setEmail("")
      setPhone("")
      setDate("")
      setPurpose("")
    } catch (err) {
      console.error(err)
      setError("An error occurred while booking your visit. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#d4af37] hover:bg-[#c4a030] text-white">Book</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Visit</DialogTitle>
        </DialogHeader>
        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold">Visit Booked!</h3>
            <p className="text-gray-500">Your visit has been scheduled. We look forward to meeting you!</p>
            <Button onClick={() => setIsSuccess(false)} className="bg-[#1a5fb4] hover:bg-[#164c91]">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="visitorName">Your Name</Label>
              <Input
                id="visitorName"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitorEmail">Email Address</Label>
              <Input
                id="visitorEmail"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitorPhone">Phone Number</Label>
              <Input
                id="visitorPhone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitDate">Preferred Date</Label>
              <Input id="visitDate" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="visitPurpose">Purpose of Visit</Label>
              <Textarea
                id="visitPurpose"
                placeholder="Tell us why you'd like to visit"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full bg-[#1a5fb4] hover:bg-[#164c91]" disabled={isPending}>
              {isPending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Booking...
                </>
              ) : (
                "Book Visit"
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isPending, setPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  // @ts-ignore
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  // @ts-ignore

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    setError("");

    try {
      // You can add an API endpoint for contact form submissions
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError(
        "An error occurred while sending your message. Please try again."
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border bg-white p-6"
    >
      {isSuccess ? (
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto rounded-full bg-green-100 p-3 w-16 h-16 flex items-center justify-center">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold">Message Sent!</h3>
          <p className="text-gray-500">
            Thank you for reaching out. We&apos;ll get back to you soon!
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-[#1a5fb4] hover:bg-[#164c91]"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Enter your message"
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#1a5fb4] hover:bg-[#164c91]"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </>
      )}
    </form>
  );
}
