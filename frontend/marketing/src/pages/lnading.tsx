import FaqSection from "@/components/landing/faq-section";
import FeaturesSection from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero";
import NewsLatterSection from "@/components/landing/news-latter-section";
import PricingSection from "@/components/landing/pricing";
import ScrollingTestimonialsSection from "@/components/landing/scrolling-testimonials";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Link } from "react-router-dom";
export default function LandingPage() {

    return (
        <>
            <div className="relative  mx-auto flex max-w-7xl flex-col items-center justify-center">
                <Navbar />
                <Spotlight />
                <HeroSection />
                {/* Decorative Borders */}

                <FeaturesSection />
                <ScrollingTestimonialsSection />
                <PricingSection />
                <FaqSection />

                <NewsLatterSection />
                <Footer />
            </div>
        </>
    );
}

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
            <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                <h1 className="text-lg font-bold md:text-2xl ">Qwikish</h1>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <Link to="/auth/login" className="w-24 rounded-lg  hover:-translate-y-0.55 duration-300 ease-in-out px-6 py-2 font-medium hover:bg-gray-200 dark:border-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 bg-black text-white ">
                    Login
                </Link>
            </div>
        </nav>
    );
};


