import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import HowItWorks from "./_components/HowItWorks";
import TestimonialsSection from "./_components/TestimonialsSection";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-[0.8px] border-black h-20 flex items-center">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-[1200px]">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center -mt-2">
              <Image
                src="/assets/images/logo.png"
                alt="Wirapath Logo"
                width={120}
                height={32}
                className="w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
              <Link
                href="#features"
                className="hover:text-[#066EFF] transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="hover:text-[#066EFF] transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="hover:text-[#066EFF] transition-colors"
              >
                Testimonials
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="text-[16px] font-semibold text-[#066EFF] hover:text-[#0556cc]"
            >
              Sign In
            </Link>
            <Button className="bg-[#066EFF] hover:bg-[#0556cc] rounded-[14px] py-5 px-6 text-[16px]">
              Get Started Free
            </Button>
          </div>
        </div>
      </nav>

      <main className="grow">
        <HeroSection />

        <section
          className="h-[163px] w-full border-y-[0.8px] bg-white flex flex-col items-center justify-center gap-6"
          style={{ borderColor: "#E8ECF099" }}
        >
          <p className="font-poppins text-[13px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Trusted by graduates from top universities
          </p>
          <div className="container mx-auto max-w-[1200px] flex items-center justify-center gap-12 md:gap-20">
            <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
              Universitas Indonesia
            </span>
            <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
              ITB
            </span>
            <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
              Binus University
            </span>
            <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
              UGM
            </span>
            <span className="font-darker-grotesque text-[15px] font-bold text-gray-400">
              ITS Surabaya
            </span>
          </div>
        </section>

        <FeaturesSection />

        <HowItWorks />

        <TestimonialsSection />

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
