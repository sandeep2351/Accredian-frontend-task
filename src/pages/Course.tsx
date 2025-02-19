import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, CheckCircle } from "lucide-react";

const courseData = {
  "web-development": {
    title: "Web Development Bootcamp",
    description: "Master modern web development with HTML, CSS, JavaScript, React, and Node.js",
    duration: "12 weeks",
    lessons: 120,
    price: 499,
    features: [
      "Project-based learning",
      "Live coding sessions",
      "Industry mentorship",
      "Job placement assistance",
    ],
  },
  "data-science": {
    title: "Data Science & Analytics",
    description: "Learn data analysis, machine learning, and statistical modeling",
    duration: "16 weeks",
    lessons: 140,
    price: 699,
    features: [
      "Real-world datasets",
      "Python programming",
      "Statistical analysis",
      "Machine learning algorithms",
    ],
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Create beautiful user interfaces and enhance user experiences",
    duration: "10 weeks",
    lessons: 80,
    price: 399,
    features: [
      "Design principles",
      "Prototyping tools",
      "User research",
      "Portfolio development",
    ],
  },
};

const Course = () => {
  const { courseName } = useParams();
  const course = courseData[courseName as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-secondary">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-primary hover:text-primary/80 mb-8 inline-block">
            ← Back to Home
          </Link>

          {/* Course Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{course.description}</p>

            {/* Course Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <CourseInfo icon={<BookOpen />} label={`${course.lessons} Lessons`} />
              <CourseInfo icon={<Video />} label={course.duration} />
              <CourseInfo
                icon={<span className="text-2xl font-bold text-primary">${course.price}</span>}
                label=""
              />
            </div>

            {/* Course Features */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <FeatureItem key={index} text={feature} />
                ))}
              </div>
            </div>
          </div>

          {/* Enroll Button */}
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// **Reusable Component: Course Info Item**
const CourseInfo = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center space-x-2 text-gray-600">
    <div className="w-6 h-6 text-primary">{icon}</div>
    <span>{label}</span>
  </div>
);

// **Reusable Component: Feature Item**
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-5 h-5 text-primary mt-1" />
    <span>{text}</span>
  </div>
);

export default Course;
