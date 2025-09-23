import CTA from "@/components/CTA";
import OurClients from "@/components/OurClients";
import Link from "next/link";

export default function Service() {
  return (
    <>
      {/*  */}
      <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <Link href="/">Home</Link>
            </span>
            /
            <span className="breadcrumb_last" aria-current="page">
              <strong>Services</strong>
            </span>
          </span>
        </div>

        {/* Page title */}
        <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
          Digital Services That Drive Growth
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12">
          {/* Text column */}
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div className="heading-color">
                <h2 className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold">
                  Your End-to-End Digital Partner
                </h2>

                <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                  <p>
                    At <strong className="text-white/80">ITnnovator</strong>, we provide comprehensive digital solutions designed to elevate your online presence and drive measurable results. From strategic planning and design to development, e-commerce, SEO, and growth marketing—we connect vision with execution to move the metrics that matter most to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
              <img
                width="750"
                height="810"
                src="/webImages/services-hero-750x810.jpg"
                className="w-full h-full lg:h-auto object-cover"
                alt="ITnnovator Digital Services - Web development, SEO, e-commerce, and growth marketing solutions"
                loading="eager"
                decoding="async"
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </picture>
            <div className="image-shadow-top-hero"></div>
            <div className="image-shadow-bottom-hero"></div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="w-full py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <ul className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            {/* Analytics & Insights */}
            <li className="mb-6 md:mb-20">
              <img
                width="32"
                height="32"
                src="/webImages/services/analys.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator Analytics & Data Insights Services"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/analytics"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Analytics & Insights
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Uncover growth opportunities through comprehensive data analysis, user behavior tracking, and performance metrics that drive strategic decisions.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Audience & User Research
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Competitor Benchmarking
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical SEO Audit
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/analytics" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Analytics Services</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* Branding */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/branding.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator Branding & Identity Design Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/branding">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Brand Identity
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Craft compelling brand stories and visual identities that resonate across all digital touchpoints and marketing channels.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Brand Strategy
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Visual Identity System
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Brand Messaging
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/branding" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>View Branding Services</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* UX & UI Design */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/uiuxdesign.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator UX/UI Design & User Experience Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/ux-ui">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  UX/UI Design
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Transform complex concepts into intuitive, conversion-focused digital experiences with seamless user journeys.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Wireframing & Prototyping
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Visual Design Systems
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Interactive Design
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/ux-ui" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Discover Design Services</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* Web Development */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/webbutveckling.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator Web Development & Custom Application Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/development">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Web Development
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Build modern, secure websites and applications optimized for performance, SEO, and exceptional user experience.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Frontend Development
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Backend & API Development
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  System Integrations
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/development" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Development</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* E-commerce */}
            <li className="mb-6 md:mb-20">
              <img
                width="34"
                height="34"
                src="/webImages/services/ecommerce.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator E-commerce Development & Online Store Solutions"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/ecommerce">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  E-commerce Solutions
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Create high-converting online stores with seamless checkout experiences and integrated business operations.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  WooCommerce Development
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Custom E-commerce Platforms
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Conversion Optimization
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/ecommerce" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>View E-commerce Services</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* Content */}
            <li className="mb-6 md:mb-20">
              <img
                width="32"
                height="32"
                src="/webImages/services/content.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator Content Strategy & Creation Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/content">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Content Strategy
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Develop performance-driven content that ranks well, engages audiences, and maintains brand consistency across all channels.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Content Planning
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  SEO Content Creation
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Multi-channel Content
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/content" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Content Services</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* SEO */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/seo.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator SEO & Search Engine Optimization Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/seo">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  SEO Optimization
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Comprehensive search engine optimization strategies that improve visibility, drive organic traffic, and enhance user experience.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical SEO Audit
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Keyword Strategy
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  On-page Optimization
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/seo" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Learn About SEO</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* Growth */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="36"
                src="/webImages/services/growth-1.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator Growth Marketing & Digital Strategy Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/growth">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Growth Marketing
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Data-driven marketing strategies that accelerate traffic growth, increase conversions, and maximize customer lifetime value.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Performance Analytics
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Conversion Optimization
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Digital Advertising
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/growth" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Growth Strategies</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>

            {/* Care & Support */}
            <li className="mb-6 md:mb-20">
              <img
                width="32"
                height="32"
                src="/webImages/services/forvaltning.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="ITnnovator Website Maintenance & Support Services"
                loading="lazy"
                decoding="async"
              />
              <Link className="js-hover-circle-animation" target="_self" href="/services/care-support">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Maintenance & Support
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Ongoing technical support and proactive maintenance to ensure your digital assets remain secure, fast, and reliable.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical Maintenance
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Security & Backups
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Priority Support
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link href="/services/care-support" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Learn About Support</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/*  */}
      <section aria-label="ITnnovator Team Portrait">
        <div className="relative mx-6 lg:mx-0">
          <div className="relative flex items-center lg:max-w-[79.75rem] mx-auto rounded-[1.25rem] overflow-hidden">
            <img
              src="/webImages/pixelhenrik.jpg"
              width={2000}
              height={1137}
              alt="ITnnovator Digital Solutions Team - Experts in web development, SEO, and digital growth strategies"
              className="w-full h-full object-cover aspect-[2000/1137]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 79.75rem"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto max-w-[780px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Beyond Guesswork: Data-Driven Results
            </h2>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
              <p>
                Exceptional digital presence requires more than just aesthetics. At <strong>ITnnovator</strong> we combine data-driven insights with expert <Link href="/seo">SEO</Link>, strategic UX/UI design, and robust <Link href="/development">web development</Link> to create experiences that deliver speed, conversions, and scalable growth.
              </p>
              <p>
                Partnering with ITnnovator means gaining a collaborative team, not just a service provider. We work alongside you to develop strategic roadmaps, implement continuous testing, and ensure every decision is grounded in measurable data to transform visitors into loyal customers.
              </p>
              <p>
                Move beyond assumptions and achieve tangible results. Let's elevate your brand visibility and dominate search rankings.
                <br />
                <Link href="/contact">Start your project →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <OurClients />

      {/* CTA */}
      <CTA />
    </>
  );
}
