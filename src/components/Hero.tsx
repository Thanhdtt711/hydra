import { Button } from "@/components/ui/button";
import { ArrowRightCircle, Zap, Gamepad } from "lucide-react";
import heroImage from "@/assets/anhbia.png";
import { useTranslation, useLanguage, Language } from "@/hooks/useTranslation";


const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="min-h-screen bg-hero-gradient relative overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-radial from-accent/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight px-2">
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {t('Light')}
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
           {t('desc')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
            <Button size="lg" className="bg-white/20 hover:bg-white/30 border border-white/20 text-sm md:text-base px-6 md:px-8">
              {t('startExploring')}
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border border-white/20 text-primary-foreground text-sm md:text-base px-6 md:px-8">
              {t('watchDemo')}
            </Button>
          </div>

          <div className="mb-8 md:mb-16 px-4">
            <img 
              src={heroImage} 
              alt="Hydra Wallet Interface" 
              className="mx-auto max-w-4xl w-full rounded-xl md:rounded-2xl shadow-2xl border border-white/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center justify-center opacity-90 px-4">
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-white/20">
                <div className="relative">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground animate-pulse" />
                  <div className="absolute inset-0 animate-ping">
                    <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground opacity-30" />
                  </div>
                </div>
              </div>
              <p className="text-primary-foreground text-xs md:text-sm font-semibold">Hydra Layer 2</p>
              <p className="text-primary-foreground/70 text-xs mt-1">{t('desc1')}</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-white/20">
                <div className="relative">
                  <ArrowRightCircle className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground animate-bounce" />
                  <div className="absolute -right-1 -top-1 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
              <p className="text-primary-foreground text-xs md:text-sm font-semibold">{t('desc2')}</p>
              <p className="text-primary-foreground/70 text-xs mt-1">{t('desc3')}</p>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-white/20">
                <div className="relative">
                  <Gamepad className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground group-hover:animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping" />
                </div>
              </div>
              <p className="text-primary-foreground text-xs md:text-sm font-semibold">{t('desc4')}</p>
              <p className="text-primary-foreground/70 text-xs mt-1">{t('desc5')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;