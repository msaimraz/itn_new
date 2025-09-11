import './globals.css';
import '../styles/main.css';
// import "../lib/main.js"; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export const metadata = {
  title: "Innovating the Future of Tech | ITnnovator",
  description: "ITnnovator is a cutting-edge digital agency delivering web design, development, branding, and digital marketing solutions tailored for business growth.",
  keywords: ["ITnnovator", "digital agency", "web development", "branding", "SEO services", "UI/UX", "software development"],
  authors: [{ name: "ITnnovator", url: "https://itnnovator.com" }],
  creator: "ITnnovator",
  publisher: "ITnnovator",
  robots: "index, follow",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ITnnovator | Innovating the Future of Tech",
    description: "Transforming brands with design, development, and marketing expertise.",
    url: "https://itnnovator.com",
    siteName: "ITnnovator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITnnovator Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITnnovator | Innovating the Future of Tech",
    description: "A top-tier agency delivering innovative digital solutions.",
    creator: "@itnnovator",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="js-page-body" className="home wp-singular page-template-default page page-id-180 bg-black group pt-[8.3rem]">
        <svg id="heart-svg" className="fixed z-[80] pointer-events-none transform translate-x-[-45%] translate-y-[-40%]"
          viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
          <g id="Group" fill="none" fillRule="evenodd" transform="translate(467 392)">
            <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5"></circle>
            <g id="grp7" opacity="0" transform="translate(7 6)">
              <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2"></circle>
              <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2"></circle>
            </g>
            <g id="grp6" opacity="0" transform="translate(0 28)">
              <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2"></circle>
              <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2"></circle>
            </g>
            <g id="grp3" opacity="0" transform="translate(52 28)">
              <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2"></circle>
              <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2"></circle>
            </g>
            <g id="grp2" opacity="0" transform="translate(44 6)">
              <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2"></circle>
              <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2"></circle>
            </g>
            <g id="grp5" opacity="0" transform="translate(14 50)">
              <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2"></circle>
              <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2"></circle>
            </g>
            <g id="grp4" opacity="0" transform="translate(35 50)">
              <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2"></circle>
              <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2"></circle>
            </g>
            <g id="grp1" opacity="0" transform="translate(24)">
              <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2"></circle>
              <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2"></circle>
            </g>
          </g>
        </svg>

        <div id="js-cursor" className="cursor"></div>

        <div id="js-cursor-follower" className="cursor-follower"></div>

        <div id="page-wrapper" className="w-full flex flex-col min-h-screen overflow-hidden !filter-none">
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </div>
        <Script
          src="/lib/main.js" strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
