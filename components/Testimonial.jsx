export default function Testimonial() {
    return (
        <section
            className="js-animate-fadeinup max-w-[66rem] xl:max-w-[83rem] mx-auto px-6 xl:px-8 review-bg-gradient rounded-[20px]">
            <div className="relative py-28">
                <button
                    className="js-flikity-prev-button text-royal-blue disabled:opacity-50 absolute right-14 z-10 bottom-24 md:bottom-[10rem]"
                    aria-label="Previous">
                    <svg className="rotate-180 inline-block w-10 h-auto md:w-full" preserveAspectRatio="none" width="37" height="20" viewBox="0 0 67 37" aria-hidden="true">
                        <use href="webImages/icons.svg#arrow-right-big"></use>
                    </svg>
                </button>

                <h4 className="text-center mb-[2em]">What our clients say about us</h4>

                <div className="js-review-carousel review-carousel pb-20 md:pb-10">
                    {/* 1 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Couldn’t be happier
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    We rebuilt our entire webshop with ITnnovator. The UX/UI got a real lift, delivery was fast,
                                    and support is rock-solid. They’re proactive with improvements and always available when we need them.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Hanna Wikström</span>
                                        <span className="block text-lg lg:text-xl">Consumer Health Brand</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                The obvious choice
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    ITnnovator is my go-to recommendation for a digital partner. Friendly, fast support and larger
                                    projects delivered smoothly and on time. Payment gateways, CRM, and marketing integrations were seamless.
                                    As a partly donation-funded organization, we demand cost-effectiveness and value—ITnnovator delivers both.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Lovisa Sandberg</span>
                                        <span className="block text-lg lg:text-xl">Non-profit Foundation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                5 out of 5 stars
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Exceptional service and quality. ITnnovator listened carefully and translated our needs into a robust,
                                    easy-to-manage site. Clear communication from start to finish—we’re excited to keep working together.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Jonas Andersson</span>
                                        <span className="block text-lg lg:text-xl">Production Office</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Big thumbs up
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    ITnnovator always shows real interest in improving our business and delivers exactly what’s promised—on time.
                                    Reliable, pragmatic, and easy to work with.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Henrik Balkander</span>
                                        <span className="block text-lg lg:text-xl">Marathon Event</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Above and beyond
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    ITnnovator built our platform and back-office systems. Flexible, attentive, and always focused on business impact.
                                    They take time to understand our operations and the customer value behind every feature.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Torbjörn Edin</span>
                                        <span className="block text-lg lg:text-xl">Meal-Kit Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                I recommend ITnnovator to anyone
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    ITnnovator has built four websites for my companies and exceeded expectations every time.
                                    They’re flexible, understand the customer journey, and always meet deadlines. Highest recommendations.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Peter Holm</span>
                                        <span className="block text-lg lg:text-xl">SaaS Startup</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7 */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3
                                className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Thanks for the fantastic work
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Throughout the project, ITnnovator showed an impressive understanding of our goals.
                                    Their SEO and information architecture expertise made the site both beautiful and discoverable—easy for users and search engines.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                            <span className="pr-0.5"><svg preserveAspectRatio="none" width="25" height="25" viewBox="0 0 25 25" aria-hidden="true"><use href="webImages/icons.svg#star"></use></svg></span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">Daniel Remming</span>
                                        <span className="block text-lg lg:text-xl">Hospitality Platform</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /slides */}
                </div>

                <button
                    className="js-flikity-next-button text-royal-blue disabled:opacity-50 absolute right-0 bottom-24 md:bottom-[10rem] z-10"
                    aria-label="Next">
                    <svg className="inline-block w-10 h-auto md:w-full" preserveAspectRatio="none" width="37" height="20" viewBox="0 0 67 37" aria-hidden="true">
                        <use href="webImages/icons.svg#arrow-right-big"></use>
                    </svg>
                </button>
            </div>
        </section>

    )
}