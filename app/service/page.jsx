import Link from "next/link";
export default function Service() {
  return (
    <>
      <main className="grow">
        <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
          <div className="block md:text-lg mb-6">
            <span>
              <span>
                <Link href=" https://pigment.se/index.html">Hem</Link>
              </span>
              /
              <span className="breadcrumb_last" aria-current="page">
                <strong>Tjänster</strong>
              </span>
            </span>
          </div>
          <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
            Våra tjänster
          </h1>
          <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12">
            <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
              <div >
                <div className="heading-color">
                  <h2
                    className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold"
                    // style="color: #829dff"
                  >
                    Skapa tillväxt med skräddarsydda lösningar
                  </h2>

                  <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                    <p>
                      Vi har musklerna för att erbjuda er ett heltäckande
                      tjänsteutbud för att lyfta er digitala närvaro till nya
                      höjder. Vi förstår värdet av varje element och varje steg
                      i processen, och vi är här för att guida er genom en resa
                      av framgång och tillväxt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
              <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
                <img
                  width="750"
                  height="810"
                  src=" https://pigment.se/wp-content/uploads/2023/10/webbyra-tjanster-750x810.jpg"
                  className="w-full h-full lg:h-auto object-cover"
                  alt="webbyra-tjanster"
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 750px) 100vw, 750px"
                />
              </picture>
              <div
                className="image-shadow-top-hero"
                // style="background-color: #829dff"
              ></div>
              <div
                className="image-shadow-bottom-hero"
                // style="background-color: #829dff"
              ></div>
            </div>
          </div>
        </section>
        <section className="w-full py-14 lg:py-20 xl:py-32">
          <div className="max-w-7xl px-5 xl:px-8 mx-auto">
            <ul className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-3">
              <li className="mb-6 md:mb-20">
                <img
                  width="32"
                  height="32"
                  src=" https://pigment.se/wp-content/uploads/2023/09/analys.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="analys/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Analys
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Genom insiktsfull analys identifierar vi möjligheter och
                  optimeringsvägar som vi tillsammans kan utforska för att
                  stärka din närvaro och öka din digitala affär.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Målgruppsanalys
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Konkurrensanalys
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Teknisk analys
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="analys/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om Analys </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="35"
                  height="35"
                  src=" https://pigment.se/wp-content/uploads/2023/09/branding.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="branding/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Branding
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Bygg starka varumärken med vår expertis inom branding. Vi
                  omvandlar idéer till starka varumärken som berör och
                  inspirerar din målgrupp digitalt.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Strategi
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Identitet
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Positionering
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="branding/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om Branding </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="35"
                  height="35"
                  src=" https://pigment.se/wp-content/uploads/2023/09/uiuxdesign.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="ux-ui-byra/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    UX & UI Design
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Skapa en unik användarupplevelse med våra UX & UI-experter. Vi
                  omvandlar komplexitet till enkelhet och ger liv åt din
                  digitala vision.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Wireframing och prototyper
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Visuell identitet
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Typografi och färgpalett
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="ux-ui-byra/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om UX &amp; UI Design </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="35"
                  height="35"
                  src=" https://pigment.se/wp-content/uploads/2023/09/webbutveckling.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="webbutveckling/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Webbutveckling
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Med den senaste tekniken och expertis i ryggen skapar vi en
                  robust plattform som levererar en sömlös upplevelse.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Frontendutveckling
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Backendutveckling
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    API-Integrationer
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="webbutveckling/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om Webbutveckling </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="34"
                  height="34"
                  src=" https://pigment.se/wp-content/uploads/2023/09/e-handel.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="webbyra-e-handel/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    E-handel
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Öppna er e-handel med oss där en sömlös, skräddarsydd och
                  konverteringsdriven e-handelsbutik väntar på er.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    WooCommerce eller Laravell
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Systemintegrationer
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Konverteringsdriven design
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="webbyra-e-handel/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om e-handel </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="32"
                  height="32"
                  src=" https://pigment.se/wp-content/uploads/2023/09/content.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="content/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Content
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Vi producerar målinriktat innehåll som berör din målgrupp och
                  förmedlar din vision på ett övertygande sätt. Allt från
                  drönarfilmer till SEO-optimerade texter.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Innehållsstrategi
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    SEO-Optimering
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Sociala Medier
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="content/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om Content </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="35"
                  height="35"
                  src=" https://pigment.se/wp-content/uploads/2023/09/seo.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="seo-byra-stockholm/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Sökmotoroptimering
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Med vår sökmotoroptimering hjälper vi din webbplats att
                  klättra i sökresultaten och nå de potentiella kunder som söker
                  efter det du erbjuder.
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    SEO-audit
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Analys av sökord, konkurrenter etc
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    On-page optimering
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="seo-byra-stockholm/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om SEO </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="35"
                  height="36"
                  src=" https://pigment.se/wp-content/uploads/2023/09/growth-1.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="growth/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Growth
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Genom noggrann analys av data arbetar vi för att digitalt öka
                  din trafik, konverteringar och affärstillväxt.
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
                    Affärsanalys och planering
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Konverteringsoptimering
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Betald marknadsföring (PPC)
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="growth/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om Growth </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
              <li className="mb-6 md:mb-20">
                <img
                  width="32"
                  height="32"
                  src=" https://pigment.se/wp-content/uploads/2023/09/forvaltning.svg"
                  className="w-6 sm:w-[2.25rem] mb-6"
                  alt="img"
                  loading="lazy"
                  decoding="async"
                />
                <Link
                  className="js-hover-circle-animation"
                  target="_self"
                  href="forvaltning/index.html"
                >
                  <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                    Förvaltning
                  </h3>
                </Link>

                <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  Vi lämnar dig inte när din webbplats är live. Vår dedikerade
                  förvaltningsgrupp ser till att allt fortsätter att fungera
                  smidigt, varje dag, varje vecka!
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Teknisk underhåll
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Säkerhet och skydd
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
                      <use href=" /webImages/icons.svg#ticker"></use>
                    </svg>
                    Snabb support
                  </li>
                </ul>
                <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                  <Link
                    href="forvaltning/index.html"
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> Läs mer om Förvaltning </span>
                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                      <svg
                        className="inline-block"
                        preserveAspectRatio="none"
                        width="22"
                        height="15"
                        aria-hidden="true"
                      >
                        <use href=" /webImages/icons.svg#arrow-right"></use>
                      </svg>
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section >
          <div className="relative mx-6 lg:mx-0">
            <div className="relative flex items-center lg:max-w-[79.75rem] mx-auto">
              <img
                width="2000"
                height="1137"
                src=" https://pigment.se/wp-content/uploads/2023/09/pigmenthenrik.jpg"
                className="w-full h-auto object-contain rounded-[1.25rem]"
                alt="img"
                decoding="async"
                sizes="(max-width: 2000px) 100vw, 2000px"
              />
              <div className="absolute inset-0 rounded-[1.25rem]"></div>
            </div>
          </div>
        </section>
        <section className="py-14 lg:py-20 xl:py-32">
          <div className="max-w-7xl px-5 xl:px-8 mx-auto">
            <div className="mx-auto max-w-[780px] prose-editor">
              <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                När magkänslan inte räcker
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
                <p>
                  När det gäller din webbnärvaro krävs det mer än bara en snygg
                  design. Hos Pigment
                  <Link href=" https://pigment.se/index.html">Webbyrå</Link>
                  förstår vi vikten av en holistisk strategi. Vi kombinerar
                  djupgående
                  <Link href="seo-byra-stockholm/index.html">SEO</Link>-analys
                  och datadrivna processer med expertis inom UX/UI,
                  <Link href="webbutveckling/index.html">webbutveckling</Link>,
                  och Growth för att skapa webbplatser som inte bara ser bra ut,
                  utan även presterar på topp och genererar mätbara resultat.
                </p>
                <p>
                  Att välja Pigment innebär att välja en partner som arbetar
                  sida vid sida med dig för att realisera din digitala vision.
                  Tillsammans utformar vi en webbplats som reflekterar ditt
                  varumärke samtidigt som den attraherar, engagerar och
                  omvandlar dina besökare till kunder.
                </p>
                <p>
                  Vänta inte – låt oss sätta din webbplats på kartan och på
                  toppen av sökresultaten. Ta steget mot mätbar digital framgång
                  med Pigment Webbyrå redan idag.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 lg:py-20 xl:py-32">
          <div className="max-w-7xl px-5 xl:px-8 mx-auto flex text-center flex-col gap-y-10 md:gap-y-20">
            <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white text-center">
              Vi har hjälpt fler än 250 kunder.
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
        <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center py-14 lg:py-20 xl:py-32">
          <div className="w-[12rem] md:w-[15rem] lg:w-[18rem] mx-auto mb-10">
            <img
              width="296"
              height="296"
              src=" https://pigment.se/wp-content/uploads/2023/10/webbyra-stockholm-personal-sergio-637x637.jpeg"
              className="w-full h-auto rounded-full"
              alt="webbyra-stockholm-personal-sergio"
              decoding="async"
              sizes="(max-width: 296px) 100vw, 296px"
            />
          </div>
          <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
            Behöver ni en fantastisk fullservicebyrå?
          </h2>

          <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
            <p>
              <Link
                href="https://cal.com/sergio-tenconi"
                target="_blank"
                rel="noopener"
              >
                Boka in ett första möte med Sergio här!
              </Link>
              <br />
              Ring honom på <Link href="tel:070-953 53 99">070-953 53 99</Link>
              eller maila
              <Link href="mailto:sergio@pigment.se">sergio@pigment.se</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
