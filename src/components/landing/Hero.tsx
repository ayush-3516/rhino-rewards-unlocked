
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadClick = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Earn Rewards With <span className="gradient-text">Rhino Bond</span> Loyalty
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Scan QR codes on your purchases, earn points, and redeem exciting rewards with our simple loyalty app.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button 
                className="bg-rhino-purple hover:bg-rhino-purple-dark text-white text-lg py-6 px-8 flex items-center gap-2"
                onClick={handleDownloadClick}
              >
                <Download size={20} />
                Download App
              </Button>
              <Button 
                variant="outline" 
                className="border-rhino-purple text-rhino-purple hover:bg-rhino-purple-light/10 text-lg py-6 px-8"
                onClick={handleLearnMoreClick}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rhino-purple to-rhino-orange rounded-3xl blur-xl opacity-75 animate-pulse-slow"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-xl">
                <img 
                  src="/placeholder.svg"
                  alt="Rhino Bond App Screenshot" 
                  className="w-full rounded-2xl shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
