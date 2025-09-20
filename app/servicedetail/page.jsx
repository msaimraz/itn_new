import Link from "next/link";

export default function Servicedetail() {
  return (
    <>
      <section className="w-full relative  max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <Link href="../../index.html">Home</Link>
            </span>
            /
            <span>
              <Link href="../index.html">Services</Link>
            </span>
            /
            <span className="breadcrumb_last" aria-current="page">
              <strong>Web Development</strong>
            </span>
          </span>
        </div>

        <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
          Web Development
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12 ">
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div>
                <h2
                  className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold "
                  style={{ color: "#829dff" }}
                >
                  Data-driven engineering
                </h2>

                <div
                  className=" prose max-w-none text-base md:text-xl font-light leading-[1.4]
                          md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu
                          prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em]
                          prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside
                          prose-strong:text-inherit"
                >
                  <p>
                    At Itnnovator, we go beyond surface-level tweaks. We audit your
                    entire digital stack—frontend, backend, infrastructure, and user
                    flows—to reveal what works, what doesn’t, and where the biggest
                    opportunities for impact lie. Then we build a clear, actionable
                    plan and ship high-quality features that move the needle.
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
                    Discovery & technical audit
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
                    Architecture & roadmap
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
                    Implementation & integration
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
                    Performance & measurable outcomes
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
              <img
                width="750"
                height="810"
                src="/webImages/servicedetail/webbyra-analys-1200x1296.jpg"
                className=" w-full h-full lg:h-auto object-cover"
                alt="webbyra-analys"
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

      <div className="block md:hidden text-center">
        <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.18em] leading-[1.28] font-bold text-white">
          Our process
        </h2>
      </div>

      {/* Sticky process */}
      <section className="js-scroll-block js-scroll-block-bg">
        <div className="js-scroll-block-pin flex absolute h-screen w-full flex-col justify-center">
          <div className="w-full h-[100%] relative">
            <div className="js-scroll-heading-inside">
              <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.18em] leading-[1.28] font-bold text-white">
                Our process
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
                ></rect>
                <circle className="circle--shape" cx="35" cy="32" r="8" fill="#FFFFFF"></circle>
              </svg>
            </div>

            <div className="relative h-screen mr-auto md:px-20 flex items-center justify-center md:w-[60%]">
              {/* Slide 1 */}
              <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                  <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                    <picture className="block mx-auto px-6 xl:px-8">
                      <img
                        width="950"
                        height="699"
                        src="/webImages/servicedetail/analys-process-2-637x469.jpg"
                        className="js-scroll-img-no-bg"
                        alt="analys-process-2"
                        loading="lazy"
                        decoding="async"
                        sizes="auto, (max-width: 950px) 100vw, 950px"
                      />
                    </picture>
                    <div className="image-shadow-top"></div>
                    <div className="image-shadow-bottom"></div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                  <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                    <picture className="block mx-auto px-6 xl:px-8">
                      <img
                        width="950"
                        height="699"
                        src="/webImages/servicedetail/analys-process-1-637x469.jpg"
                        className="js-scroll-img-no-bg"
                        alt="analys-process-1"
                        loading="lazy"
                        decoding="async"
                        sizes="auto, (max-width: 950px) 100vw, 950px"
                      />
                    </picture>
                    <div className="image-shadow-top"></div>
                    <div className="image-shadow-bottom"></div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                  <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                    <picture className="block mx-auto px-6 xl:px-8">
                      <img
                        width="950"
                        height="699"
                        src="/webImages/servicedetail/analys-process-4-637x469.jpg"
                        className="js-scroll-img-no-bg"
                        alt="analys-process-4"
                        loading="lazy"
                        decoding="async"
                        sizes="auto, (max-width: 950px) 100vw, 950px"
                      />
                    </picture>
                    <div className="image-shadow-top"></div>
                    <div className="image-shadow-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BG swatches */}
          <div className="w-screen h-screen z-[-2]">
            <span className="js-scroll-block-bg-color"></span>
            <span className="js-scroll-block-bg-color"></span>
            <span className="js-scroll-block-bg-color"></span>
          </div>
        </div>

        {/* Progress bar + fixed masks */}
        <div className="js-scroll-block-progress-bar-wrapper bg-gray-800 w-md h-[0.1rem] fixed z-50 w-[20rem] bottom-[1.25rem] rounded-full left-1/2 transform -translate-x-1/2 opacity-0">
          <div className="js-scroll-block-progress-bar bg-white w-0 h-[0.1rem] relative z-100"></div>
        </div>
        <div className="js-scroll-block-fixed-top pointer-events-none js-scroll-block-fixed-top-bg"></div>
        <div className="js-scroll-block-fixed-bottom pointer-events-none js-scroll-block-fixed-bottom-bg"></div>

        {/* Process content */}
        <div className="relative md:w-[40%] w-full md:ml-auto z-[1]">
          <div className="js-scroll-block-content-wrapper  js-scroll-block-content-wrapper-bg  w-full md:w-[80%] mr-32">
            {/* Step 1 */}
            <div className="js-scroll-block-content ">
              <div className="max-w-md">
                <div className="md:hidden relative block mx-auto">
                  <div className="image-shadow-top"></div>
                  <div className="image-shadow-bottom"></div>
                  <img
                    width="950"
                    height="699"
                    src="/webImages/servicedetail/analys-process-2-950x699.jpg"
                    className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                    alt="analys-process-2"
                    loading="lazy"
                    decoding="async"
                    sizes="auto, (max-width: 950px) 100vw, 950px"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: "#a8e4d7" }}>
                01<span className="opacity-50">/03</span>
              </div>
              <h3
                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                style={{ color: "#a8e4d7" }}
              >
                Discovery & Technical Audit
              </h3>
              <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: "#FFFFFF" }}>
                We start by mapping requirements, KPIs, and current state. Our engineers review code,
                architecture, dependencies, and DX to define opportunities for stability, speed, and
                scalability—then propose a practical plan to modernize or build net-new.
              </p>
            </div>

            {/* Step 2 */}
            <div className="js-scroll-block-content ">
              <div className="max-w-md">
                <div className="md:hidden relative block mx-auto">
                  <div className="image-shadow-top" style={{ background: "#FFFFFF" }}></div>
                  <div className="image-shadow-bottom" style={{ background: "#FFFFFF" }}></div>
                  <img
                    width="950"
                    height="699"
                    src="/webImages/servicedetail/analys-process-1-950x699.jpg"
                    className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                    alt="analys-process-1"
                    loading="lazy"
                    decoding="async"
                    sizes="auto, (max-width: 950px) 100vw, 950px"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: "#a8e4d7" }}>
                02<span className="opacity-50">/03</span>
              </div>
              <h3
                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                style={{ color: "#a8e4d7" }}
              >
                Architecture & Implementation
              </h3>
              <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: "#FFFFFF" }}>
                With a clear blueprint, we design robust systems and ship iteratively. From component
                libraries and design systems to APIs, databases, and CI/CD, Itnnovator builds clean,
                testable code and integrates seamlessly with your tools.
              </p>
            </div>

            {/* Step 3 */}
            <div className="js-scroll-block-content ">
              <div className="max-w-md">
                <div className="md:hidden relative block mx-auto">
                  <div className="image-shadow-top" style={{ background: "#FFFFFF" }}></div>
                  <div className="image-shadow-bottom" style={{ background: "#FFFFFF" }}></div>
                  <img
                    width="950"
                    height="699"
                    src="/webImages/servicedetail/analys-process-4-950x699.jpg"
                    className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                    alt="analys-process-4"
                    loading="lazy"
                    decoding="async"
                    sizes="auto, (max-width: 950px) 100vw, 950px"
                  />
                </div>
              </div>
              <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: "#a8e4d7" }}>
                03<span className="opacity-50">/03</span>
              </div>
              <h3
                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                style={{ color: "#a8e4d7" }}
              >
                Performance & Quality
              </h3>
              <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: "#FFFFFF" }}>
                We validate outcomes with profiling, automated tests, accessibility checks, and real user
                monitoring. Expect faster pages, safer releases, and maintainable systems that scale with
                your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro blurb */}
      <section className="pt-14 lg:pt-20 xl:pt-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className=" max-w-[900px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-bold text-white">
              Web development for every need
            </h2>

            <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
              <p>
                From marketing sites and headless CMS to complex platforms and e-commerce, Itnnovator
                delivers clean code, modern stacks, and measurable performance—tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange block */}
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
                src="/webImages/servicedetail/webbyra-stockholm-personal-analys-2-1700x966.jpg"
                className="rounded-[1.25rem] shadow-[0_20px_60px_-0_rgba(0,0,0,0.25)]"
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 1031px) 100vw, 1031px"
              />
            </div>

            <div>
              {/* Block 1 */}
              <div className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-inherit">
                  Performance & Conversion Engineering
                </h2>
                <div className="md:flex md:flex-wrap md:flex-row-reverse">
                  <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                    <div>
                      We build fast, conversion-ready experiences—streamlining user flows, forms, and
                      checkout while optimizing rendering, assets, and Core Web Vitals. Through targeted
                      experiments and iterative refactors, we lift completion rates and revenue without
                      sacrificing maintainability.
                      <div className="mt-4 mb-5 md:mb-0 md:mt-10">
                        <Link
                          href="../webbutveckling/index.html"
                          target="_self"
                          className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-xl text-inherit"
                        >
                          <span>Learn more about Web Development</span>
                          <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                            <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
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
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">User flows & IA</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Form & checkout UX</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Landing page optimization</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Mobile responsiveness</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Core Web Vitals & caching</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Asset bundling & code-splitting</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Monitoring & A/B experiments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-inherit">
                  Architecture & Platform Engineering
                </h2>
                <div className="md:flex md:flex-wrap md:flex-row-reverse">
                  <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                    <div>
                      We design resilient systems—choosing the right patterns, data models, and services.
                      Expect clean contracts, predictable deployments, and a toolchain that keeps teams
                      fast and safe.
                    </div>
                  </div>
                  <div className="md:w-2/5 pl-6 md:px-8 lg:px-10 xl:px-14 pt-6 md:pt-0 text-base md:text-lg leading-[1.4] md:leading-[1.4] font-extrabold">
                    <ul>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">API design & integrations</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Data modeling & storage</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">CI/CD & release automation</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Security & privacy by design</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Scalability & observability</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Design systems & components</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Headless CMS & e-commerce</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-inherit">
                  Technical SEO Foundations
                </h2>
                <div className="md:flex md:flex-wrap md:flex-row-reverse">
                  <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                    <div>
                      Great engineering unlocks discoverability. We structure markup, routes, and content
                      delivery to help search engines—and users—reach the right pages fast, while keeping
                      your stack modern and maintainable.
                      <div className="mt-4 mb-5 md:mb-0 md:mt-10">
                        <Link
                          href="../webbutveckling/index.html"
                          target="_self"
                          className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-xl text-inherit"
                        >
                          <span>Learn more about Web Development</span>
                          <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                            <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
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
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Semantic HTML & metadata</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Accessible routing & sitemaps</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">SSR/SSG & hydration strategy</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Structured data & rich results</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Internationalization & hreflang</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Clean URLs & canonicalization</span>
                      </li>
                      <li className="mb-2 flex">
                        <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#icon-tick"></use>
                        </svg>
                        <span className="flex-1 pl-3 md:pl-5">Fast delivery (CDN, images, fonts)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /blocks */}
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto max-w-[780px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              What we promise
            </h2>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
              <p>
                Partnering with Itnnovator means production-ready code, predictable delivery, and a stack
                engineered for growth. You’ll gain clear insight into priorities, a faster site, stronger
                security, accessibility best practices, and a roadmap that keeps your product improving
                sprint after sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center pb-14 lg:pb-20 xl:pb-32">
        <div className="w-[12rem] md:w-[15rem] lg:w-[18rem] mx-auto mb-10 ">
          <img
            width="296"
            height="296"
            src="/webImages/servicedetail/webbyra-stockholm-personal-sergio-637x637.jpeg"
            className="w-full h-auto rounded-full"
            alt="Your Itnnovator team"
            decoding="async"
            sizes="(max-width: 296px) 100vw, 296px"
          />
        </div>
        <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
          Need a senior web team on your side?
        </h2>

        <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
          <p>
            <Link href="https://itnnovator.com/contact" target="_blank" rel="noopener">
              Book a first call with the Itnnovator team
            </Link>
            .<br />
            Or email us at <Link href="mailto:hello@itnnovator.com">hello@itnnovator.com</Link>.
          </p>
        </div>
      </section>

      {/* Explore services – web-dev only */}
      <section className="w-full px-6 mx-auto md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 js-animate-fadein pb-14 lg:pb-20 xl:pb-32">
        <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
          Explore more web development services
        </h4>
        <div className="flex [@media(min-width:375px)]:flex-row w-full rounded-2xl border border-[#151515] overflow-hidden mt-8 flex-wrap">
          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white  pointer-events-none"
            href="index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] opacity-30">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                Web Development
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                Frontend Engineering
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                Backend & APIs
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                CMS & Headless
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                E-commerce Development
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                Performance & Accessibility
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                DevOps & CI/CD
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                QA & Automation
              </div>
            </div>
          </Link>

          <Link
            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white "
            href="../webbutveckling/index.html"
          >
            <div className="flex items-center w-full px-[7%] md:px-[10%] ">
              <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                Maintenance & Support
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
