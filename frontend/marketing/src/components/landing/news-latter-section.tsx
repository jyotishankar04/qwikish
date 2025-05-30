import { SparklesCore } from '../ui/sparkles'

const NewsLatterSection = () => {
    return (
        <div className="w-full overflow-hidden my-10 md:my-20 md:px-20 p-2">
            <div className={` shadow-input h-fit flex flex-col  justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none w-full`}>

                <div className="h-fit py-28 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                    <div className="w-full absolute inset-0 h-screen">
                        <SparklesCore
                            id="tsparticlesfullpage"
                            background="transparent"
                            minSize={0.6}
                            maxSize={1.4}
                            particleDensity={100}
                            className="w-full h-full"
                            particleColor="#FFFFFF"
                        />
                    </div>
                    <h1 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        Ready to Transform Your Learning?
                    </h1>
                    <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                        Join thousands of students, educators, and lifelong learners who are already using QuickBrain AI to accelerate their knowledge and productivity.
                    </p>
                    <div className="flex items-center justify-center my-4">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Get Started For Free
                            </span>
                        </button>
                    </div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">No credit card required • Free forever plan available • Cancel anytime</p>
                </div>
            </div>
        </div>
    )
}
export default NewsLatterSection //news - latter - section