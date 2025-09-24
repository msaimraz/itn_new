export const CATEGORIES = [
    { id: "cases_all", label: "Alla" },
    { id: "cases_api", label: "API" },
    { id: "cases_backend", label: "Backend" },
    { id: "cases_branding", label: "Branding" },
    { id: "cases_e-handel", label: "E-Handel" },
    { id: "cases_frontend", label: "Frontend" },
    { id: "cases_laravel", label: "Laravel" },
    { id: "cases_payload", label: "Payload" },
];

export const CASES = [
    {
        slug: "svenska-budo-kampsportsforbundet",
        title: "Svenska Budo & Kampsportsförbundet",
        client: "Svenska Budo & Kampsportsförbundet",
        year: "2024",
        link: "https://budokampsport.se",
        tags: ["API", "Backend", "E-Handel", "Frontend", "UX & UI-Design"],
        categories: ["api", "backend", "e-handel", "frontend", "ux-ui-design"],
        topImg: "/webImages/cases/budo-hero-1-868x640.jpg",
        innerImg: "/webImages/cases/budo-webb-1-680x480.jpg",
        hero: "/webImages/casedetail/budo-hero-1.jpg",
        sidebar: {
            vad: [
                "UX & UI-Design",
                "Frontend",
                "Backend",
                "API",
                "Webbshop",
                "Digitala tävlingskort",
                "Freja ID",
            ],
        },
        sections: [
            {
                type: "intro",
                heading: "Ny hemsida åt Svenska Budo & Kampsportsförbundet",
                text: `
          Svenska Budo & Kampsportsförbundet är en paraplyorganisation som samlar olika kampsporter i Sverige. 
          De kontaktade oss för att digitalisera tävlingskort och hantering av sanktionsansökningar. 
          Vi byggde en ny webb med betalning, nya funktioner och uppdaterad design.
        `,
            },
            {
                type: "imageText",
                image: "/webImages/casedetail/budo-detail-6-637x576.jpg",
                heading: "Identifiering med FrejaID",
                text: `
          FrejaID används för identifiering och inloggning på hemsidan. 
          Det används för att ansöka om tävlingskort, administrera och öka säkerheten vid inloggning.
        `,
            },
            {
                type: "imageTextReverse",
                image: "/webImages/casedetail/budo-detail-5-637x599.jpg",
                heading: "Integration mot Swedbank Pay",
                text: `
          Vi integrerade Swedbank Pay på både webbshopen och tävlingskorten 
          för smidiga och säkra betalningar.
        `,
            },
            {
                type: "imageText",
                image: "/webImages/casedetail/budo-detail-7-637x446.png",
                heading: "Digitalisering av tävlingskort",
                text: `
          Med att gå från fysiska till digitala tävlingskort effektiviseras processen. 
          Kortet ansöks via Freja eID och administreras enkelt från Mitt konto.
        `,
            },
        ],
    },
    {
        slug: "edins-kranar",
        title: "Edins Kranar",
        tags: ["Frontend", "SEO", "UX & UI-Design"],
        categories: ["frontend", "seo", "ux-ui-design"],
        topImg: "/webImages/cases/case-edins-detail-3-868x716.jpg",
        innerImg: "/webImages/cases/case-edins-webb-1-680x480.jpg",
        hero: "/webImages/casedetail/budo-hero-1.jpg",
        sidebar: {
            vad: [
                "UX & UI-Design",
                "Frontend",
                "Backend",
                "API",
                "Webbshop",
                "Digitala tävlingskort",
                "Freja ID",
            ],
        },
        sections: [
            {
                type: "intro",
                heading: "Ny hemsida åt Svenska Budo & Kampsportsförbundet",
                text: `
          Svenska Budo & Kampsportsförbundet är en paraplyorganisation som samlar olika kampsporter i Sverige. 
          De kontaktade oss för att digitalisera tävlingskort och hantering av sanktionsansökningar. 
          Vi byggde en ny webb med betalning, nya funktioner och uppdaterad design.
        `,
            },
            {
                type: "imageText",
                image: "/webImages/casedetail/budo-detail-6-637x576.jpg",
                heading: "Identifiering med FrejaID",
                text: `
          FrejaID används för identifiering och inloggning på hemsidan. 
          Det används för att ansöka om tävlingskort, administrera och öka säkerheten vid inloggning.
        `,
            },
            {
                type: "imageTextReverse",
                image: "/webImages/casedetail/budo-detail-5-637x599.jpg",
                heading: "Integration mot Swedbank Pay",
                text: `
          Vi integrerade Swedbank Pay på både webbshopen och tävlingskorten 
          för smidiga och säkra betalningar.
        `,
            },
            {
                type: "imageText",
                image: "/webImages/casedetail/budo-detail-7-637x446.png",
                heading: "Digitalisering av tävlingskort",
                text: `
          Med att gå från fysiska till digitala tävlingskort effektiviseras processen. 
          Kortet ansöks via Freja eID och administreras enkelt från Mitt konto.
        `,
            },
        ],
    },
    {
        slug: "rfsu",
        title: "RFSU",
        tags: ["Backend", "Frontend", "UX & UI-Design"],
        categories: ["backend", "frontend", "ux-ui-design"],
        topImg: "/webImages/cases/case-rfsu-rop-image-868x817.jpg",
        innerImg: "/webImages/cases/case-rfsu-web-680x480.jpg",
    },
    {
        slug: "abba-the-museum",
        title: "ABBA The Museum",
        tags: ["Frontend", "UX & UI-Design"],
        categories: ["frontend", "ux-ui-design"],
        topImg: "/webImages/cases/case-abba-top-image-1-868x798.jpeg",
        innerImg: "/webImages/cases/case-abba-web-680x480.jpeg",
    },
    {
        slug: "lillebil-lillebud",
        title: "Lillebil & Lillebud",
        tags: ["Frontend", "UX & UI-Design"],
        categories: ["frontend", "ux-ui-design"],
        topImg: "/webImages/cases/lillebil-top--868x888.jpeg",
        innerImg: "/webImages/cases/case-lillebil-680x480.jpg",
    },
    {
        slug: "djuronaset",
        title: "Djurönäset",
        tags: ["Frontend", "SEO", "UX & UI-Design"],
        categories: ["frontend", "seo", "ux-ui-design"],
        topImg: "/webImages/cases/djuronaset-hero-868x888.jpg",
        innerImg: "/webImages/cases/djuronaset-webb-1-680x480.jpg",
    },
    {
        slug: "stockholmsmassan",
        title: "Stockholmsmässan",
        tags: ["UX & UI-Design"],
        categories: ["ux-ui-design"],
        topImg: "/webImages/cases/stockholmsmassan-hero-868x642.jpg",
        innerImg: "/webImages/cases/case-sthlmsmassan-web-3-680x480.jpg",
    },
    {
        slug: "kraftkoket",
        title: "Kraftköket",
        tags: ["Frontend", "UX & UI-Design"],
        categories: ["frontend", "ux-ui-design"],
        topImg: "/webImages/cases/case-kraftkoket-herobild-868x888.jpg",
        innerImg: "/webImages/cases/case-kraftkoket-680x480.jpg",
    },
];
