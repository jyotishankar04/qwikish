
import { motion } from "framer-motion";

const Loading = () => (
    <div className="fixed w-full h-screen inset-0 z-50 flex bg-background items-center justify-center">
        <div className="relative flex items-center text-black dark:text-white">
            <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "mirror" }}
                className="absolute size-3.5 rounded-full bg-current left-2"
            ></motion.span>
            <motion.span
                initial={{ x: 0 }}
                animate={{ x: 24 }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "mirror" }}
                className="absolute size-3.5 rounded-full bg-current left-2"
            ></motion.span>
            <motion.span
                initial={{ x: 0 }}
                animate={{ x: 24 }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "mirror" }}
                className="absolute size-3.5 rounded-full bg-current left-8"
            ></motion.span>
            <motion.span
                initial={{ scale: 1 }}
                animate={{ scale: 0 }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "mirror" }}
                className="absolute size-3.5 rounded-full bg-current left-14"
            ></motion.span>
        </div>
    </div>
);

export default Loading;
