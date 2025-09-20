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
          Our services
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12">
          {/* Text column */}
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div className="heading-color">
                <h2 className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold">
                  Drive growth with tailor-made solutions
                </h2>

                <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  <p>
                    At <strong>ITnnovator</strong>, we deliver an end-to-end
                    toolkit to elevate your digital presence—from brand &amp;
                    UX to development, e-commerce, SEO, and growth. We connect
                    strategy to execution so every sprint moves the metrics
                    that matter.
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
                alt="ITnnovator — services overview"
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
                src="/webImages/services/analysis.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Analytics icon"
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

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                We uncover growth opportunities with audits, funnels, and
                product analytics—so effort targets what moves the metrics.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    preserveAspectRatio="none"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Audience & user research
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    preserveAspectRatio="none"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Competitor benchmarking
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    preserveAspectRatio="none"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical/site audit
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/analytics"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about Analytics </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      preserveAspectRatio="none"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                alt="Branding icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/branding"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Branding
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                We craft a clear brand story, visual identity, and guidelines
                that travel across web, product, and marketing.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Strategy
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Identity system
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Positioning & messaging
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/branding"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about Branding </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                alt="UX UI icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/ux-ui"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  UX & UI Design
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                We turn complexity into clarity with flows, wireframes, and
                polished interfaces that convert.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Wireframes & prototypes
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Visual design system
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Motion & micro-interactions
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/ux-ui"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about UX &amp; UI Design </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                src="/webImages/services/webdev.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Web development icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/development"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Web Development
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Modern, secure builds with React/Next.js, Laravel, and
                headless CMS—optimized for speed and SEO.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Front-end engineering
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Back-end & APIs
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Integrations
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/development"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about Development </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                alt="E-commerce icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/ecommerce"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  E-commerce
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                High-converting stores via WooCommerce or custom Laravel with
                smooth checkout and ops integrations.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  WooCommerce or Laravel
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  System integrations
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  CRO-driven design
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/ecommerce"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about E-commerce </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                alt="Content icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/content"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Content
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Performance content—from landing copy to docs—SEO-ready and
                on-brand across channels.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Content strategy
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  SEO content
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Social & video
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/content"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about Content </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                alt="SEO icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/seo"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Search Engine Optimization
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Technical, on-page, and authority growth guided by analytics
                and Core Web Vitals.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  SEO audit
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Keyword & competitor research
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  On-page optimization
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/seo"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about SEO </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                src="/webImages/services/growth.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Growth icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/growth"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Growth
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Experimentation, analytics, and paid media to grow traffic,
                conversion, and LTV.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Analytics & planning
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Conversion optimization
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Paid acquisition (PPC)
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/growth"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about Growth </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
                src="/webImages/services/maintenance.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Care & Support icon"
                loading="lazy"
                decoding="async"
              />
              <Link
                className="js-hover-circle-animation"
                target="_self"
                href="/services/care-support"
              >
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Care & Support
                </h3>
              </Link>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Proactive monitoring, updates, and support so your stack stays
                fast, secure, and reliable.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical maintenance
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Security & backups
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg
                    className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                    width="19"
                    height="19"
                    aria-hidden="true"
                  >
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Fast support
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <Link
                  href="/services/care-support"
                  target="_self"
                  className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                >
                  <span> Read more about Care & Support </span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg
                      className="inline-block"
                      width="22"
                      height="15"
                      aria-hidden="true"
                    >
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
      <section aria-label="Porträtt av Henrik på Pigment">
        <div className="relative mx-6 lg:mx-0">
          <div className="relative flex items-center lg:max-w-[79.75rem] mx-auto rounded-[1.25rem] overflow-hidden">
            <img
              src="https://pigment.se/wp-content/uploads/2023/09/pigmenthenrik.jpg"
              width={2000}
              height={1137}
              alt="Henrik på Pigment – porträtt"
              className="w-full h-full object-cover aspect-[2000/1137]"
              loading="eager" // if above the fold; switch to "lazy" if not
              decoding="async"
              fetchpriority="high" // helps LCP when hero
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
              When intuition isn’t enough
            </h2>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
              <p>
                Great websites need more than looks. At itnnovator we pair
                AI-driven insight with <Link href="/seo">SEO</Link>, UX/UI,
                and <Link href="/development">web development</Link> to build
                experiences that load fast, convert better, and scale with
                your business.
              </p>
              <p>
                Choosing itnnovator means a partner, not just a vendor. We
                co-create the roadmap, test and iterate, and keep decisions
                anchored in data so visitors turn into customers.
              </p>
              <p>
                Don’t guess—get results. Let’s put your brand on the map and
                at the top of search.
                <br />
                <Link href="/contact">Start a project →</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto flex text-center flex-col gap-y-10 md:gap-y-20">
          <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white text-center">
            Itnnovator has helped over 250 clients.
          </h2>
          <div className="js-logo-ticker flex items-center gap-x-10 md:gap-y-20 opacity-0 md:gap-x-0 md:flex-wrap md:justify-center md:opacity-100">
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="114"
                height="177"
                src=" https://pigment.se/wp-content/uploads/2023/09/wwf.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 114px) 100vw, 114px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="82"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/space-82x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 82px) 100vw, 82px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="164"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/stockholms-stad-164x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 164px) 100vw, 164px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="101"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/sfd-101x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 101px) 100vw, 101px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="103"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/rfsu-103x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 103px) 100vw, 103px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="262"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/nvc-262x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 262px) 100vw, 262px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="322"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/midnattsloppet-322x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 322px) 100vw, 322px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="126"
                height="165"
                src=" https://pigment.se/wp-content/uploads/2023/09/bauer-media.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 126px) 100vw, 126px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="183"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/avicii-183x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 183px) 100vw, 183px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="396"
                height="51"
                src=" https://pigment.se/wp-content/uploads/2023/09/assistancekaren.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 396px) 100vw, 396px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="139"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/afv-139x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 139px) 100vw, 139px"
              />
            </div>
            <div className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
              <img
                width="89"
                height="59"
                src=" https://pigment.se/wp-content/uploads/2023/09/abba-the-museum-89x59.png"
                className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                alt="img"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 89px) 100vw, 89px"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center py-14 lg:py-20 xl:py-32">
        <div className="w-[12rem] md:w-[15rem] lg:w-[18rem] mx-auto mb-10">
          <img
            width="296"
            height="296"
            src=" https://pigment.se/wp-content/uploads/2023/10/webbyra-stockholm-personal-sergio-637x637.jpeg"
            className="w-full h-auto rounded-full"
            alt="Itnnovator — your digital partner"
            decoding="async"
            sizes="(max-width: 296px) 100vw, 296px"
          />
        </div>

        <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
          Looking for a results-driven full-service partner?
        </h2>

        <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
          <p>
            <Link
              href="https://itnnovator.com/contact"
              target="_blank"
              rel="noopener"
            >
              Book your first meeting with the Itnnovator team
            </Link>
            .
            <br />
            Prefer email? Reach us at{" "}
            <Link href="mailto:info@itnnovator.com">info@itnnovator.com</Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
