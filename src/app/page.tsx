import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Expertise from "@/components/sections/expertise";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import TreatmentEnvironment from "@/components/sections/treatment-environment";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
import WhatsAppFab from "@/components/sections/whatsapp-fab";
import FirstVisitPopup from "@/components/sections/first-visit-popup";

export default function Home() {
  return (
    <div className="overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <TreatmentEnvironment />
        <Expertise />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFab />
      <FirstVisitPopup />
    </div>
  );
}
