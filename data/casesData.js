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
    slug: "brasaochbasilika",
    title: "Brasa & Basilika",

    tags: ["API", "Backend", "E-Handel", "Frontend", "UX & UI-Design"],
    categories: ["api", "backend", "e-handel", "frontend", "ux-ui-design"],
    topImg: "/webImages/cases-new/brasaochbasilika.png",
    innerImg: "/webImages/cases/budo-webb-1-680x480.jpg",
    hero: "/webImages/cases-new/brasaochbasilika-banner.png",
    sidebarr: {
      vad: [
        "UX Design",
        "Web Development",
        "Product presentation",
        "SEO"
      ],
    },

    Sidebar: [
      {
        title: "Customer",
        text: "Brasa & Basilika",
      },
      {
        title: "When",
        year: "2025",
      },
      {
        title: "Services",
      },
      {
        title: "Visit",
        link: "https://brasaochbasilika.se/",
      },
    ],
    sections: [
      {
        type: "intro",
        heading: "Brasa & Basilika opens the doors to its new unique website",
        text: `
          Brasa & Basilika – A restaurant that combines the raw flavors of the fire with the fresh herbs of the Mediterranean. We developed a modern, tasteful design and created a vibrant menu with a focus on grilled ingredients, wood-fired pizza and hand-picked wines. The result was a digital presence that matches the restaurant’s warm atmosphere and culinary experience.
        `,
      },
      {
        type: "imageText",
        image: "/webImages/cases-new/brasaochbasilika-3sec.png",
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
          Swedbank Pay är en betallösning som erbjuder smidiga och säkra betalningsalternativ för e-handel. Vi har integrerat Swedbank Pay på både Svenska Budo & Kampsportsförbundets webbshop samt vid ansökning av tävlingskort.
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

      {
        type: "imageText",
        image: "/webImages/casedetail/budo-detail-9-637x417.png",
        heading: "Streamlining sanction applications and competitions",
        text: `
          Another part of the organization that has been streamlined is sanction applications and competitions. It is now possible to apply for competitions via the website. Via My Account, competitions can be administered and statistics can be collected via competition reports and medical reports that are sent out via email.
        `,
      },

      {
        type: "imageText",
        image: "/webImages/casedetail/budo-detail-6-1-637x591.jpg",
        heading: "Digitization of competition reports and medical reports",
        text: `
          By using digital reports, information can be shared more quickly and securely between the organizer, doctor and the association's administrators. This reduces the risk of losing documents and ensures that any suspensions can be made directly on site. All information is collected in admin and compiled into statistics that are then used to report to, among others, the County Administrative Board.
        `,
      },

      {
        type: "imageText",
        image: "/webImages/casedetail/budo-mobile-2-750x595.png",
        heading: "Mobile in focus",
        text: `
          The website is optimized for a responsive design with mobile first in mind as My Account and the Competition Card are primarily used from mobile mode. Pigment always ensures that the visitor gets an optimal user experience regardless of whether the website is viewed on a computer, tablet or mobile phone.
        `,
      },
    ],

    sectiontwo: {
      img: "/webImages/cases-new/brasaochbasilika-3sec.png",
      heading:
        "Brasa & Basilika - Details",
      text: `
          Brasa & Basilika – A restaurant that combines the raw flavors of the fire with the fresh herbs of the Mediterranean. We developed a modern, tasteful design and created a vibrant menu with a focus on grilled ingredients, wood-fired pizza and hand-picked wines. The result was a digital presence that matches the restaurant’s warm atmosphere and culinary experience.
        `,
    },
  },


];
