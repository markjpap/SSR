import speechTherapyImage from "@assets/young-woman-doing-speech-therapy-with-kids_1754475031750.jpg";
import teacherClassroomImage from "@assets/pexels-yankrukov-8613110_1754475031749.jpg";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-4">
          What Others Say
        </h2>
        <p className="text-xl text-navy-light text-center mb-16 max-w-3xl mx-auto">
          Trusted by employers. Backed by educators.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src={speechTherapyImage} 
                alt="Professional female educator working closely with young children in educational activity" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-navy">Sarah Chen</div>
                <div className="text-navy-light text-sm">Centre Manager, Little Learners</div>
              </div>
            </div>
            <p className="text-navy-light leading-relaxed">
              "Selina found us the perfect Pedagogical Leader within just two weeks. Her understanding 
              of our culture and values meant the candidate was a seamless fit from day one. Exceptional service!"
            </p>
            <div className="flex text-coral mt-4">
              <span>★★★★★</span>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <div className="flex items-center mb-6">
              <img 
                src={teacherClassroomImage} 
                alt="Diverse educator leading an interactive classroom session with engaged children" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-bold text-navy">Marcus Thompson</div>
                <div className="text-navy-light text-sm">CEO, Bright Beginnings Network</div>
              </div>
            </div>
            <p className="text-navy-light leading-relaxed">
              "SSR has been our go-to partner for senior leadership roles. Selina's network and expertise 
              in the sector is unmatched. She truly understands what makes a great early childhood leader."
            </p>
            <div className="flex text-coral mt-4">
              <span>★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
