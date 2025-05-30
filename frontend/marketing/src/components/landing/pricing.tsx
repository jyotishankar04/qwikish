import { Check, IndianRupee } from "lucide-react"

const pricing_card = [
    {
        title: "Free",
        price: "0",
        subTitle: "Perfect for getting started",
        badge: "",
        features: [
            "5 AI playground sessions/month",
            "Basic note-taking with rich formatting",
            "Community access",
            "2 mind maps/month",
            "Basic time tracking",
        ],
        button: "Start for free",
    }, {
        title: "Gold",
        price: "99",
        badge: "Most Popular",
        subTitle: "For serious learners",
        features: [
            "Unlimited AI playground access",
            "Advanced note organization",
            "PDF chat with RAG",
            "Advanced analytics",
            "Priority community features",
        ],
        button: "Start with Pro",
    }, {
        title: "Platinum",
        badge: "",
        subTitle: "For professionals",
        price: "199",
        features: [
            "Everything in Gold",
            "Team collaboration tools",
            "Advanced quiz creation",
            "Custom AI models",
            "Priority support",
            "Advanced integrations",
            "White-label options"
        ],
        button: "Start with Platinum",
    }
]

type PricingCard = typeof pricing_card[number]



const PricingSection = () => {
    return (
        <div className="w-full mt-40">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium ">
                    Simple, Transparent Pricing
                </h4>

                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal ">
                    Choose the plan that fits your learning journey. Upgrade or downgrade at any time.
                </p>
            </div>
            <div className="py-20 grid lg:grid-cols-3  grid-cols-1  w-full gap-4 mx-auto px-8">
                {pricing_card.map((card, index) => (
                    <PriceCard key={index} card={card} />
                ))}
            </div>
        </div >
    )
}


const PriceCard: React.FC<{ card: PricingCard }> = (
    { card }
) => {
    return (
        <div className={`group/bento shadow-input h-fit flex flex-col  justify-between space-y-4 rounded-xl border border-foreground/35 p-4 transition duration-200 hover:shadow-xl s dark:shadow-none ${card.badge !== "" ? "  ring ring-sky-600" : " hover:scale-100 duration-300"}`}>

            <div className="flex flex-1 w-full h-fit p-4 rounded-xl relative border shadow  backdrop-blur-sm bg-black/80 border-neutral-200 dark:border-neutral-700" >
                {
                    card.badge !== "" ?
                        <button className="bg-slate-800 no-underline absolute top-4 right-4 group cursor-pointer  shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                            <span className="absolute inset-0 overflow-hidden rounded-full">
                                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            </span>
                            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 text-md py-0.5 px-4 ring-1 ring-white/10 ">
                                <span>
                                    {card.badge}
                                </span>
                            </div>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                        </button> : null

                }
                <div className="flex flex-col space-y-2 w-full">
                    <h2 className="text-2xl font-bold text-black dark:text-white">{card.title}</h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {card.subTitle}
                    </p>
                    <h1 className="text-2xl font-bold text-black dark:text-white flex items-end gap-2"><span className="flex text-5xl items-center gap-2">
                        <IndianRupee />{card.price}</span>/month
                    </h1>
                    <button className="px-4 cursor-pointer text-lg py-2 rounded-md mt-6 border w-full border-black bg-white text-black font-semibold hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                        {card.button}
                    </button>
                </div>
            </div >

            <ul className="flex flex-col space-y-2">
                {card.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Check className="text-green-600" />
                        {feature}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default PricingSection
