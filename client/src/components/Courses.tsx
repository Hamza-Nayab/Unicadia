import CourseCard from "./CourseCard";
import { courses } from "@/lib/constants";

export default function Courses() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-background scroll-mt-16" aria-labelledby="courses-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="courses-heading" className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted curriculum designed to take you from beginner to job-ready developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
