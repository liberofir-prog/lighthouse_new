import Header from "@/components/sections/header";
import FloatingMenu from "@/components/floating-menu";
import Footer from "@/components/sections/footer";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import NewsletterUnsubscribe from "@/components/sections/newsletter-unsubscribe";
import NewsletterArchive from "@/components/sections/newsletter-archive";
import ProfessionalConnect from "@/components/sections/professional-connect";

export default function TherapistsPage() {
  return (
    <>
      {/* desktop nav */}
      <div className="hidden md:block"><Header /></div>
      {/* mobile floating hamburger */}
      <div className="md:hidden"><FloatingMenu /></div>
      <main>
        <NewsletterSignup />
        <NewsletterUnsubscribe />
        <NewsletterArchive />
        <ProfessionalConnect />
      </main>
      <Footer />
    </>
  );
}
