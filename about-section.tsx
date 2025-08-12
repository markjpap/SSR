import speechTherapyImage from "@assets/young-woman-doing-speech-therapy-with-kids_1754475031750.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Whether you're hiring or job hunting, you're in the right place
            </h2>
            <p className="text-lg text-navy-light mb-8 leading-relaxed">
              SSR supports early learning providers and professionals across Australia through sector-specialist recruitment that's thoughtful, efficient, and built on trust.
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
      </div>
    </section>
  );
}
