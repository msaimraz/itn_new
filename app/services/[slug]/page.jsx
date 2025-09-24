import Link from "next/link";
import { SERVICES } from "@/data/servicesData";

export default function ServiceDetail({ params }) {
    const service = SERVICES.find((s) => s.slug === params.slug);

    if (!service) return <div className="text-white p-10">Service not found.</div>;

    return (
        <>
            {/* Breadcrumb */}
            <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
                <div className="block md:text-lg mb-6">
                    <span>
                        <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
                        <strong>{service.title}</strong>
                    </span>
                </div>

                <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
                    {service.title}
                </h1>

                {/* Hero block */}
                <div className="flex flex-col md:flex-row gap-x-8 xl:gap-x-12">
                    {/* Text */}
                    <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-1/2 text-white">
                        <h2
                            className="mb-4 text-3xl md:text-[2.62rem] lg:text-[3.25rem] font-bold"
                            style={{ color: service.color }}
                        >
                            {service.intro.heading}
                        </h2>
                        <p className="text-white/80 text-base md:text-xl font-light">
                            {service.intro.text}
                        </p>
                        <ul className="mt-6">
                            {service.intro.bullets.map((item, idx) => (
                                <li key={idx} className="flex mb-3 text-base font-bold md:text-lg">
                                    <svg width="19" height="19" className="mr-4">
                                        <use href="/webImages/icons.svg#ticker"></use>
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="order-1 md:order-2 md:w-1/2 relative flex items-center justify-center">
                        <img
                            src={service.heroImg}
                            alt={service.title}
                            className="rounded-[1.25rem] object-cover w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="pt-14 lg:pt-20 xl:pt-32">
                <div className="max-w-7xl px-5 xl:px-8 mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
                        Our process
                    </h2>
                    {service.process.map((step, idx) => (
                        <div key={idx} className="mb-16">
                            <img src={step.img} alt={step.title} className="rounded-xl mb-6" />
                            <div className="text-lg font-bold" style={{ color: step.color }}>
                                {step.step}
                            </div>
                            <h3
                                className="text-3xl md:text-5xl font-bold"
                                style={{ color: step.color }}
                            >
                                {step.title}
                            </h3>
                            <p className="text-white/80 mt-3">{step.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Explore More */}
            <section className="w-full px-6 mx-auto max-w-7xl xl:px-8 py-14">
                <h4 className="mb-6 text-xl md:text-2xl font-bold text-white">
                    Explore more web development services
                </h4>
                <div className="flex flex-wrap border border-[#151515] rounded-2xl overflow-hidden">
                    {service.explore.map((s, idx) => (
                        <Link
                            key={idx}
                            href={`/services/${s.slug}`}
                            className="services-list w-1/2 md:w-1/3 text-white border border-[#151515] p-6 hover:bg-white/10 transition"
                        >
                            {s.title}
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
