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
      <section
        className="js-animate-fadein js-hero-block flex items-end min-h-[calc(100svh-5rem)] py-[5.125rem] md:min-h-screen md:h-full md:pt-[6.5rem] md:pb-[8.5rem] lg:pb-[8.5rem] 2xl:pb-[14.5rem]">
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
            Vi är webbyrån som hjälper dig växa - med smarta webblösningar och marknadsföring.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-8 pt-[1.625rem] lg:block lg:pt-[2.125rem]">
            <a
              href="/case"
              className="lg:min-w-[10rem] inline-flex items-center font-[400] md:text-[1.375rem] rounded-[1.25rem] md:text-xl text-malibu js-hover-circle-animation hover-child-underline-animation"
            >
              <span className="relative inline-block child after:!bg-malibu">
                Våra referenser
              </span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>
            <a
              href="/services"
              className="lg:min-w-[10rem] inline-flex justify-center items-center px-3 mx-0.5 sm:mx-2 font-[400] md:text-[1.375rem] rounded-[1.25rem] sm:px-6 md:px-2 md:text-xl text-white js-hover-circle-animation hover-child-underline-animation"
            >
              <span className="relative inline-block child after:!bg-white">
                Våra tjänster
              </span>
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
            style={{ background: "linear-gradient(to top, black, transparent)" }}
            aria-hidden="true"
          ></div>
        </div>
      </section>

      {/* About  */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl wider:max-w-[90rem] px-5 xl:px-8 mx-auto flex flex-wrap gap-10 justify-between">
          <div className="flex flex-col gap-y-6 w-full max-w-[33.5rem] md:gap-y-11">
            <h2
              className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Webbyrån med heltäckande service
            </h2>

            <div
              className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
              Pixel Webdesign Webbyrå erbjuder allt från nyskapande webbdesign och
              e-handelslösningar till effektiv marknadsföring och
              sökmotoroptimering - vi har verktygen och expertisen för att
              skapa, förbättra och optimera din digitala närvaro. Hos oss får
              du allt under ett och samma tak. Välkommen till Pixel Webdesign Webbyrå!
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
              <a href="contact.php" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Kontakta oss </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
              <a href="services.php" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Visa alla tjänster </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <ul
            className="flex flex-col gap-y-10 w-full max-w-[26.75rem] lg:gap-y-[3.25rem] mt-10 md:mt-0 lg:flex-1">
            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="webImages/branding-design-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 className="text-xl md:text-2xl font-bold">
                  Branding, UX & UI-design
                </h3>
                <p className="md:text-lg">
                  Vi hjälper er att kommunicera ert varumärke med stil
                </p>
              </div>
            </li>
            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="webImages/webbutveckling-ehandel-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 className="text-xl md:text-2xl font-bold">
                  Backend- och frontendutveckling
                </h3>
                <p className="md:text-lg">
                  Vi bygger tekniskt SEO-optimerade hemsidor och stabila
                  e-handelslösningar
                </p>
              </div>
            </li>
            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="56" height="56" src="webImages/analys-seo-growth-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 className="text-xl md:text-2xl font-bold">
                  Analys, SEO och Growth
                </h3>
                <p className="md:text-lg">
                  Vi tar era affärer till nya höjder med hjälp av SEO, analys
                  och ökad konvertering
                </p>
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
        <div
          className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure
              className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img width="900" height="530"
                src="webImages/hemsidor-wordpress-900x530.png"
                className="w-full h-auto rounded-xl" alt="" />
            </figure>
          </div>
          <div
            className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2
                className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Allt inom Webbutveckling
              </h2>

              <div
                className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Från kodens första rad till den skinande slutprodukten – vi
                omfamnar varje steg av er webbutveckling. Fördjupa er närvaro
                med en sajt som är skräddarsydd, snabb och säker. Utforska den
                digitala världens fulla potential med oss vid er sida.
              </div>
              <a href="#" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Läs om Webbutveckling </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce in WooCommerce */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div
          className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure
              className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img width="900" height="546"
                src="webImages/e-handel-woocomerce-900x546.png"
                className="w-full h-auto rounded-xl" alt="" />
            </figure>
          </div>
          <div
            className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2
                className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                E-handel i WooCommerce
              </h2>

              <div
                className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                För e-handelslösningar som inte kräver helt skräddarsydd
                backend är WooCommerce det självklara valet. Det är en
                kraftfull e-handelsplattform som integreras sömlöst med
                Wordpress och ger dig möjlighet att sälja produkter och
                tjänster online med lätthet.
              </div>
              <a href="#" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Skräddarsydd e-handel </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Applications in Laravel */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div
          className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure
              className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img width="900" height="553"
                src="webImages/laravel-applikationer-900x553.png"
                className="w-full h-auto rounded-xl" alt="" />
            </figure>
          </div>
          <div
            className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2
                className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Applikationer i Laravel
              </h2>

              <div
                className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Laravel är ett PHP-ramverk som erbjuder en robust och säker
                grund för att bygga komplexa webbapplikationer. Med dess
                moderna och eleganta kodstruktur kan vi skapa skräddarsydda
                lösningar som uppfyller de mest krävande behoven. Oavsett om
                du behöver ett bokningssystem, en kundportal eller en intern
                företagsapplikation, kan vi leverera.
              </div>
              <a href="#" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Läs om webbutveckling </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO agency */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div
          className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure
              className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img width="900" height="473"
                src="webImages/seo-byra-stockholm-1200x630.jpeg"
                className="w-full h-auto rounded-xl" alt="SEO Byrå I stockholm" />
            </figure>
          </div>
          <div
            className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2
                className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                SEO-byrå
              </h2>

              <div
                className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Vår holistiska syn till SEO innebär att vi kombinerar teknisk
                expertis med kreativ design och innehållsstrategi. Från
                sökordsanalys och on-page optimering till hastighetsoptimering
                och mobilanpassning; vi ser till att din webbplats är
                optimerad för både användare och sökmotorer. Genom analys styr
                vi dina SEO-insatser för att säkerställa maximal effekt och
                ROI.
              </div>
              <a href="#" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Läs mer om sökmotoroptimering </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Data-driven web agency */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div
          className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure
              className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img width="900" height="473"
                src="webImages/digital-driven-byra-1200x630.jpeg"
                className="w-full h-auto rounded-xl" alt="Digital driven Byrå" />
            </figure>
          </div>
          <div
            className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2
                className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Datadriven webbyrå
              </h2>

              <div
                className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Vi är datadriven webbyrå som med hjälp av data skapar
                skräddarsydda webblösningar, vilket optimerar
                användarupplevelsen och förbättrar konverteringsgraden.
                Välkommen till Pixel Webdesign Webbyrå.
              </div>
              <a href="#" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Läs om analys </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leader in WordPress */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div
          className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure
              className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img width="900" height="473"
                src="webImages/data-driven-webbyra-900x473.jpg"
                className="w-full h-auto rounded-xl" alt="Webbyrå WordPress" />
            </figure>
          </div>
          <div
            className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2
                className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Ledande inom WordPress
              </h2>

              <div
                className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Pixel Webdesign Webbyrå är en av Sveriges ledande WordPress-byråer.
                Under årens lopp har vi byggt allt från företagshemsidor till
                skräddarsydda prenumerationsystem. Hos oss finner ni
                professionella WordPressutvecklare, kreativa formgivare och
                SEO-kompetens under ett och samma tak.
              </div>
              <a href="#" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Läs mer om Webbyrå WordPress </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
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