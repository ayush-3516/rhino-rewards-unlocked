
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, Smartphone, QrCode } from "lucide-react";

const AppDownload = () => {
  const [version, setVersion] = useState('');
  const [apkUrl, setApkUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/repos/ayush-3516/rhino-bond-apks/releases/latest')
      .then(res => res.json())
      .then(data => {
        setVersion(data.tag_name);
        const apk = data.assets.find(a => a.name.endsWith(".apk"));
        if (apk) {
          setApkUrl(apk.browser_download_url);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching APK:", error);
        setLoading(false);
      });
  }, []);
  
  const handleDirectDownload = () => {
    if (apkUrl) {
      window.open(apkUrl, '_blank');
    }
  };

  const handleEarlyAccessSignup = () => {
    window.open('https://forms.gle/5S5GobtxsCQ8iZL27', '_blank');
  };

  return (
    <section className="py-20 gradient-bg" id="download">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left text-white mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Download the Rhino Bond app now and start earning rewards on your purchases. It's free and easy to get started!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white hover:bg-gray-100 text-rhino-purple font-medium text-lg py-6 px-8 flex items-center gap-2"
                onClick={handleDirectDownload}
                disabled={loading || !apkUrl}
              >
                <Download size={20} />
                {loading ? 'Loading...' : `Download APK${version ? ` (${version})` : ''}`}
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 flex items-center gap-2"
                onClick={handleEarlyAccessSignup}
              >
                <Smartphone size={20} />
                Join Early Access
              </Button>
            </div>
            <p className="text-white/80 mt-4 text-sm">
              Early access testers will receive the app via Google Play Store
            </p>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 shadow-lg">
              <div className="flex flex-col items-center">
                <QrCode className="text-white mb-4" size={180} />
                <p className="text-white/90 text-center">
                  Scan this QR code with your phone camera to download the Rhino Bond app
                </p>
                {version && (
                  <p className="text-white/70 text-sm mt-2">
                    Latest version: {version}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
