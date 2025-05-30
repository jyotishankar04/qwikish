import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const paq_data = [
    {
        q: "How does the AI playground work?",
        a: "Our AI playground uses advanced language models to provide instant answers, explanations, and assistance with your learning materials. You can ask questions about any topic, get code explanations, or request help with problem-solving."
    }, {
        q: "What file formats does the PDF chat support?",
        a: "Our PDF chat feature supports PDF files, images (PNG, JPG, JPEG), and text documents. The AI can analyze and answer questions about the content using advanced RAG (Retrieval-Augmented Generation) technology."
    }, {
        q: "Is there a limit to the number of notes I can create?",
        a: "Free users can create up to 100 notes, while Gold and Platinum users have unlimited note creation. All plans include unlimited subnotes and rich formatting options."
    }, {
        q: "What is the difference between the free and paid plans?",
        a: "The free plan provides basic features like note-taking and AI playground access. The paid plans offer additional features like PDF chat, advanced analytics, and priority community access."
    }, {
        q: "How does the community feature work?",
        a: "Our community platform allows you to share notes, collaborate on projects, participate in study groups, and compete on leaderboards. It's designed to foster social learning and peer-to-peer knowledge sharing."
    }
]

const FaqSection = () => {
    return (
        <div className="w-full mt-40">
            <div className="px-8">
                <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium ">
                    Frequently Asked Questions
                </h4>

                <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal ">
                    Everything you need to know about QuickBrain AI.
                </p>
            </div>
            <div className="py-20   max-w-3xl  gap-4 mx-auto px-8">
                <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                    {
                        paq_data.map((item, index) => {
                            return (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="flex items-center justify-between w-full text-lg font-medium text-foreground">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-sm font-normal text-neutral-500 ">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div >
    )
}

export default FaqSection