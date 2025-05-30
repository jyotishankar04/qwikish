import { useForm, Controller } from "react-hook-form";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

type FormData = {
    age: string;
    role: string;
    source: string;
};

const steps = ["age", "role", "source", "submit", "success"] as const;
type Step = (typeof steps)[number];

const Onboard = () => {
    const navigate = useNavigate();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [countdown, setCountdown] = useState(5);
    const step = steps[currentStepIndex];
    const [formLoading, setFormLoading] = useState(false);
    const {
        register,
        handleSubmit,
        control,
        getValues,
        trigger,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            age: "",
            role: "",
            source: "",
        },
    });

    // Handle redirect on success
    useEffect(() => {
        if (step === "success") {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            const redirectTimer = setTimeout(() => {
                navigate("/app");
            }, 5000);

            return () => {
                clearInterval(timer);
                clearTimeout(redirectTimer);
            };
        }
    }, [step, navigate]);

    const onSubmit = async () => {
        const valid = await trigger(step);
        if (!valid) return;

        if (step === "submit") {
            setFormLoading(true);
            // Simulate form submission
            setTimeout(() => {
                const data = getValues();
                console.log("🎯 Final Submission:", data);
                setFormLoading(false);
                setCurrentStepIndex((prev) => prev + 1);
            }, 3000);
        } else {
            setCurrentStepIndex((prev) => prev + 1);
        }
    };

    return (
        <Card className="w-96 px-4 py-10 flex flex-col bg-background shadow gap-10">
            {formLoading ? (
                <CardContent className="flex flex-col gap-2 text-foreground justify-center items-center py-5">
                    <div className="flex justify-center items-center space-x-2">
                        {[0, 1, 2].map((i) => (
                            <span
                                key={i}
                                className="h-3 w-3 rounded-full bg-sky-500 opacity-60 animate-bounce"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            ></span>
                        ))}
                    </div>
                    <p className="text-md">Setting up your account</p>
                </CardContent>
            ) : (
                <>
                    <CardHeader className="w-full flex flex-col gap-2 justify-center items-center">
                        <CardTitle className="text-2xl">
                            {step === "age"
                                ? "Let's start"
                                : step === "role"
                                    ? "What do you do?"
                                    : step === "source"
                                        ? "Almost done!"
                                        : step === "submit"
                                            ? "Let's confirm"
                                            : "You're all set! 🎉"}
                        </CardTitle>
                        <CardDescription className="text-center text-md">
                            {step === "age"
                                ? "Let's get you set up in just a few minutes"
                                : step === "role"
                                    ? "Tell us a bit about yourself"
                                    : step === "source"
                                        ? "Help us know where you found us"
                                        : step === "submit"
                                            ? "Confirm your details"
                                            : "Welcome to Quickbarin AI. Let's explore!"}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                            <div className="flex flex-col w-full gap-4">
                                {step === "age" && (
                                    <>
                                        <Label htmlFor="age">Your Age</Label>
                                        <Input
                                            id="age"
                                            type="number"
                                            placeholder="Eg. 25"
                                            {...register("age", { required: "Age is required" })}
                                        />
                                        {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                                    </>
                                )}

                                {step === "role" && (
                                    <>
                                        <Label htmlFor="role">Your Profession</Label>
                                        <Controller
                                            name="role"
                                            control={control}
                                            rules={{ required: "Role is required" }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a role" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Role</SelectLabel>
                                                            {["Developer", "Designer", "Manager", "Engineer", "Student", "Other"].map((item) => (
                                                                <SelectItem key={item} value={item}>
                                                                    {item}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
                                    </>
                                )}

                                {step === "source" && (
                                    <>
                                        <Label htmlFor="source">Heard from?</Label>
                                        <Controller
                                            name="source"
                                            control={control}
                                            rules={{ required: "Source is required" }}
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a source" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Source</SelectLabel>
                                                            {["Twitter", "Instagram", "Facebook", "Google", "Other"].map(
                                                                (item) => (
                                                                    <SelectItem key={item} value={item}>
                                                                        {item}
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.source && (
                                            <p className="text-red-500 text-sm">{errors.source.message}</p>
                                        )}
                                    </>
                                )}

                                {step === "submit" && (
                                    <>
                                        <ul className="flex flex-col gap-2">
                                            <li>Age: <span className="font-normal text-primary">{getValues("age")}</span></li>
                                            <li>Role: <span className="font-normal text-primary">{getValues("role")}</span></li>
                                            <li>Source: <span className="font-normal text-primary">{getValues("source")}</span></li>
                                        </ul>
                                        <h3 className="text-red-500">Are these details correct?</h3>
                                        <Button
                                            type="button"
                                            variant={"default"}
                                            className="w-full bg-foreground hover:bg-foreground/5 text-md cursor-pointer py-2 dark:bg-black"
                                            size={"lg"}
                                            onClick={() => setCurrentStepIndex(0)}
                                        >
                                            Change Details
                                        </Button>

                                        <p className="text-sm text-center text-muted-foreground">
                                            Click below to finish onboarding.
                                        </p>
                                    </>
                                )}
                                {step === "success" && (
                                    <>
                                        <img src="/welcome.svg" alt="Welcome" />
                                        <p className="text-center">Redirecting to your dashboard in {countdown} seconds...</p>
                                    </>
                                )}
                            </div>

                            {step !== "success" && (
                                <Button type="submit" className="mt-4 w-full">
                                    {step === "submit" ? "Finish Onboarding" : "Next"}
                                </Button>
                            )}
                        </form>
                    </CardContent>
                </>
            )}
        </Card>
    );
};

export default Onboard; 