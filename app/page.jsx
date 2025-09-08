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
    </>
  );
}