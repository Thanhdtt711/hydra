import { Twitter, MessageCircle, Users, Github, Globe } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-card text-muted-foreground py-8 md:py-12 border-t border-border/50">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Column 1 – Logo & blurb */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
            <img 
              src="/lovable-uploads/54ac06fd-e81d-42d8-a504-8b6276e8ea35.png" 
              alt="Hydra Wallet Logo" 
              className="w-7 h-7 md:w-8 md:h-8"
            />
            <span className="font-bold text-lg md:text-xl text-foreground">Hydra Wallet</span>
          </div>
          <p className="max-w-xs mx-auto md:mx-0 text-sm mb-4 md:mb-6">
            {t('footerDescription')}
          </p>
          
          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
            <a href="#" className="group p-2 bg-muted/50 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110">
              <Twitter className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="group p-2 bg-muted/50 rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-110">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="group p-2 bg-muted/50 rounded-lg hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110">
              <Users className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-indigo-500 transition-colors" />
            </a>
            <a href="#" className="group p-2 bg-muted/50 rounded-lg hover:bg-gray-800/10 transition-all duration-300 hover:scale-110">
              <Github className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
            <a href="#" className="group p-2 bg-muted/50 rounded-lg hover:bg-green-500/10 transition-all duration-300 hover:scale-110">
              <Globe className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-green-500 transition-colors" />
            </a>
          </div>
        </div>

        {/* Column 2 – Product links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">{t('product')}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-foreground transition-colors">{t('browserExtension')}</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">{t('mobileApp')}</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">{t('webDashboard')}</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">{t('developerApi')}</a></li>
          </ul>
        </div>

        {/* Column 3 – Support links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-foreground mb-3 md:mb-4 text-base md:text-lg">{t('support')}</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-foreground transition-colors">{t('documentation')}</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">{t('tutorials')}</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">{t('community')}</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">{t('contact')}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/50 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;