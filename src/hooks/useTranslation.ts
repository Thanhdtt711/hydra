import { create } from 'zustand';

export type Language = 'vi' | 'en';

interface TranslationStore {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<TranslationStore>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
}));

const translations = {
  vi: {
    // Header
    overview: 'Tổng quan',
    features: 'Tính năng',
    playAndEarn: 'Play&Earn',
    guide: 'Hướng dẫn',
    download: 'Tải xuống',
    downloadShort: 'Tải',
    language: 'Tiếng Việt',

    // Hero
    heroTitle: 'Ví crypto đa chuỗi nhanh nhất thế giới',
    heroSubtitle: 'Khám phá DeFi & GameFi trên Cardano với tốc độ ánh sáng. Được hỗ trợ bởi công nghệ Hydra, sắp mở rộng sang Bitcoin & Ethereum.',
    startExploring: 'Bắt đầu khám phá',
    watchDemo: 'Xem demo',
    Light: 'Nhẹ. Nhanh. Sức mạnh từ Hydra.',
    desc1: 'Nhanh như chớp',
    desc2: 'Xác nhận giao dịch tức thì',
    desc3: 'Không độ trễ',
    desc4: 'Sẵn sàng cho GameFi',
    desc5: 'Chơi và Kiếm tiền',
    desc: 'Một ví duy nhất • Vô hạn khả năng DeFi & GameFi trên Cardano — và sắp tới là trên mọi blockchain bạn yêu thích.',

    // Features
    featuresSection: {
      poweredBy: "Được Hỗ Trợ Bởi Công Nghệ Hydra",
      mainTitle: "Tính Năng Cốt Lõi",
      mainDescription: "Trải nghiệm tương lai của công nghệ blockchain với những tính năng đột phá từ Hydra Wallet",
      ultraFast: {
        title: "Siêu Nhanh",
        description: "Hydra L2 xác nhận tức thì & phí vi mô.",
        benefits: {
          instantSettlement: "Thanh toán tức thì",
          microFee: "Giao dịch phí vi mô",
          l2Scalability: "Khả năng mở rộng L2"
        }
      },
      builtForGames: {
        title: "Được Xây Dựng Cho Game",
        description: "Gameplay không độ trễ & phần thưởng công bằng.",
        benefits: {
          realTimeGaming: "Chơi game thời gian thực",
          fairReward: "Hệ thống phần thưởng công bằng",
          gameFiOptimized: "Tối ưu hóa GameFi"
        }
      },
      nonCustodial: {
        title: "Không Lưu Giữ",
        description: "Chìa khóa của bạn, tiền của bạn—luôn an toàn.",
        benefits: {
          selfCustody: "Tự quản lý",
          privateKey: "Kiểm soát khóa riêng",
          secureDesign: "Thiết kế an toàn"
        }
      }
    },
    // Games Section
    gamesSection: {
      ecosystem: "Hệ Sinh Thái GameFi",
      playAndEarn: "Chơi & Kiếm Tiền Ngay",
      description: "Khám phá bộ sưu tập game blockchain đang phát triển với phần thưởng tức thì",
      earnTokens: "Kiếm token khi chơi",
      exploreMarketplace: "Khám Phá Thị Trường",
      rockPaperScissors: {
        name: "Kéo Búa Bao",
        status: "Đang Hoạt Động"
      },
      pokerZ: {
        name: "PokerZ",
        status: "Beta"
      },
      snakeGame: {
        name: "Game Rắn Săn Mồi",
        status: "Sắp Ra Mắt"
      },
      blackjack: {
        name: "Blackjack",
        status: "Sắp Ra Mắt"
      },
      diceWars: {
        name: "JackPot - Big Win",
        status: "Beta"
      },
      cryptoRacer: {
        name: "Mountain Climb",
        status: "Sắp Ra Mắt"
      },
      towerDefense: {
        name: "Jackal Squad",
        status: "Sắp Ra Mắt"
      },
      cardMaster: {
        name: "Cat Shooter",
        status: "Beta"
      }
    },
    // Steps Section
    stepsSection: {
      getStarted: "Bắt Đầu Trong Vài Phút",
      howItWorks: "Cách Hoạt Động",
      description: "Ba bước đơn giản để mở khóa tương lai của blockchain gaming và DeFi",
      startJourney: "Bắt Đầu Hành Trình",
      step1: {
        title: "Tải xuống & tạo ví",
        description: "Thiết lập dưới 30 giây trên mọi thiết bị."
      },
      step2: {
        title: "Tham gia Hydra Head",
        description: "Chúng tôi xử lý kỹ thuật—bạn tận hưởng thanh toán tức thì."
      },
      step3: {
        title: "Chơi, hoán đổi, kiếm tiền",
        description: "Trải nghiệm DeFi & GameFi cực nhanh trên Cardano."
      }
    },

    // Download
    downloadTitle: 'Tải xuống Hydra Wallet',
    downloadSubtitle: 'Chọn nền tảng phù hợp với bạn và bắt đầu hành trình khám phá thế giới crypto đa chuỗi',
    multiPlatformReady: 'Multi-Platform Ready',

    // Platform names
    browserExtension: 'Tiện ích mở rộng',
    mobileApp: 'Ứng dụng di động',
    webDashboard: 'Web Dashboard',

    // Platform descriptions
    browserExtensionDesc: 'Chrome, Firefox, Brave, Edge',
    mobileAppDesc: 'iOS & Android',
    webDashboardDesc: 'Truy cập trực tiếp qua trình duyệt',

    // Platform buttons
    chromeWebStore: 'Chrome Web Store',
    firefoxAddons: 'Firefox Add-ons',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    openWebDashboard: 'Mở Web Dashboard',

    // Trust indicator
    trustedUsers: 'Hơn 2 triệu người dùng tin tướng',
    worldwide: 'Trên toàn thế giới',

    // Footer
    footerDescription: 'Cách nhanh nhất để khám phá DeFi & GameFi trên Cardano. Được hỗ trợ bởi Hydra, sắp mở rộng sang Bitcoin & Ethereum.',
    product: 'Sản phẩm',
    support: 'Hỗ trợ',
    documentation: 'Tài liệu',
    tutorials: 'Hướng dẫn',
    community: 'Cộng đồng',
    contact: 'Liên hệ',
    developerApi: 'Developer API',
    copyright: '© 2024 Hydra Wallet. Tất cả quyền được bảo lưu.',
  },
  en: {
    // Header
    overview: 'Overview',
    features: 'Features',
    playAndEarn: 'Play&Earn',
    guide: 'Guide',
    download: 'Download',
    downloadShort: 'Download',
    language: 'English',

    // Hero
    heroTitle: 'World\'s fastest multi-chain crypto wallet',
    heroSubtitle: 'Explore DeFi & GameFi on Cardano at light speed. Powered by Hydra technology, expanding to Bitcoin & Ethereum soon.',
    startExploring: 'Start Exploring',
    watchDemo: 'Watch Demo',
    Light: "Light. Fast. Hydra-Powered.",
    desc1: "Lightning Fast",
    desc2: "Instant Finality",
    desc3: "Zero Delays",
    desc4: "GameFi Ready",
    desc5: "Play & Earn",
    desc: "One wallet • Infinite DeFi & GameFi possibilities on Cardano — and soon every chain you love.",

    // Features Section
    featuresSection: {
      poweredBy: "Powered by Hydra Technology",
      mainTitle: "Core Features",
      mainDescription: "Experience the future of blockchain technology with breakthrough features from Hydra Wallet",
      ultraFast: {
        title: "Ultra-Fast",
        description: "Hydra L2 instant finality & micro-fees.",
        benefits: {
          instantSettlement: "Instant settlement",
          microFee: "Micro-fee transactions",
          l2Scalability: "L2 scalability"
        }
      },
      builtForGames: {
        title: "Built for Games",
        description: "Lag-free gameplay & fair rewards.",
        benefits: {
          realTimeGaming: "Real-time gaming",
          fairReward: "Fair reward system",
          gameFiOptimized: "GameFi optimized"
        }
      },
      nonCustodial: {
        title: "Non-Custodial",
        description: "Your keys, your coins—always secure.",
        benefits: {
          selfCustody: "Self-custody",
          privateKey: "Private key control",
          secureDesign: "Secure by design"
        }
      }
    },
    // Games Section
    gamesSection: {
      ecosystem: "GameFi Ecosystem",
      playAndEarn: "Play & Earn Now",
      description: "Discover our growing collection of blockchain games with instant rewards",
      earnTokens: "Earn tokens while playing",
      exploreMarketplace: "Explore Marketplace",
      rockPaperScissors: {
        name: "Rock Paper Scissors",
        status: "Live"
      },
      pokerZ: {
        name: "PokerZ",
        status: "Beta"
      },
      snakeGame: {
        name: "Snake Game",
        status: "Coming Soon"
      },
      blackjack: {
        name: "Blackjack",
        status: "Live"
      },
      diceWars: {
        name: "JackPot - Big Win",
        status: "Beta"
      },
      cryptoRacer: {
        name: "Mountain Climb",
        status: "Coming Soon"
      },
      towerDefense: {
        name: "Jackal Squad",
        status: "Coming Soon"
      },
      cardMaster: {
        name: "Cat Shooter",
        status: "Coming Soon"
      }
    },
    // Steps Section
    stepsSection: {
      getStarted: "Get Started in Minutes",
      howItWorks: "How It Works",
      description: "Three simple steps to unlock the future of blockchain gaming and DeFi",
      startJourney: "Start Your Journey",
      step1: {
        title: "Download & create wallet",
        description: "< 30-second setup on any device."
      },
      step2: {
        title: "Join a Hydra Head",
        description: "We handle the tech—enjoy instant settlement."
      },
      step3: {
        title: "Play, swap, earn",
        description: "Experience blazing-fast DeFi & GameFi on Cardano."
      }
    },

    // Download
    downloadTitle: 'Download Hydra Wallet',
    downloadSubtitle: 'Choose the platform that suits you and start your journey exploring the multi-chain crypto world',
    multiPlatformReady: 'Multi-Platform Ready',

    // Platform names
    browserExtension: 'Browser Extension',
    mobileApp: 'Mobile App',
    webDashboard: 'Web Dashboard',

    // Platform descriptions
    browserExtensionDesc: 'Chrome, Firefox, Brave, Edge',
    mobileAppDesc: 'iOS & Android',
    webDashboardDesc: 'Direct access via browser',

    // Platform buttons
    chromeWebStore: 'Chrome Web Store',
    firefoxAddons: 'Firefox Add-ons',
    appStore: 'App Store',
    googlePlay: 'Google Play',
    openWebDashboard: 'Open Web Dashboard',

    // Trust indicator
    trustedUsers: 'Over 2 million users trust us',
    worldwide: 'Worldwide',

    // Footer
    footerDescription: 'The fastest way to explore DeFi & GameFi on Cardano. Powered by Hydra, expanding to Bitcoin & Ethereum soon.',
    product: 'Product',
    support: 'Support',
    documentation: 'Documentation',
    tutorials: 'Tutorials',
    community: 'Community',
    contact: 'Contact',
    developerApi: 'Developer API',
    copyright: '© 2024 Hydra Wallet. All rights reserved.',
  },
} as const;

// Type helper để tạo nested paths
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationKey = NestedKeyOf<typeof translations.vi>;

// Helper function để truy cập nested object
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return getNestedValue(translations[language], key);
  };

  return { t, language };
};