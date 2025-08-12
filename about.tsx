import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import speechTherapyImage from "@assets/young-woman-doing-speech-therapy-with-kids_1754475031750.jpg";

export default function AboutPage() {
  return (
    <div className="bg-white text-navy">
      <Navigation />
      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Main Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-8">
              Shaping the future of early childhood, one leader at a time
            </h1>
          </div>

          {/* Our Story Section */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
                Our story
              </h2>
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                We don't just fill roles, we shape futures.
              </p>
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                SSR connects exceptional early childhood educators and leaders with the employers who need them most. With deep sector expertise and a people-first approach, we go beyond recruitment to build lasting partnerships that elevate leadership and strengthen teams.
              </p>
              <p className="text-lg text-navy-light leading-relaxed">
                Rooted in Early Childhood Education and Care (ECEC), we bring insight, care, and strategy to every placement, delivering quality, not just quantity.
              </p>
            </div>
            
            <div>
              <img 
                src={speechTherapyImage} 
                alt="Young child engaged in educational play with colorful learning materials" 
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>

          {/* Vision and Purpose Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 text-center">
              Our Vision and Purpose
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                We're here to raise the standard in early childhood recruitment, one team, one leader, one opportunity at a time.
              </p>
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                At SSR, we believe the right person in the right role can transform not just a centre, but the whole community around it. Our vision is to be the most trusted partner for early learning providers across Australia, delivering smart, values-led childcare hiring solutions that reduce stress, save time, and deliver real results.
              </p>
              <p className="text-lg text-navy-light mb-8 leading-relaxed">
                We exist to uplift individuals and strengthen teams through:
              </p>
              <ul className="space-y-4 text-lg text-navy-light mb-8">
                <li className="flex items-start">
                  <span className="text-coral mr-3">•</span>
                  Meaningful relationships built on trust and care
                </li>
                <li className="flex items-start">
                  <span className="text-coral mr-3">•</span>
                  A deep understanding of the Early Childhood Education and Care sector
                </li>
                <li className="flex items-start">
                  <span className="text-coral mr-3">•</span>
                  A commitment to uncovering opportunities that drive growth and lasting impact
                </li>
              </ul>
              <p className="text-lg text-navy-light leading-relaxed font-medium">
                For us, it's not just about filling a role, but it's about changing lives.
              </p>
            </div>
          </div>

          {/* Our Founder Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8 text-center">
              Our Founder
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-navy-light mb-6 leading-relaxed">
                Meet Selina Stanley. Founder and Director of SSR, Selina brings over 20 years of recruitment experience and a career built on one core belief: people come first.
              </p>
              <p className="text-lg text-navy-light mb-8 leading-relaxed">
                Her approach is thoughtful, values-driven and built on genuine relationships, not transactions. Whether you're a candidate or a client, Selina shows up with honesty, care and long-term perspective.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-navy mb-6">Her journey at a glance:</h3>
                <ul className="space-y-4 text-lg text-navy-light">
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    Began her recruitment career in Ireland in 2004, specialising in hospitality and business support
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    Moved to Australia in 2009, expanding into HR strategy and talent acquisition with top agencies
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    Joined Guardian Childcare & Education in 2013, where she found her calling in early childhood leadership recruitment
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    Founded SSR in 2021 to create a relationship-led agency that delivers real, lasting impact across the sector
                  </li>
                </ul>
              </div>
              <p className="text-lg text-navy-light leading-relaxed">
                Today, Selina is known for her sector insight, integrity, and unwavering commitment to supporting others, whether it leads to a placement or simply the right next step.
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-16 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Transparency</h3>
                <p className="text-navy-light leading-relaxed">
                  We communicate openly and honestly, keeping clients and candidates informed at every stage. Trust is built through clear communication, managed expectations, and never leaving people guessing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Accountability</h3>
                <p className="text-navy-light leading-relaxed">
                  We take ownership of our work and outcomes. Whether things go to plan or not, we stand by our commitments and take responsibility for every part of the process.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-light-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy font-bold text-xl">P</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Passion</h3>
                <p className="text-navy-light leading-relaxed">
                  We care deeply about people and outcomes. That's why we go the extra mile.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">Collaboration</h3>
                <p className="text-navy-light leading-relaxed">
                  We work as true partners; listening, sharing, and building trust together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}