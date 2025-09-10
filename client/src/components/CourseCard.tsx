import { ExternalLink, Check } from "lucide-react";

interface Course {
  title: string;
  description: string;
  outcomes: string[];
  link: string;
  icon: any;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const IconComponent = course.icon;

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" data-testid={`course-card-${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="p-6">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold text-secondary mb-3">{course.title}</h3>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{course.description}</p>
        
        <div className="mb-6">
          <h4 className="font-medium text-secondary mb-3">What you'll learn:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {course.outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
        
        <a 
          href={course.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ring"
          data-testid={`course-link-${course.title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Learn More
          <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
