import ReferralModal from "@/components/ReferralModal";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Star, Users, Menu, Search, Bell, Mail, Phone, MapPin } from "lucide-react";
import SearchBar from "@/components/SearchBar";
import Navbar from "@/components/Navbar";

const TopCourses = [
  {
    title: "Complete Web Development Bootcamp",
    rating: 4.8,
    students: 12453,
    price: 499,
    discountPrice: 299,
  },
  {
    title: "Data Science & Machine Learning",
    rating: 4.9,
    students: 8921,
    price: 699,
    discountPrice: 499,
  },
  {
    title: "UI/UX Design Masterclass",
    rating: 4.7,
    students: 6234,
    price: 399,
    discountPrice: 249,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SearchBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 pt-32 pb-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Let's Learn <br /> & Earn
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Get started with our courses and earn rewards by referring friends. Join thousands of successful learners today.
              </p>
              <ReferralModal />
            </div>
            <div className="flex-1 relative">
              <img
                src="https://img.freepik.com/free-vector/people-making-money-from-referral-concept-illustration_52683-22927.jpg"
                alt="Learning Platform"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Top Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Top-Rated Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TopCourses.map((course, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through">${course.price}</span>
                    <span className="text-2xl font-bold text-primary ml-2">${course.discountPrice}</span>
                  </div>
                  <Link to={`/courses/${index}`}>
                  <Button variant="ghost">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">support@learnearn.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">123 Learning Street, Education City, ED 12345, United States</p>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Your message here..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <Button className="rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary/90 shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>
      </div>
    </div>
  );
};
/* Footer */
<footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition-colors">About Us</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Press</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Blog</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Resources</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition-colors">Documentation</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Help Center</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Tutorials</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">API Reference</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Terms of Service</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Cookie Policy</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Security</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Connect</h4>
        <ul className="space-y-2">
          <li><Link to="/" className="hover:text-white transition-colors">Twitter</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">LinkedIn</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Facebook</Link></li>
          <li><Link to="/" className="hover:text-white transition-colors">Instagram</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2024 Learn & Earn. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/" className="text-sm hover:text-white transition-colors">Privacy</Link>
          <Link to="/" className="text-sm hover:text-white transition-colors">Terms</Link>
          <Link to="/" className="text-sm hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </div>
  </div>
</footer>

export default Index;

