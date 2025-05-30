import { cn } from "@/lib/utils";

import {
    Brain,
    FileText,
    Users,
    Clock,
    BarChart3,
    MessageSquare,
    Zap,
} from "lucide-react"


export function FeaturesSectionDemo() {
    const features = [
        {
            title: "Smart Notes & Rich Formatting",
            description:
                "Create and manage notes with BlockNote Editor. Rich formatting, subnotes, and AI-powered organization.",
            icon: <FileText />,
        },
        {
            title: "AI Playground",
            description:
                "Powerful AI workspace for focused work and deep learning. Get instant answers and explanations.",
            icon: <Brain className="h-8 w-8" />,
        },

        {
            title: "Mind Map Generation",
            description: "Automatically generate visual mind maps from your notes to enhance understanding and retention.",
            icon: <Zap className="h-8 w-8" />,
        },
        {
            title: "AI PDF Chat (RAG)",
            description:
                "Upload PDFs and images, then chat with AI about the content using advanced RAG technology.",
            icon: <MessageSquare className="h-8 w-8" />,
        },
        {
            title: "Time Manager",
            description:
                "Schedule learning sessions with Pomodoro timers and productivity tracking tools.",
            icon: <Clock className="h-8 w-8" />,
        },
        {
            title: "Quizzes & Analytics",
            description: "Create and take quizzes, mock tests, and view detailed performance statistics.",
            icon: <BarChart3 className="h-8 w-8" />,
        },
        {
            title: "Learning Community",
            description: "Join a LinkedIn-style community for academic sharing, social learning, and leaderboards.",
            icon: <Users className="h-8 w-8" />,
        },
        {
            title: "Mock testing",
            description: "Create and take mock tests, and view detailed performance statistics.",
            icon: <BarChart3 className="h-8 w-8" />,
        }
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 ">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300  group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block   text-secondary-foreground">
                    {title}
                </span>
            </div>
            <p className="text-sm text-shadow-primary max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};


const FeaturesSection = () => {
    return (
        <div className="w-full mt-40">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium ">
                    Everything You Need to Learn Smarter
                </h4>

                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal ">
                    From intelligent note-taking to AI-powered coding environments, Qwikish provides all the tools you need for accelerated learning.
                </p>
            </div>
            <FeaturesSectionDemo />
        </div>);
};

export default FeaturesSection;