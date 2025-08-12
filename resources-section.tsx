import craftsImage from "@assets/pexels-yankrukov-8612984_1754475031748.jpg";
import classroomActivitiesImage from "@assets/pexels-yankrukov-8613093_1754475031748.jpg";
import teachingImage from "@assets/pexels-yankrukov-8613107_1754475031749.jpg";

export default function ResourcesSection() {
  const handleViewAllResources = () => {
    // In a real implementation, this would navigate to a resources page
    console.log('View all resources');
  };

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-4">
          Resources
        </h2>
        <p className="text-xl text-navy-light text-center mb-16 max-w-4xl mx-auto">
          From recruitment tips to leadership insights, our blog is here to support early childhood professionals and employers alike. Whether you're hiring, job hunting or simply curious, you'll find practical tools and fresh thinking to help you grow.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resource 1 */}
          <article className="group cursor-pointer">
            <img 
              src={craftsImage} 
              alt="Early childhood educator organizing colorful craft materials for creative learning activities" 
              className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:shadow-lg transition-shadow"
            />
            <div className="bg-red-100 text-coral px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">Leadership</div>
            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-coral transition-colors">
              Great Daycare Centre Leaders Aren't Found, They're Grown
            </h3>
            <p className="text-navy-light leading-relaxed">
              Discover why the best centre leaders aren't always the most experienced and how potential, curiosity, and the right support can create exceptional leadership.
            </p>
          </article>

          {/* Resource 2 */}
          <article className="group cursor-pointer">
            <img 
              src={classroomActivitiesImage} 
              alt="Children collaborating on colorful educational activities with learning toys and materials" 
              className="w-full h-48 object-cover rounded-2xl mb-4 group-hover:shadow-lg transition-shadow"
            />
            <div className="bg-green-100 text-teal px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">Leadership</div>
            <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-coral transition-colors">
              From Crisis Mode to Calm: Building Resilient Leadership in Your Centres
            </h3>
            <p className="text-navy-light leading-relaxed">
              Learn how the right leader can turn constant firefighting into calm, steady progress, and what to look for when building resilience in your team.
            </p>
          </article>


        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllResources}
            className="bg-sage text-sage px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            data-testid="button-view-all-resources"
          >
            View All Resources
          </button>
        </div>
      </div>
    </section>
  );
}
