import Link from "next/link";
export default function team() {
  return (
    <>
      <main className="grow">
        <div className="max-w-7xl mx-auto px-6 xl:px-8">
          <div className="block md:text-lg mb-6">
            <span>
              <span>
                <a href="/">Hem</a>
              </span>
              /
              <span className="breadcrumb_last" aria-current="page">
                <strong>Vårt team</strong>
              </span>
            </span>
          </div>
          <div className="max-w-[780px] prose-editor pt-10">
            <h1 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Vårt team
            </h1>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit mb-12 lg:mb-16">
              <p>
                Här finner ni vårt kreativa team som hjälper er med allt från
                branding och sökordsoptimering till utveckling och
                integrationer.
              </p>
              <p>
                Behöver ni komma i kontakt med oss för en offert eller support
                så nås vi på:
                <br />
                Offerter:
                <a href="mailto:sales@pigment.se">sales@pigment.se</a>
                <br />
                Support:
                <a href="mailto:support@pigment.se">support@pigment.se</a>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto px-6 xl:px-8 pb-12 md:pb-16">
          <div className="group sm:flex sm:flex-wrap -mx-5 xl:-mx-5 pt-20">
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="https://pigment.se/wp-content/uploads/2024/02/pigment-staff-alex-329x354.jpg"
                      className="w-full h-auto"
                      alt="pigment-staff-alex"
                      decoding="async"
                      sizes="(max-width: 329px) 100vw, 329px"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl leading-[1.28] md:leading-[1.1] font-bold text-white relative">
                      Alexander Dypbukt
                    </h2>
                    <span className="text-lg xl:text-xl block relative mb-4 md:mb-6 lg:mb-8">
                      VD
                    </span>
                    <span className="block text-lg leading-[1.35]">
                      <a
                        href="mailto:alexander@pigment.se"
                        className="text-malibu"
                      >
                        alexander@pigment.se
                      </a>
                    </span>
                  </div>
                </div>
                <span className="js-svg-wrapper absolute z-[4] opacity-0 transition-opacity duration-700">
                  <svg
                    className="scale-[0.5] lg:scale-[0.8] xl:scale-100"
                    preserveAspectRatio="none"
                    width="0"
                    height="0"
                    viewBox="0 0 0 0"
                    aria-hidden="true"
                  >
                    <use href=""></use>
                  </svg>
                </span>
              </div>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="https://pigment.se/wp-content/uploads/2024/02/pigment-staff-sergio-329x354.jpg"
                      className="w-full h-auto"
                      alt="pigment-staff-sergio"
                      decoding="async"
                      sizes="(max-width: 329px) 100vw, 329px"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl leading-[1.28] md:leading-[1.1] font-bold text-white relative">
                      Sergio Tenconi
                    </h2>
                    <span className="text-lg xl:text-xl block relative mb-4 md:mb-6 lg:mb-8">
                      Kundansvarig
                    </span>
                    <span className="block text-lg leading-[1.35]">
                      <a
                        href="mailto:sergio@pigment.se"
                        className="text-malibu"
                      >
                        sergio@pigment.se
                      </a>
                    </span>
                  </div>
                </div>
                <span className="js-svg-wrapper absolute z-[4] opacity-0 transition-opacity duration-700">
                  <svg
                    className="scale-[0.5] lg:scale-[0.8] xl:scale-100"
                    preserveAspectRatio="none"
                    width="0"
                    height="0"
                    viewBox="0 0 0 0"
                    aria-hidden="true"
                  >
                    <use href=""></use>
                  </svg>
                </span>
              </div>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="https://pigment.se/wp-content/uploads/2024/02/pigment-staff-amanda-329x354.jpg"
                      className="w-full h-auto"
                      alt="pigment-staff-amanda"
                      decoding="async"
                      sizes="(max-width: 329px) 100vw, 329px"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl leading-[1.28] md:leading-[1.1] font-bold text-white relative">
                      Amanda Truvert
                    </h2>
                    <span className="text-lg xl:text-xl block relative mb-4 md:mb-6 lg:mb-8">
                      Projektledare
                    </span>
                    <span className="block text-lg leading-[1.35]">
                      <a
                        href="mailto:amanda@pigment.se"
                        className="text-malibu"
                      >
                        amanda@pigment.se
                      </a>
                    </span>
                  </div>
                </div>
                <span className="js-svg-wrapper absolute z-[4] opacity-0 transition-opacity duration-700">
                  <svg
                    className="scale-[0.5] lg:scale-[0.8] xl:scale-100"
                    preserveAspectRatio="none"
                    width="0"
                    height="0"
                    viewBox="0 0 0 0"
                    aria-hidden="true"
                  >
                    <use href=""></use>
                  </svg>
                </span>
              </div>
            </div>
            <div className="sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 xl:px-5 mb-12 sm:mb-16 md:mb-20 lg:mb-40 xl:mb-48 [&:nth-child(4n-2)]:lg:-translate-y-11 [&:nth-child(4n-1)]:lg:translate-y-9">
              <div className="js-decoration-holder decoration-holder relative z-[1]">
                <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center">
                  <div className="relative z-[1]">
                    <img
                      width="329"
                      height="354"
                      src="https://pigment.se/wp-content/uploads/2024/02/pigment-staff-malin-329x354.jpg"
                      className="w-full h-auto"
                      alt="pigment-staff-malin"
                      decoding="async"
                      sizes="(max-width: 329px) 100vw, 329px"
                    />
                    <span className="absolute w-full bottom-0 h-[82px] left-0 bg-gradient-to-t from-black"></span>
                  </div>
                  <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-2 -mt-[68px]">
                    <h2 className="mb-0.5 text-2xl leading-[1.28] md:leading-[1.1] font-bold text-white relative">
                      Malin Lilljestrand
                    </h2>
                    <span className="text-lg xl:text-xl block relative mb-4 md:mb-6 lg:mb-8">
                      Projektledare / SEO
                    </span>
                    <span className="block text-lg leading-[1.35]">
                      <a
                        href="mailto:malin@pigment.se"
                        className="text-malibu"
                      >
                        malin@pigment.se
                      </a>
                    </span>
                  </div>
                </div>
                <span className="js-svg-wrapper absolute z-[4] opacity-0 transition-opacity duration-700">
                  <svg
                    className="scale-[0.5] lg:scale-[0.8] xl:scale-100"
                    preserveAspectRatio="none"
                    width="0"
                    height="0"
                    viewBox="0 0 0 0"
                    aria-hidden="true"
                  >
                    <use href=""></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
