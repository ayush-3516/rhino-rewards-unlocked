
import { QrCode, Award, ShieldCheck, Zap } from 'lucide-react';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="bg-rhino-purple-light/20 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <QrCode className="text-rhino-purple" size={24} />,
      title: "Scan & Earn",
      description: "Simply scan the QR code on any Rhino Bond product to instantly earn loyalty points."
    },
    {
      icon: <Award className="text-rhino-purple" size={24} />,
      title: "Redeem Rewards",
      description: "Use your accumulated points to redeem exciting products and special offers."
    },
    {
      icon: <ShieldCheck className="text-rhino-purple" size={24} />,
      title: "Secure & Reliable",
      description: "Our QR codes are unique and can only be scanned once, guaranteeing a fair loyalty program."
    },
    {
      icon: <Zap className="text-rhino-purple" size={24} />,
      title: "Fast & Simple",
      description: "User-friendly interface makes it easy to track your points and available rewards."
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="gradient-text">Rhino Bond</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our loyalty program is designed to reward you for every purchase while ensuring security and simplicity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
