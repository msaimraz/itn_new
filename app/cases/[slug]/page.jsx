import Link from "next/link";
import CTA from "@/components/CTA";
import { CASES } from "@/data/casesData";

export default function CaseDetail({ params }) {
    const caseIndex = CASES.findIndex((c) => c.slug === params.slug);
    const caseData = CASES[caseIndex];

    if (!caseData) {
        return <div className="text-white p-10">Case not found.</div>;
    }

    // Prev / Next
    const prevCase = CASES[caseIndex - 1] || null;
    const nextCase = CASES[caseIndex + 1] || null;

    return (
        <>
            {/* Hero */}
            <section className="w-full pt-[8.3rem] px-6 lg:px-8 xl:px-12">
                <div className="max-w-[120rem] mx-auto">
                    <picture className="flex items-end w-full relative z-0 rounded-xl mx-auto overflow-hidden aspect-[15/12] md:aspect-[9/4] xl:max-h-[calc(100vh_-_150px)] ">
                        {/* Breadcrumb */}
                        <div className="block md:text-lg text-black absolute left-4 top-4 z-20 md:top-8 md:left-10">
                            <span>
                                <Link href="/">Hem</Link> / <Link href="/cases">Case</Link> /
                                <span className="breadcrumb_last" aria-current="page">
                                    <strong>{caseData.title}</strong>
                                </span>
                            </span>
                        </div>

                        {/* Hero Image */}
                        <img
                            width="1560"
                            height="640"
                            src={caseData.hero}
                            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-y-1/2 -translate-x-1/2 object-cover"
                            alt={caseData.title}
                            loading="eager"
                            decoding="async"
                            sizes="(max-width: 1560px) 100vw, 1560px"
                        />

                        {/* Title Badge */}
                        <div className="z-10 px-4 py-3 m-3 text-white bg-black lg:px-6 lg:py-5 lg:m-6 rounded-xl">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                                {caseData.title}
                            </h1>
                        </div>
                    </picture>
                </div>
            </section>

            {/* Intro + Sidebar */}
            <section className="w-full py-14 lg:py-20 xl:py-32">
                <div className="flex flex-col mx-auto md:flex-row justify-items-center px-6 lg:px-8 xl:px-12 2xl:px-8 gap-x-8 text-white max-w-7xl">
                    <div className="md:w-[calc(66.6666%_-_(1.5rem))] js-animate-fadeinup">
                        <p className="font-bold text-white text-2xl md:text-3xl xl:text-4xl !leading-snug w-full max-w-xl mb-6 md:mb-8">
                            {caseData.sections[0].heading}
                        </p>

                        <div className="prose max-w-xl text-base md:text-lg font-light leading-[1.4] text-white prose-a:text-malibu">
                            <p>{caseData.sections[0].text}</p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="sidebar mt-8 md:mt-[0.2rem] md:w-[calc(33.3333%_-_(1.5rem))] max-w-sm js-animate-fadeinup">
                        <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] text-white">
                            <h4>Kund</h4>
                            <p>{caseData.client}</p>

                            <h4>När</h4>
                            <p>{caseData.year}</p>

                            <h4>Vad</h4>
                            <div>
                                {caseData.sidebar.vad.map((item, i) => (
                                    <div key={i}>{item}</div>
                                ))}
                            </div>

                            {caseData.link && (
                                <>
                                    <h4>Besök</h4>
                                    <p>
                                        <Link href={caseData.link} target="_blank" rel="noopener">
                                            {caseData.link.replace("https://", "")}
                                        </Link>
                                    </p>
                                </>
                            )}
                        </div>
                    </aside>
                </div>
            </section>

            {/* Sections */}
            {caseData.sections.slice(1).map((sec, i) => (
                <section
                    key={i}
                    className={`py-14 lg:py-20 xl:py-32 ${sec.type.includes("yellow") ? "bg-[#fab900]" : ""
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-6 xl:px-8 flex flex-col md:flex-row gap-8">
                        {/* Image */}
                        <div className="md:w-1/2">
                            <figure className="block relative overflow-hidden rounded-xl">
                                <img src={sec.image} alt={sec.heading} className="w-full" />
                            </figure>
                        </div>

                        {/* Text */}
                        <div className="md:w-1/2 flex flex-col justify-center text-white">
                            <h2 className="text-2xl md:text-3xl font-bold">{sec.heading}</h2>
                            <p className="mt-4 text-lg font-light">{sec.text}</p>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <CTA />

            {/* Prev / Next */}
            <section className="flex flex-col w-full px-6 mx-auto mb-12 text-white md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 md:mb-16 xl:mb-24">
                <div className="flex flex-col md:flex-row gap-4 w-full pt-3 mt-10">
                    {prevCase && (
                        <Link
                            href={`/cases/${prevCase.slug}`}
                            className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 pr-6 xl:pr-8 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] group hover:text-malibu hover:border-malibu/70 transition-colors"
                        >
                            <svg
                                width="15"
                                height="15"
                                className="mr-4 rotate-180"
                                aria-label="false"
                            >
                                <use href="/webImages/icons.svg#arrow-right"></use>
                            </svg>
                            <span>Föregående Case</span>
                        </Link>
                    )}

                    <Link
                        href="/cases"
                        className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] hover:text-malibu hover:border-malibu/70 transition-colors"
                    >
                        <svg
                            width="15"
                            height="15"
                            className="mr-4 rotate-180"
                            aria-label="false"
                        >
                            <use href="/webImages/icons.svg#case-icon"></use>
                        </svg>
                        <span>Alla Case</span>
                    </Link>

                    {nextCase && (
                        <Link
                            href={`/cases/${nextCase.slug}`}
                            className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 pl-6 xl:pl-8 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] group hover:text-malibu hover:border-malibu/70 transition-colors"
                        >
                            <span>Nästa Case</span>
                            <svg
                                width="15"
                                height="15"
                                className="ml-4"
                                aria-label="false"
                            >
                                <use href="/webImages/icons.svg#arrow-right"></use>
                            </svg>
                        </Link>
                    )}
                </div>
            </section>
        </>
    );
}
