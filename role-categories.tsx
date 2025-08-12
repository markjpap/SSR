import { Building2, BarChart3, UserCheck, Briefcase } from "lucide-react";

export default function RoleCategories() {
  return (
    <section id="job-seekers" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy text-center mb-4">
          Roles We Recruit For
        </h2>
        <p className="text-xl text-navy-light text-center mb-16 max-w-3xl mx-auto">
          From hands-on educators to strategic leaders, we place professionals across all levels of early childhood education.
        </p>

        {/* Role Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Executive Leadership */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Executive Leadership</h3>
            <ul className="text-navy-light space-y-1 text-sm">
              <li>• CEO</li>
              <li>• COO</li>
              <li>• CFO</li>
              <li>• CPO</li>
              <li>• CTO</li>
            </ul>
          </div>

          {/* Heads of Quality, Pedagogy, and Compliance */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-teal rounded-2xl flex items-center justify-center mb-4">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Heads of Quality, Pedagogy, and Compliance</h3>
            <ul className="text-navy-light space-y-1 text-sm">
              <li>• Head of Quality & Curriculum</li>
              <li>• Head of Pedagogy & Practice</li>
              <li>• Head of Compliance & Regulation</li>
            </ul>
          </div>

          {/* Senior & Centre Leadership */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-coral rounded-2xl flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Senior & Centre Leadership</h3>
            <ul className="text-navy-light space-y-1 text-sm">
              <li>• General Managers</li>
              <li>• National & State Managers</li>
              <li>• Regional Leaders</li>
              <li>• Operations Leaders</li>
              <li>• Quality & Compliance Leaders</li>
              <li>• Centre Managers</li>
              <li>• Assistant Centre Managers</li>
              <li>• Pedagogical Leaders</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
