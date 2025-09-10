import { useState } from "react";
import { courses } from "@/lib/constants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [education, setEducation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || selectedCourses.length === 0 || !education) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `Hello Unicadia!%0AName: ${encodeURIComponent(
      name
    )}%0AInterested Courses: ${encodeURIComponent(
      selectedCourses.join(", ")
    )}%0ACurrent Highest Education: ${encodeURIComponent(education)}`;

    const whatsappUrl = `https://wa.me/923150015497?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev =>
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/30 scroll-mt-16" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Fill out the form below and we'll get back to you via WhatsApp.
          </p>
        </div>
        
        <div className="max-w-md mx-auto bg-card rounded-xl shadow-lg border border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                Name <span className="text-destructive">*</span>
              </label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring"
                data-testid="input-name"
              />
            </div>
            
            <fieldset>
              <legend className="block text-sm font-medium text-secondary mb-3">
                Interested Courses <span className="text-destructive">*</span>
              </legend>
              <div className="space-y-3">
                {courses.map((course) => (
                  <label key={course.title} className="flex items-start cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={selectedCourses.includes(course.title)}
                      onChange={() => toggleCourse(course.title)}
                      className="mt-1 w-4 h-4 text-primary bg-background border-border rounded focus:ring-2 focus:ring-ring focus-visible:outline-2 focus-visible:outline-ring transition-colors duration-200"
                      data-testid={`checkbox-course-${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                    <span className="ml-3 text-foreground group-hover:text-primary transition-colors duration-200">
                      {course.title}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>
            
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-secondary mb-2">
                Current Highest Education <span className="text-destructive">*</span>
              </label>
              <select 
                id="education" 
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 bg-background text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                data-testid="select-education"
              >
                <option value="">Select your highest education level</option>
                <option value="High School">High School</option>
                <option value="Diploma">Diploma</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground font-semibold py-3 px-4 rounded-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ring shadow-lg flex items-center justify-center"
              data-testid="button-submit-whatsapp"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Send via WhatsApp
            </button>
            
            <p className="text-sm text-center text-muted-foreground">
              Having trouble? 
              <a 
                href="https://wa.me/923150015497" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary/80 underline transition-colors duration-200 ml-1"
                data-testid="link-whatsapp-direct"
              >
                Message us directly on WhatsApp
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
