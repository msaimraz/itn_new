export const services = [
    // Main Services
    {
        id: "01",
        slug: "web-development",
        type: "main_service",
        tags: "Web Development, Responsive Websites, Business Website Design, WordPress, Shopify, Custom Development",
        title: "Website Development",
        img: "webImages/Services/service-1.jpg",
        description: "Professional website development services delivering fast, mobile-responsive, and SEO-optimized websites tailored for business growth.",
        details: "ITnnovator provides end-to-end custom web solutions including responsive designs, WordPress and Shopify development, and robust backend systems. We build SEO-friendly, mobile-optimized websites that are secure, scalable, and conversion-focused for corporate sites, e-commerce stores, and startup platforms."
    },
    {
        id: "02",
        slug: "ecommerce-solutions",
        type: "main_service",
        tags: "E-commerce Development, Online Store Setup, Shopify, WooCommerce, Online Shopping",
        title: "E-commerce Solutions",
        img: "webImages/Services/service-8.jpg",
        description: "Custom e-commerce solutions that boost online sales with secure, scalable, and user-friendly platforms.",
        details: "We build high-converting online stores using Shopify, WooCommerce, and custom solutions. Our e-commerce services include product catalog setup, payment gateway integration, inventory management, and mobile-optimized shopping experiences designed for maximum sales performance."
    },
    {
        id: "03",
        slug: "seo-services",
        type: "main_service",
        tags: "SEO Services, Search Engine Optimization, Organic Traffic, Google Rankings, Technical SEO",
        title: "SEO Services",
        img: "webImages/Services/service-5.jpg",
        description: "Boost your Google rankings and drive qualified traffic with our comprehensive SEO strategies.",
        details: "ITnnovator provides complete SEO solutions including technical audits, on-page optimization, content strategy, and link building. Our data-driven approach ensures long-term organic visibility and sustainable traffic growth for your business."
    },
    {
        id: "04",
        slug: "ui-ux-design",
        type: "main_service",
        tags: "UI/UX Design, Product Design, User Experience, Interface Design, Wireframing",
        title: "UI/UX Design",
        img: "webImages/Services/service-4.jpg",
        description: "Human-centered UI/UX design focused on intuitive user interfaces and smooth digital interactions.",
        details: "Our design team crafts engaging experiences through user research, wireframes, prototypes, and usability testing. We create interfaces for websites, mobile apps, and SaaS platforms that prioritize user satisfaction and conversion optimization."
    },
    {
        id: "05",
        slug: "digital-marketing",
        type: "main_service",
        tags: "Digital Marketing, Online Advertising, Lead Generation, PPC, Social Media Marketing",
        title: "Digital Marketing",
        img: "webImages/Services/service-6.jpg",
        description: "Data-driven digital marketing services designed to grow your online presence and maximize ROI.",
        details: "We offer comprehensive digital marketing including PPC campaigns, social media advertising, email marketing, and conversion optimization. Our team uses analytics and testing to ensure maximum return on your marketing investment."
    },
    {
        id: "06",
        slug: "branding-identity",
        type: "main_service",
        tags: "Brand Identity, Logo Design, Corporate Branding, Visual Identity, Brand Strategy",
        title: "Branding & Identity",
        img: "webImages/Services/service-9.jpg",
        description: "Strategic branding services to shape a consistent and memorable brand presence across all platforms.",
        details: "ITnnovator develops complete brand identities including logos, brand guidelines, color systems, and visual assets. Our designs build recognition, trust, and customer loyalty through cohesive brand experiences."
    },
    {
        id: "07",
        slug: "content-strategy",
        type: "main_service",
        tags: "Content Strategy, Content Marketing, SEO Content, Brand Storytelling, Blog Writing",
        title: "Content Strategy",
        img: "webImages/Services/service-5.jpg",
        description: "Performance-driven content strategies that engage audiences and improve search visibility.",
        details: "We develop comprehensive content strategies including SEO-optimized writing, content planning, and multi-channel distribution. Our approach drives engagement, builds authority, and supports your digital marketing goals."
    },
    {
        id: "08",
        slug: "it-consulting",
        type: "main_service",
        tags: "IT Consulting, Tech Strategy, Digital Advisory, Technology Planning, Infrastructure",
        title: "IT Consulting",
        img: "webImages/Services/service-11.jpg",
        description: "Expert IT consulting services focused on digital transformation and technology strategy.",
        details: "ITnnovator provides strategic IT consulting including digital roadmaps, technology stack selection, and infrastructure planning. We help businesses make informed technology decisions that support long-term growth and innovation."
    },

    // Web Development Sub-Services (typeof: "01")
    {
        id: "09",
        slug: "wordpress-development",
        type: "sub_service",
        typeof: "01",
        tags: "WordPress Development, CMS Websites, Custom WordPress, Theme Development",
        title: "WordPress Development",
        img: "webImages/Services/service-1.jpg",
        description: "Custom WordPress development for scalable, manageable, and SEO-optimized websites.",
        details: "We build custom WordPress themes, plugins, and functionality tailored to your business needs. Our WordPress solutions are optimized for performance, security, and easy content management."
    },
    {
        id: "10",
        slug: "shopify-development",
        type: "sub_service",
        typeof: "01",
        tags: "Shopify Development, E-commerce Stores, Online Shopping, Store Setup",
        title: "Shopify Development",
        img: "webImages/Services/service-1.jpg",
        description: "Professional Shopify store development with custom features and optimized shopping experiences.",
        details: "We create custom Shopify stores with tailored designs, payment integrations, and mobile-optimized layouts that drive conversions and sales growth."
    },
    {
        id: "11",
        slug: "custom-web-applications",
        type: "sub_service",
        typeof: "01",
        tags: "Custom Web Applications, Web Apps, Business Applications, SaaS Development",
        title: "Custom Web Applications",
        img: "webImages/Services/service-1.jpg",
        description: "Tailored web applications designed to solve specific business challenges and streamline operations.",
        details: "We develop custom web applications with advanced functionality, user management systems, and integration capabilities to automate processes and enhance productivity."
    },
    {
        id: "12",
        slug: "website-maintenance",
        type: "sub_service",
        typeof: "01",
        tags: "Website Maintenance, Web Support, Security Updates, Performance Optimization",
        title: "Website Maintenance & Support",
        img: "webImages/Services/service-1.jpg",
        description: "Ongoing website support to ensure security, performance, and reliability.",
        details: "Our maintenance services include security updates, performance optimization, backups, and technical support to keep your website running smoothly and securely."
    },

    // E-commerce Sub-Services (typeof: "02")
    {
        id: "13",
        slug: "woocommerce-setup",
        type: "sub_service",
        typeof: "02",
        tags: "WooCommerce Setup, Online Store, E-commerce Development, WordPress E-commerce",
        title: "WooCommerce Development",
        img: "webImages/Services/service-8.jpg",
        description: "Complete WooCommerce solutions for WordPress-based online stores with full e-commerce functionality.",
        details: "We build robust WooCommerce stores with custom product configurations, payment gateways, shipping options, and inventory management systems integrated seamlessly with WordPress."
    },
    {
        id: "14",
        slug: "ecommerce-optimization",
        type: "sub_service",
        typeof: "02",
        tags: "E-commerce Optimization, Conversion Rate, Store Performance, Sales Optimization",
        title: "E-commerce Optimization",
        img: "webImages/Services/service-8.jpg",
        description: "Optimize your online store for better conversion rates and improved customer experience.",
        details: "We analyze and enhance your e-commerce store's performance, user flow, checkout process, and product presentation to maximize conversions and increase average order value."
    },
    {
        id: "15",
        slug: "payment-gateway-integration",
        type: "sub_service",
        typeof: "02",
        tags: "Payment Integration, Gateway Setup, Online Payments, Secure Transactions",
        title: "Payment Gateway Integration",
        img: "webImages/Services/service-8.jpg",
        description: "Secure payment gateway integration for smooth and reliable online transactions.",
        details: "We integrate trusted payment providers like Stripe, PayPal, and local gateways to ensure secure, seamless checkout experiences for your customers across all devices."
    },

    // SEO Sub-Services (typeof: "03")
    {
        id: "16",
        slug: "technical-seo",
        type: "sub_service",
        typeof: "03",
        tags: "Technical SEO, Site Audit, Performance Optimization, Crawlability",
        title: "Technical SEO",
        img: "webImages/Services/service-5.jpg",
        description: "Comprehensive technical SEO audits and optimization for better search engine performance.",
        details: "We analyze and improve website architecture, speed, mobile-friendliness, and indexation to enhance your search visibility and user experience. Our technical SEO ensures search engines can properly crawl and index your content."
    },
    {
        id: "17",
        slug: "local-seo",
        type: "sub_service",
        typeof: "03",
        tags: "Local SEO, Google Business, Local Search, Map Rankings",
        title: "Local SEO",
        img: "webImages/Services/service-5.jpg",
        description: "Optimize for local search results and attract customers in your service areas.",
        details: "Our local SEO services include Google Business optimization, local citations, and location-based content to drive foot traffic and local inquiries. We help you dominate local search results for your target areas."
    },
    {
        id: "18",
        slug: "content-seo",
        type: "sub_service",
        typeof: "03",
        tags: "Content SEO, Keyword Optimization, SEO Writing, Content Strategy",
        title: "Content SEO",
        img: "webImages/Services/service-5.jpg",
        description: "SEO-optimized content creation that ranks well and engages your target audience.",
        details: "We develop content strategies focused on target keywords, user intent, and search visibility. Our SEO content drives organic traffic while providing value to your readers and customers."
    },

    // UI/UX Design Sub-Services (typeof: "04")
    {
        id: "19",
        slug: "wireframing-prototyping",
        type: "sub_service",
        typeof: "04",
        tags: "Wireframing, Prototyping, UX Design, User Flows",
        title: "Wireframing & Prototyping",
        img: "webImages/Services/service-4.jpg",
        description: "Create interactive prototypes and wireframes to visualize user experiences before development.",
        details: "We design detailed wireframes and interactive prototypes that map user journeys, validate concepts, and ensure optimal user experience before moving to development phase."
    },
    {
        id: "20",
        slug: "user-research-testing",
        type: "sub_service",
        typeof: "04",
        tags: "User Research, Usability Testing, User Feedback, UX Research",
        title: "User Research & Testing",
        img: "webImages/Services/service-4.jpg",
        description: "Comprehensive user research and testing to inform design decisions and improve usability.",
        details: "We conduct user interviews, surveys, and usability tests to gather insights that drive design improvements and ensure your product meets user needs and expectations."
    },

    // Digital Marketing Sub-Services (typeof: "05")
    {
        id: "21",
        slug: "ppc-advertising",
        type: "sub_service",
        typeof: "05",
        tags: "PPC Advertising, Google Ads, Paid Search, Campaign Management",
        title: "PPC Advertising",
        img: "webImages/Services/service-6.jpg",
        description: "Strategic PPC campaigns that drive immediate traffic and conversions.",
        details: "We manage Google Ads and social media advertising campaigns with precise targeting, compelling creatives, and continuous optimization for maximum ROI and lead generation."
    },
    {
        id: "22",
        slug: "social-media-marketing",
        type: "sub_service",
        typeof: "05",
        tags: "Social Media Marketing, Content Strategy, Community Management, Social Ads",
        title: "Social Media Marketing",
        img: "webImages/Services/service-6.jpg",
        description: "Comprehensive social media strategies to build engagement and brand awareness.",
        details: "We develop and execute social media strategies including content creation, community management, and performance analytics across major platforms to grow your audience and engagement."
    },
    {
        id: "23",
        slug: "email-marketing",
        type: "sub_service",
        typeof: "05",
        tags: "Email Marketing, Newsletter, Automation, Lead Nurturing",
        title: "Email Marketing",
        img: "webImages/Services/service-6.jpg",
        description: "Targeted email campaigns that nurture leads and drive customer retention.",
        details: "We create automated email sequences, newsletters, and promotional campaigns that engage your audience, drive conversions, and build long-term customer relationships."
    },

    // Branding Sub-Services (typeof: "06")
    {
        id: "24",
        slug: "logo-design",
        type: "sub_service",
        typeof: "06",
        tags: "Logo Design, Brand Identity, Visual Identity, Brand Mark",
        title: "Logo Design",
        img: "webImages/Services/service-9.jpg",
        description: "Memorable logo designs that capture your brand essence and make a lasting impression.",
        details: "We create unique, scalable logos that represent your brand values and resonate with your target audience across all applications and platforms."
    },
    {
        id: "25",
        slug: "brand-guidelines",
        type: "sub_service",
        typeof: "06",
        tags: "Brand Guidelines, Style Guide, Brand Standards, Visual Identity",
        title: "Brand Guidelines",
        img: "webImages/Services/service-9.jpg",
        description: "Comprehensive brand guidelines that ensure consistent brand representation across all touchpoints.",
        details: "We develop detailed brand manuals covering logo usage, color palettes, typography, imagery, and voice guidelines to maintain brand consistency and recognition."
    },

    // Content Strategy Sub-Services (typeof: "07")
    {
        id: "26",
        slug: "content-creation",
        type: "sub_service",
        typeof: "07",
        tags: "Content Creation, Blog Writing, Copywriting, Content Production",
        title: "Content Creation",
        img: "webImages/Services/service-5.jpg",
        description: "High-quality content creation that engages audiences and supports your marketing goals.",
        details: "We produce compelling blog posts, articles, website copy, and marketing content that resonates with your audience and drives engagement and conversions."
    },
    {
        id: "27",
        slug: "content-planning",
        type: "sub_service",
        typeof: "07",
        tags: "Content Planning, Editorial Calendar, Content Strategy, Content Mapping",
        title: "Content Planning",
        img: "webImages/Services/service-5.jpg",
        description: "Strategic content planning that aligns with your business objectives and audience needs.",
        details: "We develop comprehensive content calendars and strategies that ensure consistent, relevant content delivery across all your marketing channels and platforms."
    },

    // IT Consulting Sub-Services (typeof: "08")
    {
        id: "28",
        slug: "technology-audit",
        type: "sub_service",
        typeof: "08",
        tags: "Technology Audit, IT Assessment, Infrastructure Review, System Analysis",
        title: "Technology Audit",
        img: "webImages/Services/service-11.jpg",
        description: "Comprehensive technology audits to assess your current IT infrastructure and identify improvement opportunities.",
        details: "We conduct thorough assessments of your technology stack, infrastructure, and processes to recommend optimizations, cost savings, and performance improvements."
    },
    {
        id: "29",
        slug: "digital-transformation",
        type: "sub_service",
        typeof: "08",
        tags: "Digital Transformation, Business Process, Automation, Technology Upgrade",
        title: "Digital Transformation",
        img: "webImages/Services/service-11.jpg",
        description: "Strategic guidance for digital transformation initiatives that modernize your business operations.",
        details: "We help businesses navigate digital transformation by implementing new technologies, automating processes, and developing digital strategies that drive growth and efficiency."
    }
];