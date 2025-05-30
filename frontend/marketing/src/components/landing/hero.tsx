import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <>
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>

            <div className="px-4 py-10 text-center md:py-24">
                <h1 className="relative z-10 mx-auto max-w-4xl text-4xl font-bold tracking-tight  md:text-5xl lg:text-7xl ">
                    {"Supercharge Your Learning with AI Intelligence"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                    ease: "easeInOut",
                                }}
                                className="inline-block mr-2"
                            >
                                {word}
                            </motion.span>
                        ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                    className="mt-6 text-lg text-neutral-600 md:text-xl  max-w-xl mx-auto"
                >
                    Qwikish is your all-in-one AI workspace — take notes, organize knowledge, chat with PDFs, visualize with mind maps, manage time, and connect with a learning-first community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.3 }}
                    className="relative z-10 mt-10 flex flex-wrap justify-center gap-4"
                >
                    <button className="w-60 rounded-lg bg-black px-6 py-3 text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                        🚀 Get Started Free
                    </button>
                    <button className="w-60 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                        🎥 Watch Demo
                    </button>
                </motion.div>
                <div className="mt-12"></div>
            </div>
        </>
    )
}

export default HeroSection