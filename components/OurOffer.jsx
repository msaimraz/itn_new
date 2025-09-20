export default function OurOffer() {
    return (
        <>
            <div className="js-scroll-heading-bg">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                    Our Services
                </h2>
            </div>

            <section className="js-scroll-block js-scroll-block-bg">
                <div className="js-scroll-block-pin flex absolute h-screen w-full flex-col justify-center">
                    <div className="w-full h-[100%] relative">
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
                                    strokeWidth="4"
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
                            {/* 1 - Strategy & Analysis */}
                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <picture className="block mx-auto px-6 xl:px-8">
                                            <img
                                                width="950"
                                                height="699"
                                                src="webImages/webbyra-ui-ux-design-950x699.jpg"
                                                className="js-scroll-img-no-bg"
                                                alt="ITnnovator Strategy & Analysis - Data-driven digital strategy and research services"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </picture>
                                        <div
                                            className="image-shadow-top"
                                            style={{ background: "#d86aaa" }}
                                        ></div>
                                        <div
                                            className="image-shadow-bottom"
                                            style={{ background: "#d86aaa" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* 2 - Web Development */}
                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <picture className="block mx-auto px-6 xl:px-8">
                                            <img
                                                width="950"
                                                height="699"
                                                src="webImages/webbyra-e-handel-950x699.jpg"
                                                className="js-scroll-img-no-bg"
                                                alt="ITnnovator Web Development - Custom websites and e-commerce solutions"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </picture>
                                        <div
                                            className="image-shadow-top"
                                            style={{ background: "#8c6dc4" }}
                                        ></div>
                                        <div
                                            className="image-shadow-bottom"
                                            style={{ background: "#8c6dc4" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* 3 - Growth & Optimization */}
                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <picture className="block mx-auto px-6 xl:px-8">
                                            <img
                                                width="950"
                                                height="699"
                                                src="webImages/webbyra-growth-950x699.jpg"
                                                className="js-scroll-img-no-bg"
                                                alt="ITnnovator Growth Marketing - SEO and conversion rate optimization services"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </picture>
                                        <div
                                            className="image-shadow-top"
                                            style={{ background: "#ba7ccc" }}
                                        ></div>
                                        <div
                                            className="image-shadow-bottom"
                                            style={{ background: "#ba7ccc" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bg colors */}
                    <div className="w-screen h-screen z-[-2]">
                        <span
                            className="js-scroll-block-bg-color"
                            style={{ background: "#c1006d" }}
                        ></span>
                        <span
                            className="js-scroll-block-bg-color"
                            style={{ background: "#55219e" }}
                        ></span>
                        <span
                            className="js-scroll-block-bg-color"
                            style={{ background: "#93219e" }}
                        ></span>
                    </div>
                </div>

                {/* progress + overlays */}
                <div className="js-scroll-block-progress-bar-wrapper bg-gray-800 w-md h-[0.1rem] fixed z-50 w-[20rem] bottom-[1.25rem] rounded-full left-1/2 transform -translate-x-1/2 opacity-0">
                    <div className="js-scroll-block-progress-bar bg-white w-0 h-[0.1rem] relative z-100"></div>
                </div>
                <div className="js-scroll-block-fixed-top pointer-events-none js-scroll-block-fixed-top-bg"></div>
                <div className="js-scroll-block-fixed-bottom pointer-events-none js-scroll-block-fixed-bottom-bg"></div>

                {/* content rail */}
                <div className="relative md:w-[40%] w-full md:ml-auto z-[1]">
                    <div className="js-scroll-block-content-wrapper js-scroll-block-content-wrapper-bg w-full md:w-[80%] mr-32">
                        {/* 01 - Strategy & Analysis */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div
                                        className="image-shadow-top"
                                        style={{ background: "#d86aaa" }}
                                    ></div>
                                    <div
                                        className="image-shadow-bottom"
                                        style={{ background: "#d86aaa" }}
                                    ></div>
                                    <img
                                        width="950"
                                        height="699"
                                        src="webImages/webbyra-ui-ux-design-950x699.jpg"
                                        className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                                        alt="ITnnovator Strategy & Analysis - Data-driven research and planning"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>

                            <div
                                className="mt-4 mb-2 md:mb-8 text-base md:text-lg"
                                style={{ color: "#b2fdd8" }}
                            >
                                01<span className="opacity-50">/03</span>
                            </div>
                            <h3
                                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                                style={{ color: "#b2fdd8" }}
                            >
                                Data-Driven Strategy
                            </h3>
                            <p
                                className="mt-3 md:mt-4 text-base text-100 md:text-xl"
                                style={{ color: "#b2fdd8" }}
                            >
                                We analyze traffic, user behavior, and performance metrics to
                                identify growth opportunities. Our strategic roadmaps transform
                                insights into actionable plans with clear ROI measurement.
                            </p>
                            <div
                                className="mt-4 mb-5 md:mb-0 md:mt-10"
                                style={{ color: "#b2fdd8" }}
                            >
                                <a
                                    href="/strategy"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-inherit"
                                >
                                    <span>Our Strategy Process</span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg
                                            className="inline-block"
                                            preserveAspectRatio="none"
                                            width="22"
                                            height="15"
                                            aria-hidden="true"
                                        >
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* 02 - Web Development */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div
                                        className="image-shadow-top"
                                        style={{ background: "#8c6dc4" }}
                                    ></div>
                                    <div
                                        className="image-shadow-bottom"
                                        style={{ background: "#8c6dc4" }}
                                    ></div>
                                    <img
                                        width="950"
                                        height="699"
                                        src="webImages/webbyra-e-handel-950x699.jpg"
                                        className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                                        alt="ITnnovator Web Development - Custom website and e-commerce development"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>

                            <div
                                className="mt-4 mb-2 md:mb-8 text-base md:text-lg"
                                style={{ color: "#b2fdd8" }}
                            >
                                02<span className="opacity-50">/03</span>
                            </div>
                            <h3
                                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                                style={{ color: "#b2fdd8" }}
                            >
                                Beautiful & Functional
                            </h3>
                            <p
                                className="mt-3 md:mt-4 text-base text-100 md:text-xl"
                                style={{ color: "#b2fdd8" }}
                            >
                                We create conversion-focused designs built with maintainable
                                code. Choose WordPress for rapid deployment or custom solutions
                                for unique requirements—all secure, fast, and scalable.
                            </p>
                            <div
                                className="mt-4 mb-5 md:mb-0 md:mt-10"
                                style={{ color: "#b2fdd8" }}
                            >
                                <a
                                    href="/development"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-inherit"
                                >
                                    <span>View Development Services</span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg
                                            className="inline-block"
                                            preserveAspectRatio="none"
                                            width="22"
                                            height="15"
                                            aria-hidden="true"
                                        >
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* 03 - Growth & Optimization */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div
                                        className="image-shadow-top"
                                        style={{ background: "#ba7ccc" }}
                                    ></div>
                                    <div
                                        className="image-shadow-bottom"
                                        style={{ background: "#ba7ccc" }}
                                    ></div>
                                    <img
                                        width="950"
                                        height="699"
                                        src="webImages/webbyra-growth-950x699.jpg"
                                        className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]"
                                        alt="ITnnovator Growth Marketing - SEO and conversion optimization"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </div>

                            <div
                                className="mt-4 mb-2 md:mb-8 text-base md:text-lg"
                                style={{ color: "#b2fdd8" }}
                            >
                                03<span className="opacity-50">/03</span>
                            </div>
                            <h3
                                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                                style={{ color: "#b2fdd8" }}
                            >
                                Growth Optimization
                            </h3>
                            <p
                                className="mt-3 md:mt-4 text-base text-100 md:text-xl"
                                style={{ color: "#b2fdd8" }}
                            >
                                We implement data-driven strategies to convert visitors into
                                customers—combining SEO, conversion optimization, and analytics.
                                Our focus is on revenue-driven results, not vanity metrics.
                            </p>
                            <div
                                className="mt-4 mb-5 md:mb-0 md:mt-10"
                                style={{ color: "#b2fdd8" }}
                            >
                                <a
                                    href="/growth"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-inherit"
                                >
                                    <span>Explore Growth Services</span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg
                                            className="inline-block"
                                            preserveAspectRatio="none"
                                            width="22"
                                            height="15"
                                            aria-hidden="true"
                                        >
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
