export default function Home() {
  return (
    <>
      {/* Video Banner */}
      <section
        className="js-animate-fadein js-hero-block flex items-end min-h-[calc(100svh-5rem)] py-[5.125rem] md:min-h-screen md:h-full md:pt-[6.5rem] md:pb-[8.5rem] lg:pb-[8.5rem] 2xl:pb-[14.5rem]">
        <div className="js-hero-block--content relative w-full max-w-7xl wider:max-w-[90rem] px-5 xl:px-8 mx-auto">
          <h2
            className="w-full leading-none tracking-tight text-[4.375rem] font-[900] mb-4 -ml-[4px] md:mb-6 md:text-[5rem] lg:[font-size:_clamp(16px,calc(12vw),15.5rem)] lg:-ml-[9px]"
            style={{ mixBlendMode: "difference" }}
          >
            <span className="bg-gradient-to-t from-[#FFE99A] to-[#A1BDE7] bg-clip-text text-transparent mix-blend-difference sm:whitespace-nowrap [&_.typed-cursor]:font-normal [&_.typed-cursor.typed-cursor--blink]:text-[0]"></span>
            <span className="bg-gradient-to-t from-[#FFE99A] to-[#A1BDE7] bg-clip-text text-transparent mix-blend-difference sm:whitespace-nowrap [&_.typed-cursor]:font-normal [&_.typed-cursor.typed-cursor--blink]:text-[0]">
              Våga <br className="block sm:hidden" />
              <span className="js-typo-animation"></span>
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
      <section class="py-14 lg:py-20 xl:py-32">
        <div class="max-w-7xl wider:max-w-[90rem] px-5 xl:px-8 mx-auto flex flex-wrap gap-10 justify-between">
          <div class="flex flex-col gap-y-6 w-full max-w-[33.5rem] md:gap-y-11">
            <h2
              class="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Webbyrån med heltäckande service
            </h2>

            <div
              class="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
              Pixel Webdesign Webbyrå erbjuder allt från nyskapande webbdesign och
              e-handelslösningar till effektiv marknadsföring och
              sökmotoroptimering - vi har verktygen och expertisen för att
              skapa, förbättra och optimera din digitala närvaro. Hos oss får
              du allt under ett och samma tak. Välkommen till Pixel Webdesign Webbyrå!
            </div>
            <div class="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
              <a href="contact.php" target="_self"
                class="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Kontakta oss </span>
                <span
                  class="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg class="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
              <a href="services.php" target="_self"
                class="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Visa alla tjänster </span>
                <span
                  class="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg class="inline-block" preserveAspectRatio="none" width="22" height="15"
                    aria-hidden="true">
                    <use href="webImages/icons.svg#arrow-right">
                    </use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <ul
            class="flex flex-col gap-y-10 w-full max-w-[26.75rem] lg:gap-y-[3.25rem] mt-10 md:mt-0 lg:flex-1">
            <li class="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="webImages/branding-design-icon.svg"
                class="block w-8 sm:w-[3.5rem]" alt="" decoding="async" />
              <div class="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 class="text-xl md:text-2xl font-bold">
                  Branding, UX & UI-design
                </h3>
                <p class="md:text-lg">
                  Vi hjälper er att kommunicera ert varumärke med stil
                </p>
              </div>
            </li>
            <li class="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="webImages/webbutveckling-ehandel-icon.svg"
                class="block w-8 sm:w-[3.5rem]" alt="" decoding="async" />
              <div class="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 class="text-xl md:text-2xl font-bold">
                  Backend- och frontendutveckling
                </h3>
                <p class="md:text-lg">
                  Vi bygger tekniskt SEO-optimerade hemsidor och stabila
                  e-handelslösningar
                </p>
              </div>
            </li>
            <li class="flex items-start gap-x-6 md:gap-x-11">
              <img width="56" height="56" src="webImages/analys-seo-growth-icon.svg"
                class="block w-8 sm:w-[3.5rem]" alt="" decoding="async" />
              <div class="flex flex-col gap-y-2.5 md:pt-2.5">
                <h3 class="text-xl md:text-2xl font-bold">
                  Analys, SEO och Growth
                </h3>
                <p class="md:text-lg">
                  Vi tar era affärer till nya höjder med hjälp av SEO, analys
                  och ökad konvertering
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}