import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="pt-10 bg-black">
            <div className="text-white max-w-7xl px-6 xl:px-8 mx-auto mb-12 mb:mb-20 leading-relaxed">
                <div className="relative border-b md:border-b-2 border-white mb-7">
                    <Image className="w-full h-auto block" src="/webImages/footer_logo.png"
                        alt="Pixel Webdesign" width="1216" height="162" />
                </div> 
                <div className="flex flex-wrap">
                    <div className="w-full md:w-auto md:max-w-[33%] text-center md:text-left mb-12 md:mb-0">
                        <p className="text-white text-lg md:text-xl lg:text-2xl leading-relaxed mb-2">
                            <strong className="font-bold"> Pixel Webdesign - Vi får dig att synas! </strong>
                        </p>
                        <p
                            className="text-white text-base md:text-lg leading-relaxed md:leading-relaxed lg:leading-relaxed md:mb-1.5">
                            <Link className="hover-underline-animation inline-block relative"
                                href="mailto:info@pixelwebdesign.se">info@pixelwebdesign.se</Link>
                        </p>
                        <p
                            className="text-white text-base md:text-lg leading-relaxed md:leading-relaxed lg:leading-relaxed md:mb-1.5">
                            <Link className="hover-underline-animation inline-block relative" href="tel:+46704769722">+46 70 476 97
                                22</Link>
                        </p>
                        <p
                            className="text-white text-base md:text-lg leading-relaxed md:leading-relaxed lg:leading-relaxed md:mb-1.5">
                            Götgatan 60, Stockholm
                        </p>
                    </div>
                    <nav className="w-1/2 md:w-auto md:max-w-[20%] md:ml-20 text-base md:text-lg pt-1 md:pt-11">
                        <ul>
                            <li className="mb-1.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Om
                                    Pixel Webdesign</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Lediga tjänster</Link>
                            </li>
                            <li className="mb-1.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Blogg</Link>
                            </li>
                        </ul>
                    </nav>
                    <div
                        className="w-1/2 md:w-auto md:flex-1 text-base md:text-lg leading-relaxed md:leading-relaxed lg:leading-relaxed pl-4 md:pl-12">
                        <ul className="text-right flex flex-col h-full justify-end capitalize">
                            <li className="mb-1 md:mb-1">
                                <a target="_blank"
                                    className="js-hover-circle-animation inline-flex items-center hover-child-underline-animation text-inherit"
                                    href="https://www.facebook.com/">
                                    <span className="child relative inline-block">facebook</span>
                                    <span className="pl-4">
                                        <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13"
                                            aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right-up">
                                            </use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li className="mb-1 md:mb-1">
                                <a target="_blank"
                                    className="js-hover-circle-animation inline-flex items-center hover-child-underline-animation text-inherit"
                                    href="https://www.linkedin.com/">
                                    <span className="child relative inline-block">linkedIn</span>
                                    <span className="pl-4">
                                        <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13"
                                            aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right-up">
                                            </use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li className="mb-1 md:mb-1">
                                <a target="_blank"
                                    className="js-hover-circle-animation inline-flex items-center hover-child-underline-animation text-inherit"
                                    href="https://www.instagram.com/">
                                    <span className="child relative inline-block">instagram</span>
                                    <span className="pl-4">
                                        <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13"
                                            aria-hidden="true">
                                            <use href="webImages/icons.svg#arrow-right-up">
                                            </use>
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:flex justify-between items-start border-t border-[#565252] mt-9 pt-9">
                    <nav className="flex flex-wrap justify-between gap-8 md:gap-12 xl:gap-16 text-xs">
                        <ul className="text-white/50">
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Miljöpolicy</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Kvalitetspolicy</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">In­tegri­tets­po­li­cy</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Cookies</Link>
                            </li>
                        </ul>
                        <ul className="text-white/50">
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Webbyrå Södermalm</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Webbyrå Dalarna</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Webbyrå Norrköping</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Webbyrå WordPress</Link>
                            </li>
                        </ul>
                        <ul className="text-white/50">
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Ordlista</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Blogg</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Lediga tjänster</Link>
                            </li>
                            <li className="mb-0.5">
                                <Link className="hover-underline-animation inline-block relative" href="#">Om
                                    Pixel Webdesign</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center justify-end flex-wrap gap-y-6 gap-x-5 md:gap-x-6 mt-10 lg:mt-0">
                        <img width="80" height="80" className="w-13 md:w-14" src="webImages/gasell-2019.png" loading="lazy"
                            alt="gasell-2019" />
                        <img width="80" height="80" className="w-14 md:w-14" src="webImages/gasell-2020.png" loading="lazy"
                            alt="gasell-2020" />
                        <img height="80" width="87" className="w-13 md:w-14 -mt-[0.625rem] md:-mt-[0.875rem]"
                            src="webImages/uc-tillvaxt.png" loading="lazy" alt="uc-tillvaxt" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
