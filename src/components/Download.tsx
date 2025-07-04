import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chrome, Smartphone, Monitor, Download as DownloadIcon } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Download = () => {
  const { t } = useTranslation();
  
  const platforms = [
    {
      name: t('browserExtension'),
      description: t('browserExtensionDesc'),
      icon: Chrome,
      buttons: [
        { name: t('chromeWebStore'), icon: DownloadIcon },
        { name: t('firefoxAddons'), icon: DownloadIcon }
      ]
    },
    {
      name: t('mobileApp'),
      description: t('mobileAppDesc'),
      icon: Smartphone,
      buttons: [
        { name: t('appStore'), icon: DownloadIcon },
        { name: t('googlePlay'), icon: DownloadIcon }
      ]
    },
    {
      name: t('webDashboard'),
      description: t('webDashboardDesc'),
      icon: Monitor,
      buttons: []
    }
  ];

  return (
    <section className="py-16 bg-muted/50" id="download">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-600 dark:text-green-400 font-medium text-sm mb-6 border border-green-200 dark:border-green-700">
            📱 {t('multiPlatformReady')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-4 md:mb-6 px-4">
            {t('downloadTitle')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            {t('downloadSubtitle')}
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {platforms.map((platform, index) => (
            <div key={index} className="text-center px-4">
              {/* Icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                <platform.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                {platform.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                {platform.description}
              </p>

              {/* Buttons */}
              {platform.buttons.length > 0 ? (
                <div className="space-y-2 md:space-y-3">
                  {platform.buttons.map((button, buttonIndex) => (
                    <Button 
                      key={buttonIndex}
                      variant="outline" 
                      className="w-full border-border hover:bg-green-600 text-sm md:text-base py-2 md:py-3"
                    >
                      <button.icon className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      {button.name}  
                      <span data-lov-id="src\components\Features.tsx:226:26" data-lov-name="span" data-component-path="src\components\Features.tsx" data-component-line="226" data-component-file="Features.tsx" data-component-name="span" data-component-content="%7B%7D" className="text-xs px-3 py-1 rounded-full text-white font-medium bg-blue-500">Coming Soon</span>
                    </Button>
                  ))}
                </div>
              ) : (
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm md:text-base py-2 md:py-3">
                  <Monitor className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  {t('openWebDashboard')}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="flex justify-center px-4">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-green-500 rounded-full text-white max-w-full">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full border-2 border-white/40 flex items-center justify-center">
                <Chrome className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full border-2 border-white/40 flex items-center justify-center">
                <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full border-2 border-white/40 flex items-center justify-center">
                <Monitor className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-sm md:text-base">{t('trustedUsers')}</p>
              <p className="text-xs md:text-sm opacity-90">{t('worldwide')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;