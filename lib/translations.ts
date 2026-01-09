import { Language } from "./i18n";

// Define the type first to avoid circular reference
export type Translations = {
  nav: {
    home: string;
    products: string;
    about: string;
    contact: string;
  };
  hero: {
    slogan: string;
    headline: string;
    subheadline: string;
  };
  mission: {
    title: string;
    subtitle: string;
    description: string;
    philosophy: string;
  };
  whyUs: {
    title: string;
    items: {
      design: {
        number: string;
        title: string;
        subtitle: string;
        description: string;
      };
      innovation: {
        number: string;
        title: string;
        subtitle: string;
        description: string;
      };
      utility: {
        number: string;
        title: string;
        subtitle: string;
        description: string;
      };
    };
  };
  ecosystem: {
    title: string;
    subtitle: string;
    description: string;
    create: {
      title: string;
      category: string;
      description: string;
    };
    optimize: {
      title: string;
      category: string;
      description: string;
    };
    live: {
      title: string;
      category: string;
      description: string;
    };
  };
  cta: {
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
  products: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    infoTitle: string;
    infoDescription: string;
    email: string;
    location: string;
    phone: string;
    formTitle: string;
    name: string;
    emailLabel: string;
    subject: string;
    message: string;
    submit: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: {
      informationCollection: {
        title: string;
        content: string;
      };
      useOfInformation: {
        title: string;
        content: string;
      };
      dataSecurity: {
        title: string;
        content: string;
      };
      userRights: {
        title: string;
        content: string;
      };
      contactUs: {
        title: string;
        content: string;
      };
    };
  };
  terms: {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: {
      acceptance: {
        title: string;
        content: string;
      };
      serviceDescription: {
        title: string;
        content: string;
      };
      userResponsibilities: {
        title: string;
        content: string;
      };
      intellectualProperty: {
        title: string;
        content: string;
      };
      termination: {
        title: string;
        content: string;
      };
    };
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    hero: {
      slogan: "Crafting Intelligence for Everyday Life",
      headline: "One Core Engine. Infinite Possibilities.",
      subheadline:
        "We are bridging the gap between complex artificial intelligence and human potential. From the boardroom to the studio, our ecosystem of intuitive applications empowers you to achieve more—no matter where you are or what you do.",
    },
    mission: {
      title: "Our Mission",
      subtitle: "Democratizing the Power of AI",
      description:
        "At UniJade Tech, we believe that advanced technology shouldn't be a luxury reserved for the few. We operate as an innovation foundry, leveraging a high-performance AI core to solve distinct challenges across widely different sectors.",
      philosophy:
        "Our philosophy is simple: Complexity belongs under the hood, not in your hands. We are dedicated to building tools that are exceptionally powerful, surprisingly affordable, and effortlessly easy to use. Whether we are helping you crunch numbers or craft stories, our mission is to make your life smarter, faster, and better.",
    },
    whyUs: {
      title: "Why Choose Us?",
      items: {
        design: {
          number: "01",
          title: "Human-Centric Design",
          subtitle: "Intelligence, Simplified.",
          description:
            "We don't build \"tech for tech's sake.\" We build for you. Every application we release—regardless of the industry—is designed with a \"zero-learning-curve\" philosophy. We strip away the complexity of AI so you can focus on the result, not the process.",
        },
        innovation: {
          number: "02",
          title: "Accessible Innovation",
          subtitle: "Elite Tech, Fair Access.",
          description:
            "We've cracked the code on efficiency. By utilizing a unified, high-performance proprietary engine, we deliver enterprise-grade speed and accuracy at a price point that makes sense for individuals and small businesses. High performance is now the standard, not the upgrade.",
        },
        utility: {
          number: "03",
          title: "Purpose-Driven Utility",
          subtitle: "Solving Real Problems.",
          description:
            "Our portfolio is diverse because human needs are diverse. We don't just follow trends; we identify friction points in daily life and work, then deploy our AI agents to smooth them out. From data analysis to lifestyle management, our tools deliver tangible, measurable impact.",
        },
      },
    },
    ecosystem: {
      title: "Our Ecosystem",
      subtitle: "Explore Our Suite of Solutions",
      description:
        "We don't define ourselves by a single industry, but by the value we create. Discover how our intelligent tools are reshaping the way you work, create, and live.",
      create: {
        title: "[ CREATE ]",
        category: "Tools for Creativity & Design",
        description:
          "Unleash your imagination with AI-assisted writing, art generation, and design tools.",
      },
      optimize: {
        title: "[ OPTIMIZE ]",
        category: "Tools for Productivity & Analysis",
        description:
          "Streamline workflows and uncover value with our high-speed data and logic engines.",
      },
      live: {
        title: "[ LIVE ]",
        category: "Tools for Insight & Lifestyle",
        description:
          "Enhance your daily routine with intelligent assistants and personalized service apps.",
      },
    },
    cta: {
      title: "Ready to upgrade your workflow?",
      description:
        "Join thousands of users who are already experiencing the future of efficiency.",
      },
    footer: {
      copyright: "© {year} UniJade Tech. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    products: {
      title: "Our Products",
      subtitle: "Explore Our Suite of Solutions",
      description:
        "Discover how our intelligent tools are reshaping the way you work, create, and live.",
    },
    about: {
      title: "About UniJade Tech",
      subtitle: "Pioneering the future of intelligent technology",
      description: "Learn about our mission to democratize AI and empower human potential.",
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Have questions? We'd love to hear from you.",
      description:
        "Send us a message and we'll respond as soon as possible.",
      infoTitle: "Contact Information",
      infoDescription:
        "Fill out the form and our team will get back to you within 24 hours.",
      email: "Email",
      location: "Location",
      phone: "Phone",
      formTitle: "Send us a Message",
      name: "Name",
      emailLabel: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 9, 2025",
      intro: "At UniJade Tech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.",
      sections: {
        informationCollection: {
          title: "Information Collection",
          content:
            "We collect information you provide directly to us, such as when you create an account, contact us, or use our services. This may include your name, email address, and other information you choose to provide.",
        },
        useOfInformation: {
          title: "Use of Information",
          content:
            "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.",
        },
        dataSecurity: {
          title: "Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        userRights: {
          title: "Your Rights",
          content:
            "You have the right to access, correct, or delete your personal information. You may also opt out of certain communications from us.",
        },
        contactUs: {
          title: "Contact Us",
          content:
            "If you have any questions about this Privacy Policy, please contact us at service@unijade.cn",
        },
      },
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: January 9, 2025",
      intro: "Welcome to UniJade Tech. These Terms of Service govern your use of our services and website.",
      sections: {
        acceptance: {
          title: "Acceptance of Terms",
          content:
            "By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        },
        serviceDescription: {
          title: "Service Description",
          content:
            "UniJade Tech provides intelligent tools and services for work, creativity, and lifestyle. We reserve the right to modify or discontinue any service at any time.",
        },
        userResponsibilities: {
          title: "User Responsibilities",
          content:
            "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You agree to comply with all applicable laws and regulations.",
        },
        intellectualProperty: {
          title: "Intellectual Property",
          content:
            "All content, features, and functionality of our services are owned by UniJade Tech and are protected by international copyright, trademark, and other intellectual property laws.",
        },
        termination: {
          title: "Termination",
          content:
            "We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms of Service.",
        },
      },
    },
  },
  zh: {
    nav: {
      home: "首页",
      products: "产品",
      about: "关于",
      contact: "联系",
    },
    hero: {
      slogan: "智造生活，触手可及",
      headline: "一个核心引擎。无限可能。",
      subheadline:
        "我们正在弥合复杂人工智能与人类潜力之间的鸿沟。从会议室到工作室，我们的直观应用生态系统赋予您实现更多目标的能力——无论您身在何处、从事何种工作。",
    },
    mission: {
      title: "我们的使命",
      subtitle: "AI 力量的民主化",
      description:
        "在 UniJade Tech，我们相信先进技术不应是少数人的奢侈品。我们作为一个创新工场运营，利用高性能 AI 核心解决不同领域的独特挑战。",
      philosophy:
        "我们的哲学很简单：复杂性应该在引擎盖下，而不是在您手中。我们致力于构建功能强大、价格实惠、易于使用的工具。无论我们是帮助您处理数据还是创作故事，我们的使命都是让您的生活更智能、更快速、更美好。",
    },
    whyUs: {
      title: "为什么选择我们？",
      items: {
        design: {
          number: "01",
          title: "以人为本的设计",
          subtitle: "智能，简化。",
          description:
            "我们不为了技术而技术。我们为您而建。我们发布的每一个应用——无论哪个行业——都采用零学习曲线的理念设计。我们剥离了 AI 的复杂性，让您专注于结果，而不是过程。",
        },
        innovation: {
          number: "02",
          title: "可及的创新",
          subtitle: "精英技术，公平获取。",
          description:
            "我们破解了效率的密码。通过使用统一的高性能专有引擎，我们以个人和小企业负担得起的价格提供企业级的速度和准确性。高性能现在是标准，而不是升级。",
        },
        utility: {
          number: "03",
          title: "目标驱动的实用性",
          subtitle: "解决真实问题。",
          description:
            "我们的产品组合多样化，因为人类需求多样化。我们不只追随趋势；我们识别日常生活和工作中的摩擦点，然后部署我们的 AI 智能体来消除它们。从数据分析到生活方式管理，我们的工具带来切实、可衡量的影响。",
        },
      },
    },
    ecosystem: {
      title: "我们的生态系统",
      subtitle: "探索我们的解决方案套件",
      description:
        "我们不是由单一行业定义，而是由我们创造的价值定义。探索我们的智能工具如何重塑您的工作、创作和生活方式。",
      create: {
        title: "[ 创造 ]",
        category: "创意与设计工具",
        description: "通过 AI 辅助的写作、艺术生成和设计工具释放您的想象力。",
      },
      optimize: {
        title: "[ 优化 ]",
        category: "生产力与分析工具",
        description: "使用我们的高速数据和逻辑引擎简化工作流程并发现价值。",
      },
      live: {
        title: "[ 生活 ]",
        category: "洞察与生活方式工具",
        description: "通过智能助手和个性化服务应用增强您的日常生活。",
      },
    },
    cta: {
      title: "准备好升级您的工作流程了吗？",
      description: "加入数千名已经在体验效率未来的用户。",
    },
    footer: {
      copyright: "© {year} UniJade Tech. 保留所有权利。",
      privacy: "隐私政策",
      terms: "服务条款",
    },
    products: {
      title: "我们的产品",
      subtitle: "探索我们的解决方案套件",
      description: "探索我们的智能工具如何重塑您的工作、创作和生活方式。",
    },
    about: {
      title: "关于 UniJade Tech",
      subtitle: "开创智能技术的未来",
      description: "了解我们致力于 AI 民主化和释放人类潜力的使命。",
    },
    contact: {
      title: "联系我们",
      subtitle: "有问题吗？我们很乐意听取您的意见。",
      description: "给我们发消息，我们会尽快回复。",
      infoTitle: "联系信息",
      infoDescription: "填写表单，我们的团队会在 24 小时内回复您。",
      email: "邮箱",
      location: "地址",
      phone: "电话",
      formTitle: "给我们留言",
      name: "姓名",
      emailLabel: "邮箱",
      subject: "主题",
      message: "消息",
      submit: "发送消息",
    },
    privacy: {
      title: "隐私政策",
      lastUpdated: "最后更新：2025 年 1 月 9 日",
      intro: "在 UniJade Tech，我们致力于保护您的隐私。本隐私政策解释了我们如何收集、使用和保护您的个人信息。",
      sections: {
        informationCollection: {
          title: "信息收集",
          content:
            "我们收集您直接提供给我们的信息，例如当您创建账户、联系我们或使用我们的服务时。这可能包括您的姓名、电子邮件地址和您选择提供的其他信息。",
        },
        useOfInformation: {
          title: "信息使用",
          content:
            "我们使用收集的信息来提供、维护和改进我们的服务，与您沟通，并遵守法律义务。",
        },
        dataSecurity: {
          title: "数据安全",
          content:
            "我们实施适当的技术和组织措施，以保护您的个人信息免受未经授权的访问、更改、披露或销毁。",
        },
        userRights: {
          title: "您的权利",
          content:
            "您有权访问、更正或删除您的个人信息。您也可以选择不接收我们的某些通信。",
        },
        contactUs: {
          title: "联系我们",
          content: "如果您对本隐私政策有任何疑问，请通过 service@unijade.cn 联系我们",
        },
      },
    },
    terms: {
      title: "服务条款",
      lastUpdated: "最后更新：2025 年 1 月 9 日",
      intro: "欢迎使用 UniJade Tech。这些服务条款管辖您对我们服务和网站的使用。",
      sections: {
        acceptance: {
          title: "接受条款",
          content:
            "通过访问或使用我们的服务，您同意遵守这些服务条款以及所有适用的法律法规。",
        },
        serviceDescription: {
          title: "服务描述",
          content:
            "UniJade Tech 为工作、创造力和生活方式提供智能工具和服务。我们保留随时修改或终止任何服务的权利。",
        },
        userResponsibilities: {
          title: "用户责任",
          content:
            "您有责任维护您账户的机密性，并对您账户下发生的所有活动负责。您同意遵守所有适用的法律法规。",
        },
        intellectualProperty: {
          title: "知识产权",
          content:
            "我们服务的所有内容、功能和功能均归 UniJade Tech 所有，并受国际版权、商标和其他知识产权法的保护。",
        },
        termination: {
          title: "终止",
          content:
            "我们保留在我们认为违反这些服务条款的行为时，全权决定终止或暂停您的账户和对我们服务的访问的权利，无需事先通知。",
        },
      },
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      products: "製品",
      about: "会社概要",
      contact: "お問い合わせ",
    },
    hero: {
      slogan: "日常生活のためのインテリジェンスを crafting",
      headline: "一つのコアエンジン。無限の可能性。",
      subheadline:
        "私たちは、複雑な人工知能と人間の可能性の間のギャップを埋めています。会議室からスタジオまで、直感的なアプリケーションのエコシステムが、どこにいても何をしていても、より多くのことを達成できるようにします。",
    },
    mission: {
      title: "私たちの使命",
      subtitle: "AI の力を民主化",
      description:
        "UniJade Tech では、最先端技術は少数の特権的なものではないべきだと考えています。私たちはイノベーション工場として運営し、高性能 AI コアを活用して、さまざまな分野の課題を解決します。",
      philosophy:
        "私たちの哲学はシンプルです：複雑さはボンネットの下にあり、手元にはないべきです。私たちは、非常に強力で、驚くほど手頃な価格で、使いやすいツールの構築に専念しています。数値処理から物語作成まで、あなたの生活をよりスマートに、より高速に、より良くすることが私たちの使命です。",
    },
    whyUs: {
      title: "私たちを選ぶ理由",
      items: {
        design: {
          number: "01",
          title: "人間中心のデザイン",
          subtitle: "インテリジェンス、簡素化。",
          description:
            "私たちは「技術のための技術」を作りません。あなたのために作ります。業界を問わず、リリースするすべてのアプリケーションは「ゼロ学習曲線」の哲学で設計されています。AI の複雑さを取り除き、結果に集中できるようにします。",
        },
        innovation: {
          number: "02",
          title: "アクセス可能なイノベーション",
          subtitle: "エリート技術、公平なアクセス。",
          description:
            "私たちは効率化の秘密を解きました。統一された高性能専用エンジンを活用することで、個人と中小企業にとって適正な価格で、企業級の速度と精度を提供します。高性能は現在標準であり、アップグレードではありません。",
        },
        utility: {
          number: "03",
          title: "目的駆動型のユーティリティ",
          subtitle: "実際の問題を解決。",
          description:
            "私たちの製品ポートフォリオは多様です。なぜなら、人間のニーズは多様だからです。私たちは単なるトレンドに従うのではなく、日常生活と仕事の摩擦点を特定し、AI エージェントを展開してそれらを滑らかにします。データ分析からライフスタイル管理まで、私たちのツールは具体的で測定可能な影響を提供します。",
        },
      },
    },
    ecosystem: {
      title: "私たちのエコシステム",
      subtitle: "ソリューションスイートを探索",
      description:
        "私たちは単一の業界ではなく、創造する価値によって定義されます。私たちのインテリジェントツールが、作業、創造、生活の方法をどのように再構築しているかを発見してください。",
      create: {
        title: "[ 創造 ]",
        category: "クリエイティビティとデザインのためのツール",
        description: "AI アシストライティング、アート生成、デザインツールで想像力を解放してください。",
      },
      optimize: {
        title: "[ 最適化 ]",
        category: "生産性と分析のためのツール",
        description: "高速データエンジンとロジックエンジンでワークフローを効率化し、価値を発見してください。",
      },
      live: {
        title: "[ 生活 ]",
        category: "洞察とライフスタイルのためのツール",
        description: "インテリジェントアシスタントとパーソナライズされたサービスアプリで日常生活を向上させてください。",
      },
    },
    cta: {
      title: "ワークフローのアップグレード準備はできましたか？",
      description: "効率の未来を既に体験している数千人のユーザーに参加してください。",
    },
    footer: {
      copyright: "© 2025 UniJade Tech. All rights reserved.",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
    products: {
      title: "私たちの製品",
      subtitle: "ソリューションスイートを探索",
      description:
        "私たちのインテリジェントツールが、作業、創造、生活の方法をどのように再構築しているかを発見してください。",
    },
    about: {
      title: "UniJade Tech について",
      subtitle: "インテリジェント技術の未来を開拓",
      description:
        "AI の民主化と人間の可能性を強化する私たちの使命について学んでください。",
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "ご質問がありますか？お聞かせください。",
      description: "メッセージを送信していただければ、できるだけ早くお返事いたします。",
      infoTitle: "連絡先情報",
      infoDescription: "フォームに記入すると、24 時間以内にチームから返信いたします。",
      email: "メール",
      location: "場所",
      phone: "電話",
      formTitle: "メッセージを送る",
      name: "名前",
      emailLabel: "メール",
      subject: "件名",
      message: "メッセージ",
      submit: "メッセージを送信",
    },
    privacy: {
      title: "プライバシーポリシー",
      lastUpdated: "最終更新：2025 年 1 月 9 日",
      intro: "UniJade Tech は、お客様のプライバシーを保護することに尽力しています。このプライバシーポリシーでは、個人情報の収集、使用、保護について説明します。",
      sections: {
        informationCollection: {
          title: "情報の収集",
          content:
            "アカウントの作成、お問い合わせ、またはサービスの利用時に直接提供いただいた情報を収集します。これには、名前、メールアドレス、その他任意で提供する情報が含まれます。",
        },
        useOfInformation: {
          title: "情報の使用",
          content:
            "収集した情報は、サービスの提供、維持、改善、お客様とのコミュニケーション、および法的義務の遵守のために使用します。",
        },
        dataSecurity: {
          title: "データセキュリティ",
          content:
            "不正アクセス、変更、開示、または破壊から個人情報を保護するために、適切な技術的および組織的措置を実施しています。",
        },
        userRights: {
          title: "あなたの権利",
          content:
            "個人情報のアクセス、修正、削除の権利があります。また、特定の通信をオプトアウトすることもできます。",
        },
        contactUs: {
          title: "お問い合わせ",
          content: "このプライバシーポリシーについてご質問がある場合は、service@unijade.cn までお問い合わせください",
        },
      },
    },
    terms: {
      title: "利用規約",
      lastUpdated: "最終更新：2025 年 1 月 9 日",
      intro: "UniJade Tech へようこそ。この利用規約は、当社のサービスとウェブサイトの使用を規定します。",
      sections: {
        acceptance: {
          title: "規約の承諾",
          content:
            "サービスにアクセスまたは使用することで、この利用規約およびすべての適用される法律と規制に拘束されることに同意したものとみなされます。",
        },
        serviceDescription: {
          title: "サービスの説明",
          content:
            "UniJade Tech は、仕事、創造性、ライフスタイルのためのインテリジェントなツールとサービスを提供します。当社は、いつでもサービスを変更または終了する権利を留保します。",
        },
        userResponsibilities: {
          title: "ユーザーの責任",
          content:
            "アカウントの機密性を維持し、アカウントで行われるすべての活動について責任を負うものとします。すべての適用される法律と規制に従うことに同意します。",
        },
        intellectualProperty: {
          title: "知的財産",
          content:
            "サービスのすべてのコンテンツ、機能、および機能性は UniJade Tech が所有し、国際的な著作権、商標、およびその他の知的財産法によって保護されています。",
        },
        termination: {
          title: "終了",
          content:
            "当社は、この利用規約に違反すると当社が判断する行為について、事前の通知なしに、独自の裁量でアカウントとサービスへのアクセスを終了または停止する権利を留保します。",
        },
      },
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      products: "Produits",
      about: "À propos",
      contact: "Contact",
    },
    hero: {
      slogan: "Créer l'intelligence pour la vie quotidienne",
      headline: "Un moteur core. Des possibilités infinies.",
      subheadline:
        "Nous comblons le fossé entre l'intelligence artificielle complexe et le potentiel humain. De la salle de réunion au studio, notre écosystème d'applications intuitives vous permet d'en faire plus, peu importe où vous êtes ou ce que vous faites.",
    },
    mission: {
      title: "Notre Mission",
      subtitle: "Démocratiser la puissance de l'IA",
      description:
        "Chez UniJade Tech, nous croyons que la technologie avancée ne devrait pas être un luxe réservé à quelques-uns. Nous opérons comme une fonderie d'innovation, exploitant un cœur IA haute performance pour résoudre des défis distincts dans divers secteurs.",
      philosophy:
        "Notre philosophie est simple : la complexité appartient sous le capot, pas entre vos mains. Nous sommes dédiés à construire des outils exceptionnellement puissants, étonnamment abordables et incroyablement faciles à utiliser. Que nous vous aidions à traiter des chiffres ou à créer des histoires, notre mission est de rendre votre vie plus intelligente, plus rapide et meilleure.",
    },
    whyUs: {
      title: "Pourquoi Nous Choisir ?",
      items: {
        design: {
          number: "01",
          title: "Design Centré sur l'Humain",
          subtitle: "Intelligence, Simplifiée.",
          description:
            "Ne construisons pas la technologie pour la technologie. Nous construisons pour vous. Chaque application que nous lançons, quel que soit l'industrie, est conçue avec une philosophie de courbe d'apprentissage zéro. Nous éliminons la complexité de l'IA afin que vous puissiez vous concentrer sur le résultat, pas le processus.",
        },
        innovation: {
          number: "02",
          title: "Innovation Accessible",
          subtitle: "Technologie d'Élite, Accès Équitable.",
          description:
            "Nous avons déchiffré le code de l'efficacité. En utilisant un moteur propriétaire unifié haute performance, nous offrons une vitesse et une précision de niveau entreprise à un prix qui a du sens pour les particuliers et les petites entreprises. Les hautes performances sont désormais la norme, pas la mise à niveau.",
        },
        utility: {
          number: "03",
          title: "Utilité Dirigée par un Objectif",
          subtitle: "Résoudre de Vrais Problèmes.",
          description:
            "Notre portefeuille est diversifié car les besoins humains sont diversifiés. Nous ne suivons pas simplement les tendances ; nous identifions les points de friction dans la vie quotidienne et le travail, puis déployons nos agents IA pour les lisser. De l'analyse de données à la gestion du style de vie, nos outils fournissent un impact tangible et mesurable.",
        },
      },
    },
    ecosystem: {
      title: "Notre Écosystème",
      subtitle: "Explorez Notre Suite de Solutions",
      description:
        "Nous ne nous définissons pas par une seule industrie, mais par la valeur que nous créons. Découvrez comment nos outils intelligents transforment la façon dont vous travaillez, créez et vivez.",
      create: {
        title: "[ CRÉER ]",
        category: "Outils de Créativité et de Design",
        description:
          "Libérez votre imagination avec l'écriture assistée par IA, la génération d'art et les outils de design.",
      },
      optimize: {
        title: "[ OPTIMISER ]",
        category: "Outils de Productivité et d'Analyse",
        description:
          "Simplifiez les flux de travail et découvrez de la valeur avec nos moteurs de données et de logique haute vitesse.",
      },
      live: {
        title: "[ VIVRE ]",
        category: "Outils de Perspective et de Style de Vie",
        description:
          "Améliorez votre routine quotidienne avec des assistants intelligents et des applications de service personnalisées.",
      },
    },
    cta: {
      title: "Prêt à améliorer votre flux de travail ?",
      description:
        "Rejoignez des milliers d'utilisateurs qui expérimentent déjà le futur de l'efficacité.",
    },
    footer: {
      copyright: "© 2025 UniJade Tech. Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
    },
    products: {
      title: "Nos Produits",
      subtitle: "Explorez Notre Suite de Solutions",
      description:
        "Découvrez comment nos outils intelligents transforment la façon dont vous travaillez, créez et vivez.",
    },
    about: {
      title: "À Propos de UniJade Tech",
      subtitle: "Pionnier de l'avenir de la technologie intelligente",
      description:
        "Découvrez notre mission de démocratiser l'IA et de responsabiliser le potentiel humain.",
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Des questions ? Nous aimerions avoir de vos nouvelles.",
      description:
        "Envoyez-nous un message et nous vous répondrons dès que possible.",
      infoTitle: "Informations de Contact",
      infoDescription:
        "Remplissez le formulaire et notre équipe vous répondra dans les 24 heures.",
      email: "Email",
      location: "Emplacement",
      phone: "Téléphone",
      formTitle: "Envoyez-nous un Message",
      name: "Nom",
      emailLabel: "Email",
      subject: "Sujet",
      message: "Message",
      submit: "Envoyer le Message",
    },
    privacy: {
      title: "Politique de Confidentialité",
      lastUpdated: "Dernière mise à jour : 9 janvier 2025",
      intro: "Chez UniJade Tech, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.",
      sections: {
        informationCollection: {
          title: "Collecte d'Informations",
          content:
            "Nous collectons les informations que vous nous fournissez directement, comme lorsque vous créez un compte, nous contactez ou utilisez nos services. Cela peut inclure votre nom, adresse e-mail et autres informations que vous choisissez de fournir.",
        },
        useOfInformation: {
          title: "Utilisation des Informations",
          content:
            "Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services, communiquer avec vous et respecter les obligations légales.",
        },
        dataSecurity: {
          title: "Sécurité des Données",
          content:
            "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès, la modification, la divulgation ou la destruction non autorisés.",
        },
        userRights: {
          title: "Vos Droits",
          content:
            "Vous avez le droit d'accéder, corriger ou supprimer vos informations personnelles. Vous pouvez également vous désinscrire de certaines communications.",
        },
        contactUs: {
          title: "Contactez-Nous",
          content: "Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à service@unijade.cn",
        },
      },
    },
    terms: {
      title: "Conditions d'Utilisation",
      lastUpdated: "Dernière mise à jour : 9 janvier 2025",
      intro: "Bienvenue chez UniJade Tech. Ces conditions d'utilisation régissent votre utilisation de nos services et site web.",
      sections: {
        acceptance: {
          title: "Acceptation des Conditions",
          content:
            "En accédant ou en utilisant nos services, vous acceptez d'être lié par ces conditions d'utilisation et toutes les lois et réglementations applicables.",
        },
        serviceDescription: {
          title: "Description du Service",
          content:
            "UniJade Tech fournit des outils et services intelligents pour le travail, la créativité et le mode de vie. Nous nous réservons le droit de modifier ou d'interrompre tout service à tout moment.",
        },
        userResponsibilities: {
          title: "Responsabilités de l'Utilisateur",
          content:
            "Vous êtes responsable de maintenir la confidentialité de votre compte et de toutes les activités qui se produisent sous votre compte. Vous acceptez de vous conformer à toutes les lois et réglementations applicables.",
        },
        intellectualProperty: {
          title: "Propriété Intellectuelle",
          content:
            "Tout le contenu, les fonctionnalités et la fonctionnalité de nos services appartiennent à UniJade Tech et sont protégés par les lois internationales sur le droit d'auteur, les marques et d'autres propriétés intellectuelles.",
        },
        termination: {
          title: "Résiliation",
          content:
            "Nous nous réservons le droit de résilier ou suspendre votre compte et l'accès à nos services à notre seule discrétion, sans préavis, pour tout comportement que nous estimons violer ces conditions d'utilisation.",
        },
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      products: "Productos",
      about: "Acerca de",
      contact: "Contacto",
    },
    hero: {
      slogan: "Creando Inteligencia para la Vida Cotidiana",
      headline: "Un Motor Core. Posibilidades Infinitas.",
      subheadline:
        "Estamos cerrando la brecha entre la inteligencia artificial compleja y el potencial humano. Desde la sala de juntas hasta el estudio, nuestro ecosistema de aplicaciones intuitivas te permite lograr más, sin importar dónde estés o qué hagas.",
    },
    mission: {
      title: "Nuestra Misión",
      subtitle: "Democratizando el Poder de la IA",
      description:
        "En UniJade Tech, creemos que la tecnología avanzada no debería ser un lujo reservado para pocos. Operamos como una fundición de innovación, aprovechando un núcleo de IA de alto rendimiento para resolver desafíos distintos en una amplia gama de sectores.",
      philosophy:
        "Nuestra filosofía es simple: la complejidad pertenece debajo del capó, no en tus manos. Estamos dedicados a construir herramientas excepcionalmente poderosas, sorprendentemente asequibles y increíblemente fáciles de usar. Ya sea ayudándote a procesar números o crear historias, nuestra misión es hacer tu vida más inteligente, más rápida y mejor.",
    },
    whyUs: {
      title: "¿Por Qué Elegirnos?",
      items: {
        design: {
          number: "01",
          title: "Diseño Centrado en el Humano",
          subtitle: "Inteligencia, Simplificada.",
          description:
            "No construimos \"tecnología por el bien de la tecnología\". Construimos para ti. Cada aplicación que lanzamos, independientemente de la industria, está diseñada con una filosofía de \"curva de aprendizaje cero\". Eliminamos la complejidad de la IA para que puedas enfocarte en el resultado, no en el proceso.",
        },
        innovation: {
          number: "02",
          title: "Innovación Accesible",
          subtitle: "Tecnología de Élite, Acceso Justo.",
          description:
            "Hemos descifrado el código de la eficiencia. Al utilizar un motor propietario unificado de alto rendimiento, entregamos velocidad y precisión de nivel empresarial a un punto de precio que tiene sentido para individuos y pequeñas empresas. El alto rendimiento ahora es el estándar, no la actualización.",
        },
        utility: {
          number: "03",
          title: "Utilidad Orientada a Propósitos",
          subtitle: "Resolviendo Problemas Reales.",
          description:
            "Nuestra cartera es diversa porque las necesidades humanas son diversas. No solo seguimos tendencias; identificamos puntos de fricción en la vida diaria y el trabajo, luego desplegamos nuestros agentes de IA para alisarlos. Desde el análisis de datos hasta la gestión del estilo de vida, nuestras herramientas entregan un impacto tangible y medible.",
        },
      },
    },
    ecosystem: {
      title: "Nuestro Ecosistema",
      subtitle: "Explora Nuestro Conjunto de Soluciones",
      description:
        "No nos definimos por una sola industria, sino por el valor que creamos. Descubre cómo nuestras herramientas inteligentes están remodelando la manera en que trabajas, creas y vives.",
      create: {
        title: "[ CREAR ]",
        category: "Herramientas de Creatividad y Diseño",
        description:
          "Libera tu imaginación con escritura asistida por IA, generación de arte y herramientas de diseño.",
      },
      optimize: {
        title: "[ OPTIMIZAR ]",
        category: "Herramientas de Productividad y Análisis",
        description:
          "Simplifica los flujos de trabajo y descubre valor con nuestros motores de datos y lógica de alta velocidad.",
      },
      live: {
        title: "[ VIVIR ]",
        category: "Herramientas de Perspicacia y Estilo de Vida",
        description:
          "Mejora tu rutina diaria con asistentes inteligentes y aplicaciones de servicio personalizado.",
      },
    },
    cta: {
      title: "¿Listo para mejorar tu flujo de trabajo?",
      description:
        "Únete a miles de usuarios que ya están experimentando el futuro de la eficiencia.",
    },
    footer: {
      copyright: "© 2025 UniJade Tech. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
    products: {
      title: "Nuestros Productos",
      subtitle: "Explora Nuestro Conjunto de Soluciones",
      description:
        "Descubre cómo nuestras herramientas inteligentes están remodelando la forma en que trabajas, creas y vives.",
    },
    about: {
      title: "Acerca de UniJade Tech",
      subtitle: "Pioneros del futuro de la tecnología inteligente",
      description:
        "Conoce nuestra misión de democratizar la IA y empoderar el potencial humano.",
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle: "¿Tienes preguntas? Nos encantaría saber de ti.",
      description:
        "Envíanos un mensaje y te responderemos lo antes posible.",
      infoTitle: "Información de Contacto",
      infoDescription:
        "Completa el formulario y nuestro equipo te responderá en 24 horas.",
      email: "Correo",
      location: "Ubicación",
      phone: "Teléfono",
      formTitle: "Envíanos un Mensaje",
      name: "Nombre",
      emailLabel: "Correo",
      subject: "Asunto",
      message: "Mensaje",
      submit: "Enviar Mensaje",
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 9 de enero de 2025",
      intro: "En UniJade Tech, nos comprometemos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.",
      sections: {
        informationCollection: {
          title: "Recopilación de Información",
          content:
            "Recopilamos información que nos proporciona directamente, como cuando crea una cuenta, se comunica con nosotros o utiliza nuestros servicios. Esto puede incluir su nombre, dirección de correo electrónico y otra información que elija proporcionar.",
        },
        useOfInformation: {
          title: "Uso de la Información",
          content:
            "Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, comunicarnos con usted y cumplir con las obligaciones legales.",
        },
        dataSecurity: {
          title: "Seguridad de Datos",
          content:
            "Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal contra el acceso, alteración, divulgación o destrucción no autorizados.",
        },
        userRights: {
          title: "Sus Derechos",
          content:
            "Tiene derecho a acceder, corregir o eliminar su información personal. También puede optar por no recibir ciertas comunicaciones nuestras.",
        },
        contactUs: {
          title: "Contáctenos",
          content: "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en service@unijade.cn",
        },
      },
    },
    terms: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: 9 de enero de 2025",
      intro: "Bienvenido a UniJade Tech. Estos Términos de Servicio rigen el uso de nuestros servicios y sitio web.",
      sections: {
        acceptance: {
          title: "Aceptación de Términos",
          content:
            "Al acceder o usar nuestros servicios, usted acepta estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables.",
        },
        serviceDescription: {
          title: "Descripción del Servicio",
          content:
            "UniJade Tech proporciona herramientas y servicios inteligentes para el trabajo, la creatividad y el estilo de vida. Nos reservamos el derecho de modificar o discontinuar cualquier servicio en cualquier momento.",
        },
        userResponsibilities: {
          title: "Responsabilidades del Usuario",
          content:
            "Usted es responsable de mantener la confidencialidad de su cuenta y todas las actividades que ocurren bajo su cuenta. Usted acepta cumplir con todas las leyes y regulaciones aplicables.",
        },
        intellectualProperty: {
          title: "Propiedad Intelectual",
          content:
            "Todo el contenido, características y funcionalidad de nuestros servicios son propiedad de UniJade Tech y están protegidos por las leyes internacionales de derechos de autor, marcas registradas y otras propiedades intelectuales.",
        },
        termination: {
          title: "Terminación",
          content:
            "Nos reservamos el derecho de terminar o suspender su cuenta y acceso a nuestros servicios a nuestra entera discreción, sin previo aviso, por conductas que creemos que violan estos Términos de Servicio.",
        },
      },
    },
  },
  ru: {
    nav: {
      home: "Главная",
      products: "Продукты",
      about: "О нас",
      contact: "Контакт",
    },
    hero: {
      slogan: "Создание интеллекта для повседневной жизни",
      headline: "Один основной движок. Бесконечные возможности.",
      subheadline:
        "Мы устраняем разрыв между сложным искусственным интеллектом и человеческим потенциалом. от конференц-зала до студии наша экосистема интуитивно понятных приложений позволяет вам достичь большего, независимо от того, где вы находитесь и чем занимаетесь.",
    },
    mission: {
      title: "Наша Миссия",
      subtitle: "Демократизация силы ИИ",
      description:
        "В UniJade Tech мы считаем, что передовые технологии не должны быть роскошью, доступной немногим. Мы действуем как кузница инноваций, используя высокопроизводительное ядро ИИ для решения различных задач в самых разных отраслях.",
      philosophy:
        "Наша философия проста: сложность должна быть под капотом, а не в ваших руках. Мы посвятили себя созданию инструментов, которые исключительно мощны, удивительно доступны и невероятно просты в использовании. Помогаем ли мы вам обрабатывать цифры или создавать истории, наша миссия — сделать вашу жизнь умнее, быстрее и лучше.",
    },
    whyUs: {
      title: "Почему Выбирают Нас?",
      items: {
        design: {
          number: "01",
          title: "Человеко-ориентированный дизайн",
          subtitle: "Интеллект, Упрощенный.",
          description:
            "Мы не создаем \"технологии ради технологий\". Мы создаем для вас. Каждое приложение, которое мы выпускаем, независимо от отрасли, разработано с философией \"нулевой кривой обучения\". Мы убираем сложность ИИ, чтобы вы могли сосредоточиться на результате, а не на процессе.",
        },
        innovation: {
          number: "02",
          title: "Доступная Инновация",
          subtitle: "Элитная технология, Справедливый доступ.",
          description:
            "Мы взломали код эффективности. Используя унифицированный высокопроизводительный собственный движок, мы предоставляем скорость и точность корпоративного уровня по цене, которая имеет смысл для физических лиц и малого бизнеса. Высокая производительность теперь является стандартом, а не обновлением.",
        },
        utility: {
          number: "03",
          title: "Утилита, управляемая целью",
          subtitle: "Решение реальных проблем.",
          description:
            "Наш портфель разнообразен, потому что разнообразны человеческие потребности. Мы не просто следуем тенденциям; мы выявляем точки трения в повседневной жизни и работе, а затем развертываем наших агентов ИИ для их сглаживания. От анализа данных до управления образом жизни наши инструменты приносят ощутимое и измеримое влияние.",
        },
      },
    },
    ecosystem: {
      title: "Наша Экосистема",
      subtitle: "Исследуйте наш набор решений",
      description:
        "Мы не определяем себя одной отраслью, а ценностью, которую создаем. Откройте для себя, как наши интеллектуальные инструменты меняют способ, которым вы работаете, творите и живете.",
      create: {
        title: "[ СОЗДАВАТЬ ]",
        category: "Инструменты для творчества и дизайна",
        description:
          "Раскрыть свое воображение с помощью ИИ-помощи в написании, генерации искусства и инструментов дизайна.",
      },
      optimize: {
        title: "[ ОПТИМИЗИРОВАТЬ ]",
        category: "Инструменты для производительности и анализа",
        description:
          "Оптимизируйте рабочие процессы и открывайте ценность с помощью наших высокоскоростных движков данных и логики.",
      },
      live: {
        title: "[ ЖИТЬ ]",
        category: "Инструменты для понимания и образа жизни",
        description:
          "Улучшите свой ежедневный график с помощью интеллектуальных помощников и персонализированных сервисных приложений.",
      },
    },
    cta: {
      title: "Готовы обновить свой рабочий процесс?",
      description:
        "Присоединяйтесь к тысячам пользователей, которые уже испытывают будущее эффективности.",
    },
    footer: {
      copyright: "© 2025 UniJade Tech. Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
    products: {
      title: "Наши Продукты",
      subtitle: "Исследуйте наш набор решений",
      description:
        "Узнайте, как наши интеллектуальные инструменты меняют способ, которым вы работаете, творите и живете.",
    },
    about: {
      title: "О UniJade Tech",
      subtitle: "Пионеры будущего интеллектуальных технологий",
      description:
        "Узнайте о нашей миссии по демократизации ИИ и расширению возможностей человеческого потенциала.",
    },
    contact: {
      title: "Связаться с Нами",
      subtitle: "Есть вопросы? Мы будем рады услышать вас.",
      description:
        "Отправьте нам сообщение, и мы ответим как можно скорее.",
      infoTitle: "Контактная Информация",
      infoDescription:
        "Заполните форму, и наша команда свяжется с вами в течение 24 часов.",
      email: "Эл. почта",
      location: "Местоположение",
      phone: "Телефон",
      formTitle: "Отправить Нам Сообщение",
      name: "Имя",
      emailLabel: "Эл. почта",
      subject: "Тема",
      message: "Сообщение",
      submit: "Отправить Сообщение",
    },
    privacy: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: 9 января 2025 г.",
      intro: "В UniJade Tech мы обязуемся защищать вашу конфиденциальность. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу личную информацию.",
      sections: {
        informationCollection: {
          title: "Сбор информации",
          content:
            "Мы собираем информацию, которую вы предоставляете нам напрямую, например, когда создаете аккаунт, связываетесь с нами или используете наши услуги. Это может включать ваше имя, адрес электронной почты и другую информацию, которую вы решите предоставить.",
        },
        useOfInformation: {
          title: "Использование информации",
          content:
            "Мы используем собранную информацию для предоставления, поддержания и улучшения наших услуг, связи с вами и соблюдения юридических обязательств.",
        },
        dataSecurity: {
          title: "Безопасность данных",
          content:
            "Мы внедряем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения.",
        },
        userRights: {
          title: "Ваши права",
          content:
            "Вы имеете право доступа, исправления или удаления вашей личной информации. Вы также можете отказаться от определенных коммуникаций с нашей стороны.",
        },
        contactUs: {
          title: "Свяжитесь с нами",
          content: "Если у вас есть вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами по адресу service@unijade.cn",
        },
      },
    },
    terms: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление: 9 января 2025 г.",
      intro: "Добро пожаловать в UniJade Tech. Эти условия использования регулируют использование наших услуг и веб-сайта.",
      sections: {
        acceptance: {
          title: "Принятие условий",
          content:
            "Доступ к нашим услугам или их использование означает согласие быть связанным этими условиями использования и всеми применимыми законами и постановлениями.",
        },
        serviceDescription: {
          title: "Описание услуг",
          content:
            "UniJade Tech предоставляет интеллектуальные инструменты и услуги для работы, творчества и образа жизни. Мы оставляем за собой право изменить или прекратить любую услугу в любое время.",
        },
        userResponsibilities: {
          title: "Ответственность пользователя",
          content:
            "Вы несете ответственность за поддержание конфиденциальности вашего аккаунта и за всю деятельность, происходящую под вашим аккаунтом. Вы соглашаетесь соблюдать все применимые законы и постановления.",
        },
        intellectualProperty: {
          title: "Интеллектуальная собственность",
          content:
            "Весь контент, функции и функциональность наших услуг принадлежат UniJade Tech и защищены международными законами об авторском праве, товарных знаках и другой интеллектуальной собственностью.",
        },
        termination: {
          title: "Прекращение",
          content:
            "Мы оставляем за собой право прекратить или приостановить ваш аккаунт и доступ к нашим услугам по нашему единоличному усмотрению, без предварительного уведомления, за поведение, которое, по нашему мнению, нарушает эти условия использования.",
        },
      },
    },
  },
};
