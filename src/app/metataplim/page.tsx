import FloatingMenu from "@/components/floating-menu";
import Footer from "@/components/sections/footer";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import NewsletterUnsubscribe from "@/components/sections/newsletter-unsubscribe";
import NewsletterArchive from "@/components/sections/newsletter-archive";
import ProfessionalConnect from "@/components/sections/professional-connect";

export default function TherapistsPage() {
  return (
    <>
      <FloatingMenu />
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
