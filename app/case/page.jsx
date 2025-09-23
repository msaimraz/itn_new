import CTA from "@/components/CTA";
import OurServices from "@/components/OurServices";
import Link from "next/link";

export default function cases() {
  return (
    <>
      {/*  */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="max-w-[780px] prose-editor">
            <h1 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-bold text-white">
              Urval av case
            </h1>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
              <p>
                Vi uppdaterar vår portfolio löpande.
                <Link href="#">Kontakta oss</Link> om du vill ser fler case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="case w-full pb-14 lg:pb-20 xl:pb-32 js-case-filtering">
        <div className="px-5 xl:px-[3.5rem] 2xl:px-16">
          <div className="md:hidden relative mb-8 js-case-filtering-mobile-dropdown">
            <select
              className="w-full px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] bg-black text-white appearance-none outline-none"
            // onchange="window.location.hash = this.value.substring(1);"
            >
              <option value="#cases_all">Alla</option>
              <option value="#cases_api">API</option>
              <option value="#cases_backend">Backend</option>
              <option value="#cases_branding">Branding</option>
              <option value="#cases_e-handel">E-Handel</option>
              <option value="#cases_frontend">Frontend</option>
            </select>
            <div
              className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="hidden md:flex flex-wrap gap-4 mb-12">
            <Link
              href="#cases_all"
              data-active="true"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              Alla
            </Link>
            <Link
              href="#cases_api"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              API
            </Link>
            <Link
              href="#cases_backend"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              Backend
            </Link>
            <Link
              href="#cases_branding"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              Branding
            </Link>
            <Link
              href="#cases_e-handel"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              E-Handel
            </Link>
            <Link
              href="#cases_frontend"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              Frontend
            </Link>
            <Link
              href="#cases_laravel"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              Laravel
            </Link>
            <Link
              href="#cases_payload"
              data-active="false"
              className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
            >
              Payload
            </Link>
          </div>
          <div className="w-full grid gap-[3.125rem] md:grid-cols-2 xl:grid-cols-3">
            <div
              className="flex flex-col"
              data-case-category="api backend e-handel frontend ux-ui-design"
            >
              <Link
                href="svenska-budo-kampsportsforbundet/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="640"
                  src="/webImages/cases/budo-hero-1-868x640.jpg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    Svenska Budo & Kampsportsförbundet
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">API</li>
                      <li className="mr-3">Backend</li>
                      <li className="mr-3">E-Handel</li>
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/budo-webb-1-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="budo-webb-1"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col"
              data-case-category="frontend seo ux-ui-design"
            >
              <Link
                href="edins-kranar/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="716"
                  src="/webImages/cases/case-edins-detail-3-868x716.jpg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    Edins Kranar
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">SEO</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/case-edins-webb-1-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="case-edins-webb-1"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col"
              data-case-category="backend frontend ux-ui-design"
            >
              <Link
                href="rfsu/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="817"
                  src="/webImages/cases/case-rfsu-rop-image-868x817.jpg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    RFSU
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">Backend</li>
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/case-rfsu-web-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="case-rfsu-web"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col"
              data-case-category="frontend ux-ui-design"
            >
              <Link
                href="abba-the-museum/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="798"
                  src="/webImages/cases/case-abba-top-image-1-868x798.jpeg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    ABBA The Museum
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/case-abba-web-680x480.jpeg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="case-abba-web"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col"
              data-case-category="frontend ux-ui-design"
            >
              <Link
                href="lillebil-lillebud/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="888"
                  src="/webImages/cases/lillebil-top--868x888.jpeg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    Lillebil & Lillebud
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/case-lillebil-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="case-lillebil"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col"
              data-case-category="frontend seo ux-ui-design"
            >
              <Link
                href="djuronaset/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="888"
                  src="/webImages/cases/djuronaset-hero-868x888.jpg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    Djurönäset
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">SEO</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/djuronaset-webb-1-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="djuronaset-webb-1"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col" data-case-category="ux-ui-design">
              <Link
                href="stockholmsmassan/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="642"
                  src="/webImages/cases/stockholmsmassan-hero-868x642.jpg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    Stockholmsmässan
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/case-sthlmsmassan-web-3-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="case-sthlmsmassan-web-3"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="flex flex-col"
              data-case-category="frontend ux-ui-design"
            >
              <Link
                href="kraftkoket/index.html"
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
              >
                <img
                  width="868"
                  height="888"
                  src="/webImages/cases/case-kraftkoket-herobild-868x888.jpg"
                  className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3] wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                  <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white text-xl md:text-2xl">
                    Kraftköket
                  </h3>
                  <div>
                    <ul
                      className="flex flex-wrap font-bold text-[0.8125rem]"
                      style={{ color: "#829dff" }}
                    >
                      <li className="mr-3">Frontend</li>
                      <li className="mr-3">UX &amp; UI-Design</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center w-full relative justify-center">
                  <div className="relative w-full h-full">
                    <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5"></div>
                      <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]"></div>
                      <img
                        width="680"
                        height="480"
                        src="/webImages/cases/case-kraftkoket-680x480.jpg"
                        className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                        alt="case-kraftkoket"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto text-center max-w-[780px] prose-editor">
            <h3 className="mb-5 lg:mb-10 text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
              Mer uppdrag kommer
            </h3>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] mx-auto prose-blockquote:text-white">
              <p>
                Vi uppdaterar vår portfolio löpande.
                <Link href="#">Kontakta oss</Link> om du vill ser fler case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/*  */}
      <section className="js-animate-fadeinup max-w-7xl mx-auto lg:rounded-[1.25rem] px-6 xl:px-8 pb-12 md:pb-16 py-14 lg:py-20 xl:py-32">
        <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
          Senaste från vår blogg
        </h2>
        <div className="sm:flex sm:flex-wrap sm:-mx-3 md:-mx-4 lg:-mx-5 xl:-mx-[1.375rem]">
          <div className="sm:w-1/2 lg:w-1/3 sm:px-3 md:px-4 lg:px-5 xl:px-[1.375rem] mb-10">
            <div className="sm:max-w-[23.5rem">
              <Link href="../pigment-insights-juli-augusti-2025/index.html">
                <img
                  width="374"
                  height="304"
                  src="/webImages/cases/pigment-insights-juni-juli-2025-hero-banner-v1-374x304.webp"
                  className="rounded-[1.25rem] w-full hover:opacity-60 transition-opacity duration-300 ease-linear wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="pl-5 pt-5">
                <ul
                  className="flex flex-wrap font-bold text-[0.8rem] mb-2"
                  style={{ color: "#ffeed4" }}
                >
                  <li className="mr-3 uppercase">
                    <Link
                      className="hover:underline"
                      href="../kategori/insights/index.html"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
                <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
                  <Link href="../pigment-insights-juli-augusti-2025/index.html">
                    Pigment Insights &#8211; Juli/Augusti 2025
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 sm:px-3 md:px-4 lg:px-5 xl:px-[1.375rem] mb-10">
            <div className="sm:max-w-[23.5rem">
              <Link href="../payload-blir-en-del-av-figma/index.html">
                <img
                  width="374"
                  height="304"
                  src="/webImages/cases/figma-payload-gar-samman-374x304.webp"
                  className="rounded-[1.25rem] w-full hover:opacity-60 transition-opacity duration-300 ease-linear wp-post-image"
                  alt="Figma och Payload går samman"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="pl-5 pt-5">
                <ul
                  className="flex flex-wrap font-bold text-[0.8rem] mb-2"
                  style={{ color: "#ffeed4" }}
                >
                  <li className="mr-3 uppercase">
                    <Link
                      className="hover:underline"
                      href="../kategori/teknik/index.html"
                    >
                      Teknik
                    </Link>
                  </li>
                </ul>
                <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
                  <Link href="../payload-blir-en-del-av-figma/index.html">
                    Payload blir en del av Figma
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 sm:px-3 md:px-4 lg:px-5 xl:px-[1.375rem] mb-10">
            <div className="sm:max-w-[23.5rem">
              <Link href="../hittat-ett-rikitgt-bra-headless-cms/index.html">
                <img
                  width="374"
                  height="304"
                  src="/webImages/cases/payload-cms-headless-374x304.webp"
                  className="rounded-[1.25rem] w-full hover:opacity-60 transition-opacity duration-300 ease-linear wp-post-image"
                  alt="Payload Headless CMS"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
              <div className="pl-5 pt-5">
                <ul
                  className="flex flex-wrap font-bold text-[0.8rem] mb-2"
                  style={{ color: "#ffeed4" }}
                >
                  <li className="mr-3 uppercase">
                    <Link
                      className="hover:underline"
                      href="../kategori/teknik/index.html"
                    >
                      Teknik
                    </Link>
                  </li>
                </ul>
                <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
                  <Link href="../hittat-ett-rikitgt-bra-headless-cms/index.html">
                    Hittat: Ett rikitgt bra Headless CMS
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="../blogg/index.html"
            target="_self"
            className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
          >
            <span> Se alla inlägg </span>
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
      </section>

      {/* Our services */}
      <OurServices />
    </>
  );
}
