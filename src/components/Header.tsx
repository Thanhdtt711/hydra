import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation, useLanguage, Language } from "@/hooks/useTranslation";

const Header = () => {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/54ac06fd-e81d-42d8-a504-8b6276e8ea35.png" 
              alt="Hydra Wallet Logo" 
              className="w-7 h-7 md:w-8 md:h-8"
            />
            <span className="font-bold text-lg md:text-xl text-foreground">Hydra Wallet</span>
          </div>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <a href="#overview" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              {t('overview')}
            </a>
            <a href="#features" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              {t('features')}
            </a>
            <a href="#play-earn" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              {t('playAndEarn')}
            </a>
            <a href="#guide" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">
              {t('guide')}
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <Select value={language} onValueChange={handleLanguageChange}>
            <SelectTrigger className="hidden sm:flex w-auto border-border bg-transparent text-xs md:text-sm px-2 py-1 h-8">
              <SelectValue>
                {language === 'vi' ? '🇻🇳 Tiếng Việt' : '🇺🇸 English'}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">🇺🇸 English</SelectItem>
              <SelectItem value="vi">🇻🇳 Tiếng Việt</SelectItem>
            </SelectContent>
          </Select>
          
          <ThemeToggle />
          
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-xs md:text-sm px-3 md:px-4">
            <Download className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">{t('download')}</span>
            <span className="sm:hidden">{t('downloadShort')}</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;