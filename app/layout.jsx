// import './globals.css';
import "../styles/main.css";
import "../styles/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";
import SparkCursor from "@/components/SparkCursor";

export const metadata = {
  metadataBase: new URL("https://itnnovator.com"),
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
    // apple: "/apple-touch-icon.png",
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
      <body
        id="js-page-body"
        className="home wp-singular page-template-default page page-id-180 bg-black group pt-[8.3rem]"
      >

        <SparkCursor />

        <div
          id="page-wrapper"
          className="w-full flex flex-col min-h-screen overflow-hidden !filter-none"
        >
          <Header />
          <br />
          <br />

          <main className="grow">{children}</main>

          <Footer />
        </div>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
        <Script src="/lib/main.js" />
      </body>
    </html>
  );
}
