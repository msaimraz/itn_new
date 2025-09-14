export default function CTA() {
    return (
        <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center py-14 lg:py-20 xl:py-32">
            <div className="w-[12rem] md:w-[15rem] lg:w-[18rem] mx-auto mb-10">
                <img width="296" height="296"
                    src="webImages/founder.jpg"
                    className="w-full h-auto rounded-full" alt="webbyra-stockholm-personal-sergio" />
            </div>
            <h2
                className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Söker ni en webbyrå i Stockholm?
            </h2>

            <div
                className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                <p>
                    <a href="#" target="_blank" rel="noopener">Boka in ett första möte
                        med Sergio här!</a><br />
                    Alt. Ring honom på <a href="tel:+46704769722">+46 70 476 97 22</a>,
                    eller maila <a href="mailto:info@pixelwebdesign.se">info@pixelwebdesign.se</a>
                </p>
            </div>
        </section>
    )
}