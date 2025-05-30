import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonial1 = [
    {
        quote: "This platform has truly changed the way I take notes. It's simple and efficient.",
        name: "Anjali Sharma",
        title: "Software Developer",
    },
    {
        quote: "I love how intuitive everything feels. It just works.",
        name: "Rahul Verma",
        title: "Engineering Student",
    },
    {
        quote: "The collaboration feature helped me and my teammates stay in sync during our project.",
        name: "Sneha Nair",
        title: "Project Manager",
    },
    {
        quote: "Mock tests are well structured and helped me track my progress easily.",
        name: "Karthik Iyer",
        title: "UPSC Aspirant",
    },
    {
        quote: "Finally, a note app that feels smart. I use it daily for my work.",
        name: "Priya Desai",
        title: "Content Strategist",
    },
    {
        quote: "The YouTube transcript tool is a game-changer for learning from videos.",
        name: "Rohan Kapoor",
        title: "Digital Marketer",
    },
    {
        quote: "It's minimal, fast, and gets the job done without distractions.",
        name: "Meera Joshi",
        title: "UI/UX Designer",
    },
    {
        quote: "I use it to prepare for my law exams. Notes, highlights, and mock tests are spot on.",
        name: "Arjun Singh",
        title: "Law Student",
    },
];

const testimonial2 = [
    {
        quote: "Perfect for daily journaling and planning tasks. Clean interface.",
        name: "Nidhi Kulkarni",
        title: "Freelancer",
    },
    {
        quote: "Highly recommended for anyone who wants organized study material in one place.",
        name: "Siddharth Reddy",
        title: "Medical Student",
    },
    {
        quote: "I love the way notes are linked with mind maps. Makes everything clearer.",
        name: "Tanya Bhatia",
        title: "Visual Designer",
    },
    {
        quote: "Helps me maintain study discipline with scheduling and daily goals.",
        name: "Manav Deshmukh",
        title: "Banking Aspirant",
    },
    {
        quote: "Tried many tools before, this one finally fits how I like to work.",
        name: "Ayesha Khan",
        title: "Academic Coach",
    },
    {
        quote: "The simplicity and speed of the interface is what keeps me coming back.",
        name: "Ritik Mehta",
        title: "Tech Blogger",
    },
    {
        quote: "I manage all my lecture notes and summaries here. It's a lifesaver.",
        name: "Bhavana Raut",
        title: "B.Ed Student",
    },
    {
        quote: "Even the free version offers a lot. Very student friendly.",
        name: "Dev Patel",
        title: "Junior Developer",
    },
];
const ScrollingTestimonialsSection = () => {
    return (
        <div className="w-full overflow-hidden mt-20 md:mt-40">
            <div className="px-4 md:px-8">
                <h4 className="text-2xl sm:text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium ">
                    Everything You Need to Learn Smarter
                </h4>

                <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal ">
                    From intelligent note-taking to AI-powered coding environments, Qwikish provides all the tools you need for accelerated learning.
                </p>
            </div>
            <div className="h-[30rem] sm:h-[40rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <div className="w-full mb-8">
                    <InfiniteMovingCards
                        items={testimonial1}
                        speed="slow"
                        direction="right"
                        className="px-4"
                    />
                </div>
                <div className="w-full">
                    <InfiniteMovingCards
                        items={testimonial2}
                        speed="slow"
                        direction="left"
                        className="px-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default ScrollingTestimonialsSection