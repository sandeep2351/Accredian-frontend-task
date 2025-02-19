
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Earn Rewards",
    description: "Get exclusive rewards for every successful referral",
  },
  {
    title: "Track Progress",
    description: "Monitor your referrals and rewards in real-time",
  },
  {
    title: "Easy Process",
    description: "Simple and quick referral process that takes minutes",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Why Refer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
