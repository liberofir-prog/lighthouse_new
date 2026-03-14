import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Expertise from "@/components/sections/expertise";
import About from "@/components/sections/about";
import Testimonials from "@/components/sections/testimonials";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/sections/footer";
import WhatsAppFab from "@/components/sections/whatsapp-fab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Expertise />
        <About />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
