import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import NewsletterArchive from "@/components/sections/newsletter-archive";
import ProfessionalConnect from "@/components/sections/professional-connect";

export default function TherapistsPage() {
  return (
    <>
      <Header />
      <main>
        <NewsletterSignup />
        <NewsletterArchive />
        <ProfessionalConnect />
      </main>
      <Footer />
    </>
  );
}
