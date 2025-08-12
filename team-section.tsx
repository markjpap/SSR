import selinaHeadshot from "@assets/Selina Head shot.jpg";

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={selinaHeadshot} 
              alt="Selina Stanley, Founder and Director of SSR Recruitment" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Meet Selina Stanley
            </h2>
            <p className="text-lg text-navy-light mb-6 leading-relaxed">
              With over 20 years in early childhood education recruitment, Selina understands 
              what makes exceptional educators and leaders tick. Her deep sector knowledge and 
              genuine passion for the industry has helped hundreds of professionals find their 
              perfect career match.
            </p>
            <p className="text-lg text-navy-light mb-8 leading-relaxed">
              "I believe great education starts with great people. That's why I'm committed to 
              connecting talented individuals with organisations that share their values and vision."
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-coral mb-2">500+</div>
                <div className="text-navy-light text-sm">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage mb-2">20+</div>
                <div className="text-navy-light text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-2">200+</div>
                <div className="text-navy-light text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
