import Link from "next/link";
export default function Servicedetail() {
  return (
    <>
      <main className="grow">
        <section className="w-full relative  max-w-7xl mx-auto mb-12 px-6 lg:px-8">
          <div className="block md:text-lg mb-6">
            <span>
              <span>
                <Link href="../../index.html">Hem</Link>
              </span>
              /
              <span>
                <Link href="../index.html">Tjänster</Link>
              </span>
              /
              <span className="breadcrumb_last" aria-current="page">
                <strong>Analys</strong>
              </span>
            </span>
          </div>
          <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
            Analys
          </h1>
          <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12 ">
            <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
              <div >
                <div >
                  <h2
                    className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold "
                    style={{ color: "#829dff" }}
                  >
                    Datadrivna processer
                  </h2>

                  <div
                    className=" prose max-w-none text-base md:text-xl font-light leading-[1.4]
                                    md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu
                                    prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em]
                                    prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside
                                    prose-strong:text-inherit"
                  >
                    <p>
                      Vi går bortom det uppenbara för att utforska alla hörn av
                      din digitala närvaro. Vi samlar in och analyserar data
                      noggrant för att avslöja vad som fungerar, vad som kan
                      förbättras och var de största möjligheterna ligger.
                    </p>
                  </div>

                  <ul className="relative mt-6 lg:mt-8">
                    <li className="flex mb-3 text-base font-bold md:text-lg">
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
                      Noggrann analys
                    </li>
                    <li className="flex mb-3 text-base font-bold md:text-lg">
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
                      Planering och strategi
                    </li>
                    <li className="flex mb-3 text-base font-bold md:text-lg">
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
                      Genomförande
                    </li>
                    <li className="flex mb-3 text-base font-bold md:text-lg">
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
                      Mätbara framgångar
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
              <img
                width="750"
                height="810"
                src="https://pigment.se/uploads/2023/10/webbyra-analys-750x810.jpg"
                className=" w-full h-full lg:h-auto object-cover"
                alt="webbyra-analys"
                loading="eager"
                decoding="async"
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </picture>
            <div
              className="image-shadow-top-hero"
            //   style="background-color: #829dff;"
            ></div>
            <div
              className="image-shadow-bottom-hero"
            //   style="background-color: #829dff;"
            ></div>
          </div>
        </section>
        <div className="block md:hidden text-center">
          <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.18em] leading-[1.28] font-bold text-white">
            Vår process
          </h2>
        </div>
        <section className="js-scroll-block js-scroll-block-bg">
          <div className="js-scroll-block-pin flex absolute h-screen w-full flex-col justify-center">
            <div className="w-full h-[100%] relative">
              <div className="js-scroll-heading-inside">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.18em] leading-[1.28] font-bold text-white">
                  Vår process
                </h2>
              </div>
              <div className="hidden md:flex fixed top-[50%] right-[2rem] transform translate-x-[-50%] translate-y-[-50%]">
                <svg width="50" height="45" viewBox="0 0 50 130">
                  <rect
                    className="scroll"
                    x="0"
                    y="5"
                    rx="35"
                    ry="35"
                    width="70"
                    height="120"
                    stroke="#ffffff"
                    fill="none"
                    // stroke-width="4"
                  ></rect>
                  <circle
                    className="circle--shape"
                    cx="35"
                    cy="32"
                    r="8"
                    fill="#FFFFFF"
                  ></circle>
                </svg>
              </div>
              <div className="relative h-screen mr-auto md:px-20 flex items-center justify-center md:w-[60%]">
                <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                  <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                    <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                      <picture className="block mx-auto px-6 xl:px-8">
                        <img
                          width="950"
                          height="699"
                          src="https://pigment.se/uploads/2023/10/analys-process-2-950x699.jpg"
                          className="js-scroll-img-no-bg"
                          alt="analys-process-2"
                          loading="lazy"
                          decoding="async"
                          sizes="auto, (max-width: 950px) 100vw, 950px"
                        />
                      </picture>
                      <div
                        className="image-shadow-top"
                        // style={{ background: "#FFFFFF" }}
                      ></div>
                      <div
                        className="image-shadow-bottom"
                        // style={{ background: "#FFFFFF" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                  <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                    <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                      <picture className="block mx-auto px-6 xl:px-8">
                        <img
                          width="950"
                          height="699"
                          src="https://pigment.se/uploads/2023/10/analys-process-1-950x699.jpg"
                          className="js-scroll-img-no-bg"
                          alt="analys-process-1"
                          loading="lazy"
                          decoding="async"
                          sizes="auto, (max-width: 950px) 100vw, 950px"
                        />
                      </picture>
                      <div
                        className="image-shadow-top"
                        // style={{ background: "#FFFFFF" }}
                      ></div>
                      <div
                        className="image-shadow-bottom"
                        // style={{ background: "#FFFFFF" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                  <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                    <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                      <picture className="block mx-auto px-6 xl:px-8">
                        <img
                          width="950"
                          height="699"
                          src="https://pigment.se/uploads/2023/10/analys-process-4-950x699.jpg"
                          className="js-scroll-img-no-bg"
                          alt="analys-process-4"
                          loading="lazy"
                          decoding="async"
                          sizes="auto, (max-width: 950px) 100vw, 950px"
                        />
                      </picture>
                      <div
                        className="image-shadow-top"
                        // style={{ background: "#FFFFFF" }}
                      ></div>
                      <div
                        className="image-shadow-bottom"
                        // style={{ background: "#FFFFFF" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-screen h-screen z-[-2]">
              <span
                className="js-scroll-block-bg-color"
                // style="background: #3e62e2"
              ></span>
              <span
                className="js-scroll-block-bg-color"
                // style="background: #3442c1"
              ></span>
              <span
                className="js-scroll-block-bg-color"
                // style="background: #3442c1"
              ></span>
            </div>
          </div>

          <div className="js-scroll-block-progress-bar-wrapper bg-gray-800 w-md h-[0.1rem] fixed z-50 w-[20rem] bottom-[1.25rem] rounded-full left-1/2 transform -translate-x-1/2 opacity-0">
            <div className="js-scroll-block-progress-bar bg-white w-0 h-[0.1rem] relative z-100"></div>
          </div>
          <div className="js-scroll-block-fixed-top pointer-events-none js-scroll-block-fixed-top-bg"></div>
          <div className="js-scroll-block-fixed-bottom pointer-events-none js-scroll-block-fixed-bottom-bg"></div>

          <div className="relative md:w-[40%] w-full md:ml-auto z-[1]">
            <div className="js-scroll-block-content-wrapper  js-scroll-block-content-wrapper-bg  w-full md:w-[80%] mr-32">
              <div className="js-scroll-block-content ">
                <div className="max-w-md">
                  <div className="md:hidden relative block mx-auto">
                    <div
                      className="image-shadow-top"
                    //   style={{ background: "#FFFFFF" }}
                    ></div>
                    <div
                      className="image-shadow-bottom"
                    //   style={{ background: "#FFFFFF" }}
                    ></div>
                    <img
                      width="950"
                      height="699"
                      src="https://pigment.se/uploads/2023/10/analys-process-2-950x699.jpg"
                      className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                      alt="analys-process-2"
                      loading="lazy"
                      decoding="async"
                      sizes="auto, (max-width: 950px) 100vw, 950px"
                    />
                  </div>
                </div>
                <div
                  className="mt-4 mb-2 md:mb-8 text-base md:text-lg"
                  style={{ color: "#a8e4d7" }}
                >
                  01<span className="opacity-50">/03</span>
                </div>
                <h3
                  className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                  style={{ color: "#a8e4d7" }}
                >
                  Noggrann analys
                </h3>
                <p
                  className="mt-3 md:mt-4 text-base text-100 md:text-xl"
                  style={{ color: "#FFFFFF" }}
                >
                  På Pigment börjar vår Analys-tjänst med en detaljerad och
                  noggrann granskning av er verksamhet, era mål och er nuvarande
                  marknadsposition. Vi tar oss tiden att verkligen förstå era
                  behov och utmaningar, vilket ger oss en solid grund för att
                  skapa en skräddarsydd analysstrategi för er.
                </p>
              </div>

              <div className="js-scroll-block-content ">
                <div className="max-w-md">
                  <div className="md:hidden relative block mx-auto">
                    <div
                      className="image-shadow-top"
                      style={{ background: "#FFFFFF" }}
                    ></div>
                    <div
                      className="image-shadow-bottom"
                      style={{ background: "#FFFFFF" }}
                    ></div>
                    <img
                      width="950"
                      height="699"
                      src="https://pigment.se/uploads/2023/10/analys-process-1-950x699.jpg"
                      className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                      alt="analys-process-1"
                      loading="lazy"
                      decoding="async"
                      sizes="auto, (max-width: 950px) 100vw, 950px"
                    />
                  </div>
                </div>
                <div
                  className="mt-4 mb-2 md:mb-8 text-base md:text-lg"
                  style={{ color: "#a8e4d7" }}
                >
                  02<span className="opacity-50">/03</span>
                </div>
                <h3
                  className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                  style={{ color: "#a8e4d7" }}
                >
                  Planering och genomförande
                </h3>
                <p
                  className="mt-3 md:mt-4 text-base text-100 md:text-xl"
                  style={{ color: "#FFFFFF" }}
                >
                  Med en fullständig förståelse för er verksamhet och dess unika
                  behov, tar vi fram en genomtänkt och effektiv plan för att
                  genomföra analysen. Vårt team av olika experter arbetar nära
                  tillsammans med er för att säkerställa att varje steg i
                  processen genomförs effektivt. Samt att alla insikter och data
                  som samlas in är relevanta och värdefulla för er.
                </p>
              </div>

              <div className="js-scroll-block-content ">
                <div className="max-w-md">
                  <div className="md:hidden relative block mx-auto">
                    <div
                      className="image-shadow-top"
                      style={{ background: "#FFFFFF" }}
                    ></div>
                    <div
                      className="image-shadow-bottom"
                      style={{ background: "#FFFFFF" }}
                    ></div>
                    <img
                      width="950"
                      height="699"
                      src="https://pigment.se/uploads/2023/10/analys-process-4-950x699.jpg"
                      className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                      alt="analys-process-4"
                      loading="lazy"
                      decoding="async"
                      sizes="auto, (max-width: 950px) 100vw, 950px"
                    />
                  </div>
                </div>
                <div
                  className="mt-4 mb-2 md:mb-8 text-base md:text-lg"
                  style={{ color: "#a8e4d7" }}
                >
                  03<span className="opacity-50">/03</span>
                </div>
                <h3
                  className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                  style={{ color: "#a8e4d7" }}
                >
                  Mätbara framgångar
                </h3>
                <p
                  className="mt-3 md:mt-4 text-base text-100 md:text-xl"
                  style={{ color: "#FFFFFF" }}
                >
                  Efter genomförandet presenterar vi de insikter och resultat
                  som vi har samlat in. Vi hjälper er att förstå datan och hur
                  den kan användas för att fatta välgrundade beslut och
                  förbättra er verksamhet. Med dessa mätbara framgångar kan ni
                  se konkreta resultat och skapa en klar väg framåt för er
                  verksamhet.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-14 lg:pt-20 xl:pt-32">
          <div className="max-w-7xl px-5 xl:px-8 mx-auto">
            <div className=" max-w-[900px] prose-editor">
              <h2 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-bold text-white">
                Analys för alla behov
              </h2>

              <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em]  prose-blockquote:text-white">
                <p>
                  Oavsett vilka behov ni har inom marknadsföring, konvertering
                  eller SEO, erbjuder vår analys skräddarsydda insikter och
                  rekommendationer för att ta er digitala närvaro till nästa
                  nivå.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:px-8 py-14 lg:py-20 xl:py-32">
          <div
           style={{ background: "#D24125", color: "#FFFFFF" }}
            className="max-w-7xl mx-auto lg:rounded-[1.25rem] px-6 xl:px-8 pb-12 md:pb-16"
          >
            <div className="max-w-[1031px] mx-auto pt-px">
              <div className="js-animate-up -mt-8 lg:-mt-12 xl:-mt-20 mb-10 lg:mb-12 xl:mb-14">
                <img
                  width="1031"
                  height="586"
                  src="https://pigment.se/wp-content/uploads/2023/10/webbyra-analys-1200x1296.jpg"
                  className="rounded-[1.25rem] shadow-[0_20px_60px_-0_rgba(0,0,0,0.25)]"
                  
                  loading="lazy"
                  decoding="async"
                  sizes="auto, (max-width: 1031px) 100vw, 1031px"
                />
              </div>
              <div>
                <div className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                  <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-inherit">
                    Konverteringsanalys
                  </h2>
                  <div className="md:flex md:flex-wrap md:flex-row-reverse">
                    <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                      <div>
                        Vår konverteringsanalys fokuserar på att optimera er
                        webbplats och digitala närvaro för att öka
                        konverteringar. Vi analyserar användarbeteende,
                        sidlayout, formulär och kassaprocess för att identifiera
                        flaskhalsar och möjligheter till förbättring. Genom
                        A/B-testning och optimering av landingssidor strävar vi
                        efter att öka er konverteringsgrad och maximera er
                        avkastning på investeringen.
                        <div className="mt-4 mb-5 md:mb-0 md:mt-10">
                          <Link
                            href="../growth/index.html"
                            target="_self"
                            className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-xl text-inherit"
                          >
                            <span>Läs mer om Growth</span>
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
                      </div>
                    </div>
                    <div className="md:w-2/5 pl-6 md:px-8 lg:px-10 xl:px-14 pt-6 md:pt-0 text-base md:text-lg leading-[1.4] md:leading-[1.4] font-extrabold">
                      <ul>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Användarbeteende
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Sidlayout </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Formulär och kassaprocess
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Landingssidesanalys
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Mobilanpassning
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Laddningstid och prestanda
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Exit intent strategi
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                  <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-inherit">
                    Marknadsanalys
                  </h2>
                  <div className="md:flex md:flex-wrap md:flex-row-reverse">
                    <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                      <div>
                        Vår analys för marknadsföring är skräddarsydd för att ge
                        er insikter i er målgrupps beteenden, preferenser och
                        demografi. Vi granskar er nuvarande marknadsstrategi och
                        ger rekommendationer för att förbättra ert innehåll,
                        kanalval och målinriktning. Genom att analysera era
                        konkurrenter och identifiera unika möjligheter kan vi
                        forma en strategi som ökar ert varumärkes exponering och
                        engagemang.
                      </div>
                    </div>
                    <div className="md:w-2/5 pl-6 md:px-8 lg:px-10 xl:px-14 pt-6 md:pt-0 text-base md:text-lg leading-[1.4] md:leading-[1.4] font-extrabold">
                      <ul>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Målgrupp </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Konkurrens </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Kanalval </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Innehåll </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Sociala medier
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            E-postmarknadsföring
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Tillväxtstrategi
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                  <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-inherit">
                    SEO-analys
                  </h2>
                  <div className="md:flex md:flex-wrap md:flex-row-reverse">
                    <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                      <div>
                        Vår SEO-analys är utformad för att förbättra er
                        synlighet på sökmotorer och öka organisk trafik. Vi
                        utför nyckelordsanalys för att välja optimala sökord,
                        granskar er webbplatsstruktur och innehållsanalys för
                        att säkerställa att ni rankar högt på relevanta
                        sökningar. Teknisk SEO och länkprofilanalys ingår för
                        att säkerställa att er webbplats är tekniskt sund och
                        har en kvalitativ länkprofil.
                        <div className="mt-4 mb-5 md:mb-0 md:mt-10">
                          <Link
                            href="../seo-byra-stockholm/index.html"
                            target="_self"
                            className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-xl text-inherit"
                          >
                            <span>Läs mer om SEO</span>
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
                      </div>
                    </div>
                    <div className="md:w-2/5 pl-6 md:px-8 lg:px-10 xl:px-14 pt-6 md:pt-0 text-base md:text-lg leading-[1.4] md:leading-[1.4] font-extrabold">
                      <ul>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Nyckelord </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Webbplatsstruktur
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Innehåll </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">On-Page SEO </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">Teknisk SEO </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Länkprofilanalys
                          </span>
                        </li>
                        <li className="mb-2 flex">
                          <svg
                            className="md:mt-0.5"
                            preserveAspectRatio="none"
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            aria-hidden="true"
                          >
                            <use href="/webImages/icons.svg#icon-tick"></use>
                          </svg>
                          <span className="flex-1 pl-3 md:pl-5">
                            Konkurrensanalys
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-14 lg:pb-20 xl:pb-32">
          <div className="max-w-7xl px-5 xl:px-8 mx-auto">
            <div className="mx-auto max-w-[780px] prose-editor">
              <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Vad vi lovar
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em]  prose-blockquote:text-white">
                <p>
                  Genom att använda vår tjänst Analys tjänar ni som kund på
                  skräddarsydda insikter och strategier för att optimera er
                  digitala närvaro. Ni får ökad förståelse för målgruppens
                  beteende, konkurrenternas strategier och områden för
                  förbättring inom marknadsföring, konvertering och
                  <Link href="../seo-byra-stockholm/index.html">SEO</Link>. Det ger er
                  möjlighet att fatta datadrivna beslut, öka konverteringar,
                  förbättra varumärkesexponering och ranking på sökmotorer – en
                  väg mot en mer framgångsrik digital närvaro!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center pb-14 lg:pb-20 xl:pb-32">
          <div className="w-[12rem] md:w-[15rem] lg:w-[18rem] mx-auto mb-10 ">
            <img
              width="296"
              height="296"
              src="https://pigment.se/uploads/2023/10/webbyra-stockholm-personal-sergio-296x296.jpg"
              className="w-full h-auto rounded-full"
              alt="webbyra-stockholm-personal-sergio"
              decoding="async"
              sizes="(max-width: 296px) 100vw, 296px"
            />
          </div>
          <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
            Behöver ni hjälp att förstå er data?
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
              Alt. Ring honom på <Link href="tel:070-953 53 99">070-953 53 99</Link>,
              eller maila
              <Link href="mailto:sergio@pigment.se">sergio@pigment.se</Link>
            </p>
          </div>
        </section>
        <section className="w-full px-6 mx-auto md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 js-animate-fadein pb-14 lg:pb-20 xl:pb-32">
          <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
            Utforska våra andra tjänster
          </h4>
          <div className="flex [@media(min-width:375px)]:flex-row w-full rounded-2xl border border-[#151515] overflow-hidden mt-8 flex-wrap">
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white  pointer-events-none"
              href="index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] opacity-30">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  Analys
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../branding/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  Branding
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../ux-ui-byra/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  UX / UI design
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../webbutveckling/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  Webbutveckling
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../webbyra-e-handel/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  E-handel
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../content/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  Content
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../seo-byra-stockholm/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  SEO
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../growth/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  Growth
                </div>
              </div>
            </Link>
            <Link
              className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
              href="../forvaltning/index.html"
            >
              <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                  Förvaltning
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main> 
    </>
  );
}
  