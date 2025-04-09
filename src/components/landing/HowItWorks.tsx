
import { Button } from "@/components/ui/button";
import { UserPlus, QrCode, Gift } from "lucide-react";

const Step = ({ number, title, description, icon }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center shadow-lg">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <span className="bg-gray-100 text-rhino-purple-dark rounded-full w-6 h-6 inline-flex items-center justify-center text-sm mr-2">
            {number}
          </span>
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="text-white" size={24} />,
      title: "Create Account & Complete KYC",
      description:
        "Download the app, register your account, and complete the simple KYC verification process to get started.",
    },
    {
      icon: <QrCode className="text-white" size={24} />,
      title: "Scan Product QR Codes",
      description:
        "Every time you purchase a Rhino Bond product, scan the unique QR code to earn loyalty points.",
    },
    {
      icon: <Gift className="text-white" size={24} />,
      title: "Redeem Your Rewards",
      description:
        "Use your accumulated points to redeem exciting products, special offers, and exclusive deals.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Getting started with Rhino Bond is simple. Follow these three easy
            steps to begin earning and redeeming rewards.
          </p>
        </div>

        <div className="grid gap-12 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-rhino-purple hover:bg-rhino-purple-dark text-white text-lg py-6 px-8">
            Download Now & Start Earning
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
