import Link from "next/link";
import CTA from "@/components/CTA";
export default function casesdetail() {
  return (
    <>
      <section className="w-full pt-[8.3rem] px-6 lg:px-8 xl:px-12">
        <div className="max-w-[120rem] mx-auto">
          <picture className="flex items-end w-full relative z-0 rounded-xl mx-auto overflow-hidden aspect-[15/12] md:aspect-[9/4] xl:max-h-[calc(100vh_-_150px)] ">
            <div className="block md:text-lg text-black absolute text-black left-4 top-4 z-20 md:top-8 md:left-10">
              <span>
                <span>
                  <Link href="#">Hem</Link>
                </span>
                /
                <span>
                  <Link href="#">Case</Link>
                </span>
                /
                <span className="breadcrumb_last" aria-current="page">
                  <strong>Svenska Budo &#038; Kampsportsförbundet</strong>
                </span>
              </span>
            </div>
            <img
              width="1560"
              height="640"
              src="/webImages/casedetail/budo-hero-1.jpg"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-y-1/2 -translate-x-1/2 object-cover"
              alt="budo-hero-1"
              loading="eager"
              decoding="async"
              sizes="(max-width: 1560px) 100vw, 1560px"
            />
            <div className="z-10 px-4 py-3 m-3 text-white bg-black lg:px-6 lg:py-5 lg:m-6 rounded-xl">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                Svenska Budo &#038; Kampsportsförbundet
              </h1>
            </div>
          </picture>
        </div>
      </section>
      <section className="w-full py-14 lg:py-20 xl:py-32">
        <div className="flex flex-col mx-auto md:flex-row justify-items-center px-6 lg:px-8 xl:px-12 2xl:px-8 gap-x-8 text-white max-w-7xl">
          <div className="md:w-[calc(66.6666%_-_(1.5rem))] js-animate-fadeinup">
            <p className="font-bold text-white text-2xl md:text-3xl xl:text-4xl !leading-snug w-full max-w-xl mb-6 md:mb-8">
              Ny hemsida åt Svenska Budo & Kampsportsförbundet
            </p>

            <div className="prose max-w-xl text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
              <p>
                Svenska Budo &amp; Kampsportsförbundet är en paraplyorganisation
                som samlar olika kampsporter i Sverige. De erbjuder stöd och
                resurser för klubbar och föreningar, organiserar utbildningar
                och tävlingar, och arbetar för att främja budo och kampsport
                nationellt.
              </p>
              <p>
                Förbundet kontaktade Pigment i samband med att de ville
                digitalisera sina tävlingskort och hanteringen av
                sanktionsansökningar. Ny funktionalitet kring tävlingskort,
                sanktioner och tävlingar har tagits fram. Vi byggde även en ny
                betallösning och i samband med att deras grafiska profil
                uppdaterades tog vi även fram en ny webbdesign.
              </p>
            </div>
          </div>
          <aside className="sidebar mt-8 md:mt-[0.2rem] md:w-[calc(33.3333%_-_(1.5rem))] max-w-sm js-animate-fadeinup">
            <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-inherit prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-0 prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em]">
              <h4>Kund</h4>
              <p>Svenska Budo &amp; Kampsportsförbundet</p>
              <h4>När</h4>
              <p>2024</p>
              <h4>Vad</h4>
              <div>
                <div>UX &amp; UI-Design</div>
                <div>
                  Frontend
                  <br />
                  Backend
                  <br />
                  API
                  <br />
                  Webbshop
                  <br />
                  Digitala tävlingskort
                  <br />
                  Freja ID
                </div>
              </div>
              <h4>Besök</h4>
              <p>
                <Link href="#" target="_blank" rel="noopener">
                  budokampsport.se
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <section
        className="grid gap-y-10 md:gap-y-16 relative h-full w-full py-14 lg:py-20 xl:py-32"
        style={{ backgroundColor: "#fab900" }}
      >
       
        <picture className="js-animate-up block relative z-10 w-full h-full max-w-7xl mx-auto px-6 xl:px-8 drop-shadow-lg overflow-hidden">
          <img
            width="1200"
            height="1457"
            src="/webImages/casedetail/budo-webb-1-1200x1457.jpg"
            className="w-full h-auto rounded-xl"
            alt="budo-webb-1"
            decoding="async"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </picture>

        <div className="w-full max-w-xl mx-auto px-6 xl:px-8 js-animate-fadeinup">
          <h3 className="mb-[0.7em] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-black">
            Svenska Budo & Kampsportsförbundet: Främjar och Stödjer Kampsporter
            i Sverige
          </h3>

          <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-black prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
            <p>
              Svenska Budo &amp; Kampsportsförbundet samlar och stöder olika
              kampsporter i Sverige genom att erbjuda resurser och stöd till
              klubbar och föreningar. De organiserar utbildningar och tävlingar,
              främjar budo och kampsport nationellt. Förbundet fokuserar också
              på antidopingarbete och säker idrottsutövning. Dessutom arrangerar
              de evenemang som Kampsportsgalan och erbjuder försäkringar och
              bidragsmöjligheter för medlemmar.
            </p>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col  flex  md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 ">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full">
              <img
                width="637"
                height="576"
                src="/webImages/casedetail/budo-detail-6-637x576.jpg"
                className="w-full h-auto rounded-xl"
                alt=""
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 637px) 100vw, 637px"
              />
            </figure>
          </div>
          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Identifiering med FrejaID
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                FrejaID används för identifiering och inloggning på Svenska Budo
                & Kampsportsförbundets hemsida. FrejaID används för att ansöka
                om tävlingskort, administrera sitt kort samt öka säkerheten vid
                inloggning.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col  flex  md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 ">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden  w-full">
              <img
                width="637"
                height="599"
                src="/webImages/casedetail/budo-detail-5-637x599.jpg"
                className="w-full h-auto rounded-xl"
                alt=""
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 637px) 100vw, 637px"
              />
            </figure>
          </div>
          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Integration mot Swedbank pay
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Swedbank Pay är en betallösning som erbjuder smidiga och säkra
                betalningsalternativ för e-handel. Vi har integrerat Swedbank
                Pay på både Svenska Budo & Kampsportsförbundets webbshop samt
                vid ansökning av tävlingskort.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col  flex  md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 ">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full">
              <img
                width="637"
                height="446"
                src="/webImages/casedetail/budo-detail-7-637x446.png"
                className="w-full h-auto rounded-xl"
                alt=""
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 637px) 100vw, 637px"
              />
            </figure>
          </div>
          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Digitalisering av tävlingskort
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Med att gå från fysiska till digitala tävlingskort
                effektiviseras den administrativa processen för Svenska Budo &
                Kampsportsförbundet. Det digitala tävlingskortet går att ansöka
                om från 13års ålder via Freja eID och det går enkelt att nå och
                redigera från Mitt konto på hemsidan.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col  flex  md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 ">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden  w-full">
              <img
                width="637"
                height="417"
                src="/webImages/casedetail/budo-detail-9-637x417.png"
                className="w-full h-auto rounded-xl"
                alt=""
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 637px) 100vw, 637px"
              />
            </figure>
          </div>
          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Effektivisering av sanktionsansökningar och tävlingar
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                En annan del av organisationen som effektiviserats är
                sanktionsansökningar och tävlingar. Det är nu möjligt att ansöka
                om tävlingar via hemsidan. Via Mitt konto kan tävligen
                administreras och statistik samlas in via tävlingsrapporter och
                läkarrapporter som skickas ut via mail.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col  flex  md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 ">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full">
              <img
                width="637"
                height="591"
                src="/webImages/casedetail/budo-detail-6-1-637x591.jpg"
                className="w-full h-auto rounded-xl"
                alt=""
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 637px) 100vw, 637px"
              />
            </figure>
          </div>
          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Digitalisering av tävlingsrapporter och läkarrapporter
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Genom att använda digitala rapporter kan information snabbare
                och säkrare delas mellan arrangör, läkare och förbundets
                administratörer. Detta minskar risken för förlust av dokument
                och säkerställer att ev. avstängningar kan ske direkt på plats.
                All information samlas i admin och sammanställs till statistik
                som sedan används för att rapportera in till bl.a.
                Länsstyrelsen.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col  lg:flex justify-center items-centermd:pr-6">
          <div className=" ">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden  w-full">
              <img
                width="750"
                height="595"
                src="/webImages/casedetail/budo-mobile-2-750x595.png"
                className="w-full h-auto rounded-xl"
                alt=""
                loading="lazy"
                decoding="async"
                sizes="auto, (max-width: 750px) 100vw, 750px"
              />
            </figure>
          </div>
          <div className="py-6 md:py-16 mx-auto w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h3 className="0 text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                Mobilen i fokus
              </h3>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                Hemsidan är optimerad för en responsiv design med mobil först i
                åtanke då Mitt konto och Tävlingskortet används främst från
                mobilläge. Pigment ser alltid till att besökaren får en optimal
                användarupplevelse oavsett om hemsidan visas på en dator,
                surfplatta eller mobiltelefon.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      <section className="flex flex-col w-full px-6 mx-auto mb-12 text-white md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 md:mb-16 xl:mb-24 js-animate-fadein">
        <div className="flex flex-col md:flex-row gap-4 w-full pt-3 mt-10">
          <Link
            href="https://pigment.se/case/bergs-securities/"
            className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 pr-6 xl:pr-8 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] js-hover-circle-animation group/link-has-arrow hover:text-malibu hover:border-malibu/70 transition-colors duration-200"
          >
            <span className="pl-1 pr-1 group-hover/link-has-arrow:pr-2 group-hover/link-has-arrow:pl-0 transition-all duration-200 ease-linear">
              <svg
                width="15"
                height="15"
                className="mr-4 rotate-180"
                aria-label="false"
              >
                <use href="/webImages/icons.svg#arrow-right"></use>
              </svg>
            </span>
            <span>Föregående Case </span>
          </Link>

          <Link
            href="https://pigment.se/case/"
            className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] hover:text-malibu hover:border-malibu/70 transition-colors duration-200"
          >
            <svg
              width="15"
              height="15"
              className="mr-4 rotate-180"
              aria-label="false"
            >
              <use href="/webImages/icons.svg#case-icon"></use>
            </svg>
            <span>Alla Case </span>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 pl-6 xl:pl-8 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] js-hover-circle-animation group/link-has-arrow hover:text-malibu hover:border-malibu/70 transition-colors duration-200"
          >
            <span>Nästa Case </span>
            <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
              <svg width="15" height="15" className="ml-4" aria-label="false">
                <use href="/webImages/icons.svg#arrow-right"></use>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
