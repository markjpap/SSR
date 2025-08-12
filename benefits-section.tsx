import { Users, CheckCircle, Zap } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-light-orange">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-4">
          We are not just another agency. We're early childhood recruitment specialists.
        </h2>
        <p className="text-xl text-navy-light text-center mb-16 max-w-3xl mx-auto">
          We understand what makes early learning centres thrive and it starts with people. Our team brings deep sector experience, a people-first approach, and a track record of matching the right person to the right place.
        </p>

        {/* Three Benefits Columns */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Benefit 1 */}
          <div className="text-center">
            <div className="w-24 h-24 bg-coral rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Sector Expertise</h3>
            <p className="text-navy-light leading-relaxed">
              Deep understanding of early childhood education requirements from Certificate III educators to executive leadership roles.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center">
            <div className="w-24 h-24 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Quality Assured</h3>
            <p className="text-navy-light leading-relaxed">
              Rigorous screening process ensures only the highest caliber candidates who align with your values and culture.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center">
            <div className="w-24 h-24 bg-light-orange rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-navy mb-4">Fast Turnaround</h3>
            <p className="text-navy-light leading-relaxed">
              Efficient placement process designed for busy operators who need quality candidates quickly and reliably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
