import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ResourcesSection from "@/components/resources-section";

export default function ResourcesPage() {
  return (
    <div className="bg-white text-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal to-navy text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Resources & Insights
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Stay informed with the latest trends, tips and insights from the early childhood education sector.
          </p>
        </div>
      </section>

      {/* Resources Content */}
      <ResourcesSection />

      {/* Additional Resources Section */}
      <section className="py-20 bg-light-orange">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-16">
            Stay Connected
          </h2>
          <div className="text-center">
            <p className="text-xl text-navy-light mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest industry insights, career tips, and recruitment trends delivered directly to your inbox.
            </p>
            <button className="bg-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}