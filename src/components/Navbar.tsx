import { Link, useNavigate } from "react-router-dom";
import { Search, Bell, Menu } from "lucide-react";
import ReferralModal from "./ReferralModal";
import { Button } from "./ui/button";
import { useSearch } from "@/contexts/SearchContext";
import { useState } from "react";

const Navbar = () => {
  const { toggleSearch } = useSearch();
  const [notifications] = useState(3);
  const navigate = useNavigate();

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-2xl font-bold text-primary transition-transform hover:scale-105"
            >
              Learn&Earn
            </Link>
            <div className="hidden md:flex items-center space-x-6">
            <button
                onClick={() => handleScrollToSection("courses")}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                Courses
              </button>
              <button
                onClick={() => handleScrollToSection("referral")}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                Community
              </button>
              <button
                onClick={() => handleScrollToSection("about")}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                About Us
              </button>
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
              onClick={toggleSearch}
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                  {notifications}
                </span>
              )}
            </Button>
            <ReferralModal />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;