import { Users, FlaskConical, BookOpen, Briefcase } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Small Cohorts",
      description: "Personalized attention in intimate learning groups"
    },
    {
      icon: FlaskConical,
      title: "Project-Based Learning",
      description: "Build real projects that showcase your skills"
    },
    {
      icon: BookOpen,
      title: "Mentorship",
      description: "Guidance from experienced industry professionals"
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Prepare for internships and career success"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-card scroll-mt-16" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-secondary mb-8">
            Why Choose Unicadia?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Unicadia is an academy where learning feels like campus life: collaborative, project-based, and guided by mentors. Whether you're exploring CS for the first time or leveling up for internships, we meet you where you are.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center" data-testid={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-secondary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
