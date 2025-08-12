export default function HeroSection() {
  const handleFindTalent = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleJoinTalent = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-light-orange py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-navy mb-6 leading-tight">
          Shaping the future of early childhood, <span className="text-coral">one leader at a time</span>
        </h1>
        <p className="text-xl md:text-2xl text-navy-light mb-12 max-w-4xl mx-auto leading-relaxed">
          We connect early learning providers with exceptional talent and help professionals find roles where they can truly thrive.
        </p>
        
        {/* Dual CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button 
            onClick={handleFindTalent}
            className="bg-coral text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 min-w-[250px]"
            data-testid="button-find-talent"
          >
            Find a Role
          </button>
          <button 
            onClick={handleJoinTalent}
            className="bg-teal text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 min-w-[250px]"
            data-testid="button-join-talent"
          >
            Join our Talent pool
          </button>
        </div>
      </div>
    </section>
  );
}
