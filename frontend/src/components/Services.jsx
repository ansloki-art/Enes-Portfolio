import Reveal from "./Reveal";

const tiers = [
    {
        name: "Basic",
        price: "$25",
        tagline: "Portfolio showcase",
        items: ["Hero + Gallery + Packages", "About section", "WhatsApp contact button", "Mobile responsive"],
    },
    {
        name: "Advanced",
        price: "$49",
        tagline: "Portfolio + booking",
        items: ["Everything in Basic", "Online booking form", "Booking saved to database", "Auto WhatsApp notification"],
    },
    {
        name: "Premium",
        price: "$89",
        tagline: "Full business suite",
        items: ["Everything in Advanced", "Admin dashboard", "Booking calendar & analytics", "Gallery manager + PDF invoice"],
        highlight: true,
    },
    {
        name: "Pro",
        price: "$149",
        tagline: "White-label CMS",
        items: ["Everything in Premium", "Edit all content from admin", "Live color theming", "No code changes needed"],
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 border-t border-zinc-200 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <Reveal>
                    <p className="mb-2 text-xs font-semibold text-violet-600 tracking-widest uppercase">
                        Services
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        Photography websites
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
                        Ready-to-deploy portfolio sites for photographers and studios. Pick a tier, share your details, go live in days.
                    </p>
                </Reveal>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {tiers.map((tier, i) => (
                        <Reveal key={tier.name} delay={i * 80} direction="up">
                            <div className={`card-lift flex flex-col h-full rounded-2xl border p-6 ${tier.highlight
                                ? "border-violet-300 bg-violet-50 ring-1 ring-violet-200"
                                : "border-zinc-200 bg-zinc-50"
                            }`}>
                                {tier.highlight && (
                                    <span className="self-start mb-3 rounded-full bg-violet-600 px-2.5 py-0.5 text-xs font-bold text-white">
                                        Popular
                                    </span>
                                )}
                                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">{tier.name}</p>
                                <p className="mt-1 text-2xl font-extrabold text-zinc-900">{tier.price}</p>
                                <p className="mt-0.5 text-xs text-violet-600 font-semibold">{tier.tagline}</p>
                                <ul className="mt-5 flex-1 space-y-2">
                                    {tier.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-zinc-600">
                                            <svg className="mt-0.5 w-3.5 h-3.5 text-violet-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#contact"
                                    className={`mt-6 block text-center rounded-lg py-2 text-sm font-semibold transition-colors ${tier.highlight
                                        ? "bg-violet-600 text-white hover:bg-violet-700"
                                        : "border border-zinc-300 text-zinc-700 hover:border-zinc-500"
                                    }`}
                                >
                                    Get this
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
