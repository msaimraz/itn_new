import CTA from "@/components/CTA";
import HomeCases from "@/components/HomeCases";
import OurClients from "@/components/OurClients";
import OurOffer from "@/components/OurOffer";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import TypoAnimation from "@/components/TypoAnimation";

export default function Home() {
  return (
    <>
      {/* Video Banner */}
      <section className="js-animate-fadein js-hero-block flex items-end min-h-[calc(100svh-5rem)] py-[5.125rem] md:min-h-screen md:h-full md:pt-[6.5rem] md:pb-[8.5rem] lg:pb-[8.5rem] 2xl:pb-[14.5rem]">
        <div className="js-hero-block--content relative w-full max-w-7xl wider:max-w-[90rem] px-5 xl:px-8 mx-auto">
          <h2 className="w-full leading-none tracking-tight text-[4.375rem] font-[900] mb-4 -ml-[4px] md:mb-6 md:text-[5rem] lg:[font-size:_clamp(16px,calc(12vw),15.5rem)] lg:-ml-[9px]"
            style={{ mixBlendMode: "difference" }}>
            <span
              className="bg-gradient-to-t from-[#FFE99A] to-[#A1BDE7] bg-clip-text text-transparent mix-blend-difference sm:whitespace-nowrap [&_.typed-cursor]:font-normal [&_.typed-cursor.typed-cursor--blink]:text-[0]">
              Våga <br className="block sm:hidden" />
              <TypoAnimation />
            </span>
          </h2>

          <p className="w-full max-w-[57.4375rem] text-white m-0 font-200 text-lg/[1.39] md:text-xl lg:text-[1.4375rem]">
            We build websites, apps, and growth systems that turn clicks into customers.
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-8 pt-[1.625rem] lg:block lg:pt-[2.125rem]">
            <a
              href="/case"
              className="lg:min-w-[10rem] inline-flex items-center font-[400] md:text-[1.375rem] rounded-[1.25rem] md:text-xl text-malibu js-hover-circle-animation hover-child-underline-animation">
              <span className="relative inline-block child after:!bg-malibu">See our work</span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>

            <a
              href="/services"
              className="lg:min-w-[10rem] inline-flex justify-center items-center px-3 mx-0.5 sm:mx-2 font-[400] md:text-[1.375rem] rounded-[1.25rem] sm:px-6 md:px-2 md:text-xl text-white js-hover-circle-animation hover-child-underline-animation">
              <span className="relative inline-block child after:!bg-white">Our services</span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="js-hero-block--bg absolute inset-0 h-full w-full -z-10">
          <video loop autoPlay muted playsInline className="object-cover object-center w-full h-full">
            <source src="webImages/pixel-intro-dark.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div
            className="pointer-events-none overlay absolute inset-0"
            style={{ background: 'linear-gradient(to top, black, transparent)' }}
            aria-hidden="true"></div>
        </div>
      </section>


      {/* About  */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl wider:max-w-[90rem] px-5 xl:px-8 mx-auto flex flex-wrap gap-10 justify-between">
          <div className="flex flex-col gap-y-6 w-full max-w-[33.5rem] md:gap-y-11">
            <h2
              className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Full-service digital partner
            </h2>

            <div
              className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
              ITnnovator delivers everything from modern web design and e-commerce to performance marketing and SEO.
              We plan, build, and optimize your digital presence—end to end, under one roof. Welcome to ITnnovator.
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
              <a href="contact.php" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Contact us </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>

              <a href="services.php" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> View all services </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <ul className="flex flex-col gap-y-10 w-full max-w-[26.75rem] lg:gap-y-[3.25rem] mt-10 md:mt-0 lg:flex-1">
            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="webImages/branding-design-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="Branding & Design icon" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 className="text-xl md:text-2xl font-bold">Branding, UX & UI Design</h3>
                <p className="md:text-lg">We help you express your brand with clear, conversion-focused design.</p>
              </div>
            </li>

            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="webImages/webbutveckling-ehandel-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="Web & E-commerce icon" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 className="text-xl md:text-2xl font-bold">Backend & Frontend Development</h3>
                <p className="md:text-lg">We build fast, SEO-ready websites and stable e-commerce.</p>
              </div>
            </li>

            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="56" height="56" src="webImages/analys-seo-growth-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="Analytics & SEO icon" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 className="text-xl md:text-2xl font-bold">Analytics, SEO & Growth</h3>
                <p className="md:text-lg">We lift results with SEO, analytics, and better conversion.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>


      {/* Cases */}
      <HomeCases />

      {/* Our Clients */}
      <OurClients />

      {/* Testimonial */}
      <Testimonial />

      {/* Everything in Web development */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img
                width="900"
                height="530"
                src="webImages/hemsidor-wordpress-900x530.png"
                className="w-full h-auto rounded-xl"
                alt=""
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Everything in Web Development
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                From the first line of code to a polished launch—we handle every step. Get a custom, fast, and secure site
                that scales. Unlock your digital potential with ITnnovator at your side.
              </div>

              <a
                href="#"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Learn about Web Development </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* E-commerce in WooCommerce */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img
                width="900"
                height="546"
                src="webImages/e-handel-woocomerce-900x546.png"
                className="w-full h-auto rounded-xl"
                alt="WooCommerce e-commerce"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                WooCommerce E-commerce
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                For stores that don’t need a fully custom backend, WooCommerce is a smart, scalable choice. It integrates
                seamlessly with WordPress so you can sell products and services with secure payments, flexible shipping and
                tax rules, and a rich ecosystem of add-ons.
              </div>

              <a
                href="#"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Custom e-commerce </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Applications in Laravel */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img
                width="900"
                height="553"
                src="webImages/laravel-applikationer-900x553.png"
                className="w-full h-auto rounded-xl"
                alt="Custom Laravel applications by ITnnovator"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Laravel Applications
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                ITnnovator builds secure, scalable apps with Laravel—API-first backends, customer portals, booking systems, and internal tools. We use queues, events, and robust auth to keep things fast and safe, and integrate CRMs, payment gateways, and third-party services without friction. From MVP to enterprise, we ship clean code and clear documentation.
              </div>

              <a
                href="#"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Learn about Laravel development </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* SEO agency */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img
                width="900"
                height="473"
                src="webImages/seo-byra-stockholm-1200x630.jpeg"
                className="w-full h-auto rounded-xl"
                alt="SEO strategy and optimization"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                SEO &amp; Growth
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Technical SEO, content, and UX working together. We fix architecture, speed/Core Web Vitals, schema, and internal linking—then build search-driven content. Roadmaps tie every sprint to pipeline and ROI.
              </div>

              <a
                href="#"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Explore SEO </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Data-driven web agency */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img
                width="900"
                height="473"
                src="webImages/digital-driven-byra-1200x630.jpeg"
                className="w-full h-auto rounded-xl"
                alt="Data-driven digital agency"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Data-driven web agency
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                We use analytics to design and optimize every experience—research, tracking plans, experiments, and reporting—so your site converts better and scales with confidence. Welcome to ITnnovator.
              </div>

              <a
                href="#"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Learn about Analysis </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Leader in WordPress */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img
                width="900"
                height="473"
                src="webImages/data-driven-webbyra-900x473.jpg"
                className="w-full h-auto rounded-xl"
                alt="WordPress experts — ITnnovator"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Leaders in WordPress
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                ITnnovator is a WordPress-first studio. We’ve built corporate sites, WooCommerce stores, and membership/subscription platforms. Our engineers, designers, and SEO specialists ship component libraries, custom plugins, and headless builds—with speed, security, and accessibility baked in.
              </div>

              <a
                href="#"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Learn more about WordPress </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Our Offer */}
      <OurOffer />

      {/* CTA */}
      <CTA />

      {/* Our services */}
      <OurServices />

    </>
  );
}