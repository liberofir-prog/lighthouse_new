import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import TherapistsHero from "@/components/sections/therapists-hero";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import NewsletterArchive from "@/components/sections/newsletter-archive";
import ProfessionalConnect from "@/components/sections/professional-connect";

export default function TherapistsPage() {
  return (
    <>
      <Header />
      <main>
        <TherapistsHero />
        <NewsletterSignup />
        <NewsletterArchive />
        <ProfessionalConnect />
      </main>
      <Footer />
    </>
  );
}
