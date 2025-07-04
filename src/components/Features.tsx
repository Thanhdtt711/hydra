import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Gamepad, ShieldCheck, ArrowRightCircle } from "lucide-react";
import { useTranslation, useLanguage, Language } from "@/hooks/useTranslation";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Zap,
      title: t('featuresSection.ultraFast.title'),
      description: t('featuresSection.ultraFast.description'),
      benefits: [
        t('featuresSection.ultraFast.benefits.instantSettlement'),
        t('featuresSection.ultraFast.benefits.microFee'),
        t('featuresSection.ultraFast.benefits.l2Scalability')
      ]
    },
    {
      icon: Gamepad,
      title: t('featuresSection.builtForGames.title'),
      description: t('featuresSection.builtForGames.description'),
      benefits: [
        t('featuresSection.builtForGames.benefits.realTimeGaming'),
        t('featuresSection.builtForGames.benefits.fairReward'),
        t('featuresSection.builtForGames.benefits.gameFiOptimized')
      ]
    },
    {
      icon: ShieldCheck,
      title: t('featuresSection.nonCustodial.title'),
      description: t('featuresSection.nonCustodial.description'),
      benefits: [
        t('featuresSection.nonCustodial.benefits.selfCustody'),
        t('featuresSection.nonCustodial.benefits.privateKey'),
        t('featuresSection.nonCustodial.benefits.secureDesign')
      ]
    }
  ];

  const games = [
    {
      name: t('gamesSection.rockPaperScissors.name'),
      status: t('gamesSection.rockPaperScissors.status'),
      color: "bg-green-500",
      icon: "/src/assets/Rock Paper Scissors.jpg"
    },
    {
      name: t('gamesSection.pokerZ.name'),
      status: t('gamesSection.pokerZ.status'),
      color: "bg-yellow-500",
      icon: "/src/assets/PockerZ.png"
    },
    {
      name: t('gamesSection.snakeGame.name'),
      status: t('gamesSection.snakeGame.status'),
      color: "bg-blue-500",
      icon: "/src/assets/Snake Game.jpg"
    },
    {
      name: t('gamesSection.blackjack.name'),
      status: t('gamesSection.blackjack.status'),
      color: "bg-green-500",
      icon: "/src/assets/BlackJack.jpg"
    },
    {
      name: t('gamesSection.diceWars.name'),
      status: t('gamesSection.diceWars.status'),
      color: "bg-yellow-500",
      icon: "/src/assets/JackPot - Big Win.jpg"
    },
    {
      name: t('gamesSection.cryptoRacer.name'),
      status: t('gamesSection.cryptoRacer.status'),
      color: "bg-purple-500",
      icon: "/src/assets/Mountain Climb.webp"
    },
    {
      name: t('gamesSection.towerDefense.name'),
      status: t('gamesSection.towerDefense.status'),
      color: "bg-green-500",
      icon: "/src/assets/Jackal Squad.webp"
    },
    {
      name: t('gamesSection.cardMaster.name'),
      status: t('gamesSection.cardMaster.status'),
      color: "bg-orange-500",
      icon: "/src/assets/Cat Shooter.webp"
    }
  ];

  const steps = [
    {
      step: "1",
      title: t('stepsSection.step1.title'),
      desc: t('stepsSection.step1.description')
    },
    {
      step: "2",
      title: t('stepsSection.step2.title'),
      desc: t('stepsSection.step2.description')
    },
    {
      step: "3",
      title: t('stepsSection.step3.title'),
      desc: t('stepsSection.step3.description')
    }
  ];

  return (
    <>
      {/* Main Features */}
      <section id="features" className="py-16 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6 border border-primary/20">
              ✨ {t('featuresSection.poweredBy')}
            </div>
            <h2 className="text-5xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t('featuresSection.mainTitle')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {t('featuresSection.mainDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:from-card to-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-[1px]">
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>

                <CardHeader className="relative text-center pb-6 pt-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-0 pb-8">
                  <div className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center group/item">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-4 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200" />
                        <span className="text-muted-foreground group-hover/item:text-foreground transition-colors duration-200 font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Marketplace */}
      <section className="py-16 bg-muted/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-6 border border-accent/20">
              🎮 {t('gamesSection.ecosystem')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t('gamesSection.playAndEarn')}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('gamesSection.description')}
            </p>
          </div>

          {/* Auto-sliding carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex hover:[animation-play-state:paused]">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  slidesPerView={4}
                  autoplay={{
                    delay: 3000, // thời gian giữa các slide (ms)
                    disableOnInteraction: false, // không tắt autoplay khi người dùng tương tác
                  }}
                  loop={true} // để chạy lặp lại liên tục
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  {/* First set */}
                  {games.map((game, index) => (
                    <SwiperSlide>
                      <Card key={`first-${index}`} className="flex-shrink-0 w-80 mx-3 group hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105">
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          <span className="text-6xl relative w-full h-full z-10 group-hover:scale-110 transition-transform duration-300">
                            <img className="object-cover w-full h-full" src={game.icon} alt="" />
                          </span>
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{game.name}</h3>
                            <span className={`text-xs px-3 py-1 rounded-full text-white font-medium ${game.color}`}>
                              {game.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{t('gamesSection.earnTokens')}</p>
                        </CardContent>
                      </Card>
                    </SwiperSlide>
                  ))}
                </Swiper>

              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="ghost" size="lg" className="gap-2 hover:bg-primary/10 hover:text-primary">
              {t('gamesSection.exploreMarketplace')} <ArrowRightCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-medium text-sm mb-6 border border-primary/20">
              🚀 {t('stepsSection.getStarted')}
            </div>
            <h2 className="text-5xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {t('stepsSection.howItWorks')}
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('stepsSection.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="group relative text-center p-8 border-0 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:from-card to-card/90 transition-all duration-500 hover:scale-110 hover:shadow-2xl overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-[1px]">
                  <div className="w-full h-full bg-card rounded-lg" />
                </div>

                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-[2px] bg-gradient-to-r from-primary/40 to-accent/40 transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                )}

                <CardContent className="relative p-0">
                  {/* Step number with enhanced styling */}
                  <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-125 transition-all duration-300 shadow-lg border border-primary/20">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:animate-pulse">
                        {step.step}
                      </span>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {step.desc}
                  </p>

                  {/* Animated progress indicator */}
                  <div className="mt-6 w-full h-1 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                      style={{ transitionDelay: `${index * 200}ms` }}
                    />
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {t('stepsSection.startJourney')}
            </Button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Features;