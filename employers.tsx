import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import BenefitsSection from "@/components/benefits-section";
import RoleCategories from "@/components/role-categories";

export default function EmployersPage() {
  return (
    <div className="bg-white text-navy">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-teal text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
            Find the right talent for your team
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Connect with exceptional early childhood educators and leaders who share your values and vision.
          </p>
          <button className="bg-coral text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
            Start Your Search Today
          </button>
        </div>
      </section>

      {/* Benefits for Employers */}
      <BenefitsSection />

      {/* Role Categories */}
      <RoleCategories />

      {/* Why Choose SSR */}
      <section className="py-20 bg-light-orange">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-16">
            Why Early Learning Providers Choose SSR
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Sector Expertise</h3>
              <p className="text-navy-light leading-relaxed">
                Deep understanding of early childhood education requirements, regulations, and culture.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Quality Candidates</h3>
              <p className="text-navy-light leading-relaxed">
                Pre-screened professionals who meet your specific requirements and cultural fit.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Ongoing Support</h3>
              <p className="text-navy-light leading-relaxed">
                Continued partnership throughout the hiring process and beyond placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}