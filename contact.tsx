import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";

export default function ContactPage() {
  return (
    <div className="bg-white text-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-coral to-light-orange text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Ready to find your perfect match? Whether you're hiring or seeking your next opportunity, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form and Details */}
      <ContactSection />

      <Footer />
    </div>
  );
}