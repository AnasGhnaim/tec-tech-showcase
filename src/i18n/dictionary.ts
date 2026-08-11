export type Lang = "en" | "ar";

type Entry = { en: string; ar: string };

export const dict = {
  brand: { en: "FTP", ar: "إف تي بي" },

  nav: {
    vision: { en: "Vision", ar: "رؤيتنا" },
    services: { en: "Services", ar: "خدماتنا" },
    projects: { en: "Projects", ar: "أعمالنا" },
    contact: { en: "Contact", ar: "تواصل معنا" },
    allWork: { en: "All work", ar: "كل الأعمال" },
    cta: { en: "Start a project", ar: "ابدأ مشروعك" },
    home: { en: "FTP home", ar: "الصفحة الرئيسية FTP" },
    openMenu: { en: "Open menu", ar: "فتح القائمة" },
    toLight: { en: "Switch to light theme", ar: "التبديل إلى الوضع الفاتح" },
    toDark: { en: "Switch to dark theme", ar: "التبديل إلى الوضع الداكن" },
    language: { en: "العربية", ar: "English" },
    languageAria: { en: "Switch to Arabic", ar: "التبديل إلى الإنجليزية" },
  },

  hero: {
    eyebrow: { en: "Software development agency", ar: "وكالة تطوير برمجيات" },
    titleA: { en: "We build the software your", ar: "نبني البرمجيات التي" },
    titleAccent: { en: " business runs on", ar: " يعمل عليها نشاطك" },
    lead: {
      en: "FTP designs and engineers e-commerce platforms, portfolio sites and custom systems — typed end to end, measured against your numbers, and handed over with the keys.",
      ar: "تصمم FTP وتبني منصات التجارة الإلكترونية ومواقع الأعمال والأنظمة المخصصة — بجودة هندسية عالية، وتُقاس بأرقامك، وتُسلَّم لك بالكامل.",
    },
    viewProjects: { en: "View projects", ar: "استعرض الأعمال" },
    getInTouch: { en: "Get in touch", ar: "تواصل معنا" },
    since: { en: "Since", ar: "منذ" },
    projects: { en: "Projects", ar: "مشروعاً" },
    avgBuild: { en: "Avg. build", ar: "متوسط التنفيذ" },
    avgBuildValue: { en: "9 wks", ar: "٩ أسابيع" },
    sceneAlt: {
      en: "Animated 3D rendering of an interlocking geometric structure representing FTP's engineering work.",
      ar: "رسم ثلاثي الأبعاد متحرك لهيكل هندسي متشابك يمثل أعمال FTP الهندسية.",
    },
    archiveLink: { en: "Browse the full project archive", ar: "تصفح أرشيف المشاريع الكامل" },
  },

  vision: {
    eyebrow: { en: "Who we are", ar: "من نحن" },
    title: {
      en: "A small studio with an unfashionable commitment to finishing things.",
      ar: "استوديو صغير بالتزام نادر: أن ننهي ما نبدأه.",
    },
    intro: {
      en: "FTP has been building commercial software since 2016. We are engineers and designers, not resellers, and every project is delivered by the people who scoped it.",
      ar: "تبني FTP البرمجيات التجارية منذ عام 2016. نحن مهندسون ومصممون، لا وسطاء، وكل مشروع يُنفَّذ على يد من وضع خطته.",
    },
    pillar1Title: { en: "Vision", ar: "الرؤية" },
    pillar1Body: {
      en: "That any ambitious business — a twelve-person co-operative as readily as a national retailer — should be able to run on software built to the same standard. Most teams are handed templates they outgrow in a year. We exist to close that gap: to make properly engineered, properly designed digital products the normal option rather than the expensive exception.",
      ar: "أن يتمكن أي نشاط طموح — من تعاونية من اثني عشر شخصاً إلى متجر وطني — من الاعتماد على برمجيات بنفس المستوى من الجودة. معظم الفرق تحصل على قوالب جاهزة تتجاوزها خلال عام. نحن هنا لسد هذه الفجوة: لنجعل المنتجات الرقمية المصممة والمهندسة بإتقان الخيار الطبيعي لا الاستثناء المكلف.",
    },
    pillar2Title: { en: "Mission", ar: "الرسالة" },
    pillar2Body: {
      en: "We build e-commerce platforms, portfolio sites and custom software that hold up under real traffic and real deadlines. Every engagement starts with the numbers the client is judged on, ships in increments they can review weekly, and ends with documented code, transferred ownership and a team that can maintain it without us — though most keep us on anyway.",
      ar: "نبني منصات تجارة إلكترونية ومواقع أعمال وبرمجيات مخصصة تصمد أمام الضغط الحقيقي والمواعيد الحقيقية. كل تعاون يبدأ بالأرقام التي يُقاس بها العميل، ويُسلَّم على دفعات قابلة للمراجعة أسبوعياً، وينتهي بكود موثّق وملكية كاملة وفريق قادر على الصيانة بدوننا — رغم أن معظمهم يفضل استمرارنا.",
    },
    p1Title: { en: "Fixed scope, visible progress", ar: "نطاق واضح وتقدم مرئي" },
    p1Body: {
      en: "Weekly demos on a staging URL from week one. No black boxes.",
      ar: "عروض أسبوعية على رابط تجريبي منذ الأسبوع الأول. بلا صناديق سوداء.",
    },
    p2Title: { en: "Own your code", ar: "الكود ملكك" },
    p2Body: {
      en: "Repositories, infrastructure and documentation are yours from day one.",
      ar: "المستودعات والبنية التحتية والتوثيق ملكك من اليوم الأول.",
    },
    p3Title: { en: "Measured, not asserted", ar: "قياس لا ادعاء" },
    p3Body: {
      en: "We agree on the metric before we build, then report against it after launch.",
      ar: "نتفق على المؤشر قبل البناء، ثم نقدّم التقارير عليه بعد الإطلاق.",
    },
  },

  services: {
    eyebrow: { en: "Expertise", ar: "خبراتنا" },
    title: { en: "Six disciplines, one delivery team.", ar: "ستة تخصصات، فريق تنفيذ واحد." },
    intro: {
      en: "We keep design, front end, backend and infrastructure under one roof so nothing gets lost in the handover between them.",
      ar: "نجمع التصميم والواجهات والخوادم والبنية التحتية تحت سقف واحد حتى لا يضيع شيء في التسليم بينها.",
    },
  },

  projects: {
    eyebrow: { en: "Selected work", ar: "أعمال مختارة" },
    title: { en: "Shipped, live, and still maintained.", ar: "منشورة، تعمل، وما زلنا نصونها." },
    intro: {
      en: "Six recent engagements across commerce, product and mobile. Each one is running in production today.",
      ar: "ستة مشاريع حديثة في التجارة والمنتجات والتطبيقات. كل واحد منها يعمل فعلياً اليوم.",
    },
    archive: { en: "Full archive", ar: "الأرشيف الكامل" },
    all: { en: "All", ar: "الكل" },
    "E-commerce": { en: "E-commerce", ar: "تجارة إلكترونية" },
    Portfolio: { en: "Portfolio", ar: "مواقع أعمال" },
    SaaS: { en: "SaaS", ar: "أنظمة سحابية" },
    Mobile: { en: "Mobile", ar: "تطبيقات جوال" },
  },

  stats: {
    eyebrow: { en: "Why us", ar: "لماذا نحن" },
    title: { en: "The record, in numbers we can evidence.", ar: "سجلّنا، بأرقام يمكن إثباتها." },
    intro: {
      en: "No awards shelf, no partner logos we have not worked with. Just the delivery history.",
      ar: "لا جوائز معلّقة ولا شعارات لشركاء لم نعمل معهم. فقط سجل التسليم.",
    },
    delivered: { en: "Projects delivered", ar: "مشروعاً منجزاً" },
    clients: { en: "Clients served", ar: "عميلاً خدمناهم" },
    years: { en: "Years in operation", ar: "سنوات من العمل" },
    retention: { en: "Clients who return", ar: "عملاء يعودون إلينا" },
  },

  testimonials: {
    eyebrow: { en: "Clients", ar: "العملاء" },
    title: { en: "What the teams we built for say.", ar: "ماذا تقول الفرق التي بنينا لها." },
  },

  contact: {
    eyebrow: { en: "Contact", ar: "تواصل" },
    title: { en: "Tell us what you're building.", ar: "أخبرنا بما تبنيه." },
    intro: {
      en: "Send a few lines about the project. We reply within one business day, and the first call is with an engineer, not a salesperson.",
      ar: "أرسل بضعة أسطر عن مشروعك. نرد خلال يوم عمل واحد، والمكالمة الأولى مع مهندس لا مع مندوب مبيعات.",
    },
    location: { en: "Remote-first · CET & EST overlap", ar: "عن بُعد · بتوقيت أوروبا وأمريكا" },
    name: { en: "Name", ar: "الاسم" },
    namePlaceholder: { en: "Dana Whitfield", ar: "محمد أحمد" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    emailPlaceholder: { en: "you@company.com", ar: "you@company.com" },
    company: { en: "Company (optional)", ar: "الشركة (اختياري)" },
    companyPlaceholder: { en: "Atlas Home Goods", ar: "اسم شركتك" },
    message: { en: "Project brief", ar: "تفاصيل المشروع" },
    messagePlaceholder: {
      en: "What are you building, what's the deadline, and what does success look like?",
      ar: "ما الذي تبنيه؟ وما الموعد النهائي؟ وكيف يبدو النجاح بالنسبة لك؟",
    },
    submit: { en: "Send brief", ar: "إرسال الطلب" },
    privacy: {
      en: "We use your details only to reply to this enquiry.",
      ar: "نستخدم بياناتك للرد على هذا الطلب فقط.",
    },
    errName: { en: "Please tell us your name.", ar: "من فضلك أخبرنا باسمك." },
    errEmail: { en: "That email address doesn't look right.", ar: "البريد الإلكتروني غير صحيح." },
    errMessage: {
      en: "A little more detail helps — 20 characters minimum.",
      ar: "تفاصيل أكثر تساعدنا — 20 حرفاً على الأقل.",
    },
    toastTitle: { en: "Thanks — your brief is with us.", ar: "شكراً — وصلنا طلبك." },
    toastBody: {
      en: "We'll reply to {email} within one business day.",
      ar: "سنرد على {email} خلال يوم عمل واحد.",
    },
    sending: { en: "Sending…", ar: "جارٍ الإرسال…" },
    errorTitle: { en: "Your message didn't send.", ar: "تعذّر إرسال رسالتك." },
    errorBody: {
      en: "Please try again in a moment, or email studio@ftp.com directly.",
      ar: "حاول مرة أخرى بعد قليل، أو راسلنا على studio@ftp.com مباشرة.",
    },
  },

  footer: {
    blurb: {
      en: "A software development agency building e-commerce platforms, portfolio sites and custom software for teams that need the thing to actually work.",
      ar: "وكالة تطوير برمجيات تبني منصات التجارة الإلكترونية ومواقع الأعمال والبرمجيات المخصصة للفرق التي تحتاج حلولاً تعمل فعلاً.",
    },
    navigate: { en: "Navigate", ar: "تصفح" },
    elsewhere: { en: "Elsewhere", ar: "روابط أخرى" },
    rights: { en: "© {year} FTP. All rights reserved.", ar: "© {year} FTP. جميع الحقوق محفوظة." },
    tagline: { en: "Built in-house · Shipped weekly", ar: "تطوير داخلي · تسليم أسبوعي" },
  },

  archive: {
    eyebrow: { en: "Archive", ar: "الأرشيف" },
    title: {
      en: "Every project we have shipped and still stand behind.",
      ar: "كل مشروع أطلقناه وما زلنا نقف خلفه.",
    },
    intro: {
      en: "Commerce, product, editorial and mobile work delivered by the same team that scoped it.",
      ar: "أعمال في التجارة والمنتجات والمحتوى والتطبيقات، ينفذها الفريق نفسه الذي خطط لها.",
    },
    back: { en: "Archive", ar: "الأرشيف" },
    whatWeBuilt: { en: "What we built", ar: "ما الذي بنيناه" },
    outcomes: { en: "Outcomes", ar: "النتائج" },
    stack: { en: "Stack", ar: "التقنيات" },
    visit: { en: "Visit live site", ar: "زيارة الموقع" },
    similar: { en: "Start something similar", ar: "ابدأ مشروعاً مشابهاً" },
  },
} satisfies Record<string, Entry | Record<string, Entry>>;

export function pick(lang: Lang, entry: Entry): string {
  return entry[lang];
}
