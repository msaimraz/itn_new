"use client";

import { useEffect } from 'react';

export default function HomeCases() {
    useEffect(() => {
        const SPEED = 42; // px/sec — tweak to taste
        const imgs = Array.from(document.querySelectorAll('img[data-auto-scroll]'));
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        function setup(img) {
            const vp = img.parentElement; // the viewport (overflow hidden)
            const scale = img.clientWidth / img.naturalWidth || 1;
            const rendered = img.naturalHeight * scale; // rendered pixel height
            const distance = Math.max(0, rendered - vp.clientHeight);
            const duration = distance > 0 ? distance / SPEED : 0;

            // push vars to CSS animation
            img.style.setProperty('--bmDist', distance + 'px');
            img.style.setProperty('--bmDur', duration + 's');

            // retrigger animation after variable changes
            img.style.animation = 'none';
            void img.offsetWidth; // reflow
            img.style.animation = '';
        }

        function setupAll() {
            imgs.forEach((img) => setup(img));
        }

        imgs.forEach((img) => {
            if (img.complete) {
                setup(img);
            } else {
                img.addEventListener('load', () => setup(img), { once: true });
            }
        });

        window.addEventListener('resize', setupAll);

        return () => {
            window.removeEventListener('resize', setupAll);
        };
    }, []);

    return (
        <>
            <div className="js-scroll-heading-bg">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                    Selected work
                </h2>
            </div>

            <section className="js-scroll-block js-scroll-block-bg">
                <div className="js-scroll-block-pin flex absolute h-screen w-full flex-col justify-center">
                    <div className="w-full h-[100%] relative">
                        <div className="hidden md:flex fixed top-[50%] right-[2rem] transform translate-x-[-50%] translate-y-[-50%]">
                            <svg width="50" height="45" viewBox="0 0 50 130">
                                <rect className="scroll" x="0" y="5" rx="35" ry="35" width="70" height="120" stroke="#ffffff" fill="none" strokeWidth="4"></rect>
                                <circle className="circle--shape" cx="35" cy="32" r="8" fill="#FFFFFF"></circle>
                            </svg>
                        </div>

                        {/* image stack (unchanged) */}
                        <div className="relative h-screen mr-auto md:px-20 flex items-center justify-center md:w-[60%]">
                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative home_case_viewimage js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <div className="bm-inner">
                                            {/* Desktop */}
                                            <figure className="bm-browser">
                                                <div className="bm-chrome">
                                                    <span className="dot red"></span>
                                                    <span className="dot yellow"></span>
                                                    <span className="dot green"></span>
                                                    <div className="chrome-search"></div>
                                                    <div className="chrome-icon"></div>
                                                </div>
                                                <div className="bm-viewport desktop">
                                                    <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                            {/* Mobile */}
                                            <figure className="bm-phone">
                                                <div className="bm-phone-notch"></div>
                                                <div className="bm-viewport mobile">
                                                    <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                        <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative home_case_viewimage js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <div className="bm-inner">
                                            {/* Desktop */}
                                            <figure className="bm-browser">
                                                <div className="bm-chrome">
                                                    <span className="dot red"></span>
                                                    <span className="dot yellow"></span>
                                                    <span className="dot green"></span>
                                                    <div className="chrome-search"></div>
                                                    <div className="chrome-icon"></div>
                                                </div>
                                                <div className="bm-viewport desktop">
                                                    <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                            {/* Mobile */}
                                            <figure className="bm-phone">
                                                <div className="bm-phone-notch"></div>
                                                <div className="bm-viewport mobile">
                                                    <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                        <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative home_case_viewimage js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <div className="bm-inner">
                                            {/* Desktop */}
                                            <figure className="bm-browser">
                                                <div className="bm-chrome">
                                                    <span className="dot red"></span>
                                                    <span className="dot yellow"></span>
                                                    <span className="dot green"></span>
                                                    <div className="chrome-search"></div>
                                                    <div className="chrome-icon"></div>
                                                </div>
                                                <div className="bm-viewport desktop">
                                                    <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                            {/* Mobile */}
                                            <figure className="bm-phone">
                                                <div className="bm-phone-notch"></div>
                                                <div className="bm-viewport mobile">
                                                    <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                        <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                                <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                                    <div className="relative home_case_viewimage js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap">
                                        <div className="bm-inner">
                                            {/* Desktop */}
                                            <figure className="bm-browser">
                                                <div className="bm-chrome">
                                                    <span className="dot red"></span>
                                                    <span className="dot yellow"></span>
                                                    <span className="dot green"></span>
                                                    <div className="chrome-search"></div>
                                                    <div className="chrome-icon"></div>
                                                </div>
                                                <div className="bm-viewport desktop">
                                                    <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                            {/* Mobile */}
                                            <figure className="bm-phone">
                                                <div className="bm-phone-notch"></div>
                                                <div className="bm-viewport mobile">
                                                    <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                        <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bg colors, progress, overlays (unchanged) */}
                    <div className="w-screen h-screen z-[-2]">
                        <span className="js-scroll-block-bg-color" style={{ background: '#213c54' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#edb900' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#5e0f39' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#e53e14' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#dd9827' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#5579cb' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#d3508d' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#0009d1' }}></span>
                        <span className="js-scroll-block-bg-color" style={{ background: '#fab900' }}></span>
                    </div>
                </div>

                <div className="js-scroll-block-progress-bar-wrapper bg-gray-800 w-md h-[0.1rem] fixed z-50 w-[20rem] bottom-[1.25rem] rounded-full left-1/2 transform -translate-x-1/2 opacity-0">
                    <div className="js-scroll-block-progress-bar bg-white w-0 h-[0.1rem] relative z-100"></div>
                </div>
                <div className="js-scroll-block-fixed-top pointer-events-none js-scroll-block-fixed-top-bg"></div>
                <div className="js-scroll-block-fixed-bottom pointer-events-none js-scroll-block-fixed-bottom-bg"></div>

                {/* content rail */}
                <div className="relative md:w-[40%] w-full md:ml-auto z-[1]">
                    <div className="js-scroll-block-content-wrapper js-scroll-block-content-wrapper-bg w-full md:w-[80%] mr-32">
                        {/* 01 */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                    <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    <div className="bm-inner">
                                        {/* Desktop */}
                                        <figure className="bm-browser">
                                            <div className="bm-chrome">
                                                <span className="dot red"></span>
                                                <span className="dot yellow"></span>
                                                <span className="dot green"></span>
                                                <div className="chrome-search"></div>
                                                <div className="chrome-icon"></div>
                                            </div>
                                            <div className="bm-viewport desktop">
                                                <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                        {/* Mobile */}
                                        <figure className="bm-phone">
                                            <div className="bm-phone-notch"></div>
                                            <div className="bm-viewport mobile">
                                                <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: '#ffffff' }}>
                                01<span className="opacity-50">/04</span>
                            </div>
                            <h3
                                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                                style={{ color: '#ffffff' }}>
                                OnlineGoodies
                            </h3>
                            <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: '#ffffff' }}>
                                Swedish-owned confectionery and grocery store in Spain. We launched a modern storefront with multilingual checkout and EU payments—ready to serve customers across Europe.
                            </p>
                            <div className="mt-4 mb-5 md:mb-0 md:mt-10" style={{ color: '#ffffff' }}>
                                <a
                                    href="case_inner.php?slug=onlinegoodies"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-fit inline-block text-base md:text-lg text-inherit">
                                    <span> View our case on OnlineGoodies </span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* 02 */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                    <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    <div className="bm-inner">
                                        {/* Desktop */}
                                        <figure className="bm-browser">
                                            <div className="bm-chrome">
                                                <span className="dot red"></span>
                                                <span className="dot yellow"></span>
                                                <span className="dot green"></span>
                                                <div className="chrome-search"></div>
                                                <div className="chrome-icon"></div>
                                            </div>
                                            <div className="bm-viewport desktop">
                                                <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                        {/* Mobile */}
                                        <figure className="bm-phone">
                                            <div className="bm-phone-notch"></div>
                                            <div className="bm-viewport mobile">
                                                <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: '#ffffff' }}>
                                02<span className="opacity-50">/04</span>
                            </div>
                            <h3
                                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                                style={{ color: '#ffffff' }}>
                                Parfymbutiken
                            </h3>
                            <p className="mt-3 md:mt-4 text-base text-100 md:text-xl">
                                Minimalist e-commerce for premium fragrances. We rebuilt the shop from scratch, refined the brand, and optimized product pages and campaigns to showcase each scent.
                            </p>
                            <div className="mt-4 mb-5 md:mb-0 md:mt-10">
                                <a
                                    href="case_inner.php?slug=parfymbutiken"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-fit inline-block text-base md:text-lg text-inherit">
                                    <span> View our case on Lillebil &amp; Parfymbutiken </span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* 03 */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                    <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    <div className="bm-inner">
                                        {/* Desktop */}
                                        <figure className="bm-browser">
                                            <div className="bm-chrome">
                                                <span className="dot red"></span>
                                                <span className="dot yellow"></span>
                                                <span className="dot green"></span>
                                                <div className="chrome-search"></div>
                                                <div className="chrome-icon"></div>
                                            </div>
                                            <div className="bm-viewport desktop">
                                                <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                        {/* Mobile */}
                                        <figure className="bm-phone">
                                            <div className="bm-phone-notch"></div>
                                            <div className="bm-viewport mobile">
                                                <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: '#ffffff' }}>
                                03<span className="opacity-50">/04</span>
                            </div>
                            <h3
                                className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"
                                style={{ color: '#ffffff' }}>
                                Brasa &amp; Basilika
                            </h3>
                            <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: '#ffffff' }}>
                                A restaurant blending fire-cooked flavors with Mediterranean herbs. We designed a warm, modern site and a living menu for charcoal grills, wood-fired pizza, and curated wines—capturing the in-house atmosphere online.
                            </p>
                            <div className="mt-4 mb-5 md:mb-0 md:mt-10" style={{ color: '#ffffff' }}>
                                <a
                                    href="case_inner.php?slug=brasa-%26-basilika"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-fit inline-block text-base md:text-lg text-inherit">
                                    <span> View our case on Brasa &amp; Basilika </span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* 04 */}
                        <div className="js-scroll-block-content">
                            <div className="max-w-md">
                                <div className="md:hidden relative block mx-auto">
                                    <div className="image-shadow-top" style={{ background: 'transparent' }}></div>
                                    <div className="image-shadow-bottom" style={{ background: 'transparent' }}></div>
                                    <div className="bm-inner">
                                        {/* Desktop */}
                                        <figure className="bm-browser">
                                            <div className="bm-chrome">
                                                <span className="dot red"></span>
                                                <span className="dot yellow"></span>
                                                <span className="dot green"></span>
                                                <div className="chrome-search"></div>
                                                <div className="chrome-icon"></div>
                                            </div>
                                            <div className="bm-viewport desktop">
                                                <img src="webImages/site-desktop.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                        {/* Mobile */}
                                        <figure className="bm-phone">
                                            <div className="bm-phone-notch"></div>
                                            <div className="bm-viewport mobile">
                                                <img src="webImages/site-mobile.png" alt="" className="bm-img" data-auto-scroll loading="lazy" />
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg">
                                04<span className="opacity-50">/04</span>
                            </div>
                            <h3 className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]">
                                Tall &amp; Timjan
                            </h3>
                            <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: '#ffffff' }}>
                                Nordic ingredients meet Mediterranean warmth in a seasonal menu. We crafted a site that mirrors the open fire, cozy interior, and chef-led care—highlighting wild game, seafood, and grill in harmony.
                            </p>
                            <div className="mt-4 mb-5 md:mb-0 md:mt-10" style={{ color: '#ffffff' }}>
                                <a
                                    href="case_inner.php?slug=tall-%26-timjan"
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-fit inline-block text-base md:text-lg text-inherit">
                                    <span> View our case on Tall &amp; Timjan </span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* /04 */}
                    </div>
                </div>
            </section>

        </>
    );
}
